import jwt from "jsonwebtoken"
const JWT_SECRET = 'rohanisagoodboy'

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    console.log("Token received:", token);

    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        console.log("Decoded token data:", data);

        req.user = data.user;
        next();
    } catch (error) {
        console.error("Token verification error:", error.message);
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
};

export default fetchuser;