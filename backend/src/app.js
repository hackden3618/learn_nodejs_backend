import express from "express";

const app = express();

// For parsing json requests to the server
app.use(express.json());

// Import routes
import userRouter from "../routes/user.route.js";
import postRouter from "../routes/post.route.js";

// Routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// sample route :-> http://server-url:4000/api/v1/users/register

export default app;
