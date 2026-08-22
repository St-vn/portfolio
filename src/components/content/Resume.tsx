import React from 'react';

export const Resume: React.FC = () => {
  const tracks = [
    {
      title: 'Software Engineering',
      desc: 'Full-stack development, cloud DBs, system design, and APIs.',
      enPath: 'assets/resumes/software_en.pdf',
      frPath: 'assets/resumes/software_fr.pdf',
      icon: '💻'
    },
    {
      title: 'Game Development',
      desc: 'Gameplay scripting, multiplayer netcode, kinematics & physics.',
      enPath: 'assets/resumes/gamedev_en.pdf',
      frPath: 'assets/resumes/gamedev_fr.pdf',
      icon: '🎮'
    },
    {
      title: 'Engineering & Physics',
      desc: 'Computational fluid dynamics, alternators & vertical wind turbines.',
      enPath: 'assets/resumes/hardware_en.pdf',
      frPath: 'assets/resumes/hardware_fr.pdf',
      icon: '⚙️'
    }
  ];

  return (
    <div className="panel-content">
      <h3 className="section-header">[ RESUME_2026.DOC // TARGET DIRECTORY ]</h3>

      <p className="item-body">
        Select a localized technical track variant to download. All payloads compiled from first-principles LaTeX source nodes.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '4px' }}>
        {tracks.map((track, idx) => (
          <div key={idx} className="item-card">
            <div>
              <div className="item-header">
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '20px' }}>{track.icon}</span>
                  <span className="item-title">{track.title}</span>
                </span>
              </div>
              <p className="item-secondary" style={{ fontSize: '14px', lineHeight: '1.4', margin: 0 }}>
                {track.desc}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
              <a
                href={track.enPath}
                download
                className="button-retro"
                style={{
                  flex: 1,
                  textDecoration: 'none',
                  fontSize: '13px',
                  padding: '4px 2px',
                  textAlign: 'center',
                  justifyContent: 'center'
                }}
              >
                [ PDF: 🇬🇧 EN ]
              </a>
              <a
                href={track.frPath}
                download
                className="button-retro"
                style={{
                  flex: 1,
                  textDecoration: 'none',
                  fontSize: '13px',
                  padding: '4px 2px',
                  textAlign: 'center',
                  justifyContent: 'center'
                }}
              >
                [ PDF: 🇫🇷 FR ]
              </a>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '12px', borderTop: '1px solid var(--border-light)', paddingTop: '12px' }}>
        <h4 style={{ fontSize: '15px', color: 'var(--accent-cyan)', marginBottom: '8px' }}>[ COMPILATION LOGS ]</h4>
        <ul className="item-list">
          <li>All targets merged and batch compiled dynamically via <code style={{ color: 'var(--accent-amber)' }}>compile_cv.py</code>.</li>
          <li>Education metrics synchronized with Concordian B.Eng curriculum modules.</li>
          <li>System compliance verified across 6 isolated build environments.</li>
        </ul>
      </div>
    </div>
  );
};
