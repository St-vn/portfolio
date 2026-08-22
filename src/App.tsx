import React, { useState, useEffect, useCallback } from 'react';
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

const BACKGROUND_STARS = [
  // Left side / Under desktop icons
  { src: 'assets/images/stickers/stars/Group_23_blue.svg', top: '12%', left: '16%', size: '32px', rotate: '15deg' },
  { src: 'assets/images/stickers/stars/Group_25_pink.svg', top: '26%', left: '14%', size: '26px', rotate: '-22deg' },
  { src: 'assets/images/stickers/stars/Vector_194_yellow.svg', top: '44%', left: '9%', size: '34px', rotate: '12deg' },
  { src: 'assets/images/stickers/stars/Vector_195_blue.svg', top: '68%', left: '13%', size: '28px', rotate: '45deg' },
  { src: 'assets/images/stickers/blue_distressed_star.png', top: '80%', left: '6%', size: '48px', rotate: '-12deg' },

  // Mid-left / Cluster around Polaroid 1 and bottom-left
  { src: 'assets/images/stickers/stars/Group_24_pink.svg', top: '9%', left: '32%', size: '38px', rotate: '-10deg' },
  { src: 'assets/images/stickers/stars/Group_26_yellow.svg', top: '30%', left: '24%', size: '32px', rotate: '25deg' },
  { src: 'assets/images/stickers/stars/Group_27_blue.svg', top: '36%', left: '36%', size: '36px', rotate: '-8deg' },
  { src: 'assets/images/stickers/doodle_star.svg', top: '56%', left: '20%', size: '40px', rotate: '18deg' },
  { src: 'assets/images/stickers/stars/Group_28_pink.svg', top: '64%', left: '29%', size: '30px', rotate: '-32deg' },

  // Center / Around the CD Case and Halftone
  { src: 'assets/images/stickers/stars/Group_23_yellow.svg', top: '6%', left: '46%', size: '30px', rotate: '5deg' },
  { src: 'assets/images/stickers/stars/Group_25_blue.svg', top: '14%', left: '50%', size: '28px', rotate: '-15deg' },
  { src: 'assets/images/stickers/stars/Group_27_pink.svg', top: '84%', left: '44%', size: '38px', rotate: '30deg' },
  { src: 'assets/images/stickers/stars/Vector_194_yellow.svg', top: '76%', left: '53%', size: '32px', rotate: '-25deg' },

  // Mid-right / Cluster around Polaroid 2 and VHS
  { src: 'assets/images/stickers/stars/Vector_195_blue.svg', top: '10%', right: '28%', size: '35px', rotate: '20deg' },
  { src: 'assets/images/stickers/stars/Group_24_pink.svg', top: '32%', right: '26%', size: '26px', rotate: '-12deg' },
  { src: 'assets/images/stickers/stars/Group_26_yellow.svg', top: '46%', right: '34%', size: '30px', rotate: '42deg' },
  { src: 'assets/images/stickers/stars/Group_28_blue.svg', top: '62%', right: '24%', size: '28px', rotate: '-6deg' },
  { src: 'assets/images/stickers/stars/Group_23_pink.svg', top: '78%', right: '36%', size: '32px', rotate: '18deg' },

  // Far Right / Edge cluster
  { src: 'assets/images/stickers/stars/Group_25_blue.svg', top: '6%', right: '10%', size: '40px', rotate: '15deg' },
  { src: 'assets/images/stickers/stars/Group_27_yellow.svg', top: '28%', right: '8%', size: '28px', rotate: '-18deg' },
  { src: 'assets/images/stickers/stars/Vector_194_pink.svg', top: '44%', right: '11%', size: '36px', rotate: '8deg' },
  { src: 'assets/images/stickers/stars/Vector_195_blue.svg', top: '72%', right: '13%', size: '30px', rotate: '-35deg' },
  { src: 'assets/images/stickers/stars/Group_26_yellow.svg', top: '86%', right: '15%', size: '35px', rotate: '20deg' },

  // Older doodle stars
  { src: 'assets/images/stickers/doodle_star_1.svg', top: '18%', left: '42%', size: '24px', rotate: '-8deg' },
  { src: 'assets/images/stickers/doodle_star_2.svg', top: '50%', left: '48%', size: '28px', rotate: '14deg' },
  { src: 'assets/images/stickers/doodle_star_3.svg', top: '62%', right: '45%', size: '25px', rotate: '-30deg' },
  { src: 'assets/images/stickers/doodle_star_4.svg', top: '22%', right: '48%', size: '27px', rotate: '10deg' },
  { src: 'assets/images/stickers/doodle_star_5.svg', top: '70%', left: '38%', size: '29px', rotate: '22deg' },
];

