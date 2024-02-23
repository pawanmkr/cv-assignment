import { Request, Response } from "express";
import { Player } from "../services/queries.db.js";


export async function createNewPlayer(req: Request, res: Response) {
  // Destructuring the request body
  const { name, country } = req.body;

  const player = await Player.createNewPlayerEntry(name, country);

  return res.json({
    message: "New player's entry has been recorded.",
    player: player
  });
}

export async function listPlayers(req: Request, res: Response) {
  const players = await Player.getAllPlayers();
  return res.send(players);
}

export async function updatePlayer(req: Request, res: Response) {
  const { name, score } = req.body;
  const playerId = parseInt(req.params.id as string);

  const updatePlayer = await Player.updatePlayer(playerId, name, score);

  return res.status(200).json({
    message: "Player attributes updated successfully!",
    player: updatePlayer
  });
}

export async function deletePlayer(req: Request, res: Response) {
  const playerId = parseInt(req.params.id as string);

  await Player.deletePlayer(playerId);

  return res.status(200).json({
    message: "Player Deleted Succesfully!"
  });
}

export async function fetchPlayerByRank(req: Request, res: Response) {
  const playerRank = parseInt(req.params.val as string);

  const player = await Player.getPlayerByRank(playerRank);

  return res.status(200).send(player);
}

export async function fetchRandomPlayer(req: Request, res: Response) {
  const totalPlayers = await Player.getPlayersCount();
  const randomPlayerId = Math.floor(Math.random() * totalPlayers);
  const player = await Player.getPlayer(randomPlayerId);

  return res.status(200).send(player);
}

