import React from 'react';
import Draggable from 'react-draggable';

interface WindowFrameProps {
  title: string;
  icon: string;
  isOpen: boolean;
  onClose: () => void;
  onFocus: () => void;
  isActive: boolean;
  initialPosition?: { x: number; y: number };
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
  telemetry?: string;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  title,
  icon,
  isOpen,
  onClose,
  onFocus,
  isActive,
  initialPosition = { x: 50, y: 50 },
  children,
  width = '550px',
  height = '400px',
  telemetry = 'System: Operational'
}) => {
  if (!isOpen) return null;

  return (
    <Draggable
      handle=".window-title-bar"
      defaultPosition={initialPosition}
      bounds=".desktop-canvas"
      onMouseDown={onFocus}
    >
      <div
        className="bevel-out"
        style={{
          position: 'absolute',
          width: width,
          height: height,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--bg-window)',
          zIndex: isActive ? 100 : 30,
          color: 'var(--text-primary)',
          boxShadow: isActive ? '4px 4px 10px rgba(0,0,0,0.5)' : '2px 2px 5px rgba(0,0,0,0.3)',
          overflow: 'hidden'
        }}
        onClick={onFocus}
      >
        {/* Title Bar */}
        <div
          className={`window-title-bar ${isActive ? 'active' : 'inactive'}`}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 600, fontFamily: 'var(--font-system)', letterSpacing: '0.5px' }}>
            <img src={icon} alt="" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
            <span>{title}</span>
          </div>
          
          {/* Controls: [_] [?] [X] */}
          <div style={{ display: 'flex', gap: '4px' }}>
            <button
              onClick={onClose}
              className="button-retro"
              style={{
                width: '18px',
                height: '18px',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                fontFamily: 'var(--font-system)'
              }}
            >
              _
            </button>
            <button
              className="button-retro"
              style={{
                width: '18px',
                height: '18px',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                fontFamily: 'var(--font-system)'
              }}
            >
              ?
            </button>
            <button
              onClick={onClose}
              className="button-retro"
              style={{
                width: '18px',
                height: '18px',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                fontFamily: 'var(--font-system)'
              }}
            >
              X
            </button>
          </div>
        </div>

        {/* Content Recessed Panel */}
        <div
          className="bevel-in"
          style={{
            flex: 1,
            margin: '6px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {children}
        </div>

        {/* Telemetry Status Bar */}
        <div
          style={{
            height: '22px',
            backgroundColor: 'var(--taskbar-bg)',
            borderTop: '2px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-system)',
            justifyContent: 'space-between'
          }}
        >
          <span>STATUS: {telemetry}</span>
          <span style={{ color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)' }}>
            {isActive ? 'ACTIVE_CHANNEL_FOCUSED' : 'BG_STANDBY'}
          </span>
        </div>
      </div>
    </Draggable>
  );
};
