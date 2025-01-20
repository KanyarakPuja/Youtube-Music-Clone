import React from 'react';
    import './Artists.css';

    function Artists() {
      return (
        <div className="artists-section">
          <div className="artists-header">
            <h2>คล้ายกัน</h2>
            <div className="artist-nav">
              <button>&lt;</button>
              <button>&gt;</button>
            </div>
          </div>
          <div className="artist-list">
            <div className="artist-card">
              <img src="https://lh3.googleusercontent.com/CPgBzOpnfCHpDFVehaJnW-WuVi9PJV7UYu8hT8zzZvXXPJkZYqQsTzbnnNUbU19okIEIelwoKxxZVtBY=w544-h544-l90-rj" alt="Pop Certified" />
              <div className="artist-info">
                <p className="artist-name">Pop Certified</p>
                <p className="artist-details">Sabrina Carpenter - ชาบรีน่า คาร์เพนเตอร์</p>
                <p className="artist-details">เพลงฮิต Tate McRae Dua Lipa...</p>
              </div>
            </div>
            <div className="artist-card">
              <img src="https://lh3.googleusercontent.com/tMjaju18qZGTHpYncPvjafxON1G8rp75ffZDKGj1cZNOJX2socmRn8xgO6xRVQMI-OdwQU3paU8v=w544-h544-l90-rj" alt="Pop Hits 2024" />
              <div className="artist-info">
                <p className="artist-name">Pop Hits 2024</p>
                <p className="artist-details">Billie Eilish - บิลลี ไอลิช</p>
                <p className="artist-details">Chappell Roan - แชปเพล โรน...</p>
              </div>
            </div>
            <div className="artist-card">
              <img src="https://lh3.googleusercontent.com/WIpNILSEB_Fs-esO3Z_jRiQgkRvHK41un394zFPHwG49pO1Kn9qVI_ud_J2BuGaoJiRVAUjOKOE9kRmN=w544-h544-l90-rj" alt="เพลงฮิตแนวเมลโลป็อป" />
              <div className="artist-info">
                <p className="artist-name">เพลงฮิตแนวเมลโลป็อป</p>
                <p className="artist-details">Take That - เทคแดท Robbie Williams - ร็อบบี วิลเลียมส์ The...</p>
              </div>
            </div>
            <div className="artist-card">
              <img src="https://lh3.googleusercontent.com/l5JLWYHNwbO5OCXRqAnYYbYOqHQHuk6JWW0QNCJfqSeENITKrgBRDva-qr-rrwibImHpQyyNYA2f1IY=w1920-h800-p-l90-rj" alt="Selena Gomez - เซเลน่า โกเมซ" />
              <div className="artist-info">
                <p className="artist-name">Selena Gomez - เซเลน่า โกเมซ</p>
                <p className="artist-details">ผู้ติดตาม 34.9 ล้านคน</p>
              </div>
            </div>
            <div className="artist-card">
              <img src="https://lh3.googleusercontent.com/F32A1XBuQEkcOnYin-1BURG2MK_q12Ebovqwe8im8KXf8BHJ_jXW_7NnK73K6QOH-1D6QZKrrZGbNrlS=w544-h544-l90-rj" alt="GUTS" />
              <div className="artist-info">
                <p className="artist-name">GUTS</p>
                <p className="artist-details">อัลบั้ม - Olivia Rodrigo</p>
              </div>
            </div>
            <div className="artist-card">
              <img src="https://lh3.googleusercontent.com/DU6Kpr5TYKcW6QHvMnsJau5_8QSuix8LCLtf5UEaziZZdXw8SxvcxJ9YWmVIQuzhg2R-MVHYgjdGCQ=w1920-h800-p-l90-rj" alt="Ariana Grande - อารีอานา กรานเด" />
              <div className="artist-info">
                <p className="artist-name">Ariana Grande - อารีอานา กรานเด</p>
                <p className="artist-details">ผู้ติดตาม 55.5 ล้านคน</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Artists;
