export const FaraContact = () => {
  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24 bg-[#978CC0] flex justify-center">
      
      {/* Contenedor centralizado limpio */}
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center animate-fade-in-up">
        
        {/* Etiqueta superior */}
        <span className="text-[#0C3B5F] font-mono tracking-widest text-sm mb-6 font-bold text-center mx-auto">
          — hablemos
        </span>
        
        {/* Título Principal (Sin w-full, solo centrado y con márgenes automáticos) */}
        <h2 className="max-w-[800px] text-4xl md:text-5xl lg:text-6xl font-bold font-bauhaus text-[#0C3B5F] leading-tight mb-8 text-center mx-auto">
          ¿tienes algo que construir, operar o abastecer?
        </h2>
        
        {/* Párrafo descriptivo */}
        <p className="max-w-2xl text-base md:text-lg text-[#0C3B5F]/80 font-medium leading-relaxed mb-10 text-center mx-auto">
          Cuéntanos qué necesitas mover. Elige la vía que te quede mejor — te respondemos con una propuesta clara, no con un catálogo.
        </p>
        
        {/* Botones de acción */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 mx-auto">
          <button className="bg-[#0C3B5F] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#0C3B5F]/90 transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
            agendar una llamada <span>→</span>
          </button>
          
          <button className="bg-transparent border border-[#0C3B5F] text-[#0C3B5F] px-8 py-3.5 rounded-full font-bold hover:bg-[#0C3B5F] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center">
            escríbenos por whatsapp
          </button>
        </div>
        
        {/* Enlace de correo */}
        <div className="text-sm md:text-base text-[#0C3B5F]/80 font-medium text-center mx-auto">
          o escríbenos directamente a{' '}
          <a 
            href="mailto:hello@faradaygo.com" 
            className="underline hover:text-[#0C3B5F] transition-colors font-bold"
          >
            hello@faradaygo.com
          </a>
        </div>

      </div>
      
    </section>

    
    
  );
};