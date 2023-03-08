import express from "express";
import { getAllUsers } from "../user.controller";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
