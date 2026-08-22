import React, { useRef, useState, useEffect } from 'react';

interface Y2KMediaPlayerProps {
  src?: string;
  youtubeId?: string;
  title?: string;
  aspectRatio?: string;
}

export const Y2KMediaPlayer: React.FC<Y2KMediaPlayerProps> = ({ src, youtubeId, title = "Y2K Media Player", aspectRatio }) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const seekBarRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    } else if (youtubeId) {
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    } else if (youtubeId) {
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && seekBarRef.current && duration) {
      const rect = seekBarRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (playerRef.current) {
        if (playerRef.current.requestFullscreen) {
          playerRef.current.requestFullscreen();
        }
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === playerRef.current);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Mock progress simulation for YouTube embeds
  useEffect(() => {
    let interval: any;
    if (youtubeId && isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, youtubeId]);

  const progressPercent = youtubeId
    ? currentTime
    : duration > 0 ? (currentTime / duration) * 100 : 0;

  const embedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=${isPlaying ? 1 : 0}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1`
    : '';

  // Parse aspect ratio value
  let aspectVal = 1.777; // Default 16/9
  if (aspectRatio) {
    const parts = aspectRatio.split('/');
    if (parts.length === 2) {
      const num = parseFloat(parts[0]);
      const den = parseFloat(parts[1]);
      if (!isNaN(num) && !isNaN(den) && den !== 0) {
        aspectVal = num / den;
      }
    }
  }

  return (
    <div
      ref={playerRef}
      className="y2k-player bevel-out"
      style={{
        padding: '4px',
        backgroundColor: 'var(--bg-window)',
        width: '100%',
        fontFamily: 'var(--font-system)',
        boxSizing: 'border-box',
        // Inject --aspect-ratio for CSS math
        ...({ '--aspect-ratio': aspectVal } as React.CSSProperties)
      }}
    >
      {/* Title bar of the player */}
      <div style={{ backgroundColor: 'var(--bg-window)', color: 'var(--text-primary)', padding: '2px 6px', display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px', borderBottom: '1px solid var(--border-dark)' }}>
        <span>{title}</span>
        <span style={{ cursor: 'pointer' }} onClick={handleStop}>X</span>
      </div>

      {/* Viewport Frame with adaptive aspect-ratio */}
      <div
        className="bevel-in y2k-media-inner-viewport"
        style={{
          backgroundColor: '#000',
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: aspectRatio || '16/9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'aspect-ratio 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        {youtubeId ? (
          <iframe
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        ) : src ? (
          <video
            ref={videoRef}
            src={src}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            onDurationChange={(e) => setDuration(e.currentTarget.duration)}
            onEnded={() => setIsPlaying(false)}
          />
        ) : (
          <div style={{ color: '#666', fontSize: '14px' }}>NO MEDIA DETECTED</div>
        )}
      </div>

      {/* Control Rail */}
      <div style={{ marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {/* Custom Segmented Seek Bar */}
        <div
          ref={seekBarRef}
          onClick={handleSeek}
          className="bevel-in"
          style={{ height: '14px', backgroundColor: 'var(--bg-window)', position: 'relative', overflow: 'hidden', display: 'flex', padding: '1px', cursor: 'pointer' }}
        >
          <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--accent-cyan)', display: 'flex', gap: '2px' }}>
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} style={{ width: '3px', height: '100%', backgroundColor: 'var(--bg-window)' }} />
            ))}
          </div>
        </div>

        {/* Buttons and utilities */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 0' }}>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <button
              className="button-retro"
              style={{ fontSize: '11px', padding: '2px 6px', height: '22px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}
              onClick={handlePlayPause}
            >
              {isPlaying ? '[⏸]' : '[▶]'}
            </button>
            <button className="button-retro" style={{ fontSize: '11px', padding: '2px 6px', height: '22px' }} onClick={handleStop}>
              [■]
            </button>
            <button
              className="button-retro"
              style={{ fontSize: '11px', padding: '2px 6px', height: '22px' }}
              onClick={handleFullscreen}
              title={isFullscreen ? "Exit Full Screen" : "Full Screen"}
            >
              {isFullscreen ? '[⛶]' : '[⛶]'}
            </button>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--accent-cyan)', fontFamily: 'var(--font-system)', letterSpacing: '1px' }}>
            {isPlaying ? '▶ PLAYING' : '⏸ PAUSED'}
          </div>
        </div>
      </div>
    </div>
  );
};
