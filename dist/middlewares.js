import jwt from "jsonwebtoken";
const JWT_PASSWORD = "1234567890";
function userauth(req, res, next) {
    try {
        const token = req.headers["authorization"];
        if (!token) {
            return res.status(401).send("token missing");
        }
        const decoded = jwt.verify(token, JWT_PASSWORD);
        if (decoded) {
            // @ts-ignore
            req.userId = decoded.id;
            next();
        }
        else {
            return res.status(401).send("invalid token");
        }
    }
    catch (error) {
        return res.status(401).send("unauthorized");
        console.log("uauthorized");
    }
}
export default userauth;
//# sourceMappingURL=middlewares.js.map