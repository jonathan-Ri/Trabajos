import express from "express";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verify.js";
const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next)=> {
//     res.send("Hello you are logged in")
// });

// router.get("/checkauthUser/:id", verifyUser, (req, res, next)=> {
//     res.send("Hello you are logged in and you can delete you")
// });


// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next)=> {
//     res.send("Hello you are logged in and you are an Admin")
// });

//create

router.post("/", verifyUser, createUser);

//Update

router.put("/:id", verifyUser, updateUser);

//Delete

router.delete("/:id", verifyUser,deleteUser);

//Get

router.get("/:id", verifyUser, getUser);

//Get all

router.get("/", verifyAdmin,getAllUser);

export default router;