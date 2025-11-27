const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ msg: "Acceso denegado. Falta token." });
  }

  const token = header.split(" ")[1];

try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log("🟢 Token decodificado:", decoded);
  req.user = decoded;
  next();
} catch (error) {
  return res.status(401).json({ msg: "Token inválido." });
}
const decoded = jwt.verify(token, process.env.JWT_SECRET);
console.log("🟢 TOKEN DECODIFICADO:", decoded);  // <---- AGREGA ESTO
req.user = decoded;

};
