import React from 'react';
import { useCurrentFrame, AbsoluteFill } from 'remotion';

export const compositionConfig = {
  id: 'CctvLens',
  durationInSeconds: 4,
  fps: 30,
  width: 1920,
  height: 1080,
};

const CctvLens: React.FC = () => {
    const frame = useCurrentFrame();
    const lightOpacity = Math.sin(frame / 5) * 0.5 + 0.5;

    return (
        <AbsoluteFill style={{ backgroundColor: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
                width: '600px', height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #000 30%, #1a1a1a 60%, #050505 70%)',
                border: '2px solid #222',
                boxShadow: 'inset 0 0 100px black',
                position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                {Array.from({length: 16}).map((_, i) => (
                     <div key={i} style={{
                         position: 'absolute',
                         width: '15px', height: '15px',
                         backgroundColor: '#333',
                         borderRadius: '50%',
                         transform: `rotate(${i * 22.5}deg) translate(180px)`
                     }} />
                ))}
                <div style={{ width: '200px', height: '200px', backgroundColor: 'black', borderRadius: '50%', boxShadow: 'inset 0 0 20px #111' }} />
                <div style={{
                    position: 'absolute',
                    bottom: '120px',
                    width: '20px', height: '20px',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    boxShadow: `0 0 15px red`,
                    opacity: lightOpacity
                }} />
            </div>
            <div style={{ position: 'absolute', bottom: '100px', backgroundColor: 'black', color: 'white', fontSize: '32px', padding: '5px 10px' }}>
                bu hakerlərin istifadə etdiyi texnikadır
            </div>
        </AbsoluteFill>
    );
};

export default CctvLens;
