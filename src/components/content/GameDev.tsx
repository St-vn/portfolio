import React, { useState } from 'react';
import { Y2KImageViewer } from '../Y2KImageViewer';
import { Y2KMediaCarousel } from '../Y2KMediaCarousel';

export const GameDev: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'production' | 'architecture'>('production');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="cv-bar">
        <span className="tech-label">CV_TARGET: GAME_DEV</span>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <a href="assets/resumes/gamedev_en.pdf" download className="button-retro" style={{ fontSize: '13px', padding: '2px 8px', textDecoration: 'none' }}>
            [ Download CV: 🇬🇧 EN ]
          </a>
          <a href="assets/resumes/gamedev_fr.pdf" download className="button-retro" style={{ fontSize: '13px', padding: '2px 8px', textDecoration: 'none' }}>
            [ Télécharger CV: 🇫🇷 FR ]
          </a>
        </div>
      </div>

      <div className="tab-bar">
        <button
          onClick={() => setActiveTab('production')}
          className={`tab-button ${activeTab === 'production' ? 'active' : ''}`}
        >
          🎮 live_production.bin {activeTab === 'production' && '●'}
        </button>
        <button
          onClick={() => setActiveTab('architecture')}
          className={`tab-button ${activeTab === 'architecture' ? 'active' : ''}`}
        >
          ⚙️ networking_sys.log {activeTab === 'architecture' && '●'}
        </button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', backgroundColor: 'var(--bg-inset)' }}>
        {activeTab === 'production' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="item-card">
              <div className="item-header">
                <span className="item-title">Frontend Game Developer</span>
                <span className="item-date">2024</span>
              </div>
              <div className="item-secondary" style={{ marginBottom: '8px' }}>Oakley Productions LLC // Remote</div>
              <p className="item-body" style={{ marginBottom: '6px' }}>
                Contributed frontend game logic and visual scripting to <strong>Anime Defenders</strong>, a premier tower-defense title on Roblox.
              </p>
              <ul className="item-list" style={{ marginBottom: '12px' }}>
                <li>Contributed to generating +3.4B visits and peaking at 100K concurrent users.</li>
                <li>Engineered visual effects (VFX) utilizing particle engines, custom projectile motion vectors, and Bézier paths.</li>
                <li>Programmed ability visuals for 10+ characters utilizing particles, trail effects, and animations.</li>
                <li>Designed custom programmatic "Rock" visual effects leveraging easing math and parts.</li>
              </ul>
              <div style={{ maxWidth: '340px', marginTop: '10px' }}>
                <Y2KImageViewer src="assets/images/anime defenders thumbnail.webp" alt="Anime Defenders" fileFormat="WebP" dimensions="728 x 410" />
              </div>
            </div>

            <div className="item-card">
              <div className="item-header">
                <span className="item-title">Full-Stack Game Developer</span>
                <span className="item-date">2024</span>
              </div>
              <div className="item-secondary" style={{ marginBottom: '8px' }}>Boss Studios LLC // Remote</div>
              <p className="item-body" style={{ marginBottom: '6px' }}>
                Engineered server/client synchronization and combat loops for a Minecraft BedWars-inspired title.
              </p>
              <ul className="item-list" style={{ marginBottom: '12px' }}>
                <li>Designed blocks placement system with rapid voxel rendering constraints.</li>
                <li>Scripted PvP combat logic, collision boxes, projectiles, melee attacks, and inventory data structures.</li>
                <li>Implemented gameplay visuals for combat and ability systems using tweening and particles.</li>
                <li>Programmed multiplayer lobby setups, server routing, and matchmaking connections.</li>
              </ul>
              <div style={{ maxWidth: '180px', marginTop: '10px' }}>
                <Y2KImageViewer src="assets/images/boss studios logo.png" alt="Boss Studios" fileFormat="PNG" dimensions="400 x 400" />
              </div>
            </div>

            <div className="item-card">
              <div className="item-header">
                <span className="item-title">Full-Stack Game Development Freelancer</span>
                <span className="item-date">2020–Present</span>
              </div>
              <p className="item-body" style={{ marginBottom: '6px' }}>
                Five years of professional game development across Unity and Roblox — building industry-grade systems with applied mathematics, physics simulation, and networking architecture.
              </p>
              <ul className="item-list" style={{ marginBottom: '12px' }}>
                <li>Applied math and physics in projectile motion, FABRIK inversed kinematics, collision systems, wall running, building mechanics</li>
                <li>Engineered multiplayer netcode with client-side prediction, server-side reconciliation, latency compensation, and anti-cheat systems</li>
                <li>Implemented gameplay AI with A* and Dijkstra's algorithm implementations</li>
                <li>Designed gameplay visuals with cutscenes, particle VFX, anime-style attack sequences, UI/HUD systems</li>
              </ul>
              <Y2KMediaCarousel
                media={[
                  { type: 'video', src: 'assets/videos/fbg_lancer_ult.mov', title: 'Anime themed Battlegrounds Test', aspectRatio: '16/9' },
                  { type: 'youtube', youtubeId: 'S-thgACxqIw', title: 'Rocket space game : Stellar Blast', aspectRatio: '16/9' },
                  { type: 'video', src: 'assets/videos/sirskittles building.mp4', title: '2020 Fortnite Building System', aspectRatio: '16/9' },
                ]}
              />
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="item-card">
              <div className="item-header">
                <span className="item-title">APPLIED PHYSICS & MATHEMATICS CORES</span>
              </div>
              <p className="item-body">
                Leveraged linear algebra, 3D vectors, matrix transformations, and kinematics formulas to build custom engines for mechanics (wall-running, grappling hooks, client-side hit validation).
              </p>
            </div>

            <div className="item-card">
              <div className="item-header">
                <span className="item-title">NETWORKING ARCHITECTURE</span>
              </div>
              <p className="item-body">
                Implemented client-side prediction, server reconciliation logic, and anti-cheat systems to make high-ping gaming connections feel seamless.
              </p>
            </div>

            <div className="item-card">
              <div className="item-header">
                <span className="item-title">AI & PATHFINDING LOGISTICS</span>
              </div>
              <p className="item-body">
                Deployed A* (A-Star) search matrices, Dijkstra grids, and customized state machine AI behaviors for NPCs traversing complex 3D environments.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
