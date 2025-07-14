import express, { Express, Request, Response } from "express";
import userRouter from "./routes/user.route";
import cors from "cors";

const app: Express = express();
const PORT: 4000 = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello TypeScript + Express");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
