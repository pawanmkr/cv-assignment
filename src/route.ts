import express from "express";
import {
  createNewPlayer,
  deletePlayer,
  fetchPlayerByRank,
  fetchRandomPlayer,
  listPlayers,
  updatePlayer
} from "./controllers/player.controller.js";

const playerRouter = express.Router();


playerRouter.post("/", createNewPlayer);
playerRouter.get("/", listPlayers);
playerRouter.put("/:id", updatePlayer);
playerRouter.delete("/:id", deletePlayer);

playerRouter.get("/rank/:val", fetchPlayerByRank);
playerRouter.get("/random", fetchRandomPlayer);


export default playerRouter;
