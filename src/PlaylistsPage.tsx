// src/PlaylistsPage.tsx
import React, { useState } from "react";
import type { Playlist } from "./types";
import { likePlaylist } from "./api/likePlaylist";
import bannerImage from "./assets/images/banner.png";

type PlaylistsPageProps = {
  initialPlaylists: Playlist[];
};

export const PlaylistsPage: React.FC<PlaylistsPageProps> = ({
  initialPlaylists,
}) => {
  // setPlaylists is intentionally unused (known bug - state is never updated)
  const [playlists, _setPlaylists] = useState<Playlist[]>(initialPlaylists);

  const handleLike = async (playlistId: string) => {
    try {
      // Call mock backend function
      await likePlaylist(playlistId, playlists);

      // ❌ Known issue:
      // The response from likePlaylist is currently ignored.
      // No call to setPlaylists is made here.
      // As a result, the UI never reflects the updated likeCount.
      //
      // This is the behavior currently in production. A follow-up
      // change will need to wire the API result into React state.

    } catch (error) {
      console.error("Failed to like playlist", error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
        padding: "2rem 1.5rem",
      }}
    >
      {/* Gradient overlay - bright at top, dark at bottom */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(180deg, rgba(18, 18, 18, 0.2) 0%, rgba(18, 18, 18, 0.4) 30%, rgba(18, 18, 18, 0.7) 60%, rgba(18, 18, 18, 0.95) 100%)",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem", paddingTop: "2rem" }}>
            <h1
              style={{
                fontSize: "4.5rem",
                fontWeight: 800,
                margin: "0 0 1.5rem 0",
                letterSpacing: "-0.03em",
                color: "#ffffff",
                fontFamily: '"Playfair Display", serif',
                textShadow: "0 2px 20px rgba(0, 0, 0, 0.5)",
                lineHeight: "1.1",
                animation: "fadeInUp 0.8s ease",
              }}
            >
              Discover Your Sound
            </h1>
            <p
              style={{
                margin: 0,
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "1.125rem",
                fontWeight: 400,
                letterSpacing: "0.01em",
                textShadow: "0 1px 10px rgba(0, 0, 0, 0.4)",
                maxWidth: "600px",
                animation: "fadeInUp 0.8s ease 0.2s both",
              }}
            >
              Curated playlists crafted by our music experts. 
              Explore collections designed to match every moment and mood.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            {playlists.map((playlist, index) => (
              <div
                key={playlist.id}
                style={{
                  background: "rgba(24, 24, 24, 0.8)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(40, 40, 40, 0.9)";
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(24, 24, 24, 0.8)";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
                }}
              >
                {/* Playlist cover image */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    borderRadius: "4px",
                    marginBottom: "1rem",
                    position: "relative",
                    overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                  background: "#333",
                }}
              >
                  {playlist.imageUrl ? (
                    <img
                      src={playlist.imageUrl}
                      alt={playlist.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.3s ease",
                      }}
                      loading="lazy"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "3rem",
                      }}
                    >
                      🎵
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: "0.75rem" }}>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      margin: "0 0 0.25rem 0",
                      color: "#ffffff",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {playlist.name}
                  </h3>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#b3b3b3",
                      fontSize: "0.875rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.25rem",
                        display: "inline-block",
                      }}
                    >
                      ❤️
                    </span>
                    <span
                      data-testid={`like-count-${playlist.id}`}
                      style={{
                        fontWeight: 600,
                        color: "#ffffff",
                      }}
                    >
                      {playlist.likeCount}
                    </span>
                  </div>

                  <button
                    data-testid={`like-button-${playlist.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(playlist.id);
                    }}
                    style={{
                      padding: "0.5rem 1rem",
                      fontSize: "0.75rem",
                      minWidth: "auto",
                    }}
                  >
                    Like
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

