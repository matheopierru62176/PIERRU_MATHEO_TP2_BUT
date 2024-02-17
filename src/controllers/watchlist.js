const { insertOne , findOne} = require("../services/db/crud.js");

const collection = "watchlist";

async function createWatchlist(req, res, next) {
  try{
    // Vérifier que l'utilisateur existe
    const userId = req.body.utilisateurId;
    // console.log(userId);

    const user = await findOne("users", {"id" : (userId)});
    if (user) {

    console.log(req.body);
    const result = await insertOne(collection, req.body);
    console.log(`Nouvelle watchlist créee avec l'id ${result.insertedId}`)
    return res.status(201).send(result);
    } else {
      return res.status(404).send("Utilisateur non trouvé");
    }
  } catch (e) {
    console.log(e);
    return next(e);
  }
}





module.exports = {
  createWatchlist,
};