import React, { useState, useEffect } from 'react';
import { BootSequence } from './components/BootSequence';
import { DesktopIcon } from './components/DesktopIcon';
import { WindowFrame } from './components/WindowFrame';

// Content Components
import { Profile } from './components/content/Profile';
import { SoftwareDev } from './components/content/SoftwareDev';
import { Engineering } from './components/content/Engineering';
import { GameDev } from './components/content/GameDev';
import { Contact } from './components/content/Contact';
import { Skills } from './components/content/Skills';
import { Resume } from './components/content/Resume';
import { Education } from './components/content/Education';

interface WindowState {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  isActive: boolean;
  telemetry: string;
  width: string;
  height: string;
  initialPos: { x: number; y: number };
  children: React.ReactNode;
}

const StickerCollage: React.FC = () => {
  return (
    <div className="sticker-collage-container">
      {/* Neon Ribbon Background Text */}
      <div className="sticker sticker-ribbon">
        ST-VN SYSTEMS V2.0
      </div>

      {/* Sticker 1: Headshot Polaroid */}
      <div className="sticker sticker-polaroid sticker-p1">
        <img src="assets/steven.png" alt="Steven Headshot" />
      </div>

      {/* Sticker 2: Lifestyle Polaroid */}
      <div className="sticker sticker-polaroid sticker-p2">
        <img src="/assets/steven presentation.jpeg" alt="Steven Lifestyle" />
      </div>

      {/* Sticker 3: Keychain Tag */}
      <div className="sticker sticker-blue-tag sticker-keytag">
        <span>🔑</span>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontWeight: 'bold' }}>STEVEN CHHAY</span>
          <span style={{ fontSize: '8px', opacity: 0.8 }}>PORTFOLIO</span>
        </div>
      </div>

      {/* Sticker 4: DDA Icon / Tech Sticker */}
      <div className="sticker sticker-dda">
        <img
          src="/assets/images/dda_icon.png"
          alt="DDA"
          style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.4))' }}
        />
      </div>

      {/* Sticker 5: TestSprite Logo Sticker */}
      <div className="sticker sticker-testsprite">
        <img
          src="/assets/images/TestSprite_Logo-1999604977.jpg"
          alt="TestSprite"
          style={{ width: '100%', height: '100%', borderRadius: '50%', border: '2px solid white', filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.4))' }}
        />
      </div>

      {/* Decorative Sparkles & Tech Badges */}
      <div className="sticker sticker-badge-1">
        <img src="/assets/wallpaper_icons/circuit_board.svg" alt="Circuit Board" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-badge-2">✨</div>
      <div className="sticker sticker-badge-3">🌟</div>
      <div className="sticker sticker-badge-4">
        <img src="/assets/wallpaper_icons/antigravity.svg" alt="Rocket" style={{ width: '200%', height: '200%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-badge-5">
        <img src="/assets/wallpaper_icons/sine_wave.svg" alt="Sine Wave" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {/* Tech Stack Logos as Stickers */}
      <div className="sticker sticker-tech-react">
        <img src="/assets/wallpaper_icons/react.svg" alt="React" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech-typescript">
        <img src="/assets/wallpaper_icons/typescript.svg" alt="TypeScript" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech-python">
        <img src="/assets/wallpaper_icons/python.svg" alt="Python" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech-git">
        <img src="/assets/wallpaper_icons/git.svg" alt="Git" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {/* Extended Tech Stack — All Remaining Wallpaper Icons */}
      <div className="sticker sticker-tech sticker-tech-js">
        <img src="/assets/wallpaper_icons/javascript_logo.svg" alt="JavaScript" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-nextjs">
        <img src="/assets/wallpaper_icons/nextjs.svg" alt="Next.js" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-vite">
        <img src="/assets/wallpaper_icons/vite.svg" alt="Vite" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-tailwind">
        <img src="/assets/wallpaper_icons/tailwind.svg" alt="Tailwind CSS" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-fastapi">
        <img src="/assets/wallpaper_icons/fastapi.svg" alt="FastAPI" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-redis">
        <img src="/assets/wallpaper_icons/redis.svg" alt="Redis" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-supabase">
        <img src="/assets/wallpaper_icons/supabase.svg" alt="Supabase" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-railway">
        <img src="/assets/wallpaper_icons/railway.svg" alt="Railway" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-vercel">
        <img src="/assets/wallpaper_icons/vercel.svg" alt="Vercel" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-github">
        <img src="/assets/wallpaper_icons/github.svg" alt="GitHub" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-playwright">
        <img src="/assets/wallpaper_icons/playwright.svg" alt="Playwright" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-csharp">
        <img src="/assets/wallpaper_icons/csharp.svg" alt="C#" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-lua">
        <img src="/assets/wallpaper_icons/lua.svg" alt="Lua" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-unity">
        <img src="/assets/wallpaper_icons/unity.svg" alt="Unity" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-blender">
        <img src="/assets/wallpaper_icons/blender.svg" alt="Blender" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-fusion360">
        <img src="/assets/wallpaper_icons/fusion360.svg" alt="Fusion 360" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-roblox">
        <img src="/assets/wallpaper_icons/roblox_icon.png" alt="Roblox" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-robloxstudio">
        <img src="/assets/wallpaper_icons/roblox_studio_icon.png" alt="Roblox Studio" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-vsc">
        <img src="/assets/wallpaper_icons/vsc.svg" alt="VS Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-chatgpt">
        <img src="/assets/wallpaper_icons/chatgpt.svg" alt="ChatGPT" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-gemini">
        <img src="/assets/wallpaper_icons/gemini.svg" alt="Gemini" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-claude">
        <img src="/assets/wallpaper_icons/claude.svg" alt="Claude" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-concordia">
        <img src="/assets/wallpaper_icons/concordia.png" alt="Concordia" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-clg">
        <img src="/assets/wallpaper_icons/clg.png" alt="CLG" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-expogo">
        <img src="/assets/wallpaper_icons/expo-go.png" alt="Expo Go" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-vibefm">
        <img src="/assets/wallpaper_icons/vibefm.png" alt="VibeFM" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-devpost">
        <img src="/assets/wallpaper_icons/devpost-logo.svg" alt="Devpost" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-mlh">
        <img src="/assets/wallpaper_icons/mlh.png" alt="MLH" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {/* Floating Title Graphic */}
      <div className="sticker sticker-main-title">
        St-vn
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  const [booting, setBooting] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [selectedIconId, setSelectedIconId] = useState<string | null>(null);

  // Manage all windows state in one hook
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'profile',
      title: 'Profile.lnk',
      icon: '👤',
      isOpen: false,
      isActive: false,
      telemetry: 'Profile Core: OK',
      width: '500px',
      height: '420px',
      initialPos: { x: 50, y: 40 },
      children: <Profile />
    },
    {
      id: 'skills',
      title: 'Skills.cab',
      icon: '💾',
      isOpen: false,
      isActive: false,
      telemetry: 'Skill Database: Loaded',
      width: '520px',
      height: '440px',
      initialPos: { x: 80, y: 60 },
      children: <Skills />
    },
    {
      id: 'resume',
      title: 'Resume_2026.doc',
      icon: '📄',
      isOpen: false,
      isActive: false,
      telemetry: 'Document Payload: Compiled',
      width: '480px',
      height: '400px',
      initialPos: { x: 110, y: 80 },
      children: <Resume />
    },
    {
      id: 'academic',
      title: 'Education.dll',
      icon: '🎓',
      isOpen: false,
      isActive: false,
      telemetry: 'Academic Database: Sync',
      width: '500px',
      height: '430px',
      initialPos: { x: 140, y: 100 },
      children: <Education />
    },
    {
      id: 'structural',
      title: 'Engineering.sys',
      icon: '⚙️',
      isOpen: false,
      isActive: false,
      telemetry: 'Fluid Dynamics Solver: OK',
      width: '550px',
      height: '440px',
      initialPos: { x: 170, y: 120 },
      children: <Engineering />
    },
    {
      id: 'software',
      title: 'Software_Dev.exe',
      icon: '💻',
      isOpen: false,
      isActive: false,
      telemetry: 'Vite/TS Compiler: Online',
      width: '600px',
      height: '460px',
      initialPos: { x: 200, y: 140 },
      children: <SoftwareDev />
    },
    {
      id: 'arcade',
      title: 'Game_Dev.bin',
      icon: '🎮',
      isOpen: false,
      isActive: false,
      telemetry: 'Roblox Data Pipeline: 3.4B+',
      width: '580px',
      height: '480px',
      initialPos: { x: 230, y: 160 },
      children: <GameDev />
    },
    {
      id: 'mail',
      title: 'Contact.bat',
      icon: '📬',
      isOpen: false,
      isActive: false,
      telemetry: 'Contact Gateway: Ready',
      width: '450px',
      height: '380px',
      initialPos: { x: 260, y: 180 },
      children: <Contact />
    }
  ]);

  // Mobile layout checker
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Live system clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const openWindow = (id: string) => {
    setWindows(prev => prev.map(win => {
      if (win.id === id) {
        return { ...win, isOpen: true, isActive: true };
      }
      return { ...win, isActive: false };
    }));
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.map(win => {
      if (win.id === id) {
        return { ...win, isOpen: false, isActive: false };
      }
      return win;
    }));
  };

  const focusWindow = (id: string) => {
    setWindows(prev => prev.map(win => {
      if (win.id === id) {
        return { ...win, isActive: true };
      }
      return { ...win, isActive: false };
    }));
  };

  const toggleWindowMinimize = (id: string) => {
    const target = windows.find(win => win.id === id);
    if (!target) return;

    if (target.isOpen) {
      if (target.isActive) {
        // Minimize (hide from workspace, focus next active window)
        setWindows(prev => prev.map(win => {
          if (win.id === id) {
            return { ...win, isOpen: false, isActive: false };
          }
          return win;
        }));
      } else {
        // Bring to front
        focusWindow(id);
      }
    } else {
      // Restore
      openWindow(id);
    }
  };

  // Deselect desktop icons when clicking empty canvas area
  const handleCanvasClick = () => {
    setStartMenuOpen(false);
    setSelectedIconId(null);
  };

  if (booting) {
    return <BootSequence onComplete={() => setBooting(false)} />;
  }

  // Mobile viewport: Phoning-inspired collage + tactile grid + full-screen overlays
  if (isMobile) {
    // Find the currently open/focused window (if any) to render as full-screen overlay
    const openWindowData = windows.find(win => win.isOpen);

    return (
      <div className="mobile-container">
        {/* Top 40% Collage Sticker Container */}
        <div className="mobile-collage">
          <StickerCollage />
        </div>

        {/* Lower 60% Responsive Icon Grid */}
        <div className="mobile-grid-container">
          <div style={{
            fontFamily: 'var(--font-system)',
            fontSize: '12px',
            color: 'var(--accent-green)',
            textAlign: 'center',
            borderBottom: '1px solid rgba(0, 255, 102, 0.2)',
            paddingBottom: '4px',
            marginBottom: '4px'
          }}>
            ::: SELECT SERVICE TO INITIALIZE CONNECTION :::
          </div>

          <div className="mobile-shortcut-grid">
            {windows.map(win => (
              <div
                key={win.id}
                className="mobile-shortcut-tile"
                onClick={() => openWindow(win.id)}
              >
                <span className="mobile-shortcut-tile-icon">{win.icon}</span>
                <span className="mobile-shortcut-tile-label">{win.title}</span>
              </div>
            ))}
          </div>

          {/* Marquee Ticker along bottom of grid area */}
          <div style={{ marginTop: '8px' }}>
            <marquee scrollamount="3">
              🖥️ STEVEN CHHAY PORTFOLIO ─── EXPERIENCE IN FLUID MECHANICS, FULL-STACK SOFTWARE ENGINEERING & GAME DEVELOPMENT ─── WELCOME TO THE PHONING CONSOLE!
            </marquee>
          </div>
        </div>

        {/* Full-Screen Window Overlay */}
        {openWindowData && (
          <div className="mobile-window-overlay">
            {/* Overlay Header */}
            <div className="mobile-window-header">
              <div className="mobile-window-title">
                <span>{openWindowData.icon}</span>
                <span>{openWindowData.title}</span>
              </div>
              <button
                className="mobile-window-close"
                onClick={() => closeWindow(openWindowData.id)}
              >
                X
              </button>
            </div>

            {/* Overlay Recessed Content Container */}
            <div className="mobile-window-content">
              {openWindowData.children}
            </div>

            {/* Overlay Footer */}
            <div className="mobile-window-footer">
              <span>STATUS: {openWindowData.telemetry}</span>
              <span style={{ color: 'var(--accent-green)' }}>ACTIVE_CHANNEL</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop viewport: interactive OS workspace
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden'
      }}
      onClick={handleCanvasClick}
    >
      {/* Desktop Canvas Sandbox */}
      <div className="desktop-canvas">
        {/* Background Sticker Collage */}
        <StickerCollage />

        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          bottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          gap: '6px',
          zIndex: 20
        }}>
          {windows.map(win => (
            <DesktopIcon
              key={win.id}
              label={win.title}
              icon={win.icon}
              isSelected={selectedIconId === win.id}
              onSelect={() => setSelectedIconId(win.id)}
              onOpen={() => {
                openWindow(win.id);
                setSelectedIconId(win.id);
              }}
            />
          ))}
        </div>

        {/* Windows rendering container */}
        {windows.map(win => (
          <WindowFrame
            key={win.id}
            title={win.title}
            isOpen={win.isOpen}
            onClose={() => closeWindow(win.id)}
            onFocus={() => focusWindow(win.id)}
            isActive={win.isActive}
            initialPosition={win.initialPos}
            width={win.width}
            height={win.height}
            telemetry={win.telemetry}
          >
            {win.children}
          </WindowFrame>
        ))}
      </div>

      {/* Taskbar along the bottom */}
      <div
        className="bevel-out"
        style={{
          height: '40px',
          backgroundColor: 'var(--taskbar-bg)',
          borderTop: '2px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2px 8px',
          zIndex: 9999
        }}
      >
        {/* Start Button & Menu */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setStartMenuOpen(!startMenuOpen);
            }}
            className={`button-retro ${startMenuOpen ? 'active' : ''}`}
            style={{ fontWeight: 'bold', fontSize: '14px', fontFamily: 'var(--font-system)' }}
          >
            📟 START
          </button>

          {startMenuOpen && (
            <div
              className="bevel-out"
              style={{
                position: 'absolute',
                bottom: '36px',
                left: '0',
                width: '180px',
                backgroundColor: 'var(--bg-window)',
                display: 'flex',
                flexDirection: 'column',
                padding: '4px',
                zIndex: 100000
              }}
            >
              <div style={{
                fontFamily: 'var(--font-system)',
                fontSize: '11px',
                color: 'var(--text-secondary)',
                padding: '4px 8px',
                borderBottom: '1px solid var(--border-light)',
                marginBottom: '4px'
              }}>
                ST-VN OS UTILITIES
              </div>
              {windows.map(win => (
                <button
                  key={win.id}
                  onClick={() => {
                    openWindow(win.id);
                    setStartMenuOpen(false);
                  }}
                  style={{
                    border: 'none',
                    background: 'none',
                    color: 'var(--text-primary)',
                    textAlign: 'left',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontFamily: 'var(--font-system)',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = '#1e293b';
                    (e.target as HTMLElement).style.color = 'var(--accent-green)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = 'var(--text-primary)';
                  }}
                >
                  <span>{win.icon}</span> {win.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Taskbar Tabs for Active Windows */}
        <div style={{
          flex: 1,
          display: 'flex',
          gap: '6px',
          padding: '0 12px',
          overflowX: 'auto',
          alignItems: 'center'
        }}>
          {windows.map(win => {
            if (!win.isOpen && !win.isActive) return null;

            return (
              <button
                key={win.id}
                onClick={() => toggleWindowMinimize(win.id)}
                className={`button-retro ${win.isActive ? 'active' : ''}`}
                style={{
                  fontSize: '12px',
                  padding: '2px 10px',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-system)'
                }}
              >
                <span>{win.icon}</span> {win.title}
              </button>
            );
          })}
        </div>

        {/* Tray Clock and Network State */}
        <div
          className="bevel-in"
          style={{
            height: '26px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0 8px',
            fontSize: '13px',
            fontFamily: 'var(--font-system)',
            backgroundColor: 'var(--bg-inset)',
            color: 'var(--accent-green)'
          }}
        >
          <span>📶 ONLINE</span>
          <span style={{ color: 'var(--text-primary)' }}>|</span>
          <span style={{ color: 'var(--text-primary)' }}>{currentTime}</span>
        </div>
      </div>
    </div>
  );
};
export default App;
