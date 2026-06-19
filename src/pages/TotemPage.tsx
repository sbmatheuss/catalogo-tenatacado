import './TotemPage.css';
import { TotemDisplay, SlideCategoria } from '../components/Totem';
import type { TotemSlide } from '../components/Totem';
import { MansaoMaromba } from '../components/Totem/MansaoMaromba';
import { beers, energyDrinks } from '../data/products';
import { iceProducts } from '../data/ice';
import { refrigerantes } from '../data/refrigerantes';
import { aguas } from '../data/agua';
import { skolBeats } from '../data/skolBeats';

interface TotemPageProps {
  onExit: () => void;
}

export function TotemPage({ onExit }: TotemPageProps) {
  const slides: TotemSlide[] = [
    {
      id: 'cervejas',
      label: 'Cervejas',
      accent: '#C9A962',
      background: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%)',
      content: (
        <SlideCategoria
          label="Cervejas"
          products={beers}
          accent="#C9A962"
          background="linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%)"
        />
      ),
    },
    {
      id: 'ice',
      label: 'Ice',
      accent: '#64B5F6',
      background: 'linear-gradient(135deg, #001a33 0%, #003366 100%)',
      content: (
        <SlideCategoria
          label="Ice"
          products={iceProducts}
          accent="#64B5F6"
          background="linear-gradient(135deg, #001a33 0%, #003366 100%)"
        />
      ),
    },
    {
      id: 'energeticos',
      label: 'Energéticos',
      accent: '#FFD600',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a00 100%)',
      content: (
        <SlideCategoria
          label="Energéticos"
          products={energyDrinks}
          accent="#FFD600"
          background="linear-gradient(135deg, #0a0a0a 0%, #1a1a00 100%)"
        />
      ),
    },
    {
      id: 'refrigerantes',
      label: 'Refrigerantes',
      accent: '#E53935',
      background: 'linear-gradient(135deg, #1a0000 0%, #2d0000 100%)',
      content: (
        <SlideCategoria
          label="Refrigerantes"
          products={refrigerantes}
          accent="#E53935"
          background="linear-gradient(135deg, #1a0000 0%, #2d0000 100%)"
        />
      ),
    },
    {
      id: 'agua',
      label: 'Água',
      accent: '#29B6F6',
      background: 'linear-gradient(135deg, #001a2e 0%, #002a4a 100%)',
      content: (
        <SlideCategoria
          label="Água"
          products={aguas}
          accent="#29B6F6"
          background="linear-gradient(135deg, #001a2e 0%, #002a4a 100%)"
        />
      ),
    },
    {
      id: 'skol-beats',
      label: 'Skol Beats',
      accent: '#AB47BC',
      background: 'linear-gradient(135deg, #0d001a 0%, #1a0033 100%)',
      content: (
        <SlideCategoria
          label="Skol Beats"
          products={skolBeats}
          accent="#AB47BC"
          background="linear-gradient(135deg, #0d001a 0%, #1a0033 100%)"
        />
      ),
    },
    {
      id: 'mansao-maromba',
      label: 'Mansão Maromba',
      accent: '#C9A962',
      background: 'radial-gradient(ellipse 120% 80% at 50% 0%, #2a1200 0%, #1a0a00 35%, #0d0500 100%)',
      content: <MansaoMaromba />,
    },
  ];

  return (
    <div className="totem-page">
      <button className="totem-exit-btn" onClick={onExit} aria-label="Sair do modo vitrine">
        ✕
      </button>
      <TotemDisplay slides={slides} />
    </div>
  );
}
