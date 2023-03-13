import jwt from "jsonwebtoken";

export function createToken(payload, secretKey) {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      payload,
    },
    secretKey,
    { algorithm: "HS256" }
  );
  return token;
}

export function compareToken(token, secretKey) {
  return jwt.verify(token, secretKey, (err, decode) => {
    if (err) {
      console.log(err);
    } else {
      console.log(decode);
    }
  });
}
