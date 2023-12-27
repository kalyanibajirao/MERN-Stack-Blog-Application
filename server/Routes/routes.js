import express from "express";

import { singupUser, loginUser } from "../Controller/user_controller.js";
import { uploadImage, getImage } from "../Controller/ImageController.js";
import { createPost, getAllPosts, getPost } from "../Controller/post-controller.js";
import { authenticateToken } from "../Controller/jwt-controller.js";

import upload from "../utils/upload.js";

    
const router = express.Router();

router.post("/signup", singupUser);
router.post("/login", loginUser);

router.post("/file/upload", upload.single("file"), uploadImage);
router.get("/file/:filename", getImage);

router.post("/create", authenticateToken, createPost);
router.get("/posts", authenticateToken, getAllPosts);
router.get("/post/:id", authenticateToken, getPost);
export default router;
