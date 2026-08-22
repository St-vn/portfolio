import React from 'react';

export const UserProfile: React.FC = () => {
  return (
    <div className="panel-content">
      <div className="item-card">
        <div className="item-header">
          <span className="item-title">[ SYSTEM PROFILE: STEVEN CHHAY ]</span>
        </div>
        <p className="item-body">
          I build software at the intersection of engineering and applied physics. I have five years of
          experience in game development and full-stack software. My
          technical interests span aerodynamics, avionics systems, embedded systems, game development, fluid simulation,
          and more. I approach engineering problems using first principles.
        </p>
      </div>

      <div className="item-card">
        <div className="item-header">
          <span className="item-title">[ EDUCATION HISTORICAL LOG ]</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500, fontSize: '16px' }}>
              <strong>Concordia University</strong>
              <span className="item-date">2026 - 2030</span>
            </div>
            <div className="item-secondary">Bachelor of Engineering in Computer Engineering</div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500, fontSize: '16px' }}>
              <strong>Collège Lionel-Groulx</strong>
              <span className="item-date">2023 - 2026</span>
            </div>
            <div className="item-secondary">Diploma of College Studies in Pure and Applied Science (DEC)</div>
          </div>
        </div>
      </div>

      <div className="item-card">
        <div className="item-header">
          <span className="item-title">[ LANGUAGES ]</span>
        </div>
        <div className="tag-container">
          <span className="tag-pill">ENGLISH</span>
          <span className="tag-pill">FRENCH</span>
          <span className="tag-pill">KHMER</span>
        </div>
      </div>

      <div className="item-card">
        <div className="item-header">
          <span className="item-title">[ SPECIALIST FIELD MATRIX ]</span>
        </div>
        <div className="tag-container">
          <span className="tag-pill">APPLIED PHYSICS</span>
          <span className="tag-pill">APPLIED MATHEMATICS</span>
          <span className="tag-pill">NETWORKING ARCHITECTURE</span>
          <span className="tag-pill">GAME DEVELOPMENT</span>
          <span className="tag-pill">WORKFLOW AUTOMATION</span>
          <span className="tag-pill">SYSTEMS DEVELOPMENT</span>
        </div>
      </div>
    </div>
  );
};
