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
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto', height: '100%', color: 'var(--text-primary)' }}>
      <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', fontSize: '15px', fontWeight: 600 }}>
        [ RESUME_2026.DOC // TARGET DIRECTORY ]
      </h3>
      
      <p style={{ fontSize: '13px', lineHeight: '1.5' }}>
        Select a localized technical track variant to download. All payloads compiled from first-principles LaTeX source nodes.
      </p>

      {/* Dual Column Vintage File System Menu */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '4px' }}>
        {tracks.map((track, idx) => (
          <div 
            key={idx} 
            className="bevel-out" 
            style={{ 
              padding: '10px', 
              backgroundColor: 'var(--bg-inset)', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              gap: '10px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px dashed var(--border-light)', paddingBottom: '6px', marginBottom: '6px' }}>
                <span style={{ fontSize: '20px' }}>{track.icon}</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--accent-amber)' }}>{track.title}</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4', margin: 0 }}>
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
                  fontSize: '11px', 
                  padding: '4px 2px', 
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
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
                  fontSize: '11px', 
                  padding: '4px 2px', 
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}
              >
                [ PDF: 🇫🇷 FR ]
              </a>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '12px', borderTop: '1px solid var(--border-light)', paddingTop: '12px' }}>
        <h4 style={{ fontSize: '13px', color: 'var(--accent-green)', marginBottom: '8px' }}>[ COMPILATION LOGS ]</h4>
        <ul style={{ fontSize: '12px', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px', lineHeight: '1.4', color: 'var(--text-secondary)' }}>
          <li>All targets merged and batch compiled dynamically via <code style={{ color: 'var(--accent-amber)' }}>compile_cv.py</code>.</li>
          <li>Education metrics synchronized with Concordian B.Eng curriculum modules.</li>
          <li>System compliance verified across 6 isolated build environments.</li>
        </ul>
      </div>
    </div>
  );
};
