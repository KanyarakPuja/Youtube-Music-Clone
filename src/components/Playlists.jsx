import React from 'react';
    import './Playlists.css';

    function Playlists() {
      return (
        <div className="playlists-section">
          <div className="playlists-header">
            <h2>เพลย์ลิสต์เด่นสำหรับคุณ</h2>
            <div className="playlist-nav">
              <button>&lt;</button>
              <button>&gt;</button>
            </div>
          </div>
          <div className="playlist-list">
            <div className="playlist-card">
              <img src="https://lh3.googleusercontent.com/jIOwiNOLbm2hiMcf_D5MeVdPE3gpRweJMtac4_09HP4EUdDRsq1mLPCAqh2mmeJBqX-rGinsvdUF7Q=w544-h544-l90-rj" alt="Presenting Fuji Kaze" />
              <div className="playlist-info">
                <p className="playlist-title">Presenting Fuji Kaze</p>
                <p className="playlist-artist">Fuji Kaze</p>
              </div>
            </div>
            <div className="playlist-card">
              <img src="https://lh3.googleusercontent.com/pI8HWG-yUvFpTKUIWvE2BLC4mVhoZvlAo2i0lr3F5nlnPUmiWzxmz-uel-X1RKoSObBXbCjLIuoV6g=w544-h544-l90-rj" alt="Presenting Sabrina Carpenter" />
              <div className="playlist-info">
                <p className="playlist-title">Presenting Sabrina Carpenter</p>
                <p className="playlist-artist">Sabrina Carpenter - ชาบรีน่า คาร์</p>
                <p className="playlist-artist">เพนเตอร์ Alan Walker Charlie...</p>
              </div>
            </div>
            <div className="playlist-card">
              <img src="https://lh3.googleusercontent.com/aa9c7H8Kd2TgbBO3ZkF4yZq3R-3ybb8kMaQ8busP5chJU9FRpNMZo2ZUV6gjfzeYNEp1kodDdZP2FQo=w544-h544-l90-rj" alt="Olivia Rodrigo GUTS Tour Setlist" />
              <div className="playlist-info">
                <p className="playlist-title">Olivia Rodrigo GUTS Tour Setlist</p>
                <p className="playlist-artist">Olivia Rodrigo - โอลิเวีย ร็อดริโก</p>
              </div>
            </div>
            <div className="playlist-card">
              <img src="https://lh3.googleusercontent.com/A59BQG7X0v_lyJqDjqhq0G83r_Lck-7puOITTfhKc-khapWkrtOBNLwvp_fLy34e960OLIRyJ5zPEfw=w544-h544-l90-rj" alt="Taylor Swift Eras Setlist" />
              <div className="playlist-info">
                <p className="playlist-title">Taylor Swift Eras Setlist</p>
                <p className="playlist-artist">Taylor Swift</p>
              </div>
            </div>
            <div className="playlist-card">
              <img src="https://lh3.googleusercontent.com/0orqdWdsGesCizacf-4YYvA4dueoomNT1Vla8aQ7KUkGs-E9C5Y2iHWce6-FnUp-wK69xPS9eB7L1g=w544-h544-l90-rj" alt="Korean Dance Hits 2024" />
              <div className="playlist-info">
                <p className="playlist-title">Korean Dance Hits 2024</p>
                <p className="playlist-artist">RIIZE IVE (G)I-DLE - ไอฟ์ เดอะ</p>
                <p className="playlist-artist">และ LE SSERAFIM</p>
              </div>
            </div>
            <div className="playlist-card">
              <img src="https://lh3.googleusercontent.com/LXFEbO8grO23AGx9NK527CwC60-zR0IOuRmvGsC8dezCqqWTPbms69b9WG1I-fYvZHSge0hOEyOnaA=w544-h544-l90-rj" alt="Presenting Taylor Swift" />
              <div className="playlist-info">
                <p className="playlist-title">Presenting Taylor Swift</p>
                <p className="playlist-artist">Taylor SwiftและZAYN - เซน มาลิก</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Playlists;
