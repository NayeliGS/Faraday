import { useState, useEffect, useRef } from 'react';

export const FaraStrategy1 = () => {
  // Estado para saber si la sección está visible en la pantalla
  const [isVisible, setIsVisible] = useState(false);
  // Referencia al contenedor que vamos a observar
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Configuramos el observador
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando al menos el 50% de la sección sea visible, cambiamos el estado
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // 0.5 significa que se activa al llegar a la mitad de la sección
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full flex flex-col md:flex-row min-h-[70vh] bg-white">
      
      {/* MITAD IZQUIERDA: Imagen con filtro azul */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/estrategia.jpg')" }}
        ></div>
        
        {/* Capas superpuestas */}
        <div className="absolute inset-0 bg-[#0C3B5F]/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#0C3B5F]/20"></div>
      </div>

      {/* MITAD DERECHA: Contenido de texto con animación de colores */}
      <div 
        className={`w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 transition-colors duration-[3500ms] ease-in-out ${
          isVisible ? 'bg-[#0C3B5F]' : 'bg-white'
        }`}
      >
        <div className="max-w-lg animate-fade-in-up">
          
          {/* Etiqueta superior */}
          <span 
            className={`font-mono tracking-widest text-sm mb-6 block font-bold transition-colors duration-[3000ms] ${
              isVisible ? 'text-[#978CC0]' : 'text-[#978CC0]'
            }`}
          >
            — de extremo a extremo
          </span>
          
          {/* Titulo Principal (Tamaño reducido para jerarquía secundaria) */}
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold font-bauhaus leading-tight mb-8 transition-colors duration-[3000ms] ${
              isVisible ? 'text-white' : 'text-[#0C3B5F]'
            }`}
          >
            de la estrategia al <br className="hidden lg:block" /> anaquel.
          </h2>
          
          {/* Párrafo descriptivo (Tamaño reducido a texto base/largo para mejor lectura) */}
          <p 
            className={`text-base md:text-lg font-medium leading-relaxed transition-colors duration-[3000ms] ${
              isVisible ? 'text-[#D2DFE9]' : 'text-[#55768F]'
            }`}
          >
            Diseñamos la tecnología en la oficina y la vemos aterrizar en el punto de venta. Ese recorrido completo — dato, decisión y ejecución — es lo que nos distingue.
          </p>
          
        </div>
      </div>
      
    </section>
  );
};