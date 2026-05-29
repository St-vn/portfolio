import React from 'react';

export const UserProfile: React.FC = () => {
  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', height: '100%' }}>
      {/* Bio section */}
      <div>
        <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
          [ SYSTEM PROFILE: STEVEN CHHAY ]
        </h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-primary)' }}>
          I build software at the intersection of engineering and applied physics. I have five years of
          experience in game development and full-stack software. My
          technical interests span aerodynamics, avionics systems, embedded systems, game development, fluid simulation,
          and more. I approach engineering problems using first principles.
        </p>
      </div>

      {/* Education Section */}
      <div>
        <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
          [ EDUCATION HISTORICAL LOG ]
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500, fontSize: '14px' }}>
              <strong>Concordia University</strong>
              <span>2026 - 2030</span>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              Bachelor of Engineering in Computer Engineering
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500, fontSize: '14px' }}>
              <strong>Collège Lionel-Groulx</strong>
              <span>2023 - 2026</span>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              Diploma of College Studies in Pure and Applied Science (DEC)
            </div>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div>
        <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
          [ LANGUAGES ]
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '12px' }}>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            ENGLISH
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            FRENCH
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            KHMER
          </span>
        </div>
      </div>

      {/* Core Tooling Stack Overview */}
      <div>
        <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
          [ SPECIALIST FIELD MATRIX ]
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '12px' }}>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            APPLIED PHYSICS
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            APPLIED MATHEMATICS
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            NETWORKING ARCHITECTURE
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            GAME DEVELOPMENT
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            WORKFLOW AUTOMATION
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            SYSTEMS DEVELOPMENT
          </span>
        </div>
      </div>
    </div>
  );
};
