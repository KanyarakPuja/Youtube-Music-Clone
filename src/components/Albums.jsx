import React from 'react';
    import './Albums.css';

    function Albums() {
      return (
        <div className="albums-section">
          <h2>อัลบั้มสำหรับคุณ</h2>
          <div className="album-list">
            <div className="album-card">
              <img src="https://yt3.googleusercontent.com/yw7ZJLhIQbn8RziCh1ypd0LaWvuyKABVyI18zNJ_l4x90wIsxJVaREZCPMUiESJIL1eGki7OUQ=s900-c-k-c0x00ffffff-no-rj" alt="Short n' Sweet" />
              <div className="album-info">
                <p className="album-title">Short n' Sweet</p>
                <p className="album-artist">อัลบั้ม - Sabrina Carpenter</p>
              </div>
            </div>
            <div className="album-card">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Taylor_Swift_-_Lover.png/220px-Taylor_Swift_-_Lover.png" alt="Lover" />
              <div className="album-info">
                <p className="album-title">Lover</p>
                <p className="album-artist">อัลบั้ม - Taylor Swift</p>
              </div>
            </div>
            <div className="album-card">
              <img src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/11/ae/f2/11aef294-f57c-bab9-c9fc-529162984e62/24UMGIM85348.rgb.jpg/600x600bf-60.jpg" alt="Die With A Smile" />
              <div className="album-info">
                <p className="album-title">Die With A Smile</p>
                <p className="album-artist">EP - Lady Gaga และ Bruno Mars</p>
              </div>
            </div>
            <div className="album-card">
              <img src="https://upload.wikimedia.org/wikipedia/en/7/7e/Ariana_Grande_-_Eternal_Sunshine.png" alt="eternal sunshine (slightly deluxe)" />
              <div className="album-info">
                <p className="album-title">eternal sunshine (slightly deluxe)</p>
                <p className="album-artist">อัลบั้ม - Ariana Grande</p>
              </div>
            </div>
            <div className="album-card">
              <img src="https://upload.wikimedia.org/wikipedia/en/d/d3/Madison_Beer_Silence_Between_Songs.png" alt="Silence Between Songs" />
              <div className="album-info">
                <p className="album-title">Silence Between Songs</p>
                <p className="album-artist">อัลบั้ม - Madison Beer</p>
              </div>
            </div>
            <div className="album-card">
              <img src="https://i.scdn.co/image/ab67616d0000b273016f2733042a639059c2925e" alt="While You Were Out" />
              <div className="album-info">
                <p className="album-title">While You Were Out</p>
                <p className="album-artist">EP - Boys World</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Albums;
