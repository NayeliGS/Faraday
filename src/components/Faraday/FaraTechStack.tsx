import { useEffect, useState, useRef } from 'react';

export const FaraTechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Referencia para "vigilar" cuándo esta sección entra en la pantalla
  const sectionRef = useRef(null);

  useEffect(() => {
    // Creamos el Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si la sección es visible en la pantalla...
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Dejamos de vigilar para que la animación ocurra solo la primera vez
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.2, // Se activa cuando al menos el 20% es visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const technologies = [
    'inteligencia artificial',
    'machine learning',
    'sql server',
    'ingeniería de datos',
    'aws',
    'retail intelligence',
    'automatización',
    'apis & integraciones',
    'web & portales b2b',
    'finops / costos cloud'
  ];

  return (
    // Agregamos ref={sectionRef} para que el observer sepa qué medir
    <section ref={sectionRef} className="w-full py-24 px-6 md:px-16 lg:px-24 bg-[#0B2A46] overflow-hidden">
      
      <style>{`
        @keyframes slideInRightTech {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .anim-slide-in-right {
          opacity: 0; 
          animation: slideInRightTech 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
        
        {/* MITAD IZQUIERDA: Títulos y descripción */}
        <div className={`w-full md:w-[45%] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-[#978CC0] font-mono tracking-widest text-sm mb-6 block font-bold">
            — tecnología
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold font-bauhaus text-white/90 leading-tight  mb-8">
            un stack pensado <br className="hidden lg:block" /> para escalar retail e <br className="hidden lg:block" /> inteligencia de datos.
          </h2>
          
          <p className="text-base md:text-lg text-white/90 font-light leading-loose max-w-md">
            Combinamos ingeniería de datos, IA aplicada e infraestructura en la nube optimizada. Nada de sobre-ingeniería: la tecnología exacta para el problema, operada con disciplina de costos.
          </p>
        </div>

        {/* MITAD DERECHA: Nube de etiquetas tecnológicas */}
        <div className="w-full md:w-[55%] flex flex-wrap justify-start gap-4 mt-8 md:mt-0">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#55768F] bg-transparent transition-colors duration-300 ${isVisible ? 'anim-slide-in-right' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#978CC0]"></span>
              <span className="text-[#D2DFE9] text-sm md:text-base font-medium lowercase">
                {tech}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};