import { Router } from "express";
import {
  agregarArticulos,
  eliminarArticulos,
  getArticulos,
  getArticulosById,
} from "../controllers/articulosControlers.js";

const router = Router();

router.get("/articulos", getArticulos);

router.get("/articulos/:id", getArticulosById);

router.post("/articulos", agregarArticulos);

router.delete("/articulos/:id", eliminarArticulos);

export default router;
