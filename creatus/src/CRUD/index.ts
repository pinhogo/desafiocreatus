import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const app = express();
app.use(express.json());

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
    return res.status(400).json({ msg: "O email ja esta em uso" });
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
    res.status(201).json({ msg: "Usuário criado com sucesso", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
});

app.post("/auth/login", async (req, res) => {
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

app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);
