"use client"

import {trackers} from './torrentCli'

class TorrentClient {
    
    sendTorrent(client, input) {
        client.seed(input, trackers, (torrent) => {
                console.log('Torrent is seeding ' + torrent.magnetURI);
        })
    }

    isSupported() {
        return WebTorrent.WEBRTC_SUPPORT;
    }
        
}

export default new TorrentClient();