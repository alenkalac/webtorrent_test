"use client"

export const trackers = {
    announce: ['wss://tracker.btorrent.xyz', 'wss://tracker.openwebtorrent.com'],
  };

const client = new WebTorrent({
    tracker: trackers,
});

client.setMaxListeners(100);

export default client;