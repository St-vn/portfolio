import React, { useState } from 'react';
import { Y2KMediaCarousel } from '../Y2KMediaCarousel';

export const SoftwareDev: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'projects'>('experience');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="cv-bar">
        <span className="tech-label">CV_TARGET: SOFTWARE_ENG</span>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <a href="assets/resumes/software_en.pdf" download className="button-retro" style={{ fontSize: '13px', padding: '2px 8px', textDecoration: 'none' }}>
            [ Download CV: 🇬🇧 EN ]
          </a>
          <a href="assets/resumes/software_fr.pdf" download className="button-retro" style={{ fontSize: '13px', padding: '2px 8px', textDecoration: 'none' }}>
            [ Télécharger CV: 🇫🇷 FR ]
          </a>
        </div>
      </div>

      <div className="tab-bar">
        <button
          onClick={() => setActiveTab('experience')}
          className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
        >
          📄 experience.log {activeTab === 'experience' && '●'}
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
        >
          📂 repositories.json {activeTab === 'projects' && '●'}
        </button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', backgroundColor: 'var(--bg-inset)' }}>
        {activeTab === 'experience' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="item-card">
              <div className="item-header">
                <span className="item-title">Full-Stack and Lead Developer</span>
                <span className="item-date">2025 -- Present</span>
              </div>
              <div className="item-secondary" style={{ marginBottom: '8px' }}>Magicbox Logistics LLC // Remote</div>
              <ul className="item-list">
                <li>Communicated with stakeholders to formulate technical roadmaps and plans</li>
                <li>Managed development and deployment of AI-powered predictive analytics platform</li>
                <li>Leveraged statistical modeling to project sales velocity, trend direction, and volume targets</li>
                <li>Engineered scalable database systems to index, cache, and track viral/trending market products</li>
                <li>Utilized modern workflow automation suites to optimize data ingestion and ingestion throughput</li>
              </ul>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span className="tech-label">TECH: Python, Numpy, FastAPI, PostgreSQL</span>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="item-card">
              <div className="item-header">
                <span className="item-title">vibe-fm (HackTheMountain Hackathon)</span>
                <span className="status-badge">SOLO_BUILD</span>
              </div>
              <p className="item-body" style={{ marginBottom: '8px' }}>
                Designed and developed a real-time Music Information Retrieval (MIR) mobile application. Captures low-latency PCM audio stream, extracts acoustic vectors (BPM, energy, valence) via Shazam & FreqBlog, and performs LLM-synthesized semantic profiling alongside vector similarity matchmaking (Cosine Similarity) for compatible profiles. Resolves iOS hardware taptic-recording locks asynchronously.
              </p>
              <div style={{ marginBottom: '10px', maxWidth: '280px' }}>
                <Y2KMediaCarousel
                  media={[
                    { type: 'image', src: 'assets/wallpaper_icons/vibefm.png', alt: 'vibe-fm logo', fileFormat: 'PNG', dimensions: '512 x 512', aspectRatio: '1/1' },
                    { type: 'image', src: 'assets/images/software/vibefm_presentation_2.jpg', alt: 'vibe-fm presentation slide', fileFormat: 'JPEG', dimensions: '1920 x 1080', aspectRatio: '16/10' },
                    { type: 'video', src: 'assets/images/software/vibefm_swipe_demo.mov', title: 'vibe-fm swipe matchmaking demo', aspectRatio: '9/16' },
                    { type: 'image', src: 'assets/images/software/vibefm_capture.png', alt: 'vibe-fm capture screen', fileFormat: 'PNG', dimensions: '1290 x 2796', aspectRatio: '9/16' },
                    { type: 'image', src: 'assets/images/software/vibefm_kanye.png', alt: 'vibe-fm Match Kanye', fileFormat: 'PNG', dimensions: '1290 x 2796', aspectRatio: '9/16' },
                    { type: 'image', src: 'assets/images/software/vibefm_supernatural.png', alt: 'vibe-fm Match Supernatural', fileFormat: 'PNG', dimensions: '1290 x 2796', aspectRatio: '9/16' },
                    { type: 'image', src: 'assets/images/software/vibefm_trending.png', alt: 'vibe-fm trending profiles', fileFormat: 'PNG', dimensions: '1290 x 2796', aspectRatio: '9/16' }
                  ]}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span className="tech-label">TECH: React Native, Expo SDK 54, Zustand, Reanimated/Moti, Gemini Flash, Python, Shazam API</span>
                <div style={{ display: 'flex', gap: '10px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  <a href="https://st-vn.github.io/vibefm-ai" target="_blank" rel="noreferrer" className="source-link">Website &rarr;</a>
                  <a href="https://github.com/St-vn/vibefm-ai" target="_blank" rel="noreferrer" className="source-link">Source &rarr;</a>
                </div>
              </div>
            </div>

            <div className="item-card">
              <div className="item-header">
                <span className="item-title">levlrai</span>
                <span className="status-badge">ACTIVE_DEPLOY</span>
              </div>
              <p className="item-body">
                Architected an AI-powered study platform featuring Mammoth/PDF-Parse course parsing, secure Supabase Postgres DB, Google OAuth, Upstash Redis rate-limiting, and Stripe subscription logic.
              </p>
              <div className="tech-label" style={{ marginTop: '8px' }}>TECH: TypeScript, Next.js, Supabase, Stripe, Redis, Vitest, Tailwind</div>
            </div>

            <div className="item-card">
              <div className="item-header">
                <span className="item-title">Market MCP Server (AI Hackfest Hackathon)</span>
                <span className="status-badge">GITHUB_REPO</span>
              </div>
              <p className="item-body" style={{ marginBottom: '8px' }}>
                Created a Market Intelligence MCP server for AI agents to query live data from Roblox ecosystem wikis, Rolimons, and Cloud APIs.
              </p>
              <Y2KMediaCarousel
                media={[
                  {
                    type: 'image',
                    src: 'https://events.mlh.io/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbDg5IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f6d19345230b1613fddfc7f14ec01bd95fd6b20f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFeE1EQjROakF3SVFZN0JsUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e95a9989726607e7d6ee02cb34a6a4d9a8bf29c1/website-corrected.jpg',
                    alt: "AI Hackfest Event Banner",
                    fileFormat: 'JPEG',
                    dimensions: '300 x 300',
                    aspectRatio: '1/1'
                  },
                  {
                    type: 'youtube',
                    youtubeId: 'B9kzgaxSCI4',
                    title: 'Market MCP Demo Walkthrough',
                    aspectRatio: '16/9'
                  }
                ]}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <span className="tech-label">TECH: Python, FastMCP, BeautifulSoup4</span>
                <a href="https://github.com/St-vn/market-mcp" target="_blank" rel="noreferrer" className="source-link">Source Code &rarr;</a>
              </div>
            </div>

            <div className="item-card">
              <div className="item-header">
                <span className="item-title">J*b Scout (Testsprite Hackathon)</span>
                <span className="status-badge">VERCEL_DEMO</span>
              </div>
              <p className="item-body" style={{ marginBottom: '8px' }}>
                Led a three-person development team to create an AI job match tool utilizing Gemini resume parsing, SerpAPI job fetching, and automated cover letter generation.
              </p>
              <Y2KMediaCarousel
                media={[
                  {
                    type: 'image',
                    src: 'assets/images/TestSprite_Logo-1999604977.jpg',
                    alt: "TestSprite Company Logo",
                    fileFormat: 'JPEG',
                    dimensions: '300 x 300',
                    aspectRatio: '1/1'
                  },
                  {
                    type: 'video',
                    src: 'assets/videos/testsprite_hackathon_s2_demo.mp4',
                    title: 'TestSprite Hackathon Demo Stream',
                    aspectRatio: '16/9'
                  }
                ]}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span className="tech-label">TECH: React + Vite, FastAPI, Python, Vercel, Railway</span>
                <div style={{ display: 'flex', gap: '10px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  <a href="https://testsprite-hackathon.vercel.app" target="_blank" rel="noreferrer" className="source-link">Website &rarr;</a>
                  <a href="https://github.com/St-vn/testsprite-hackathon" target="_blank" rel="noreferrer" className="source-link">Source &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
