import { Router, Request, Response } from "express";
import type { User } from "../types/type";
const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  const users: string[] = ["Alice", "Bob", "Charlie"];
  return res.json({ users });
});

router.post("/", (req: Request, res: Response) => {
  const { name } = req.body as { name: string };
  const newUser: User = { id: 1, name: "test", email: "test@example.com" };

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  return res.status(201).json({ message: `User ${name} created` });
});

export default router;
