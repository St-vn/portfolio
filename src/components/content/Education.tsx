import React from 'react';

export const Education: React.FC = () => {
  const scienceCourses = [
    { code: '101-SN1-RE', name: 'Cellular Biology' },
    { code: '101-SN2-RE', name: 'Ecology & Evolution' },
    { code: '201-SN1-RE', name: 'Probability & Stats' },
    { code: '201-SN2-RE', name: 'Differential Calculus' },
    { code: '201-SN3-RE', name: 'Integral Calculus' },
    { code: '201-SN4-RE', name: 'Linear Algebra & Vector Geometry' },
    { code: '201-SF5-RE', name: 'Discrete Mathematics' },
    { code: '201-NF1-LG', name: 'Advanced Calculus' },
    { code: '202-SN1-RE', name: 'General Chemistry' },
    { code: '202-SN2-RE', name: 'Chemistry of Solutions' },
    { code: '202-SNU-RE', name: 'Organic Chemistry' },
    { code: '203-SN1-RE', name: 'Mechanics (Physics)' },
    { code: '203-SN2-RE', name: 'Electricity & Magnetism' },
    { code: '203-SN3-RE', name: 'Waves, Optics & Modern Physics' },
    { code: '203-NF3-LG', name: 'Integrative Project in Physics' },
    { code: '420-SN1-RE', name: 'Programming in Science' }
  ];

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto', height: '100%', color: 'var(--text-primary)' }}>
      <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', fontSize: '15px', fontWeight: 600 }}>
        [ EDUCATION.DLL // RECORD_DB ]
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* University */}
        <div style={{ padding: '10px', border: '1px solid var(--border-light)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '14px' }}>
            <span>Concordia University</span>
            <span style={{ color: 'var(--accent-green)' }}>2026 - 2030</span>
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Bachelor of Engineering (B.Eng)
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-primary)', marginTop: '2px', fontWeight: 500 }}>
            Major: Computer Engineering
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '6px' }}>
            Focus: Digital systems design, computer organization, programming methodology, data structures & algorithms, circuit analysis, operating systems, and real-time systems.
          </div>
        </div>

        {/* College */}
        <div style={{ padding: '10px', border: '1px solid var(--border-light)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '14px' }}>
            <span>Collège Lionel-Groulx</span>
            <span style={{ color: 'var(--accent-green)' }}>2023 - 2026</span>
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Diploma of College Studies (DEC)
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-primary)', marginTop: '2px', fontWeight: 500 }}>
            Program: Pure and Applied Sciences
          </div>

          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '6px' }}>
            <div style={{ fontWeight: 600, color: 'var(--accent-amber)', marginBottom: '8px', fontSize: '11px', letterSpacing: '0.5px' }}>
              [ COMPLETED SCIENCE & MATHEMATICS CURRICULUM ]
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '4px 8px', fontSize: '11px', fontFamily: 'monospace' }}>
              {scienceCourses.map((course, idx) => (
                <React.Fragment key={idx}>
                  <span style={{ color: 'var(--accent-green)' }}>{course.code}</span>
                  <span style={{ color: 'var(--text-primary)' }}>{course.name}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
