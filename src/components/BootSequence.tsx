import React, { useEffect, useState } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const bootLogs = [
    'ST-VN BIOS V2.0 - INITIALIZING ENVIRONMENT...',
    'CORE: CONCORDIA COMP_ENG MATRIX [OK]',
    'REPOSITORIES: TS_INFRASTRUCTURE // SYSTEM_LOGIC [OK]',
    'METRICS: 3.4B+ LIVE GAME SESSIONS ALLOCATED [OK]',
    'LOADING SYSTEM BINARIES... [OK]',
    'MOUNTING VIRTUAL DESKTOP WORKSPACE...'
  ];

  useEffect(() => {
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < bootLogs.length) {
        setLines(prev => [...prev, bootLogs[logIndex]]);
        logIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 200);

    // Progress bar loader
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete();
          }, 250);
          return 100;
        }
        return prev + 10;
      });
    }, 120);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div style={{
      backgroundColor: '#000',
      color: 'var(--accent-cyan)',
      fontFamily: 'var(--font-system)',
      width: '100vw',
      height: '100vh',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden'
    }} className="monitor-scanline">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {lines.map((line, idx) => (
          <div key={idx} style={{ fontSize: '20px', letterSpacing: '1px' }}>
            {line}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px' }}>
          <span>SYSTEM LOADING: {progress}%</span>
          <span>SYSTEM_INIT_OK</span>
        </div>
        <div style={{
          width: '100%',
          height: '24px',
          border: '2px solid var(--accent-cyan)',
          padding: '2px'
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: 'var(--accent-cyan)',
            transition: 'width 0.1s linear'
          }} />
        </div>
      </div>
    </div>
  );
};
