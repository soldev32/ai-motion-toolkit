import React, { useMemo } from 'react';
import { useCurrentFrame, useVideoConfig, interpolate, Easing, AbsoluteFill, random } from 'remotion';

// =============================================================================
// KONFİQURASİYA
// =============================================================================
export const compositionConfig = {
  id: 'DisclaimerScene',
  durationInSeconds: 10,
  fps: 30,
  width: 1920,
  height: 1080,
};

// =============================================================================
// KÖMƏKÇİ: GLITCH MƏTN KOMPONENTİ
// =============================================================================
const GlitchText: React.FC<{ text: string; fontSize: number; fontWeight: string; color: string; frame: number }> = ({ text, fontSize, fontWeight, color, frame }) => {
  const isGlitch = random(frame) > 0.85;
  const offset1 = isGlitch ? (random(frame + 1) - 0.5) * 10 : 0;
  const offset2 = isGlitch ? (random(frame + 2) - 0.5) * 10 : 0;

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Red Channel */}
      <div style={{
        position: 'absolute', top: 0, left: `${offset1}px`,
        fontSize: `${fontSize}px`, fontWeight: fontWeight as any, color: 'red',
        opacity: isGlitch ? 0.7 : 0, mixBlendMode: 'screen',
        clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
        transform: `translateX(-2px)`
      }}>
        {text}
      </div>
      {/* Cyan Channel */}
      <div style={{
        position: 'absolute', top: 0, left: `${-offset1}px`,
        fontSize: `${fontSize}px`, fontWeight: fontWeight as any, color: 'cyan',
        opacity: isGlitch ? 0.7 : 0, mixBlendMode: 'screen',
        clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
        transform: `translateX(2px)`
      }}>
        {text}
      </div>
      {/* Main Text */}
      <div style={{
        position: 'relative',
        fontSize: `${fontSize}px`, fontWeight: fontWeight as any, color: color,
        textShadow: isGlitch ? '2px 0 10px rgba(255,0,0,0.5), -2px 0 10px rgba(0,255,255,0.5)' : '0 0 20px rgba(255,255,255,0.1)'
      }}>
        {text}
      </div>
    </div>
  );
};

// =============================================================================
// KÖMƏKÇİ: ARXA PLAN (POINT CLOUD SIMULATION)
// =============================================================================
const BackgroundParticles: React.FC<{ frame: number }> = ({ frame }) => {
    // Generate static particles once
    const particles = useMemo(() => {
        return Array.from({ length: 300 }).map((_, i) => ({
            x: random(i) * 100,
            y: random(i + 1) * 100,
            z: random(i + 2) * 2 + 1, // Depth scale
            size: random(i + 3) * 3 + 1,
            color: i % 5 === 0 ? '#444' : '#222' // Dark tech colors
        }));
    }, []);

    // Camera movement simulation
    const moveX = interpolate(frame, [0, 300], [0, -20]); 
    
    return (
        <AbsoluteFill style={{ backgroundColor: '#000' }}>
            {particles.map((p, i) => {
                const parallaxX = p.x + moveX * p.z * 0.1;
                // Loop particles
                const displayX = (parallaxX % 100 + 100) % 100;
                
                return (
                    <div key={i} style={{
                        position: 'absolute',
                        left: `${displayX}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        backgroundColor: p.color,
                        borderRadius: '50%',
                        opacity: 0.6,
                        boxShadow: `0 0 ${p.size * 2}px ${p.color}`
                    }} />
                );
            })}
            {/* Dark Vignette Overlay */}
            <AbsoluteFill style={{
                background: 'radial-gradient(circle, transparent 40%, #000 100%)'
            }} />
        </AbsoluteFill>
    );
};

// =============================================================================
// ƏSAS KOMPONENT
// =============================================================================
const DisclaimerScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Text Animation (Fade In + Glitch)
  const titleOpacity = interpolate(frame, [0, 30], [0, 1]);
  const textOpacity = interpolate(frame, [30, 60], [0, 1]);

  // 2. Global Glitch/Distortion (The "shaking" effect)
  const shake = random(frame) > 0.9 ? `translate(${random(frame)*4 - 2}px, ${random(frame+1)*4 - 2}px)` : 'none';
  const chromaticAb = random(frame) > 0.95 ? '2px' : '0px';

  return (
    <AbsoluteFill style={{ backgroundColor: 'black', overflow: 'hidden' }}>
      
      {/* ARXA PLAN: Point Cloud & Noise */}
      <BackgroundParticles frame={frame} />
      
      {/* Noise Overlay (Static TV effect) */}
      <AbsoluteFill style={{
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: `translate(${random(frame)*10}px, ${random(frame+1)*10}px)`
      }} />

      {/* CONTENT CONTAINER */}
      <AbsoluteFill style={{ 
          display: 'flex', flexDirection: 'column', 
          justifyContent: 'center', alignItems: 'center',
          textAlign: 'center',
          transform: shake, // Global Shake
          filter: `blur(${random(frame) > 0.98 ? 2 : 0}px)` // Occasional blur
      }}>
        
        {/* TITLE: XƏBƏRDARLIQ (DISCLAIMER) */}
        <div style={{ opacity: titleOpacity, marginBottom: '40px', letterSpacing: '10px' }}>
             <GlitchText 
                text="XƏBƏRDARLIQ" 
                fontSize={120} 
                fontWeight="bold" 
                color="#FFFFFF" 
                frame={frame} 
             />
        </div>

        {/* BODY TEXT */}
        <div style={{ 
            opacity: textOpacity, 
            width: '70%', 
            fontFamily: '"Courier New", Courier, monospace', 
            fontSize: '32px', 
            lineHeight: '1.5',
            color: '#DDDDDD',
            textShadow: `${chromaticAb} 0 0 red, -${chromaticAb} 0 0 cyan`
        }}>
            Açıq mənbələrdən məlumat toplamaq qanuni olsa da, bu məlumatlardan <span style={{color:'#FF4444'}}>zərərli niyyətlə</span> istifadə etmək ciddi hüquqi nəticələrə səbəb ola bilər.
            <br/><br/>
            Bu videoda müzakirə olunan məlumatların <span style={{color:'#FF4444'}}>qeyri-etik fəaliyyətlər</span> üçün istifadəsini qətiyyətlə pisləyirəm.
        </div>

      </AbsoluteFill>

      {/* FILM GRAIN / SCANLINES OVERLAY */}
      <AbsoluteFill style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))',
          backgroundSize: '100% 4px',
          pointerEvents: 'none',
          opacity: 0.3
      }} />
      
      {/* VIGNETTE */}
      <AbsoluteFill style={{
          background: 'radial-gradient(circle, transparent 60%, black 100%)',
          pointerEvents: 'none'
      }} />

    </AbsoluteFill>
  );
};

export default DisclaimerScene;
