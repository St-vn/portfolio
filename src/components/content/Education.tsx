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
    <div className="panel-content">
      <h3 className="section-header">[ EDUCATION.DLL // RECORD_DB ]</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div className="item-card">
          <div className="item-header">
            <span className="item-title">Concordia University</span>
            <span className="item-date">2026 - 2030</span>
          </div>
          <div className="item-secondary">Bachelor of Computer Science (BCompSc)</div>
        </div>

        <div className="item-card">
          <div className="item-header">
            <span className="item-title">Collège Lionel-Groulx</span>
            <span className="item-date">2023 - 2026</span>
          </div>
          <div className="item-secondary">Diploma of College Studies (DEC)</div>
          <div style={{ fontSize: '14px', color: 'var(--text-primary)', marginTop: '2px', fontWeight: 500 }}>
            Program: Pure and Applied Sciences
          </div>

          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px', borderTop: '1px dashed var(--border-light)', paddingTop: '6px' }}>
            <div className="item-title" style={{ fontSize: '13px', marginBottom: '8px', letterSpacing: '0.5px' }}>
              [ COMPLETED SCIENCE & MATHEMATICS CURRICULUM ]
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '4px 8px', fontSize: '13px' }}>
              {scienceCourses.map((course, idx) => (
                <React.Fragment key={idx}>
                  <span style={{ color: 'var(--accent-cyan)' }}>{course.code}</span>
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
