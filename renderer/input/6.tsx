import React from 'react';
import { useCurrentFrame, useVideoConfig, interpolate, Easing, AbsoluteFill, Sequence } from 'remotion';

// =============================================================================
// KONFİQURASİYA
// =============================================================================
export const compositionConfig = {
  id: 'FullVideo',
  durationInSeconds: 25, // Bütün səhnələrin cəmi
  fps: 30,
  width: 1920,
  height: 1080,
};

// =============================================================================
// SƏHNƏ 1: INSTAGRAM PROFİLİ (GİRİŞ)
// =============================================================================
const Scene1_Profile: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const scale = interpolate(frame, [0, 30], [0.8, 1], { easing: Easing.out(Easing.back(1.5)) });

  return (
    <AbsoluteFill style={{ backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Background Lines */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.3 }}>
         {Array.from({ length: 12 }).map((_, i) => (
             <div key={i} style={{
                 position: 'absolute', top: '50%', left: '50%', width: '150%', height: '2px',
                 backgroundColor: '#333',
                 transform: `translate(-50%, -50%) rotate(${i * 30}deg)`
             }} />
         ))}
      </div>
      
      {/* Profile Card */}
      <div style={{
          width: '500px', backgroundColor: 'black', border: '2px solid #333', borderRadius: '15px', padding: '30px', color: 'white', fontFamily: 'sans-serif',
          opacity, transform: `scale(${scale})`
      }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#333', marginRight: '20px' }} />
              <div>
                  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>ellamartinez.9</div>
                  <div style={{ color: '#aaa' }}>Ella Martinez</div>
              </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px', textAlign: 'center' }}>
              <div><b>7</b><br/>Posts</div>
              <div><b>87</b><br/>Followers</div>
              <div><b>19</b><br/>Following</div>
          </div>
          <div style={{ backgroundColor: '#0095f6', padding: '10px', borderRadius: '5px', textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>
              Follow Back
          </div>
          <div style={{ borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>This account is private</div>
              <div style={{ color: '#aaa', fontSize: '14px' }}>Follow to see photos.</div>
          </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// SƏHNƏ 2: OPEN SOURCE TEXT
// =============================================================================
const Scene2_Text: React.FC = () => {
  const frame = useCurrentFrame();
  const text = "<open source intelligence>";
  const chars = Math.floor(interpolate(frame, [0, 30], [0, text.length]));

  return (
    <AbsoluteFill style={{ backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontFamily: 'monospace', fontSize: '80px', color: '#00FF00', fontWeight: 'bold' }}>
          {text.slice(0, chars)}<span style={{ opacity: frame % 10 < 5 ? 1 : 0 }}>_</span>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// SƏHNƏ 3: CCTV LENS
// =============================================================================
const Scene3_CCTV: React.FC = () => {
    const frame = useCurrentFrame();
    const light = Math.sin(frame / 5) * 0.5 + 0.5;

    return (
        <AbsoluteFill style={{ backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
                width: '600px', height: '600px', borderRadius: '50%',
                background: 'radial-gradient(circle, #000 30%, #222 60%, #111 100%)',
                boxShadow: 'inset 0 0 50px black', position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <div style={{ width: '200px', height: '200px', backgroundColor: 'black', borderRadius: '50%' }} />
                <div style={{
                    position: 'absolute', bottom: '120px', width: '20px', height: '20px',
                    backgroundColor: 'red', borderRadius: '50%', boxShadow: `0 0 15px red`, opacity: light
                }} />
            </div>
            <div style={{ position: 'absolute', bottom: '100px', color: 'white', fontSize: '30px', fontFamily: 'sans-serif', backgroundColor: 'black', padding: '5px' }}>
                bu hakerlərin istifadə etdiyi texnikadır
            </div>
        </AbsoluteFill>
    );
};

// =============================================================================
// SƏHNƏ 4: DETEKTİV MASASI (Simulyasiya)
// =============================================================================
const Scene4_Desk: React.FC = () => {
    // Bu səhnə real footage olduğu üçün sadəcə yer tutucu
    return (
        <AbsoluteFill style={{ backgroundColor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: '100px' }}>🕵️‍♂️📁</div>
            <div style={{ position: 'absolute', bottom: '100px', fontSize: '40px', color: 'black', backgroundColor: 'white' }}>
                Bəs bu necə edilir?
            </div>
        </AbsoluteFill>
    );
};

// =============================================================================
// SƏHNƏ 5: EXAMPLE (Data Fonu)
// =============================================================================
const Scene5_Example: React.FC = () => {
    return (
        <AbsoluteFill style={{ backgroundColor: '#e0e0e0', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(20, 1fr)', opacity: 0.3 }}>
                {Array.from({ length: 400 }).map((_, i) => (
                    <div key={i} style={{ padding: '10px', fontSize: '10px', color: '#555' }}>DATA</div>
                ))}
            </div>
            <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ fontSize: '300px', color: '#FF00FF', mixBlendMode: 'multiply', margin: 0, fontWeight: '900' }}>
                    NÜMUNƏ
                </h1>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};

// =============================================================================
// SƏHNƏ 6: WINDOW PHOTO
// =============================================================================
const Scene6_Photo: React.FC = () => {
    const frame = useCurrentFrame();
    const y = interpolate(frame, [0, 20], [100, 0], { extrapolateRight: 'clamp' });
    
    return (
        <AbsoluteFill style={{ backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ 
                width: '500px', height: '800px', backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden',
                transform: `translateY(${y}px)`
            }}>
                <div style={{ height: '60px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', padding: '0 15px' }}>
                    <b>samwilson</b>
                </div>
                <div style={{ width: '100%', height: '500px', background: 'linear-gradient(to bottom, #87CEEB, #8B4513)' }} />
                <div style={{ padding: '15px' }}>
                    <b>58 likes</b><br/>
                    <b>samwilson</b> Had a great time!!
                </div>
            </div>
            <div style={{ position: 'absolute', bottom: '50px', color: 'white', fontSize: '30px', backgroundColor: 'black' }}>
                Tutaq ki, bu şəklə rast gəldiniz
            </div>
        </AbsoluteFill>
    );
};

// =============================================================================
// SƏHNƏ 7: CROP & ZOOM
// =============================================================================
const Scene7_Crop: React.FC = () => {
    const frame = useCurrentFrame();
    const scale = interpolate(frame, [10, 50], [1, 2]);
    
    return (
        <AbsoluteFill style={{ backgroundColor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ transform: `scale(${scale})`, border: '2px solid white' }}>
                 <div style={{ width: '600px', height: '400px', background: 'linear-gradient(to bottom, #87CEEB, #8B4513)' }}>
                     {/* Window Frames */}
                     <div style={{ position: 'absolute', left: '33%', height: '100%', width: '20px', backgroundColor: '#333' }} />
                     <div style={{ position: 'absolute', left: '66%', height: '100%', width: '20px', backgroundColor: '#333' }} />
                 </div>
            </div>
            <div style={{ position: 'absolute', bottom: '50px', color: 'white', fontSize: '30px', backgroundColor: 'black' }}>
                Amma şəkli kəssək...
            </div>
        </AbsoluteFill>
    );
};

// =============================================================================
// ƏSAS KOMPONENT (Timeline)
// =============================================================================
const FullVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      <Sequence from={0} durationInFrames={120}>
        <Scene1_Profile />
      </Sequence>
      <Sequence from={120} durationInFrames={90}>
        <Scene2_Text />
      </Sequence>
      <Sequence from={210} durationInFrames={120}>
        <Scene3_CCTV />
      </Sequence>
      <Sequence from={330} durationInFrames={90}>
        <Scene4_Desk />
      </Sequence>
      <Sequence from={420} durationInFrames={90}>
        <Scene5_Example />
      </Sequence>
      <Sequence from={510} durationInFrames={120}>
        <Scene6_Photo />
      </Sequence>
      <Sequence from={630} durationInFrames={120}>
        <Scene7_Crop />
      </Sequence>
    </AbsoluteFill>
  );
};

export default FullVideo;
