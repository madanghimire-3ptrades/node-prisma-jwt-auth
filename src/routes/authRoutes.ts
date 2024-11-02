import { Router } from "express";
import { register, login } from "../controllers/authController";
import { getUsers } from "../controllers/userController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registers a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email address
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: "securePassword123"
 *               username:
 *                 type: string
 *                 description: The user's username
 *                 example: "johnDoe"
 *               firstName:
 *                 type: string
 *                 description: The user's first name
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 description: The user's last name
 *                 example: "Doe"
 *               profilePicture:
 *                 type: string
 *                 format: uri
 *                 description: URL to the user's profile picture
 *                 example: "https://example.com/profile.jpg"
 *               roles:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Array of role IDs to assign to the user
 *                   example: ["roleId1", "roleId2"]
 *               permissions:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Array of permission IDs to assign to the user
 *                   example: ["permissionId1", "permissionId2"]
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */
router.post("/register", register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Logs in a user and returns a JWT token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "securePassword123"
 *     responses:
 *       200:
 *         description: Login successful, returns JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Unauthorized, invalid credentials
 */
router.post("/login", login);
/**
 * @swagger
 * /auth/users:
 *   get:
 *     summary: Retrieves a list of all users
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []  # Ensures Bearer Token is required
 *     responses:
 *       200:
 *         description: Successfully retrieved users
 *       500:
 *         description: Internal server error
 */
router.get("/users", authenticateToken, getUsers);

export default router;
