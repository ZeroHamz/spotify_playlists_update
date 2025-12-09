// src/api/likePlaylist.ts
import type { Playlist } from "../types";

// Simulated backend "like" endpoint.
// No real network or persistence: just computes a new likeCount.
export async function likePlaylist(
  playlistId: string,
  playlists: Playlist[]
): Promise<{ playlistId: string; likeCount: number }> {
  const entry = playlists.find((p) => p.id === playlistId);
  const current = entry ? entry.likeCount : 0;

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 250));

  return {
    playlistId,
    likeCount: current + 1,
  };
}

