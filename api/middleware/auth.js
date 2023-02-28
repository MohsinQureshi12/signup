const jwt = require("jsonwebtoken");


exports.auth=function (req, res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).send("Access denied. No token provided.");
    } else {
      jwt.verify(authHeader, secretKey, (err, data) => {
        if (data.id) {
          req.id = data.id;
          next();
        } else {
          res.status(400).json({ err });
        }
      });
    }
  }

  