import "dotenv/config";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express, { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
const app = express();
app.use(express.json());

//registra usuario novo
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400 || 422).json({ msg: "Preencha todos os campos!" });
  }
  const userExist = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  if (userExist) {
    return res.status(409).json({ msg: "O email ja esta em uso" });
  }
  //senha encriptada
  const salt = await bcrypt.genSalt(5); //adiciona digitos a mais a senha do usuario
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    // res.json(user);
    res.status(201).json({ msg: "Usuário criado com sucesso", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
});

//retorna todos usuarios
app.get("/findall", async (req, res) => {
  const allusers = await prisma.users.findMany();
  res.json(allusers);
});

//retorna um usuário especifico pelo id
app.get(`/user/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    if (user) {
      return res.status(200).json({ msg: "Usuário encontrado", user });
    }
  } catch (error) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }
});
//retorna um usuário especifico pelo email (req body)
app.get("/find/email", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      return res.redirect(`/user/${user.id}`);
    }
  } catch (error) {
    return res.status(404).json({ msg: "Erro ao buscar usuário" });
  }
});
//retorna um usuário especifico pelo email (req param)  com validaçao de token
app.get(`/email/:email`, checkToken, async (req, res) => {
  const email = req.params.email;
  try {
    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      return res.status(200).json({ msg: "Usuário encontrado", user });
    }
  } catch (error) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }
});
//atualiza um usuário especifico

app.put("/updateuser", async (req, res) => {
  const { name, email, level } = req.body;
  if (!name || !email || !level) {
    return res.status(400).json({ msg: "Preencha todos os campos!" });
  }
  if (level < 1 || level > 5) {
    return res.status(400).json({ msg: "Nível de acesso inválido!" });
  }
  try {
    const user = await prisma.users.update({
      where: {
        email: email,
      },
      data: {
        name,
        level,
      },
    });
    res.status(200).json({msg:"Usuário atualizado", user});
  } catch (error) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }
});

function checkToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Acesso negado!" });

  try {
    if (!process.env.SECRET) {
      throw new Error("A variável de ambiente JWT_SECRET não está definida.");
    }
    const secret: Secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
  } catch (err) {
    res.status(400).json({ msg: "O Token é inválido!" });
  }
}

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400 || 422).json({ msg: "Preencha todos os campos!" });
  }
  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" }); // verifica se o email existe
  }

  const checkPassword = await bcrypt.compare(password, user.password); // verifica se a senha esta correta
  if (!checkPassword) {
    return res.status(422).json({ msg: "Senha inválida" });
  }

  try {
    if (!process.env.SECRET) {
      throw new Error("A variável de ambiente JWT_SECRET não está definida.");
    }
    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: user.id,
      },
      secret
    );
    res.status(200).json({ msg: "usuario autenticado", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
});

const server = app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);
// Handling errors
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  server.close(() => {
    console.log("Server closed");
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received.");
  server.close(() => {
    console.log("Server closed");
  });
});
