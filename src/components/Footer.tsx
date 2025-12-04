export function Footer() {
  return (
    <footer className="mt-20 px-4 pb-6">
      <div className="max-w-7xl mx-auto neomorph rounded-[25px] bg-[#E9ECF5] px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 neomorph-sm rounded-[15px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] flex items-center justify-center">
                <span className="text-white font-bold">BI</span>
              </div>
              <h3 className="text-[#2D3748] font-bold text-lg">BI Académico</h3>
            </div>
            <p className="text-[#4A5568] text-sm leading-relaxed">
              Proyecto académico sobre Inteligencia de Negocios aplicada a Farmacias Similares
            </p>
          </div>
          
          <div>
            <h3 className="text-[#2D3748] font-semibold mb-4">Temas Principales</h3>
            <ul className="space-y-2 text-sm text-[#4A5568]">
              <li className="hover:text-[#5B7CFF] cursor-pointer transition-all duration-300 hover:translate-x-1">Business Intelligence</li>
              <li className="hover:text-[#5B7CFF] cursor-pointer transition-all duration-300 hover:translate-x-1">Arquitectura de Negocios</li>
              <li className="hover:text-[#5B7CFF] cursor-pointer transition-all duration-300 hover:translate-x-1">Modelo Estrella</li>
              <li className="hover:text-[#5B7CFF] cursor-pointer transition-all duration-300 hover:translate-x-1">Farmacias Similares</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#2D3748] font-semibold mb-4">Proyecto</h3>
            <p className="text-[#4A5568] text-sm leading-relaxed">
              Un análisis profundo de la aplicación de BI en el sector farmacéutico mexicano
            </p>
          </div>
        </div>
        
        <div className="border-t border-[rgba(0,0,0,0.05)] pt-6 text-center">
          <p className="text-[#4A5568] text-sm">
            © 2025 BI Académico. Proyecto con fines educativos.
          </p>
        </div>
      </div>
    </footer>
  );
}