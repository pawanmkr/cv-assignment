import { count, eq, sql } from "drizzle-orm";
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
      .orderBy();
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
        name,
        score
      })
      .where(eq(player.id, id))

    return res.rows[0];
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
        total_players: count(sql`SELECT * FROM player;`)
      })
      .from(player)
      .execute();

    return res[0].total_players;
  }
};
