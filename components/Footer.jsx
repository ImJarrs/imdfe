// components/Footer.jsx
"use client";
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      {/* Catatan: <style> di dalam komponen seperti ini kurang ideal.
        Cara terbaik adalah memindahkan CSS ini ke file CSS global Anda (misal: app/globals.css)
        agar lebih terorganisir dan tidak terduplikasi.
      */}
      <style jsx>{`
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .info-item-footer {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .info-key {
          width: 70px;
          font-weight: bold;
        }
        .info-separator {
          width: 10px;
        }
        .info-value {
          flex: 1;
          overflow: hidden;
        }
        @media(max-width: 400px){
          .info-key{
            width: 40px;
          }
        }
      `}</style>
    
      <footer id="footer" className="footer dark-background">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4 align-items-start">
              {/* Logo */}
              <div className="col-lg-4 col-md-6 footer-about">
                <div className="logo d-flex align-items-center">
                  {/* Gunakan Image dari Next.js untuk optimasi */}
                  <Image src="/assets/img/header-logo.webp" alt="IMD Logo" width={200} height={50} />
                </div>
              </div>

              {/* Address and Contact Wrapper */}
              <div className="col-lg-8 col-md-12 d-flex flex-wrap footer-info">
                {/* Address */}
                <div className="footer-address">
                  <h4>Address</h4>
                  <p>Jl. Sawo VIII Blok SV no. 3, Bekasi<br />West Java 17131 - Indonesia</p>
                </div>

                {/* Contact */}
                <div className="footer-contact">
                  <h4>Contact</h4>
                  <div className="info-list">
                    <div className="info-item-footer">
                      <div className="info-key">Phone</div>
                      <div className="info-separator">:</div>
                      <div className="info-value">+62 8180 6338 869</div>
                    </div>
                    <div className="info-item-footer">
                      <div className="info-key"></div>
                      <div className="info-separator">:</div>
                      <div className="info-value">+62 8212 2787 878</div>
                    </div>
                    <div className="info-item-footer">
                      <div className="info-key">Email</div>
                      <div className="info-separator">:</div>
                      <div className="info-value">sales@inovasimasadepan.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <div className="container text-center">
            <p>© 2025<span> INOVASI MASA DEPAN, PT</span></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;