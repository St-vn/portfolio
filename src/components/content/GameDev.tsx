import React, { useState } from 'react';
import { Y2KImageViewer } from '../Y2KImageViewer';
import { Y2KMediaCarousel } from '../Y2KMediaCarousel';

export const GameDev: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'production' | 'architecture'>('production');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Target CV Integration */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '6px 12px',
        backgroundColor: 'var(--bg-window)',
        borderBottom: '2px solid var(--border-dark)',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: 'var(--font-system)' }}>
          CV_TARGET: GAME_DEV
        </span>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <a href="/assets/resumes/gamedev_en.pdf" download className="button-retro" style={{ fontSize: '11px', padding: '2px 8px', textDecoration: 'none' }}>
            [ Download CV: 🇬🇧 EN ]
          </a>
          <a href="/assets/resumes/gamedev_fr.pdf" download className="button-retro" style={{ fontSize: '11px', padding: '2px 8px', textDecoration: 'none' }}>
            [ Télécharger CV: 🇫🇷 FR ]
          </a>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div style={{ padding: '4px', backgroundColor: 'var(--bg-inset)' }}>
        <marquee scrollamount="5">
          🔥 MASSIVE SESSIONS METRIC: +3,400,000,000 USER SESSIONS LOGGED 🔥 ST-VN MULTIPLAYER ENGINE ONLINE 🔥
        </marquee>
      </div>

      {/* Dashboard Tabs Header */}
      <div style={{
        display: 'flex',
        backgroundColor: '#16181c',
        borderBottom: '1px solid var(--border-light)',
        paddingLeft: '6px'
      }}>
        <button
          onClick={() => setActiveTab('production')}
          style={{
            padding: '6px 16px',
            backgroundColor: activeTab === 'production' ? 'var(--bg-inset)' : 'transparent',
            color: activeTab === 'production' ? 'var(--accent-green)' : 'var(--text-secondary)',
            border: 'none',
            borderRight: '1px solid #2d3139',
            fontFamily: 'var(--font-system)',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          🎮 live_production.bin {activeTab === 'production' && '●'}
        </button>
        <button
          onClick={() => setActiveTab('architecture')}
          style={{
            padding: '6px 16px',
            backgroundColor: activeTab === 'architecture' ? 'var(--bg-inset)' : 'transparent',
            color: activeTab === 'architecture' ? 'var(--accent-green)' : 'var(--text-secondary)',
            border: 'none',
            borderRight: '1px solid #2d3139',
            fontFamily: 'var(--font-system)',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          ⚙️ networking_sys.log {activeTab === 'architecture' && '●'}
        </button>
      </div>

      {/* Content Space */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', backgroundColor: 'var(--bg-inset)' }}>
        {activeTab === 'production' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Oakley Productions */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '4px' }}>
                <strong style={{ color: 'var(--accent-green)' }}>Frontend Game Developer</strong>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>2024</span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Oakley Productions LLC // Remote</div>
              <p style={{ fontSize: '13px', color: 'var(--text-primary)', marginBottom: '6px', lineHeight: '1.5' }}>
                Contributed frontend game logic and visual scripting to <strong>Anime Defenders</strong>, a premier tower-defense title on Roblox.
              </p>
              <ul style={{ paddingLeft: '18px', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                <li>Scaled visual effects (VFX) utilizing particle engines, custom projectile motion vectors, and Bézier paths.</li>
                <li>Programmed gameplay abilities, visual indicators, and status updates for 10+ character systems.</li>
                <li>Supported a dynamic production workflow generating +3.4B visits and peaking at 100K concurrent connections.</li>
              </ul>

              {/* Media showcase (Image only) */}
              <div style={{ maxWidth: '340px', marginTop: '10px' }}>
                <Y2KImageViewer src="/assets/images/anime defenders thumbnail.webp" alt="Anime Defenders" fileFormat="WebP" dimensions="728 x 410" />
              </div>
            </div>

            {/* Boss Studios */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '4px' }}>
                <strong style={{ color: 'var(--accent-green)' }}>Full-Stack Game Developer</strong>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>2024</span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Boss Studios LLC // Remote</div>
              <p style={{ fontSize: '13px', color: 'var(--text-primary)', marginBottom: '6px', lineHeight: '1.5' }}>
                Engineered server/client synchronization and combat loops for a Minecraft BedWars-inspired title.
              </p>
              <ul style={{ paddingLeft: '18px', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                <li>Designed blocks placement system with rapid voxel rendering constraints.</li>
                <li>Scripted PvP combat logic, collision boxes, projectiles, melee attacks, and inventory data structures.</li>
                <li>Programmed multiplayer lobby setups, server routing, and matchmaking connections.</li>
              </ul>

              {/* Media showcase (Image only) */}
              <div style={{ maxWidth: '180px', marginTop: '10px' }}>
                <Y2KImageViewer src="/assets/images/boss studios logo.png" alt="Boss Studios" fileFormat="PNG" dimensions="400 x 400" />
              </div>
            </div>

            {/* Full-Stack Game Development Freelancer */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '4px' }}>
                <strong style={{ color: 'var(--accent-green)' }}>Full-Stack Game Development Freelancer</strong>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>2020–Present</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-primary)', marginBottom: '6px', lineHeight: '1.5' }}>
                Five years of professional game development across Unity and Roblox — building industry-grade systems with applied mathematics, physics simulation, and networking architecture.
              </p>
              <ul style={{ paddingLeft: '18px', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                <li>Applied math and physics — projectile motion, FABRIK inversed kinematics, collision systems, wall running, building mechanics</li>
                <li>Networking — client-side prediction, server-side reconciliation, latency compensation, anti-cheat systems</li>
                <li>AI pathfinding — A* and Dijkstra's algorithm implementations</li>
                <li>Frontend — cutscenes, particle VFX, anime-style attack sequences, UI/HUD systems</li>
              </ul>

              <Y2KMediaCarousel
                media={[
                  { type: 'video', src: '/assets/videos/fbg_lancer_ult.mov', title: 'Anime themed Battlegrounds Test', aspectRatio: '16/9' },
                  { type: 'youtube', youtubeId: 'S-thgACxqIw', title: 'Rocket space game : Stellar Blast', aspectRatio: '16/9' },
                  { type: 'video', src: '/assets/videos/sirskittles building.mp4', title: '2020 Fortnite Building System', aspectRatio: '16/9' },
                ]}
              />
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Systems details */}
            <div>
              <h4 style={{ color: 'var(--accent-amber)', fontSize: '14px', marginBottom: '8px' }}>APPLIED PHYSICS & MATHEMATICS CORES</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-primary)', marginBottom: '12px' }}>
                Leveraged linear algebra, 3D vectors, matrix transformations, and kinematics formulas to build custom engines for mechanics (wall-running, grappling hooks, client-side hit validation).
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--accent-amber)', fontSize: '14px', marginBottom: '8px' }}>NETWORKING ARCHITECTURE</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-primary)', marginBottom: '12px' }}>
                Implemented client-side prediction, server reconciliation logic, and anti-cheat systems to make high-ping gaming connections feel seamless.
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--accent-amber)', fontSize: '14px', marginBottom: '8px' }}>AI & PATHFINDING LOGISTICS</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                Deployed A* (A-Star) search matrices, Dijkstra grids, and customized state machine AI behaviors for NPCs traversing complex 3D environments.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
