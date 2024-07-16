import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";

//NAO TERMINEI DE IMPLEMENTAR A INTENÇÃO ERA FAZER UM MIDDLEWARE PARA VERIFICAR O TOKEN SEPARADO DO INDEX.TSX
export function checkToken(req: Request, res: Response, next: NextFunction) {
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
  
  export function authorizeLevel(minLevel: number) {
    return (req: Request, res: Response, next: NextFunction) => {
      if (req.user && req.user.level >= minLevel) {
        next();
      } else {
        res.sendStatus(403);
      }
    };
  }

  declare global {
    namespace Express {
      interface Request {
        user?: {
          id: string;
          level: number;
        };
      }
    }
  }
  