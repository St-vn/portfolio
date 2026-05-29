import React from 'react';

interface DesktopIconProps {
  label: string;
  icon: string;
  isSelected: boolean;
  onSelect: () => void;
  onOpen: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ label, icon, isSelected, onSelect, onOpen }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation(); // Avoid deselection when clicking desktop workspace canvas
        onSelect();
      }}
      onDoubleClick={onOpen}
      style={{
        width: '160px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 6px',
        cursor: 'pointer',
        border: isSelected ? '1px dashed var(--accent-green)' : '1px solid transparent',
        backgroundColor: isSelected ? 'rgba(0, 255, 102, 0.05)' : 'transparent',
        transition: 'background-color 0.1s'
      }}
      className="desktop-icon-node"
    >
      <div style={{
        fontSize: '52px',
        filter: isSelected ? 'drop-shadow(0px 0px 6px var(--accent-green))' : 'none'
      }}>
        {icon}
      </div>
      <span style={{
        fontSize: '13px',
        color: isSelected ? 'var(--accent-green)' : 'var(--text-primary)',
        textAlign: 'center',
        wordBreak: 'normal',
        overflowWrap: 'break-word',
        fontFamily: 'var(--font-system)',
        letterSpacing: '0.5px',
        textShadow: '1px 1px 2px #000'
      }}>
        {label}
      </span>
    </div>
  );
};
