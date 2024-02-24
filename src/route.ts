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


playerRouter.post("/", createNewPlayer); // done
playerRouter.get("/", listPlayers); // done
playerRouter.put("/:id", updatePlayer); // done
playerRouter.delete("/:id", deletePlayer); //done

playerRouter.get("/rank/:val", fetchPlayerByRank); // pending
playerRouter.get("/random", fetchRandomPlayer); // pending


export default playerRouter;
