export const FaraFooter = () => {
  return (
    <footer className="w-full bg-[#0C3B5F] pt-20 pb-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1300px] mx-auto">
        
        {/* GRID PRINCIPAL DE 4 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          {/* Columna 1: Logo y descripción */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              {/* Ícono SVG de Faraday (árbol de nodos tecnológicos) */}
              <svg className="w-6 h-6 text-white opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {/* Puedes reemplazar este SVG con el exportado real de tu logo */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-white font-bold text-xl tracking-wide font-bauhaus">
                faraday go
              </span>
            </div>
            <p className="text-sm text-[#D2DFE9] leading-relaxed max-w-xs font-medium">
              Tecnología y suministro para empresas de consumo y retail. Desde la Ciudad de México, para donde haga falta.
            </p>
          </div>

          {/* Columna 2: Navegar */}
          <div className="flex flex-col">
            <span className="text-white font-bold text-xs tracking-widest mb-6 block font-mono lowercase">
              navegar
            </span>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[#9EB1BF] hover:text-white transition-colors text-sm font-medium">qué hacemos</a></li>
              <li><a href="#" className="text-[#9EB1BF] hover:text-white transition-colors text-sm font-medium">plataformas</a></li>
              <li><a href="#" className="text-[#9EB1BF] hover:text-white transition-colors text-sm font-medium">tecnología</a></li>
              <li><a href="#" className="text-[#9EB1BF] hover:text-white transition-colors text-sm font-medium">enfoque</a></li>
            </ul>
          </div>

          {/* Columna 3: Plataformas */}
          <div className="flex flex-col">
            <span className="text-white font-bold text-xs tracking-widest mb-6 block font-mono lowercase">
              plataformas
            </span>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[#9EB1BF] hover:text-white transition-colors text-sm font-medium">portal supply</a></li>
              <li><a href="#" className="text-[#9EB1BF] hover:text-white transition-colors text-sm font-medium">ver portafolio completo</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="flex flex-col">
            <span className="text-white font-bold text-xs tracking-widest mb-6 block font-mono lowercase">
              contacto
            </span>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="mailto:hello@faradaygo.com" className="text-[#9EB1BF] hover:text-white transition-colors text-sm font-medium">
                  hello@faradaygo.com
                </a>
              </li>
              <li><a href="#" className="text-[#9EB1BF] hover:text-white transition-colors text-sm font-medium">iniciar un proyecto</a></li>
              <li className="text-[#9EB1BF] text-sm font-medium mt-1">Ciudad de México, MX</li>
            </ul>
          </div>

        </div>

        {/* LÍNEA SEPARADORA Y COPYRIGHT */}
        <div className="w-full border-t border-[#55768F]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[#55768F] text-xs font-medium">
            © 2026 faraday go. Todos los derechos reservados.
          </span>
          <span className="text-[#55768F] text-xs font-medium">
            diseñado y construido en cdmx
          </span>
        </div>

      </div>
    </footer>
  );
};