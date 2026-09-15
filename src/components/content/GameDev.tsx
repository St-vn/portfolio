// import React, { useState } from 'react';
import { Y2KImageViewer } from '../Y2KImageViewer';
import { Y2KMediaCarousel } from '../Y2KMediaCarousel';

export const GameDev: React.FC = () => {
  // const [activeTab, setActiveTab] = useState<'production' | 'architecture'>('production');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* <div className="cv-bar">
        <span className="tech-label">CV_TARGET: GAME_DEV</span>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <a href="assets/resumes/gamedev_en.pdf" download className="button-retro" style={{ fontSize: '13px', padding: '2px 8px', textDecoration: 'none' }}>
            [ Download CV: 🇬🇧 EN ]
          </a>
          <a href="assets/resumes/gamedev_fr.pdf" download className="button-retro" style={{ fontSize: '13px', padding: '2px 8px', textDecoration: 'none' }}>
            [ Télécharger CV: 🇫🇷 FR ]
          </a>
        </div>
      </div> */}

      {/* <div className="tab-bar">
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
      </div> */}

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', backgroundColor: 'var(--bg-inset)' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <div className="item-card">
              <div className="item-header">
                <span className="item-title">Full-Stack Game Development Freelancer</span>
                <span className="item-date">2020–Present</span>
              </div>
              <p className="item-body" style={{ marginBottom: '6px' }}>
                Five years of professional game development across Unity and Roblox.
              </p>
              <ul className="item-list" style={{ marginBottom: '12px' }}>
                <li>Contributed to <b>5+ front-page</b> game studios on Roblox</li>
                <li>Optimized multiplayer experiences using client-side prediction, server-side reconciliation and anti-cheat</li>
                <li>Designed gameplay visuals with cutscenes, particles, anime-styled combats and UI/HUD systems</li>
                <li>Developed shadow table based server-client state replication middleware for simplifying server-client state tracking</li>
                <li>Engineered game mechanics using FABRIK, Swept OBB collision, A*/Dijkstra Pathfinding, etc.</li>
              </ul>
              <Y2KMediaCarousel
                media={[
                  { type: 'video', src: 'assets/videos/fbg_lancer_ult.mov', title: 'Some Anime Battlegrounds', aspectRatio: '16/9' },
                  { type: 'youtube', youtubeId: 'S-thgACxqIw', title: 'Stellar Blast', aspectRatio: '16/9' },
                  { type: 'video', src: 'assets/videos/sirskittles building.mp4', title: '2020 Fortnite Building System', aspectRatio: '16/9' },
                  { type: 'video', src: 'assets/videos/block_game.mp4', title: 'Minecraft Rip-off', aspectRatio: '16/9' },
                  { type: 'video', src: 'assets/videos/lancer_1.mp4', title: 'Some Anime Battlegrounds', aspectRatio: '16/9'},
                  { type: 'video', src: 'assets/videos/lancer_2.mp4', title: 'Some Anime Battlegrounds', aspectRatio: '16/9' },
                ]}
              />
            </div>

            <div className="item-card">
              <div className="item-header">
                <span className="item-title">Game Owner, Main Programmer and Designer</span>
                <span className="item-date">2020–Present</span>
              </div>
              <p className="item-body" style={{ marginBottom: '6px' }}>
                Developed a "Steal a brainrot" type game, building and modeling also made by me.
              </p>
              <ul className="item-list" style={{ marginBottom: '12px' }}>
                <li>Day 1 and Day 7 retention peaked at 10.12% and 4.18% respectively</li>
                <li>Acquired 300K+ visits using targeted game thumbnails creatives</li>
                <li>Grew and maintained the Roblox community to 3,800+ members</li>
                <li>Achieved payer conversion rate between 50th and 90th percentile</li>
              </ul>
              <Y2KMediaCarousel
                media={[
                  { type: 'video', src: 'assets/videos/jbl_speaker.mp4', title: 'JBL Speaker', aspectRatio: '16/9' },
                  { type: 'video', src: 'assets/videos/showcase.mp4', title: 'Showcase', aspectRatio: '16/9' },

                ]}
              />
            </div>

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
            </div>
      </div>
    </div>
  );
};
