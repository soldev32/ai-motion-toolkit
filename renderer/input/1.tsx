import React from 'react';
import { useCurrentFrame, useVideoConfig, AbsoluteFill } from 'remotion';

export const compositionConfig = {
  id: 'ExampleScene',
  durationInSeconds: 4,
  fps: 30,
  width: 1920,
  height: 1080,
};

const ExampleScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#d0d0d0', overflow: 'hidden', fontFamily: 'Arial, sans-serif' }}>
      {/* Fake Chart/Data Background */}
      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(20, 1fr)',
          width: '100%', height: '100%',
          opacity: 0.4
      }}>
          {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} style={{ 
                  borderRight: '1px solid #aaa', 
                  borderBottom: '1px solid #aaa', 
                  position: 'relative',
                  display: 'flex', alignItems: 'center', paddingLeft: '5px'
              }}>
                  <div style={{ fontSize: '10px', color: '#555' }}>
                      {['TWTR', 'GOOG', 'AMZN', 'MSFT', 'TSLA'][i % 5]}
                  </div>
                  {i % 7 === 0 && (
                      <div style={{
                          position: 'absolute', right: '10px',
                          width: '8px', height: '8px', borderRadius: '50%',
                          backgroundColor: i % 2 === 0 ? '#00cc88' : '#cc3333'
                      }} />
                  )}
              </div>
          ))}
      </div>

      {/* TEXT */}
      <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{
              fontSize: '350px',
              fontWeight: '900',
              color: '#FF00FF',
              margin: 0,
              letterSpacing: '-10px',
              mixBlendMode: 'multiply',
              transform: 'scaleY(0.9)'
          }}>
              NÜMUNƏ
          </h1>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default ExampleScene;
