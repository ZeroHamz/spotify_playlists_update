// src/App.tsx
import React from "react";
import { PlaylistsPage } from "./PlaylistsPage";
import type { Playlist } from "./types";
import chillVibesImage from "./assets/images/chill-vibes.jpg";
import focusFlowImage from "./assets/images/focus-flow.jpg";
import throwbackHitsImage from "./assets/images/throwback-hits.jpg";

const initialPlaylists: Playlist[] = [
  {
    id: "1",
    name: "Chill Vibes",
    likeCount: 12,
    imageUrl: chillVibesImage,
  },
  {
    id: "2",
    name: "Focus Flow",
    likeCount: 7,
    imageUrl: focusFlowImage,
  },
  {
    id: "3",
    name: "Throwback Hits",
    likeCount: 23,
    imageUrl: throwbackHitsImage,
  },
];

export const App: React.FC = () => {
  return <PlaylistsPage initialPlaylists={initialPlaylists} />;
};

export default App;
