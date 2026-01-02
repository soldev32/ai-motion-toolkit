import React from 'react';
import { useCurrentFrame, interpolate, AbsoluteFill, Easing } from 'remotion';

export const compositionConfig = {
  id: 'CropInterface',
  durationInSeconds: 4,
  fps: 30,
  width: 1920,
  height: 1080,
};

const CropInterface: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [20, 60], [1, 1.5], { easing: Easing.inOut(Easing.ease), extrapolateRight: 'clamp' });
  const yPos = interpolate(frame, [20, 60], [0, 100], { easing: Easing.inOut(Easing.ease), extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: '#1e1e1e', color: 'white', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ height: '40px', backgroundColor: 'black', display: 'flex', alignItems: 'center', padding: '0 15px', fontSize: '14px' }}>
          <span>FOTO_GORUNTULEYICI.exe</span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '15px' }}><span>—</span><span>☐</span><span>✕</span></div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ 
              transform: `scale(${scale}) translateY(${yPos}px)`,
              position: 'relative',
              boxShadow: '0 0 50px rgba(0,0,0,0.5)'
          }}>
              <div style={{ width: '800px', height: '600px', background: 'linear-gradient(to bottom, #87CEEB 50%, #8B4513 50%)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '20%', left: '30%', width: '40%', height: '60%', border: '2px solid white', boxShadow: '0 0 0 9999px rgba(0,0,0,0.7)' }}>
                      <div style={{ position: 'absolute', top: '33%', width: '100%', height: '1px', background: 'rgba(255,255,255,0.5)' }} />
                      <div style={{ position: 'absolute', top: '66%', width: '100%', height: '1px', background: 'rgba(255,255,255,0.5)' }} />
                      <div style={{ position: 'absolute', left: '33%', height: '100%', width: '1px', background: 'rgba(255,255,255,0.5)' }} />
                      <div style={{ position: 'absolute', left: '66%', height: '100%', width: '1px', background: 'rgba(255,255,255,0.5)' }} />
                  </div>
              </div>
          </div>
          <div style={{ position: 'absolute', bottom: '100px', backgroundColor: 'black', fontSize: '32px', padding: '5px 10px' }}>
              Amma şəkli kəssək
          </div>
      </div>
    </AbsoluteFill>
  );
};

export default CropInterface;
