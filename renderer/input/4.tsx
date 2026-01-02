import React from 'react';
import { useCurrentFrame, interpolate, AbsoluteFill } from 'remotion';

export const compositionConfig = {
  id: 'GoogleLensScene',
  durationInSeconds: 4,
  fps: 30,
  width: 1920,
  height: 1080,
};

const GoogleLensScene: React.FC = () => {
  const frame = useCurrentFrame();
  const loadingOpacity = interpolate(frame, [0, 30], [1, 0]);
  const resultsOpacity = interpolate(frame, [30, 45], [0, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#202124', color: '#e8eaed', fontFamily: 'Roboto, Arial, sans-serif' }}>
      <div style={{ height: '80px', borderBottom: '1px solid #5f6368', display: 'flex', alignItems: 'center', padding: '0 30px' }}>
        <span style={{ fontSize: '28px', fontWeight: 'bold' }}>Google</span>
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flex: 1, padding: '40px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '80%', height: '60%', border: '2px dashed #5f6368', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                   {loadingOpacity > 0 ? (
                       <div style={{ textAlign: 'center', opacity: loadingOpacity }}>
                           <div style={{ fontSize: '40px', marginBottom: '20px' }}>⬇️</div>
                           <div>Şəkil yüklənir...</div>
                       </div>
                   ) : (
                       <div style={{ width: '100%', height: '100%', backgroundColor: '#87CEEB', borderRadius: '8px' }}>
                           <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'white', color: 'black', padding: '5px', borderRadius: '20px' }}>🔍</div>
                       </div>
                   )}
              </div>
          </div>
          <div style={{ flex: 1, borderLeft: '1px solid #5f6368', padding: '40px', opacity: resultsOpacity }}>
               <div style={{ fontSize: '24px', marginBottom: '30px' }}>Vizual uyğunluqlar:</div>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                   {[1, 2, 3, 4].map((i) => (
                       <div key={i} style={{ marginBottom: '20px' }}>
                           <div style={{ width: '100%', height: '150px', backgroundColor: '#3c4043', borderRadius: '10px', marginBottom: '10px' }} />
                           <div style={{ fontSize: '14px', color: '#9aa0a6' }}>moscow-views.ru</div>
                           <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#8ab4f8' }}>Moskva, Rusiya mənzərəsi...</div>
                       </div>
                   ))}
               </div>
          </div>
      </div>
      <div style={{ position: 'absolute', bottom: '100px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'black', fontSize: '32px', padding: '5px 10px' }}>
          bu faydasız olmayacaq
      </div>
    </AbsoluteFill>
  );
};

export default GoogleLensScene;
