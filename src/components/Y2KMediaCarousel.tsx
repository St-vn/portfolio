import React, { useState } from 'react';
import { Y2KMediaPlayer } from './Y2KMediaPlayer';
import { Y2KImageViewer } from './Y2KImageViewer';

export interface CarouselMediaItem {
  type: 'video' | 'youtube' | 'image';
  src?: string;
  youtubeId?: string;
  alt?: string;
  title?: string;
  aspectRatio?: string; // e.g. '16/9', '4/5', '1/1'
  fileFormat?: string;
  dimensions?: string;
}

interface Y2KMediaCarouselProps {
  media: CarouselMediaItem[];
}

export const Y2KMediaCarousel: React.FC<Y2KMediaCarouselProps> = ({ media }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!media || media.length === 0) {
    return (
      <div className="bevel-in" style={{ padding: '12px', color: '#666', fontSize: '13px', textAlign: 'center' }}>
        NO MEDIA FILES AVAILABLE
      </div>
    );
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const currentItem = media[activeIndex];
  const aspect = currentItem.aspectRatio || (currentItem.type === 'image' ? '4/3' : '16/9');

  return (
    <div className="y2k-carousel-card-anchor">
      {/* Viewport container letting inner components render their aspect ratio natively without overflow clip */}
      <div className="y2k-media-carousel-viewport" style={{ width: '100%' }}>
        {currentItem.type === 'youtube' && (
          <Y2KMediaPlayer 
            key={`yt-${activeIndex}`}
            youtubeId={currentItem.youtubeId} 
            title={currentItem.title || "YouTube Broadcast"} 
            aspectRatio={aspect}
          />
        )}
        {currentItem.type === 'video' && currentItem.src && (
          <Y2KMediaPlayer 
            key={`vid-${activeIndex}`}
            src={currentItem.src} 
            title={currentItem.title || "Video Broadcast"} 
            aspectRatio={aspect}
          />
        )}
        {currentItem.type === 'image' && currentItem.src && (
          <Y2KImageViewer 
            key={`img-${activeIndex}`}
            src={currentItem.src} 
            alt={currentItem.alt || "Carousel Asset"} 
            fileFormat={currentItem.fileFormat || "WebP"}
            dimensions={currentItem.dimensions || "1024 x 768"}
            aspectRatio={aspect}
          />
        )}
      </div>

      {/* Controller Rail */}
      <div 
        style={{ 
          marginTop: '8px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '4px 6px',
          borderTop: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-window)',
          fontFamily: 'var(--font-system)'
        }}
      >
        <div style={{ display: 'flex', gap: '6px' }}>
          <button 
            className="button-retro" 
            style={{ fontSize: '12px', padding: '2px 8px', height: '24px', minWidth: '32px', justifyContent: 'center' }} 
            onClick={handlePrev}
            title="Previous Asset"
          >
            [ &lt; ]
          </button>
          <button 
            className="button-retro" 
            style={{ fontSize: '12px', padding: '2px 8px', height: '24px', minWidth: '32px', justifyContent: 'center' }} 
            onClick={handleNext}
            title="Next Asset"
          >
            [ &gt; ]
          </button>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--accent-amber)', letterSpacing: '1px', fontWeight: 'bold' }}>
          FILE: {activeIndex + 1} // TOTAL: {media.length}
        </div>
      </div>
    </div>
  );
};
export default Y2KMediaCarousel;
