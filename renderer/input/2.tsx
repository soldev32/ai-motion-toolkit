import React from 'react';
import { useCurrentFrame, interpolate, AbsoluteFill } from 'remotion';

export const compositionConfig = {
  id: 'OpenSourceText',
  durationInSeconds: 3,
  fps: 30,
  width: 1920,
  height: 1080,
};

const OpenSourceText: React.FC = () => {
  const frame = useCurrentFrame();
  const text = "<open source intelligence>";
  const chars = Math.floor(interpolate(frame, [0, 40], [0, text.length], { extrapolateRight: 'clamp' }));
  
  return (
    <AbsoluteFill style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
          fontFamily: '"Courier New", monospace',
          fontSize: '100px',
          color: '#00FF00',
          fontWeight: 'bold'
      }}>
          {text.slice(0, chars)}
          <span style={{ opacity: frame % 20 < 10 ? 1 : 0 }}>_</span>
      </div>
    </AbsoluteFill>
  );
};

export default OpenSourceText;
