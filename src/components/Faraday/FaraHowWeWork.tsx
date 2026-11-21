export const FaraHowWeWork = () => {
  // Arreglo con la información de las 4 fases
  const phases = [
    {
      num: 'fase 01',
      title: 'entender',
      desc: 'Nos metemos en tu operación y tus datos para encontrar dónde está la palanca de valor real.',
      borderColor: 'border-[#10F5C4]' // Línea neón/celeste
    },
    {
      num: 'fase 02',
      title: 'diseñar',
      desc: 'Definimos la arquitectura, el alcance y el modelo — con foco en lo que se puede medir y sostener.',
      borderColor: 'border-[#9EB1BF]' // Línea gris azulada
    },
    {
      num: 'fase 03',
      title: 'construir',
      desc: 'Equipos dedicados que entregan en ciclos cortos, con calidad de producto y no de prototipo.',
      borderColor: 'border-[#978CC0]' // Línea morada
    },
    {
      num: 'fase 04',
      title: 'operar',
      desc: 'Ponemos en producción, damos seguimiento y optimizamos costos, talento y suministro en el tiempo.',
      borderColor: 'border-[#0C3B5F]' // Línea azul oscura
    }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24 bg-[#FBF9F6]">
      <div className="max-w-[1300px] mx-auto">
        
        {/* ENCABEZADO: Enfoque */}
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <span className="text-[#978CC0] font-mono tracking-widest text-sm mb-4 block font-bold">
            — enfoque
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-bauhaus text-[#0C3B5F] leading-tight mb-6">
            cómo trabajamos.
          </h2>
          <p className="text-lg text-[#55768F] font-medium leading-relaxed">
            Un flujo directo, sin fricción, orientado a que la ventaja llegue a producción — no a una presentación.
          </p>
        </div>

        {/* FASES: Grid de 4 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {phases.map((phase, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Línea superior de color */}
              <div className={`w-full border-t-[3px] ${phase.borderColor} mb-6 rounded-full`}></div>
              
              <span className="text-xs text-[#9EB1BF] font-mono tracking-widest uppercase mb-2 font-bold">
                {phase.num}
              </span>
              <h3 className="text-2xl font-bold font-bauhaus text-[#0C3B5F] mb-3 lowercase">
                {phase.title}
              </h3>
              <p className="text-sm text-[#55768F] leading-relaxed font-medium">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>

        {/* IMAGEN DE EQUIPO */}
        <div className="w-full h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden mb-24 shadow-lg group">
          {/* Recuerda agregar tu imagen de equipo en public/images/equipo.jpg */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/equipo.jpg')" }}
          ></div>
          
          {/* Filtro Azul Multiplicar */}
          <div className="absolute inset-0 bg-[#0C3B5F]/40 mix-blend-multiply"></div>
          
          {/* Etiqueta Flotante (Píldora) */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-[#0C3B5F]/90 backdrop-blur-md px-6 py-2.5 rounded-full shadow-lg">
            <span className="text-white text-xs md:text-sm font-medium tracking-wide">
              del brief al roadmap, en la misma sala
            </span>
          </div>
        </div>

        {/* BANNER: Confianza Empresarial */}
        <div className="w-full relative rounded-3xl overflow-hidden bg-[#0C3B5F] p-10 md:p-16 lg:p-20 shadow-xl">
          {/* Resplandor de luz en la esquina superior derecha */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#296D9E] rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 max-w-4xl">
            {/* Etiqueta */}
            <span className="text-[#D2DFE9] font-mono tracking-widest text-[10px] md:text-xs mb-8 block uppercase font-bold">
              — confianza empresarial
            </span>
            
            {/* Título Grande con texto en itálica y morado */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bauhaus text-white leading-tight mb-12">
              construimos la tecnología y <br className="hidden md:block" /> operamos el suministro que <br className="hidden lg:block" />
              <span className="text-[#978CC0] italic">empresas globales y multinacionales</span> <br className="hidden lg:block" />
              de consumo usan todos los días.
            </h2>
            
            {/* Pie de banner */}
            <span className="text-[#9EB1BF] text-xs md:text-sm font-medium">
              Compañías líderes de CPG & retail · Clientes de faraday go
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};