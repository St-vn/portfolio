import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#0c0d0f',
      color: 'var(--accent-green)',
      fontFamily: 'var(--font-system)',
      padding: '16px',
      height: '100%',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      fontSize: '16px',
      letterSpacing: '0.5px'
    }} className="monitor-scanline">
      <div>&gt; INITIALIZING OUTGOING GATEWAY...</div>
      <div>&gt; GATEWAY LINK STATUS: ESTABLISHED</div>
      <div style={{ color: 'var(--text-secondary)' }}>&gt; PORT: 514 (LOCAL_MONITORING)</div>

      <div style={{ border: '1px dashed var(--accent-green)', padding: '12px', margin: '8px 0', display: 'flex', flexDirection: 'column', gap: '8px', backgroundColor: '#121417' }}>
        <div style={{ color: 'var(--accent-amber)', fontSize: '18px', fontWeight: 'bold' }}>[ CONTACT INFORMATION NODES ]</div>
        <div>EMAIL   : <a href="mailto:cchhunsteven@gmail.com" style={{ color: 'var(--accent-green)', textDecoration: 'underline' }}>cchhunsteven@gmail.com</a></div>
        <div>PHONE   : <span style={{ color: 'var(--text-primary)' }}>514-953-8977</span></div>
        <div>LOCATION: <span style={{ color: 'var(--text-primary)' }}>Montreal, QC</span></div>
      </div>

      <div style={{ border: '1px dashed var(--accent-green)', padding: '12px', margin: '8px 0', display: 'flex', flexDirection: 'column', gap: '8px', backgroundColor: '#121417' }}>
        <div style={{ color: 'var(--accent-amber)', fontSize: '18px', fontWeight: 'bold' }}>[ EXTERNAL RESOURCE LINKS ]</div>
        <div>GITHUB    : <a href="https://github.com/St-vn" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-green)', textDecoration: 'underline' }}>github.com/St-vn</a></div>
        <div>PORTFOLIO : <a href="https://st-vn.github.io/portfolio/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-green)', textDecoration: 'underline' }}>st-vn.github.io/portfolio/</a></div>
        <div>LINKEDIN  : <a href="https://www.linkedin.com/in/steven-chhay-820094404/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-green)', textDecoration: 'underline' }}>linkedin.com/in/steven-chhay-820094404</a></div>
      </div>

      <div>&gt; CONNECTION ID: 8EF969EE-7DCC-4831-ABFD-E8DE378F55FD</div>
      <div>&gt; READY FOR TRANSMISSION.</div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <a href="mailto:cchhunsteven@gmail.com" className="button-retro" style={{ textDecoration: 'none', color: '#fff' }}>
          LAUNCH_MAILER.EXE
        </a>
      </div>
    </div>
  );
};
