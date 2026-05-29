import React from 'react';

export const Skills: React.FC = () => {
  const categories = [
    {
      title: 'PROGRAMMING LANGUAGES',
      skills: [
        { name: 'C#', level: 95 },
        { name: 'Python', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'Lua/LuaU', level: 99 },
        { name: 'SQL (Postgres + SQLite)', level: 80 },
        { name: 'HTML/CSS', level: 90 }
      ]
    },
    {
      title: 'FRAMEWORKS & TESTING',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 90 },
        { name: 'React Native', level: 85 },
        { name: 'Expo', level: 85 },
        { name: 'FastAPI', level: 80 },
        { name: 'FastMCP', level: 85 },
        { name: 'Playwright', level: 85 },
        { name: 'Vitest', level: 85 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'DEVELOPER TOOLS & ENGINES',
      skills: [
        { name: 'Unity Engine', level: 95 },
        { name: 'Roblox Studio / API', level: 99 },
        { name: 'VSCode', level: 95 },
        { name: 'VSCommunity', level: 90 },
        { name: 'Fusion360', level: 80 },
        { name: 'Blender', level: 75 },
        { name: 'Git / GitHub', level: 90 },
        { name: 'Supabase', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Vite', level: 90 },
        { name: 'Vercel', level: 80 },
        { name: 'Railway', level: 80 }
      ]
    },
    {
      title: 'AI UTILITIES',
      skills: [
        { name: 'Claude Code', level: 95 },
        { name: 'Antigravity', level: 95 },
        { name: 'ChatGPT', level: 90 },
        { name: 'Gemini', level: 90 },
        { name: 'Cursor', level: 90 },
        { name: 'GitHub Copilot', level: 90 }
      ]
    },
    {
      title: 'LIBRARIES',
      skills: [
        { name: 'NumPy', level: 80 },
        { name: 'Matplotlib', level: 80 },
        { name: 'Mammoth', level: 80 },
        { name: 'PDF Parse', level: 80 },
        { name: 'PyTrend', level: 60 },
        { name: 'KaTeX', level: 75 },
      ]
    }
  ];

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto', height: '100%', color: 'var(--text-primary)' }}>
      <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', fontSize: '15px', fontWeight: 600 }}>
        [ SKILLS.CAB // CORE MATRIX ]
      </h3>
      {categories.map((cat, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--accent-green)', letterSpacing: '1px' }}>
            {cat.title}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {cat.skills.map((skill, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ width: '220px', fontFamily: 'monospace' }}>{skill.name}</span>
                <div style={{ flex: 1, height: '8px', border: '1px solid var(--border-light)', backgroundColor: '#0f1115', margin: '0 12px', overflow: 'hidden', position: 'relative' }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    backgroundColor: 'var(--accent-green)',
                    boxShadow: '0 0 4px var(--accent-green)'
                  }} />
                </div>
                <span style={{ width: '40px', textAlign: 'right', fontSize: '11px', color: 'var(--text-secondary)' }}>{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
