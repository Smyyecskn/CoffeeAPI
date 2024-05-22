"use strict";
//!Kimlik kontrolu yapılacak.Tokenı ve kim oldugunu kontrol edicez.

const Token = require("../models/token.model");

module.exports = async (req, res, next) => {
  // Authorization: Token ...

  const auth = req.headers?.authorization || null; // Token ...tokenKey...
  const tokenKey = auth ? auth.split(" ") : null; // ['Token', '...tokenKey...']

  if (tokenKey && tokenKey[0] == "Token") {
    const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
      "userId"
    );
    console.log(tokenData); //userIdye populate = personnel modelını de getir.

    if (tokenData) req.user = tokenData.userId;
  }

  next();
};
