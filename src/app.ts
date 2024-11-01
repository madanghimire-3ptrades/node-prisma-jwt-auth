import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../swaggerConfig";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/auth", authRoutes);

export default app;
