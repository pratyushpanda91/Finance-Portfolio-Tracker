import jwt from "jsonwebtoken";

import ApiError from "../utils/ApiError.js";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next(
            new ApiError(
                401,
                "Access token is missing."
            )
        );
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = {
            id: decoded.id,
        };

        next();

    } catch (error) {
        return next(
            new ApiError(
                401,
                "Invalid or expired token."
            )
        );
    }
};

export default authMiddleware;