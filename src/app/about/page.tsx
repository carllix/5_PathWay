"use client";

import { useState, useLayoutEffect } from "react";

export default function About() {

  const [paragraphSize, setParagraphSize] = useState({
    width: '1300px',
    height: '100%',
    fontSize: '30px',
  }); 

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setParagraphSize((prev) => ({
          ...prev,
          width: '60%',
          fontSize: '20px',
        }));
      } else {
        setParagraphSize({
          width: '1300px',
          height: '100%',
          fontSize: '30px',
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh', 
      overflow: 'hidden'
    }}>
      
      <style>
      {`
        @font-face {
          font-family: 'AllRight';
          src: url('/fonts/allright.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
        font-family: 'Poppins';
        src: url('/fonts/poppins.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        }
      `}
      </style>

      <img 
        src="/image-about.svg" 
        alt="Beranda"
        style={{ 
          width: '100%',
          height: '100%',
          position: 'absolute',
          objectFit: 'cover',
          maxWidth: '100%',
        }}
      />     

      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#f0d78c',
        mixBlendMode: 'overlay',
        opacity: 0.7,
        pointerEvents: 'none',
      }} />

      <div style={{
        display: 'flex',
        gap: '70px',
        fontFamily: 'AllRight',
        position: 'relative',
        color: 'white',
        top: '170px',
        left: '260px',

      }}>
        <div style={{
          paddingTop: '75px',
          fontSize: '150px',
        }}>
          About
        </div>

        <div style={{
          fontSize: '220px',
        }}>
          PathWay
        </div>
      </div>

      <div 
        style={{
          fontFamily: 'Poppins',
          position: 'absolute',
          width: paragraphSize.width,
          height: paragraphSize.height,
          color: 'white',
          fontSize: paragraphSize.fontSize,
          top: '500px',
          left: '240px',
          padding: '0 20px',
          textAlign: 'justify',
          textShadow: '2px 3px 5px rgba(0, 0, 0, 0.6)'}}
      >
        <p>
          PathWay adalah platform digital yang dirancang khusus untuk
          memenuhi kebutuhan mahasiswa dalam mencari informasi penting 
          secara efisien. Kami memahami betapa pentingnya akses terhadap
          informasi yang akurat dan terpusat, terutama terkait lomba,
          beasiswa, dan peluang lainnya yang dapat mendukung perjalanan
          akademik dan karier mahasiswa.
        </p>
      </div>
    </div>
  );
}
