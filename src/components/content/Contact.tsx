import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="panel-content">
      <h3 className="section-header">[ OUTGOING_GATEWAY.SYS ]</h3>

      <div className="item-card">
        <div className="item-header">
          <span className="item-title">[ CONTACT INFORMATION NODES ]</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '15px' }}>
          <div>
            <span className="item-secondary">EMAIL : </span>
            <a href="mailto:cchhunsteven@gmail.com" className="source-link">cchhunsteven@gmail.com</a>
          </div>
          <div>
            <span className="item-secondary">PHONE : </span>
            <span>514-953-8977</span>
          </div>
          <div>
            <span className="item-secondary">LOCATION : </span>
            <span>Montreal, QC</span>
          </div>
        </div>
      </div>

      <div className="item-card">
        <div className="item-header">
          <span className="item-title">[ EXTERNAL RESOURCE LINKS ]</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '15px' }}>
          <div>
            <span className="item-secondary">GITHUB : </span>
            <a href="https://github.com/St-vn" target="_blank" rel="noreferrer" className="source-link">github.com/St-vn</a>
          </div>
          <div>
            <span className="item-secondary">PORTFOLIO : </span>
            <a href="https://st-vn.github.io/portfolio/" target="_blank" rel="noreferrer" className="source-link">st-vn.github.io/portfolio/</a>
          </div>
          <div>
            <span className="item-secondary">LINKEDIN : </span>
            <a href="https://www.linkedin.com/in/steven-chhay-820094404/" target="_blank" rel="noreferrer" className="source-link">linkedin.com/in/steven-chhay-820094404</a>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
        <a href="mailto:cchhunsteven@gmail.com" className="button-retro" style={{ textDecoration: 'none' }}>
          LAUNCH_MAILER.EXE
        </a>
      </div>
    </div>
  );
};
