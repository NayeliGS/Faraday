import { useState, useEffect } from 'react';

export const FaradayNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'que-hacemos', name: 'qué hacemos' },
    { id: 'plataformas', name: 'plataformas' },
    { id: 'tecnologia', name: 'tecnología' },
    { id: 'enfoque', name: 'enfoque' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Usamos window.innerHeight para calcular la altura exacta de la pantalla.
      // Le restamos unos 100px para que el cambio ocurra justo antes de que la siguiente sección toque el menú.
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutamos la función una vez al montar por si el usuario recarga la página a la mitad
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex justify-center p-6 transition-all duration-300">
      <nav 
        className={`w-full max-w-[1300px] h-[64px] rounded-full flex items-center justify-between px-6 md:px-8 font-sans transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border border-[#D2DFE9]/50' // MODO SCROLL (Fuera del Hero)
            : 'bg-transparent border border-transparent' // MODO TOP (Dentro del Hero)
        }`}
      >
        
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">
          <svg 
            className={`w-6 h-6 transition-colors duration-500 ${isScrolled ? 'text-[#0C3B5F]' : 'text-white'}`} 
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className={`font-bold text-xl tracking-wide font-bauhaus transition-colors duration-500 ${isScrolled ? 'text-[#0C3B5F]' : 'text-white'}`}>
            faraday go
          </span>
        </div>
        
        {/* ENLACES CENTRALES */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-[#55768F] hover:text-[#0C3B5F]' 
                  : 'text-white/90 hover:text-[#10F5C4]'  
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* BOTÓN DE ACCIÓN */}
        <div className="flex items-center">
          <button 
            className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 border ${
              isScrolled
                ? 'border-[#0C3B5F] text-[#0C3B5F] hover:bg-[#0C3B5F] hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-[#0C3B5F]' 
            }`}
          >
            hablemos
          </button>
        </div>
        
      </nav>
    </div>
  );
};