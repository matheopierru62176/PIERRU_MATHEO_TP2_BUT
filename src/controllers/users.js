const { insertOne } = require("../services/db/crud.js");
// const userSchema = require ("../schema/utilisateur");
// const validate = require ("jsonschema").validate;

const collection = "users";

async function createUser(req, res, next) {

// const validation = validate(req.body, userSchema);
// if (validation.errors.length > 0) {
//     return res.status(400).send(validation.errors);
// }

  try {
    const result = await insertOne(collection, req.body);
    console.log("Nouvel utilisateur créé. Id : +" + result.insertedId);
    return res.status(201).send(result);
  } catch (e) {
    console.log(e);
    return next(e);
  }
}

module.exports = { createUser };