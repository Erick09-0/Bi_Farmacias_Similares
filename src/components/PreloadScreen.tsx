import { useEffect, useState } from 'react';
import { BookOpen, Loader2 } from 'lucide-react';

interface PreloadScreenProps {
  onFinish: () => void;
}

export function PreloadScreen({ onFinish }: PreloadScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Incremento variable para hacer la carga más realista
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cuando llega a 100%, iniciar fade out
    if (progress >= 100) {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          onFinish();
        }, 500); // Duración de la animación de fade out
      }, 300); // Pequeña pausa al 100%
    }
  }, [progress, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#E9ECF5] flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Logo/Icon */}
        <div className="neomorph-lg rounded-[25px] w-24 h-24 flex items-center justify-center mx-auto mb-8 bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC]">
          <BookOpen className="w-12 h-12 text-white animate-pulse" />
        </div>

        {/* Title */}
        <h1 className="text-[#2D3748] mb-2">
          Blog de Business Intelligence
        </h1>
        <p className="text-[#4A5568] mb-8">
          Farmacias Similares - Acámbaro, Guanajuato
        </p>

        {/* Loading Bar */}
        <div className="neomorph-inset rounded-[20px] w-80 h-4 mx-auto mb-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#5B7CFF] via-[#FF6B9D] to-[#FFC837] rounded-[20px] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <p className="text-[#4A5568] text-sm">
          {progress < 100 ? `Cargando... ${Math.round(progress)}%` : '¡Listo!'}
        </p>

        {/* Animated Loader Icon */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 text-[#5B7CFF] animate-spin" />
          <span className="text-[#4A5568] text-sm">
            Preparando contenido
          </span>
        </div>
      </div>
    </div>
  );
}
