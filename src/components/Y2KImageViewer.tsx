import React, { useState } from 'react';
import { createPortal } from 'react-dom';

interface Y2KImageViewerProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  fileFormat?: string;
  dimensions?: string;
  aspectRatio?: string;
}

export const Y2KImageViewer: React.FC<Y2KImageViewerProps> = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  fileFormat = 'WebP',
  dimensions = '1024 x 768',
  aspectRatio
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <div className="y2k-image-viewer bevel-out" style={{ padding: '2px', backgroundColor: 'var(--bg-window)', width: '100%', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-system)', boxSizing: 'border-box' }}>
        {/* Classic non-functional Text Menu Row */}
        <div style={{
          display: 'flex',
          gap: '12px',
          padding: '2px 8px',
          fontSize: '12px',
          borderBottom: '1px solid var(--border-dark)',
          color: 'var(--text-primary)',
          letterSpacing: '0.5px'
        }}>
          <span style={{ cursor: 'default' }}>File</span>
          <span style={{ cursor: 'default' }}>Edit</span>
          <span style={{ cursor: 'default' }}>View</span>
          <span style={{ cursor: 'default' }}>Image</span>
          <span style={{ cursor: 'default' }}>Help</span>
        </div>

        {/* Recessed Layout Image Window acting as inner viewport */}
        <div 
          className="bevel-in y2k-media-inner-viewport" 
          style={{ 
            backgroundColor: '#1a1c20', 
            margin: '4px', 
            overflow: 'hidden', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            cursor: 'zoom-in',
            aspectRatio: aspectRatio || '4/3',
            transition: 'aspect-ratio 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
          onClick={() => setIsFullscreen(!isFullscreen)}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{ width: width, height: height, display: 'block', objectFit: 'contain', imageRendering: 'pixelated' }}
          />
        </div>

        {/* Image Actions / Buttons Rail */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 6px', borderTop: '1px solid var(--border-light)', marginTop: '2px' }}>
          <button 
            className="button-retro" 
            style={{ fontSize: '11px', padding: '2px 6px', height: '22px' }} 
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? "Exit Full Screen" : "Full Screen"}
          >
            {isFullscreen ? '[⛶ EXIT]' : '[⛶ FULL]'}
          </button>
          
          <div style={{ fontSize: '11px', color: 'var(--accent-amber)', letterSpacing: '0.5px' }}>
            {fileFormat} | {dimensions}
          </div>
        </div>
      </div>

      {/* Retro Full Screen Overlay mounted to Body to avoid container transform crops */}
      {isFullscreen && createPortal(
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999999, // Layer on top of everything
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px',
            boxSizing: 'border-box'
          }}
          onClick={() => setIsFullscreen(false)}
        >
          <div 
            className="bevel-out" 
            style={{ padding: '6px', backgroundColor: 'var(--bg-window)', maxWidth: '95%', maxHeight: '95%', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-system)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Title bar */}
            <div style={{ backgroundColor: '#1e293b', color: '#fff', padding: '4px 8px', display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 'bold', marginBottom: '6px' }}>
              <span>{alt} - FULLSCREEN_VIEW</span>
              <span style={{ cursor: 'pointer', color: 'var(--accent-amber)' }} onClick={() => setIsFullscreen(false)}>[CLOSE X]</span>
            </div>
            
            {/* Recessed Frame */}
            <div className="bevel-in" style={{ backgroundColor: '#121417', overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src={src} 
                alt={alt} 
                style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', imageRendering: 'pixelated' }} 
              />
            </div>

            {/* Bottom spec bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 8px', fontSize: '12px', color: 'var(--accent-amber)', marginTop: '4px' }}>
              <span>FORMAT: {fileFormat} | COLOR: TrueColor</span>
              <span>RES: {dimensions}</span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
