import { useState, useEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import './TotemDisplay.css';

export interface TotemSlide {
  id: string;
  label: string;
  accent: string;
  background: string;
  content: ReactNode;
}

interface TotemDisplayProps {
  slides: TotemSlide[];
  autoAdvanceMs?: number;
}

export function TotemDisplay({ slides, autoAdvanceMs = 8000 }: TotemDisplayProps) {
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const clamped = (index + slides.length) % slides.length;
      setCurrent(clamped);
      setProgressKey((k) => k + 1);
    },
    [slides.length]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (slides.length <= 1) return;
    timerRef.current = setTimeout(() => goTo(current + 1), autoAdvanceMs);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, autoAdvanceMs, slides.length, goTo]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) >= 50) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  if (!slides.length) return null;

  const activeSlide = slides[current];

  return (
    <div
      className="totem-root"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="totem-progress-track">
        <div
          key={progressKey}
          className="totem-progress-fill"
          style={{ '--duration': `${autoAdvanceMs}ms`, '--accent': activeSlide.accent } as React.CSSProperties}
        />
      </div>

      <div className="totem-strip" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="totem-slide" style={{ background: slide.background }}>
            {slide.content}
          </div>
        ))}
      </div>

      <button
        className={`totem-arrow totem-arrow--left${isHovered ? ' totem-arrow--visible' : ''}`}
        onClick={prev}
        aria-label="Slide anterior"
      >
        &#8249;
      </button>

      <button
        className={`totem-arrow totem-arrow--right${isHovered ? ' totem-arrow--visible' : ''}`}
        onClick={next}
        aria-label="Próximo slide"
      >
        &#8250;
      </button>

      <div className="totem-indicators">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            className={`totem-indicator${i === current ? ' totem-indicator--active' : ''}`}
            style={i === current ? ({ '--accent': activeSlide.accent } as React.CSSProperties) : undefined}
            onClick={() => goTo(i)}
            aria-label={`Ir para ${slide.label}`}
          >
            <span className="totem-indicator-label">{slide.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
