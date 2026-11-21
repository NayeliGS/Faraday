import { useState } from 'react';

export const FaraWhatWeDo = () => {
  // Estado independiente para cada tarjeta
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const services = [
    {
      id: 'producto',
      number: '01',
      category: 'producto & software',
      title: 'ingeniería de producto',
      description: 'Diseñamos y construimos plataformas SaaS, portales y automatizaciones de punta a punta: arquitectura, datos, backend, interfaz y despliegue en la nube.',
      bullets: ['SaaS & portales B2B', 'Datos e inteligencia con IA', 'Automatización de procesos'],
      bgImage: '/images/desarrollo.jpg',
      icon: (
        <svg className="w-5 h-5 text-[#0C3B5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'talento',
      number: '02',
      category: 'talento & outsourcing',
      title: 'equipos que ejecutan',
      description: 'Integramos equipos dedicados y células de operación que se suman a los tuyos: desarrollo, datos y soporte, con la flexibilidad de un modelo distribuido.',
      bullets: ['Equipos dedicados', 'Operación & soporte', 'Modelo flexible por proyecto'],
      bgImage: '/images/talento.jpg',
      icon: (
        <svg className="w-5 h-5 text-[#0C3B5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 'suministro',
      number: '03',
      category: 'suministro',
      title: 'abastecimiento ágil',
      description: 'Cotizamos, abastecemos y damos seguimiento a bienes y servicios a través de nuestro portal de suministro, con trazabilidad y respuesta rápida.',
      bullets: ['Cotización automatizada', 'Procurement & seguimiento', 'Facturación en regla'],
      bgImage: '/images/suministro.jpg',
      icon: (
        <svg className="w-5 h-5 text-[#0C3B5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-[#F9FAFB]">
      <div className="max-w-[1300px] mx-auto">
        
        {/* ENCABEZADO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 animate-fade-in-up">
          <div className="max-w-3xl">
            <span className="text-[#978CC0] font-mono tracking-widest text-sm mb-4 block font-bold">
              — qué hacemos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-bauhaus text-[#0C3B5F] leading-tight mb-6">
              un solo socio para lo que <br className="hidden md:block" /> construyes y lo que abasteces.
            </h2>
            <p className="text-lg text-[#55768F] font-medium leading-relaxed">
              Operamos en tres líneas que se conectan entre sí: la tecnología que diseña la ventaja, el talento que la ejecuta y el suministro que la sostiene.
            </p>
          </div>
          
          <button className="bg-[#978CC0] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#978CC0]/90 transition-transform hover:scale-105 flex-shrink-0 shadow-lg mb-2">
            Conóce más
          </button>
        </div>

        {/* GRID DE TARJETAS (Añadido items-start para evitar que se estiren juntas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {services.map((service) => {
            const isExpanded = expandedCards[service.id];
            
            return (
              <div 
                key={service.id} 
                className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col transition-all duration-300"
              >
                
                {/* Parte superior: Imagen */}
                <div className="h-48 w-full relative bg-[#0C3B5F] flex-shrink-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-100"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  ></div>
                  
                  <div className="absolute -bottom-5 left-6 w-10 h-10 bg-[#FFFFFF] rounded-lg flex items-center justify-center z-10 ring-[5px] ring-white shadow-sm">
                    {service.icon}
                  </div>
                </div>

                {/* Parte inferior: Contenido */}
                <div className="p-8 pt-10 flex flex-col bg-[#FFFFFF]">
                  <span className="text-xs text-[#978CC0] font-mono uppercase tracking-widest mb-3 font-bold">
                    {service.number} - {service.category}
                  </span>
                  
                  {/* Título y Botón Flecha */}
                  <div 
                    className="flex items-center justify-between mb-4 cursor-pointer" 
                    onClick={() => toggleCard(service.id)}
                  >
                    <h3 className="text-2xl font-bold font-bauhaus text-[#0C3B5F] pr-4">
                      {service.title}
                    </h3>
                    
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#978CC0]/15 text-[#978CC0] hover:bg-[#978CC0]/30 transition-colors focus:outline-none flex-shrink-0">
                      <svg 
                        className={`w-5 h-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Descripción (Expandible) */}
                  <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
                    <p className="text-sm text-[#55768F] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullets (Siempre visibles) */}
                  <ul className="space-y-3 mt-2">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#55768F] flex-shrink-0"></span>
                        <span className="text-sm text-[#55768F] font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};