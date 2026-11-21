import { useState, useEffect } from 'react';

export const FaraHeroSolutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Se actualizó el valor "bg" de todas las métricas para usar el azul difuminado con texto blanco
  const heroData = [
    {
      id: 'retail',
      tabLabel: 'retail & ejecución',
      tag: 'retail & ejecución · latam',
      title: 'promotoría con ia que vende más',
      description: 'ponemos a tu equipo de promotoría en el punto de venta y lo equipamos con ia: más conocimiento de producto, mejor ejecución y más ventas — medido en tiempo real, en toda la región.',
      cta: 'conocer versus →',
      bgImage: '/images/retail.jpg',
      metrics: [
        { icon: '🧠', value: '+35% en dominio de producto del equipo', bg: 'bg-[#0C3B5F]/35 text-white border border-white/10' },
        { icon: '📈', value: '+18% de conversión en anaquel', bg: 'bg-[#0C3B5F]/35 text-white border border-white/10' },
        { icon: '🎯', value: '94% de cobertura en anaquel', bg: 'bg-[#0C3B5F]/35 text-white border border-white/10' }
      ]
    },
    {
      id: 'talento',
      tabLabel: 'talento & equipo',
      tag: 'talento & equipo · latam',
      title: 'el equipo que se integra al tuyo',
      description: 'sumamos personas, procesos y herramientas que operan como una extensión de tu equipo — con la flexibilidad de un modelo distribuido en toda la región.',
      cta: 'arma tu equipo →',
      bgImage: '/images/talento.jpg',
      metrics: [
        { icon: '👋', value: 'equipo dedicado listo para arrancar', bg: 'bg-[#0C3B5F]/35 text-white border border-white/10' },
        { icon: '⏱️', value: '2 semanas promedio de onboarding', bg: 'bg-[#0C3B5F]/35 text-white border border-white/10' },
        { icon: '📉', value: '-40% vs. contratación tradicional', bg: 'bg-[#0C3B5F]/35 text-white border border-white/10' }
      ]
    },
    {
      id: 'desarrollo',
      tabLabel: 'desarrollo con ia',
      tag: 'desarrollo con ia · latam',
      title: 'software que aprende de tu operación',
      description: 'diseñamos plataformas e integramos inteligencia artificial que convierte los datos de tu negocio en decisiones automáticas — desde el primer sprint.',
      cta: 'ver cómo lo hacemos →',
      bgImage: '/images/desarrollo.jpg',
      metrics: [
        { icon: '🤖', value: '+30% de precisión en pronóstico', bg: 'bg-[#0C3B5F]/35 text-white border border-white/10' },
        { icon: '⚡', value: '6 semanas tiempo promedio de entrega', bg: 'bg-[#0C3B5F]/35 text-white border border-white/10' },
        { icon: '⚙️', value: '12 procesos corriendo con ia hoy', bg: 'bg-[#0C3B5F]/35 text-white border border-white/10' }
      ]
    },
    {
      id: 'suministro',
      tabLabel: 'suministro empresarial',
      tag: 'suministro empresarial · latam',
      title: 'todo lo que tu operación necesita, sin fricción',
      description: 'cotizamos, abastecemos y damos seguimiento a los productos y servicios que tu empresa necesita — con trazabilidad completa y respuesta rápida en toda la región.',
      cta: 'cotizar ahora →',
      bgImage: '/images/suministro.jpg',
      metrics: [
        { icon: '✅', value: '24 horas tiempo de respuesta promedio', bg: 'bg-[#0C3B5F]/35 text-white border border-white/10' },
        { icon: '📍', value: 'tiempo real en cada pedido', bg: 'bg-[#0C3B5F]/35 text-white border border-white/10' },
        { icon: '🏢', value: '+80 marcas con suministro activo', bg: 'bg-[#0C3B5F]/35 text-white border border-white/10' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroData.length);
    }, 13000);
    return () => clearInterval(timer);
  }, [heroData.length]);

  const activeSlide = heroData[activeIndex];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* 1. MOTOR DE ANIMACIÓN INFALIBLE: Inyectamos los keyframes directamente aquí */}
      <style>{`
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .anim-slide-in {
          animation: slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      {/* Fondos dinámicos con Crossfade */}
      {heroData.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out z-0 ${
            activeIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${item.bgImage})` }}
        />
      ))}

      <div className="absolute inset-0 bg-[#050709]/50 z-10 transition-opacity duration-1000"></div>

      {/* Contenedor Principal */}
      <div className="relative z-20 w-full max-w-[1300px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-end justify-between h-full gap-10">
        
        <div className="w-full lg:w-2/3 flex flex-col justify-center">
          
          {/* Pestañas de Navegación */}
          <div className="flex flex-row flex-nowrap items-center gap-4 mb-10 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
            {heroData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`px-6 py-3 rounded-full border text-sm font-medium transition-all duration-300 flex-shrink-0 ${
                  activeIndex === index 
                    ? 'bg-[#978CC0] border-[#978CC0] text-[#0C3B5F] shadow-lg font-bold' 
                    : 'border-white/30 text-white/70 hover:border-white hover:text-white bg-transparent backdrop-blur-sm' 
                }`}
              >
                {item.tabLabel}
              </button>
            ))}
          </div>

          {/* Animación del texto de la izquierda */}
          <div className="animate-fade-in-up" key={`text-${activeSlide.id}`}>
            <span className="text-[#978CC0] tracking-widest text-sm mb-6 block font-mono font-bold">
              —— {activeSlide.tag}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-bauhaus text-white">
              {activeSlide.title}
            </h1>
            
            <p className="text-sm md:text-base text-white/70 mb-8 leading-loose w-full md:w-5/6 font-light">
              {activeSlide.description}
            </p>
            
            <button className="bg-[#978CC0] text-[#0C3B5F] px-8 py-3.5 rounded-full font-bold hover:bg-[#978CC0]/90 transition-transform hover:scale-105 flex items-center gap-2 shadow-lg w-fit">
              {activeSlide.cta}
            </button>
          </div>
        </div>

        {/* Lado Derecho: Tarjetas de Métricas Flotantes con animación asegurada */}
        <div className="w-full lg:w-1/3 flex flex-col items-end gap-3 pb-8" key={`metrics-${activeSlide.id}`}>
          {activeSlide.metrics.map((metric, idx) => (
            <div 
              key={`${activeSlide.id}-${idx}`} 
              // Usamos la clase anim-slide-in que definimos en el bloque <style>
              className={`w-full max-w-[320px] p-4 rounded-xl shadow-lg backdrop-blur-md anim-slide-in flex items-center gap-4 ${metric.bg}`}
              // Aumenté a 900ms el espacio entre cada una para que la cascada se note más
              style={{ animationDelay: `${idx * 1300}ms` }} 
            >
              <div className="text-1xl">{metric.icon}</div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-normal leading-tight">
                  {metric.value}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};