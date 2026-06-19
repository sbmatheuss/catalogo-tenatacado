import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  if (!slides.length) return null;

  const activeSlide = slides[current];

  return (
    <div className="totem-root" style={{ '--accent': activeSlide.accent } as React.CSSProperties}>
      <div className="totem-progress-track">
        <div
          className="totem-progress-fill"
          style={{ width: `${progress * 100}%`, transition: 'none', background: activeSlide.accent }}
        />
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: autoAdvanceMs, disableOnInteraction: false }}
        loop={slides.length > 1}
        speed={600}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex ?? swiper.activeIndex;
          setCurrent(realIndex % slides.length);
        }}
        onAutoplayTimeLeft={(_swiper: SwiperType, _timeLeft: number, percentage: number) => {
          setProgress(1 - percentage);
        }}
        style={{ width: '100%', height: '100%' }}
        allowTouchMove={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} style={{ background: slide.background }}>
            <div className="totem-slide">
              {slide.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="totem-arrow totem-arrow--left totem-arrow--visible"
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Slide anterior"
      >
        &#8249;
      </button>
      <button
        className="totem-arrow totem-arrow--right totem-arrow--visible"
        onClick={() => swiperRef.current?.slideNext()}
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
            onClick={() => {
              swiperRef.current?.slideToLoop(i);
              setCurrent(i);
            }}
            aria-label={`Ir para ${slide.label}`}
          >
            <span className="totem-indicator-label">{slide.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
