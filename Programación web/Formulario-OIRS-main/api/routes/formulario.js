import express from "express";
import {createProduct, deleteProduct, getAllProduct, getProduct, updateProduct} from '../controllers/formulario.js'
import { verifyAdmin, verifyUser } from "../utils/verify.js";
const router = express.Router();

//create

router.post("/", createProduct);

//Update

router.put("/:id", verifyAdmin, updateProduct);

//Delete

router.delete("/:id", verifyAdmin, deleteProduct);

//Get

router.get("/:id", getProduct);

//Get all

router.get("/", getAllProduct);

export default router;