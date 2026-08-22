import React from 'react';

export const Profile: React.FC = () => {
  return (
    <div className="panel-content">
      <div className="item-card">
        <div className="item-header">
          <span className="item-title">[ SYSTEM PROFILE: STEVEN CHHAY ]</span>
        </div>
        <p className="item-body">
          I approach engineering problems using first principles. I'm a game developer with 9 years of experience, studying Computer Science and an aspiring founder.
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
            <div className="item-secondary">Bachelor of Computer Science</div>
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
        </div>
      </div>

      <div className="item-card">
        <div className="item-header">
          <span className="item-title">[ SPECIALIST FIELD MATRIX ]</span>
        </div>
        <div className="tag-container">
          <span className="tag-pill">AI ENGINEERING</span>
          <span className="tag-pill">SOFTWARE ENGINEERING</span>
          <span className="tag-pill">GAME DEVELOPMENT</span>
          <span className="tag-pill">WEB DEVELOPMENT</span>
          <span className="tag-pill">MOBILE DEVELOPMENT</span>
          <span className="tag-pill">APPLIED PHYSICS</span>
          <span className="tag-pill">APPLIED MATHEMATICS</span>
          <span className="tag-pill">CI/CD</span>
          <span className="tag-pill">NETWORKING ARCHITECTURE</span>
          <span className="tag-pill">WORKFLOW AUTOMATION</span>
          <span className="tag-pill">SYSTEMS DEVELOPMENT</span>
        </div>
      </div>

      <div className="item-card">
        <div className="item-header">
          <span className="item-title">[ PROGRAMMING LANGUAGES ]</span>
        </div>
        <div className="tag-container">
          <span className="tag-pill">C#</span>
          <span className="tag-pill">Python</span>
          <span className="tag-pill">TypeScript</span>
          <span className="tag-pill">JavaScript</span>
          <span className="tag-pill">Lua/LuaU</span>
          <span className="tag-pill">SQL (Postgres + SQLite)</span>
          <span className="tag-pill">HTML/CSS</span>
        </div>
      </div>

      <div className="item-card">
        <div className="item-header">
          <span className="item-title">[ FRAMEWORKS & TESTING ]</span>
        </div>
        <div className="tag-container">
          <span className="tag-pill">React</span>
          <span className="tag-pill">Next.js</span>
          <span className="tag-pill">React Native</span>
          <span className="tag-pill">Expo</span>
          <span className="tag-pill">FastAPI</span>
          <span className="tag-pill">FastMCP</span>
          <span className="tag-pill">Playwright</span>
          <span className="tag-pill">Vitest</span>
          <span className="tag-pill">Tailwind CSS</span>
        </div>
      </div>

      <div className="item-card">
        <div className="item-header">
          <span className="item-title">[ DEVELOPER TOOLS & ENGINES ]</span>
        </div>
        <div className="tag-container">
          <span className="tag-pill">Unity Engine</span>
          <span className="tag-pill">Roblox Studio / API</span>
          <span className="tag-pill">VSCode</span>
          <span className="tag-pill">VSCommunity</span>
          <span className="tag-pill">Fusion360</span>
          <span className="tag-pill">Blender</span>
          <span className="tag-pill">Git / GitHub</span>
          <span className="tag-pill">Supabase</span>
          <span className="tag-pill">Redis</span>
          <span className="tag-pill">Vite</span>
          <span className="tag-pill">Vercel</span>
          <span className="tag-pill">Railway</span>
        </div>
      </div>

      <div className="item-card">
        <div className="item-header">
          <span className="item-title">[ AI UTILITIES ]</span>
        </div>
        <div className="tag-container">
          <span className="tag-pill">Claude Code</span>
          <span className="tag-pill">Antigravity</span>
          <span className="tag-pill">ChatGPT</span>
          <span className="tag-pill">Gemini</span>
          <span className="tag-pill">Cursor</span>
          <span className="tag-pill">GitHub Copilot</span>
        </div>
      </div>
    </div>
  );
};
