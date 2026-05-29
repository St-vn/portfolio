import React, { useState } from 'react';

export const LookbookRaw: React.FC = () => {
  const [zoom, setZoom] = useState('1.0x');

  const photos = [
    { src: './assets/model_headshot_1.png', label: 'IMG_0084.RAW' },
    { src: './assets/model_lifestyle_2.png', label: 'IMG_0085.RAW' }
  ];

  return (
    <div style={{
      padding: '12px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#0a0b0d',
      color: '#fff',
      fontFamily: "'VT323', monospace",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 1999 Viewfinder Overlay Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4px 8px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        fontSize: '16px',
        color: '#00ff66'
      }}>
        <span>● REC</span>
        <span style={{ color: '#ff9900' }}>[SD_CARD_OK]</span>
        <span>BATT: 🔋|||</span>
      </div>

      {/* Viewfinder Target Grid */}
      <div style={{
        flex: 1,
        position: 'relative',
        border: '1px solid rgba(255,255,255,0.1)',
        margin: '8px 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '12px',
        padding: '12px',
        overflowY: 'auto'
      }}>
        {/* Reticle Guide Lines */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          right: '10px',
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '10px',
          bottom: '10px',
          width: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          pointerEvents: 'none'
        }} />
        
        {/* Center Target Box */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40px',
          height: '40px',
          border: '1px solid #00ff66',
          borderRadius: '50%',
          opacity: 0.3,
          pointerEvents: 'none'
        }} />

        {/* Photos list */}
        {photos.map((photo, index) => (
          <div key={index} style={{
            border: '2px solid var(--border-light)',
            backgroundColor: '#15171a',
            padding: '4px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <img
              src={photo.src}
              alt={photo.label}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                filter: 'grayscale(30%) contrast(110%)'
              }}
            />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '14px',
              padding: '2px',
              color: '#94a3b8'
            }}>
              <span>{photo.label}</span>
              <span>1600x1200</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4px 8px',
        borderTop: '1px solid rgba(255,255,255,0.2)',
        fontSize: '15px'
      }}>
        <span>ISO: 200</span>
        <span>SHUTTER: 1/120</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            onClick={() => setZoom(prev => prev === '1.0x' ? '2.0x' : prev === '2.0x' ? '4.0x' : '1.0x')}
            style={{
              background: '#252930',
              border: '1px solid #525966',
              color: '#00ff66',
              padding: '2px 8px',
              cursor: 'pointer',
              fontFamily: "'VT323', monospace"
            }}
          >
            ZOOM: {zoom}
          </button>
        </div>
      </div>
    </div>
  );
};
