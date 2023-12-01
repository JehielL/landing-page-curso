import React from 'react';

const SpotifyPlaylist = () => {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src="https://open.spotify.com/embed/playlist/3UYW0xZsL7G0LST04uG4Bt?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyPlaylist;
