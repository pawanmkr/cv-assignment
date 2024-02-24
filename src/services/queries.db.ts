import { count, desc, eq } from "drizzle-orm";
import db from "../config/postgres.js";
import player from "../schema/player.js";

export class Player {

  static async createNewPlayerEntry(name: string, country: string) {
    const res = await db
      .insert(player)
      .values({
        name,
        country
      })
      .returning();

    return res[0];
  }

  static async getAllPlayers() {
    return await db
      .select()
      .from(player)
      .orderBy(desc(player.score));
  }

  static async deletePlayer(id: number) {
    await db
      .delete(player)
      .where(eq(player.id, id))
  }

  static async updatePlayer(id: number, name: string, score: number) {
    const res = await db
      .update(player)
      .set({
        name: name,
        score: score,
        updated_at: new Date()
      })
      .where(eq(player.id, id))
      .returning();

    return res[0];
  }

  static async getPlayer(id: number) {
    const res = await db
      .select()
      .from(player)
      .where(eq(player.id, id));

    return res[0];
  }

  static async getPlayerByRank(rank: number) {
    // write a sub-query to find player by rank
  }

  static async getPlayersCount() {
    const res = await db
      .select({
        total_players: count(player.id)
      })
      .from(player)
      .execute();

    return res[0].total_players;
  }

  static async getTheOnlyPlayer() {
    const res = await db
      .select()
      .from(player);

    return res[0];
  }
};
