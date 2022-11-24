import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

function isAuthenticated(req, res, next) {
    console.log(req.session);
    console.log(req.cookie);
    if (req.session && req.session.role === "admin") {
        next();
    } else res.sendStatus(403);
}

router.use("/patient*", isAuthenticated);

router.get("/patient", getUsers("patient"));
router.get("/patient/:id", getUserById("patient"));
router.post("/patient", createUser("patient"));
router.patch("/patient/:id", updateUser("patient"));
router.delete("/patient/:id", deleteUser("patient"));

router.use("/doctor*", isAuthenticated);

router.get("/doctor", getUsers("doctor"));
router.get("/doctor/:id", getUserById("doctor"));
router.post("/doctor", createUser("doctor"));
router.patch("/doctor/:id", updateUser("doctor"));
router.delete("/doctor/:id", deleteUser("doctor"));

export default router;