const StickerCollage: React.FC = () => {
  return (
    <div className="sticker-collage-container">
      {/* Background Star Spam */}
      {BACKGROUND_STARS.map((star, idx) => (
        <img
          key={idx}
          src={star.src}
          alt={`Background Star ${idx}`}
          className="sticker"
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            width: star.size,
            height: star.size,
            transform: `rotate(${star.rotate})`,
            opacity: 0.85,
            zIndex: 1, // Stay safely behind foreground collages
            pointerEvents: 'none'
          }}
        />
      ))}

      {/* Neon Ribbon Background Text */}
      {/* <div className="sticker sticker-ribbon">
        ST-VN SYSTEMS V2.0
      </div> */}

      {/* Sticker 1: Headshot Polaroid */}
      <div className="sticker sticker-polaroid sticker-p1">
        <img src="assets/steven.png" alt="Steven Headshot" />
      </div>

      {/* Sticker 2: Lifestyle Polaroid */}
      <div className="sticker sticker-polaroid sticker-p2">
        <img src="assets/steven presentation.jpeg" alt="Steven Lifestyle" />
      </div>

      {/* Sticker 3: Keychain Tag */}
      {/* <div className="sticker sticker-blue-tag sticker-keytag">
        <span>🔑</span>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontWeight: 'bold' }}>STEVEN CHHAY</span>
          <span style={{ fontSize: '10px', opacity: 0.8 }}>PORTFOLIO</span>
        </div>
      </div> */}

      {/* Sticker 4: DDA Icon / Tech Sticker */}
      <div className="sticker sticker-dda">
        <img
          src="assets/images/dda_icon.png"
          alt="DDA"
          style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.4))' }}
        />
      </div>

      {/* Sticker 5: TestSprite Logo Sticker */}
      <div className="sticker sticker-testsprite">
        <img
          src="assets/images/TestSprite_Logo-1999604977.jpg"
          alt="TestSprite"
          style={{ width: '100%', height: '100%', borderRadius: '50%', border: '2px solid white', filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.4))' }}
        />
      </div>

      {/* Sticker 6: VHS Tape Sticker */}
      <div className="sticker sticker-vhs">
        <img
          src="assets/images/stickers/VHS.png"
          alt="VHS Tape"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Sticker 7: Halftone Picture Sticker */}
      {/* <div className="sticker sticker-halftone">
        <img
          src="assets/images/stickers/halftone.png"
          alt="Halftone Graphic"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div> */}

      {/* Pochita placed relative to the halftone with high z-index */}
      <div className="sticker sticker-pochita">
        <img
          src="assets/images/pochita.svg"
          alt="Pochita Sticker"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Sticker 8: Jagged Cutout - Model Lifestyle */}
      <div className="sticker sticker-jagged-container sticker-j1" style={{ '--hover-rotate': '-2deg' } as React.CSSProperties}>
        <div className="sticker-jagged-inner" style={{ clipPath: 'url(#jagged-clip-1)' }}>
          <img
            src="assets/images/ascii-art-no-inversion.png"
            alt="Jagged Cutout"
            style={{ clipPath: 'url(#jagged-clip-1)', mixBlendMode: 'screen' }}
          />
        </div>
      </div>

      {/* Sticker 9: Jagged Cutout - Model Headshot */}
      <div className="sticker sticker-jagged-container sticker-j2" style={{ '--hover-rotate': '2deg' } as React.CSSProperties}>
        <div className="sticker-jagged-inner" style={{ clipPath: 'url(#jagged-clip-2)' }}>
          <img
            src="assets/images/frutiger-aero-background.png"
            alt="Headshot Jagged Cutout"
            style={{ clipPath: 'url(#jagged-clip-2)', objectPosition: '95% 0%' }}
          />
        </div>
      </div>

      {/* Sticker 10: Pixel Rounded Cutout */}
      <div className="sticker sticker-pixel-rounded-container sticker-pr1" style={{ '--hover-rotate': '3deg' } as React.CSSProperties}>
        <div className="sticker-pixel-rounded-inner" style={{ clipPath: 'url(#pixel-rounded-clip)' }}>
          <img
            src="assets/images/other-selfie.png"
            alt="Steven Headshot Pixel Rounded"
          // style={{ transform: 'rotate(25deg) scale(1.15)' }}
          />
        </div>
      </div>



      {/* Decorative Sparkles & Tech Badges */}
      <div className="sticker sticker-badge-1">
        <img src="https://alexh.github.io/vintage-icons/icons/expansion_board_1.png" alt="Circuit Board" style={{ width: '200%', height: '200%', objectFit: 'contain' }} />
      </div>
      {/* <div className="sticker sticker-badge-2">✨</div>
      <div className="sticker sticker-badge-3">🌟</div> */}
      <div className="sticker sticker-badge-4">
        <img src="assets/wallpaper_icons/antigravity.svg" alt="Rocket" style={{ width: '200%', height: '200%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-badge-5">
        <img src="https://win98icons.alexmeub.com/icons/png/computer_taskmgr-0.png" alt="Sine Wave" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {/* Tech Stack Logos as Stickers */}
      <div className="sticker sticker-tech-react">
        <img src="assets/wallpaper_icons/react.svg" alt="React" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech-typescript">
        <img src="assets/wallpaper_icons/typescript.svg" alt="TypeScript" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech-python">
        <img src="assets/wallpaper_icons/python.svg" alt="Python" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech-git">
        <img src="assets/wallpaper_icons/git.svg" alt="Git" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {/* Extended Tech Stack — All Remaining Wallpaper Icons */}
      <div className="sticker sticker-tech sticker-tech-js">
        <img src="assets/wallpaper_icons/javascript_logo.svg" alt="JavaScript" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-nextjs">
        <img src="assets/wallpaper_icons/nextjs.svg" alt="Next.js" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-vite">
        <img src="assets/wallpaper_icons/vite.svg" alt="Vite" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-tailwind">
        <img src="assets/wallpaper_icons/tailwind.svg" alt="Tailwind CSS" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-fastapi">
        <img src="assets/wallpaper_icons/fastapi.svg" alt="FastAPI" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-redis">
        <img src="assets/wallpaper_icons/redis.svg" alt="Redis" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-supabase">
        <img src="assets/wallpaper_icons/supabase.svg" alt="Supabase" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-railway">
        <img src="assets/wallpaper_icons/railway.svg" alt="Railway" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-vercel">
        <img src="assets/wallpaper_icons/vercel.svg" alt="Vercel" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-github">
        <img src="assets/wallpaper_icons/github.svg" alt="GitHub" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-playwright">
        <img src="assets/wallpaper_icons/playwright.svg" alt="Playwright" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-csharp">
        <img src="assets/wallpaper_icons/csharp.svg" alt="C#" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-lua">
        <img src="assets/wallpaper_icons/lua.svg" alt="Lua" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-unity">
        <img src="assets/wallpaper_icons/unity.svg" alt="Unity" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-blender">
        <img src="assets/wallpaper_icons/blender.svg" alt="Blender" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-fusion360">
        <img src="assets/wallpaper_icons/fusion360.svg" alt="Fusion 360" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-roblox">
        <img src="assets/wallpaper_icons/roblox_icon.png" alt="Roblox" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-robloxstudio">
        <img src="assets/wallpaper_icons/roblox_studio_icon.png" alt="Roblox Studio" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-vsc">
        <img src="assets/wallpaper_icons/vsc.svg" alt="VS Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-chatgpt">
        <img src="assets/wallpaper_icons/chatgpt.svg" alt="ChatGPT" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-gemini">
        <img src="assets/wallpaper_icons/gemini.svg" alt="Gemini" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-claude">
        <img src="assets/wallpaper_icons/claude.svg" alt="Claude" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-concordia">
        <img src="assets/wallpaper_icons/concordia.png" alt="Concordia" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-clg">
        <img src="assets/wallpaper_icons/clg.png" alt="CLG" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-expogo">
        <img src="assets/wallpaper_icons/expo-go.png" alt="Expo Go" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-vibefm">
        <img src="assets/wallpaper_icons/vibefm.png" alt="VibeFM" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-devpost">
        <img src="assets/wallpaper_icons/devpost-logo.svg" alt="Devpost" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div className="sticker sticker-tech sticker-tech-mlh">
        <img src="assets/wallpaper_icons/mlh.png" alt="MLH" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {/* Script1 DEV spelling */}
      <div className="sticker" style={{ position: 'absolute', bottom: '40%', right: '15%', transform: 'rotate(-5deg)', zIndex: 3, display: 'flex', gap: '2px' }}>
        <img className="sticker-tech" src="letter/script1_4.ico" alt="D" style={{ width: '32px', height: '32px', objectFit: 'contain', opacity: 1 }} />
        <img className="sticker-tech" src="letter/script1_5.ico" alt="E" style={{ width: '32px', height: '32px', objectFit: 'contain', opacity: 1 }} />
        <img className="sticker-tech" src="letter/script1_22.ico" alt="V" style={{ width: '32px', height: '32px', objectFit: 'contain', opacity: 1 }} />
      </div>

      {/* Script2 DEV spelling */}
      <div className="sticker" style={{ position: 'absolute', bottom: '15%', left: '23%', transform: 'rotate(5deg)', zIndex: 1, display: 'flex', gap: '2px' }}>
        <img className="sticker-tech" src="letter/script2_4.ico" alt="D" style={{ width: '32px', height: '32px', objectFit: 'contain', opacity: 1 }} />
        <img className="sticker-tech" src="letter/script2_5.ico" alt="E" style={{ width: '32px', height: '32px', objectFit: 'contain', opacity: 1 }} />
        <img className="sticker-tech" src="letter/script2_22.ico" alt="V" style={{ width: '32px', height: '32px', objectFit: 'contain', opacity: 1 }} />
      </div>

      {/* Chrome Liquid STVN spelling */}
      <div className="sticker" style={{ position: 'absolute', bottom: '8%', left: '8%', transform: 'rotate(-6deg)', zIndex: 4, display: 'flex', gap: '4px' }}>
        <img className="sticker-tech" src="letter/chrome_liquid_S.png" alt="S" style={{ width: '48px', height: '48px', objectFit: 'contain', opacity: 1 }} />
        <img className="sticker-tech" src="letter/chrome_liquid_T.png" alt="T" style={{ width: '48px', height: '48px', objectFit: 'contain', opacity: 1 }} />
        <img className="sticker-tech" src="letter/chrome_liquid_V.png" alt="V" style={{ width: '48px', height: '48px', objectFit: 'contain', opacity: 1 }} />
        <img className="sticker-tech" src="letter/chrome_liquid_N.png" alt="N" style={{ width: '48px', height: '48px', objectFit: 'contain', opacity: 1 }} />
      </div>

      {/* S Letter background */}
      <div className="sticker" style={{ position: 'absolute', top: '45%', left: '42%', transform: 'rotate(12deg)', zIndex: 3 }}>
        <img className="sticker-tech" src="letter/letters_61.ico" alt="S" style={{ width: '38px', height: '38px', objectFit: 'contain', opacity: 1 }} />
      </div>

      {/* Floating Title Graphic */}
      <div className="sticker sticker-main-title">
        St-vn
      </div>

      {/* 3D CD Jewel Case Centerpiece */}
      <div className="cd-case">
        {/* CD case internal shiny elements */}
        <div className="cd-case-inner-shine"></div>

        {/* CD Disc inside/behind the front cover */}
        <div className="cd-disc">
          <div className="cd-disc-grooves"></div>
          <div className="cd-disc-label">
            <span className="cd-disc-label-text">ST-VN</span>
          </div>
          <div className="cd-disc-center-ring"></div>
          <div className="cd-disc-center-hole"></div>
        </div>

        {/* Transparent CD case image */}
        <img src="assets/images/empty_cd_case.png" alt="CD Case" className="cd-case-img" />

        {/* 1. Barcode sticker on the top left corner */}
        <img
          src="assets/images/stickers/barcode_sticker.svg"
          alt="Barcode"
          className="sticker cd-sticker cd-barcode"
        />

        {/* 2. Starburst sticker on the bottom right corner of the barcode sticker */}
        <img
          src="assets/images/stickers/starburst_sticker.svg"
          alt="Starburst"
          className="sticker cd-sticker cd-hype"
        />

        {/* 3. 5 Doodle stars (different color per number variant) */}
        <img src="assets/images/stickers/stars/doodle_star_1_blue.svg" alt="Star 1" className="sticker cd-sticker cd-star-1" />
        <img src="assets/images/stickers/stars/doodle_star_2_pink.svg" alt="Star 2" className="sticker cd-sticker cd-star-2" />
        <img src="assets/images/stickers/stars/doodle_star_3_yellow.svg" alt="Star 3" className="sticker cd-sticker cd-star-3" />
        <img src="assets/images/stickers/stars/doodle_star_4_blue.svg" alt="Star 4" className="sticker cd-sticker cd-star-4" />
        <img src="assets/images/stickers/stars/doodle_star_5_pink.svg" alt="Star 5" className="sticker cd-sticker cd-star-5" />

        {/* 4. Random stickers from assets/images/stickers */}
        <img src="assets/images/stickers/caution_sticker.svg" alt="Caution" className="sticker cd-sticker cd-caution" />
        <img src="assets/images/stickers/doodle_exclamation.svg" alt="Exclamation" className="sticker cd-sticker cd-exclamation" />
        <img src="assets/images/stickers/hype_sticker.svg" alt="Hype" className="sticker cd-sticker cd-starburst" />
        <img src="assets/images/stickers/terminal_sticker.svg" alt="Terminal" className="sticker cd-sticker cd-terminal" />
        <img src="assets/images/stickers/blue_distressed_star.png" alt="Blue Star" className="sticker cd-sticker cd-blue-star" />

        {/* 5. Tech stack icons */}
        <img src="assets/wallpaper_icons/gemini.svg" alt="Gemini" className="sticker cd-sticker cd-tech cd-gemini" />
        <img src="assets/wallpaper_icons/claude.svg" alt="Claude" className="sticker cd-sticker cd-tech cd-claude" />
        <img src="assets/wallpaper_icons/github.svg" alt="GitHub" className="sticker cd-sticker cd-tech cd-github" />
        <img src="assets/wallpaper_icons/railway.svg" alt="Railway" className="sticker cd-sticker cd-tech cd-railway" />
        <img src="assets/wallpaper_icons/javascript_logo.svg" alt="JavaScript" className="sticker cd-sticker cd-tech cd-js" />
        <img src="assets/wallpaper_icons/csharp.svg" alt="C#" className="sticker cd-sticker cd-tech cd-csharp" />
        <img src="assets/wallpaper_icons/supabase.svg" alt="Supabase" className="sticker cd-sticker cd-tech cd-supabase" />
      </div>

      {/* SVG Clip Paths for Jagged/Pixelated Cutouts */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <clipPath id="jagged-clip-1" clipPathUnits="objectBoundingBox">
            <path d="M 0.1 0.08 L 0.12 0.08 L 0.12 0.04 L 0.15 0.04 L 0.15 0.02 L 0.18 0.02 L 0.18 0.0 L 0.22 0.0 L 0.22 0.02 L 0.25 0.02 L 0.25 0.04 L 0.28 0.04 L 0.28 0.08 L 0.32 0.08 L 0.32 0.05 L 0.35 0.05 L 0.35 0.01 L 0.4 0.01 L 0.4 0.03 L 0.44 0.03 L 0.44 0.06 L 0.48 0.06 L 0.48 0.08 L 0.52 0.08 L 0.52 0.05 L 0.56 0.05 L 0.56 0.0 L 0.6 0.0 L 0.6 0.02 L 0.64 0.02 L 0.64 0.04 L 0.68 0.04 L 0.68 0.08 L 0.72 0.08 L 0.72 0.05 L 0.76 0.05 L 0.76 0.01 L 0.8 0.01 L 0.8 0.03 L 0.84 0.03 L 0.84 0.06 L 0.88 0.06 L 0.88 0.08 L 0.92 0.08 L 0.92 0.12 L 0.95 0.12 L 0.95 0.18 L 0.98 0.18 L 0.98 0.24 L 0.95 0.24 L 0.95 0.3 L 0.92 0.3 L 0.92 0.34 L 0.96 0.34 L 0.96 0.4 L 0.93 0.4 L 0.93 0.46 L 0.99 0.46 L 0.99 0.52 L 0.95 0.52 L 0.95 0.58 L 0.92 0.58 L 0.92 0.64 L 0.97 0.64 L 0.97 0.7 L 0.93 0.7 L 0.93 0.76 L 0.99 0.76 L 0.99 0.82 L 0.95 0.82 L 0.95 0.88 L 0.92 0.88 L 0.92 0.92 L 0.88 0.92 L 0.88 0.96 L 0.84 0.96 L 0.84 0.98 L 0.8 0.98 L 0.8 1.0 L 0.76 1.0 L 0.76 0.98 L 0.72 0.98 L 0.72 0.95 L 0.68 0.95 L 0.68 0.92 L 0.64 0.92 L 0.64 0.95 L 0.6 0.95 L 0.6 0.98 L 0.56 0.98 L 0.56 1.0 L 0.52 1.0 L 0.52 0.97 L 0.48 0.97 L 0.48 0.94 L 0.44 0.94 L 0.44 0.92 L 0.4 0.92 L 0.4 0.96 L 0.36 0.96 L 0.36 0.99 L 0.3 0.99 L 0.3 0.96 L 0.26 0.96 L 0.26 0.92 L 0.22 0.92 L 0.22 0.95 L 0.18 0.95 L 0.18 0.98 L 0.14 0.98 L 0.14 0.95 L 0.1 0.95 L 0.1 0.92 L 0.08 0.92 L 0.08 0.88 L 0.05 0.88 L 0.05 0.82 L 0.02 0.82 L 0.02 0.76 L 0.05 0.76 L 0.05 0.7 L 0.08 0.7 L 0.08 0.66 L 0.04 0.66 L 0.04 0.6 L 0.01 0.6 L 0.01 0.54 L 0.05 0.54 L 0.05 0.48 L 0.08 0.48 L 0.08 0.42 L 0.03 0.42 L 0.03 0.36 L 0.01 0.36 L 0.01 0.3 L 0.04 0.3 L 0.04 0.24 L 0.07 0.24 L 0.07 0.18 L 0.02 0.18 L 0.02 0.12 L 0.05 0.12 L 0.05 0.08 L 0.08 0.08 L 0.08 0.05 Z" />
          </clipPath>
          <clipPath id="jagged-clip-2" clipPathUnits="objectBoundingBox">
            <path d="M 0.08 0.08 L 0.14 0.08 L 0.14 0.02 L 0.2 0.02 L 0.2 0.05 L 0.26 0.05 L 0.26 0.0 L 0.32 0.0 L 0.32 0.04 L 0.38 0.04 L 0.38 0.07 L 0.44 0.07 L 0.44 0.01 L 0.5 0.01 L 0.5 0.04 L 0.6 0.04 L 0.6 0.0 L 0.66 0.0 L 0.66 0.05 L 0.72 0.05 L 0.72 0.02 L 0.78 0.02 L 0.78 0.08 L 0.84 0.08 L 0.84 0.04 L 0.9 0.04 L 0.9 0.08 L 0.94 0.08 L 0.94 0.14 L 0.97 0.14 L 0.97 0.2 L 0.99 0.2 L 0.99 0.26 L 0.93 0.26 L 0.93 0.32 L 0.98 0.32 L 0.98 0.38 L 0.94 0.38 L 0.94 0.44 L 0.99 0.44 L 0.99 0.5 L 0.93 0.5 L 0.93 0.56 L 0.98 0.56 L 0.98 0.62 L 0.95 0.62 L 0.95 0.68 L 0.99 0.68 L 0.99 0.74 L 0.93 0.74 L 0.93 0.8 L 0.97 0.8 L 0.97 0.86 L 0.92 0.86 L 0.92 0.92 L 0.86 0.92 L 0.86 0.97 L 0.8 0.97 L 0.8 0.94 L 0.74 0.94 L 0.74 0.99 L 0.68 0.99 L 0.68 0.95 L 0.62 0.95 L 0.62 0.98 L 0.56 0.98 L 0.56 0.93 L 0.5 0.93 L 0.5 0.96 L 0.44 0.96 L 0.44 1.0 L 0.38 1.0 L 0.38 0.95 L 0.32 0.95 L 0.32 0.98 L 0.26 0.98 L 0.26 0.92 L 0.2 0.92 L 0.2 0.96 L 0.14 0.96 L 0.14 0.92 L 0.08 0.92 L 0.08 0.86 L 0.04 0.86 L 0.04 0.8 L 0.01 0.8 L 0.01 0.74 L 0.05 0.74 L 0.05 0.68 L 0.02 0.68 L 0.02 0.62 L 0.05 0.62 L 0.05 0.56 L 0.08 0.56 L 0.08 0.5 L 0.03 0.5 L 0.03 0.44 L 0.06 0.44 L 0.06 0.38 L 0.01 0.38 L 0.01 0.32 L 0.04 0.32 L 0.04 0.26 L 0.08 0.26 L 0.08 0.2 L 0.03 0.2 L 0.03 0.14 L 0.06 0.14 L 0.06 0.08 Z" />
          </clipPath>
          <clipPath id="pixel-rounded-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.18 0 L 0.82 0 L 0.86 0 L 0.86 0.03 L 0.90 0.03 L 0.90 0.06 L 0.94 0.06 L 0.94 0.10 L 0.97 0.10 L 0.97 0.14 L 1 0.14 L 1 0.18 L 1 0.82 L 1 0.86 L 0.97 0.86 L 0.97 0.90 L 0.94 0.90 L 0.94 0.94 L 0.90 0.94 L 0.90 0.97 L 0.86 0.97 L 0.86 1 L 0.82 1 L 0.18 1 L 0.14 1 L 0.14 0.97 L 0.10 0.97 L 0.10 0.94 L 0.06 0.94 L 0.06 0.90 L 0.03 0.90 L 0.03 0.86 L 0 0.86 L 0 0.82 L 0 0.18 L 0 0.14 L 0.03 0.14 L 0.03 0.10 L 0.06 0.10 L 0.06 0.06 L 0.10 0.06 L 0.10 0.03 L 0.14 0.03 L 0.14 0 Z" />
          </clipPath>

        </defs>
      </svg>
    </div>
  );
};


export const App: React.FC = () => {
  const [booting, setBooting] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [selectedIconId, setSelectedIconId] = useState<string | null>(null);

  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'profile',
      title: 'Profile.lnk',
      icon: 'https://win98icons.alexmeub.com/icons/png/users-2.png',
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
      icon: 'https://alexh.github.io/vintage-icons/icons/keys_0.png',
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
      icon: 'https://alexh.github.io/vintage-icons/icons/write_file_1.png',
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
      icon: 'https://alexh.github.io/vintage-icons/icons/help_book_cool_1.png',
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
      icon: 'https://alexh.github.io/vintage-icons/icons/tools_gear_0.png',
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
      icon: 'https://win98icons.alexmeub.com/icons/png/console_prompt-0.png',
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
      icon: 'https://alexh.github.io/vintage-icons/icons/joystick_3.png',
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
      icon: 'https://alexh.github.io/vintage-icons/icons/message_envelope_open_0.png',
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

  const handleBootComplete = useCallback(() => setBooting(false), []);

  if (booting) {
    return <BootSequence onComplete={handleBootComplete} />;
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
            color: 'var(--accent-cyan)',
            textAlign: 'center',
            borderBottom: '1px solid var(--border-mid-dark)',
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
                <img className="mobile-shortcut-tile-icon" src={win.icon} alt="" style={{ width: '35px', height: '35px', objectFit: 'contain' }} />
                <span className="mobile-shortcut-tile-label">{win.title}</span>
              </div>
            ))}
          </div>

          {/* Marquee Ticker along bottom of grid area */}
          <div style={{ marginTop: '8px' }}>
            <marquee scrollamount="3">
              🖥️ STEVEN CHHAY PORTFOLIO - EXPERIENCE IN FLUID MECHANICS, FULL-STACK SOFTWARE ENGINEERING & GAME DEVELOPMENT - WELCOME TO THE CONSOLE!
            </marquee>
          </div>
        </div>

        {/* Full-Screen Window Overlay */}
        {openWindowData && (
          <div className="mobile-window-overlay">
            {/* Overlay Header */}
            <div className="mobile-window-header">
              <div className="mobile-window-title">
                <img src={openWindowData.icon} alt="" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
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
              <span style={{ color: 'var(--accent-cyan)' }}>ACTIVE_CHANNEL</span>
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
            icon={win.icon}
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
                fontSize: '13px',
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
                    (e.target as HTMLElement).style.backgroundColor = 'var(--border-mid-light)';
                    (e.target as HTMLElement).style.color = 'var(--accent-cyan)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = 'var(--text-primary)';
                  }}
                >
                  <img src={win.icon} alt="" style={{ width: '16px', height: '16px', objectFit: 'contain' }} /> {win.title}
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
                  fontFamily: 'var(--font-system)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <img src={win.icon} alt="" style={{ width: '16px', height: '16px', objectFit: 'contain' }} /> {win.title}
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
            color: 'var(--accent-cyan)'
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
