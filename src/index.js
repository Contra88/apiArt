import express from "express";
import artRoutes from "./Routes/artRoutes.routes.js";
import authRouter from "./Routes/auth.routes.js";
import cors from "cors";
import morgan from "morgan";

export const app = express();

//*SERVER CONFIG
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);
app.use(artRoutes);
app.use(authRouter);

app.listen(3000, () => {
  console.log("Server on Port 3000");
});

export default app;
