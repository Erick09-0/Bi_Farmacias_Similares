import { Users, Target, Building, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="px-4 py-12">
      {/* Header Banner */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="neomorph-lg rounded-[25px] bg-[#E9ECF5] p-12 md:p-16 text-center">
          <div className="w-20 h-20 mx-auto neomorph-sm rounded-[20px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] flex items-center justify-center mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-[#2D3748] mb-4">Acerca del Proyecto</h1>
          <p className="text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
            Este blog es más que un proyecto académico: es el resultado de nuestra curiosidad por entender 
            cómo la tecnología y el análisis de datos pueden transformar negocios reales del sector salud 
            en México.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-8">
            <h2 className="text-[#2D3748] mb-6">Visión General del Proyecto</h2>
            <p className="text-[#4A5568] leading-relaxed">
              Este proyecto se centra en la aplicación de Business Intelligence (BI) en el sector farmacéutico, 
              específicamente en una cadena de farmacias mexicana llamada Farmacias Similares. El objetivo es 
              demostrar que las herramientas de BI no solo son útiles para grandes corporaciones, sino que 
              también pueden beneficiar a negocios más pequeños y medianos, como las farmacias locales.
            </p>
          </div>
          <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-8">
            <h2 className="text-[#2D3748] mb-6">Metodología</h2>
            <p className="text-[#4A5568] leading-relaxed">
              Para lograr este objetivo, realizamos un análisis detallado de la arquitectura de negocios de 
              Farmacias Similares, enfocándonos en una sucursal específica en Acámbaro, Guanajuato. Utilizamos 
              técnicas de análisis de datos y herramientas de BI para identificar áreas de mejora y oportunidades 
              de crecimiento.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="neomorph rounded-[25px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] p-12 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-white mb-4">Nuestro Equipo</h2>
            <p className="text-white/90 leading-relaxed">
              Este proyecto es el resultado del trabajo colaborativo de estudiantes comprometidos 
              con aplicar conocimientos de Business Intelligence a casos reales.
            </p>
          </div>

          <div className="neomorph rounded-[25px] overflow-hidden mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzY0ODI3NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Equipo de trabajo"
              className="w-full h-[300px] object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="neomorph-sm rounded-[18px] p-4 text-center">
              <p className="text-[#2D3748] font-semibold">Erick Yahir Ambriz Calderon</p>
            </div>
            <div className="neomorph-sm rounded-[18px] p-4 text-center">
              <p className="text-[#2D3748] font-semibold">Jonathan Joaquín Trujillo Leon</p>
            </div>
            <div className="neomorph-sm rounded-[18px] p-4 text-center">
              <p className="text-[#2D3748] font-semibold">Óscar Omar García Páramo</p>
            </div>
            <div className="neomorph-sm rounded-[18px] p-4 text-center">
              <p className="text-[#2D3748] font-semibold">Hugo Alejandro Sánchez Reyes</p>
            </div>
          </div>
        </div>

        {/* Propósito del Proyecto */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 neomorph-sm rounded-[18px] bg-gradient-to-br from-[#FF6B9D] to-[#C9559E] flex items-center justify-center">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-[#2D3748]">Propósito del Proyecto</h2>
          </div>
          <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-8">
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              Nuestro objetivo principal es demostrar que Business Intelligence no es solo para grandes 
              corporaciones multinacionales. Una farmacia local, un negocio familiar, una empresa mediana 
              mexicana también puede beneficiarse enormemente de analizar sus datos de forma inteligente.
            </p>
            
            <h3 className="text-[#2D3748] mb-4">Objetivos Principales</h3>
            <div className="space-y-3 mb-6">
              {[
                'Demostrar la aplicación práctica de Business Intelligence en el sector farmacéutico',
                'Analizar la arquitectura de negocios de una empresa mexicana exitosa',
                'Diseñar un modelo estrella adaptado a las necesidades específicas del negocio',
                'Documentar aprendizajes y experiencias del equipo durante el proceso',
                'Generar propuestas prácticas y realistas para negocios similares'
              ].map((objetivo, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-6 h-6 neomorph-sm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#5B7CFF] font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-[#4A5568] leading-relaxed">{objetivo}</p>
                </div>
              ))}
            </div>
            
            <p className="text-[#4A5568] leading-relaxed">
              Este proyecto es académico, pero lo abordamos con seriedad profesional. Cada análisis, cada 
              propuesta, está fundamentada en investigación, lecturas especializadas y metodologías 
              reconocidas en el campo de Business Intelligence y arquitectura empresarial.
            </p>
          </div>
        </section>

        {/* Farmacias Similares */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 neomorph-sm rounded-[18px] bg-gradient-to-br from-[#FFC837] to-[#FF8008] flex items-center justify-center">
              <Building className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-[#2D3748]">Empresa Analizada: Farmacias Similares</h2>
          </div>
          <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-8">
            <h3 className="text-[#2D3748] mb-4">¿Por qué Farmacias Similares?</h3>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              Farmacias Similares es una de las cadenas farmacéuticas más icónicas de México. Con el lema 
              "Lo mismo pero más barato", revolucionó el acceso a medicamentos en el país al ofrecer 
              alternativas genéricas de calidad a precios accesibles. Hoy tiene presencia en prácticamente 
              todo el territorio nacional.
            </p>
            
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              Para nuestro análisis, nos enfocamos específicamente en la sucursal ubicada en <strong className="text-[#2D3748]">Av. 1ro 
              de Mayo #1683, Acámbaro, Guanajuato</strong>. Esta ubicación nos permite estudiar una farmacia 
              en una ciudad mediana, con características que pueden replicarse en muchas otras comunidades 
              mexicanas.
            </p>
            
            <h3 className="text-[#2D3748] mb-4">Características Relevantes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: 'Amplia cobertura nacional', desc: 'Miles de sucursales en todo el país' },
                { title: 'Modelo de negocio integrado', desc: 'Farmacias + consultorios médicos' },
                { title: 'Gran volumen de datos', desc: 'Ventas, inventarios, pacientes' },
                { title: 'Mercado objetivo amplio', desc: 'Segmento socioeconómico medio-bajo' }
              ].map((item, index) => (
                <div key={index} className="neomorph-sm rounded-[18px] p-4">
                  <p className="text-[#2D3748] font-semibold mb-1">{item.title}</p>
                  <p className="text-[#4A5568] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Importancia de BI */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 neomorph-sm rounded-[18px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-[#2D3748]">¿Por qué BI en una Farmacia?</h2>
          </div>
          <div className="neomorph-lg rounded-[25px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] p-8 text-white">
            <p className="text-white/95 mb-6 leading-relaxed">
              Puede parecer que una farmacia es un negocio sencillo: compras medicamentos, los vendes, 
              listo. Pero la realidad es mucho más compleja. Y ahí es donde Business Intelligence puede 
              marcar una diferencia enorme.
            </p>
            
            <h3 className="text-white mb-4">Problemas Reales que BI Puede Resolver:</h3>
            <div className="space-y-4">
              {[
                { title: 'Gestión de Inventarios', desc: 'Los medicamentos tienen fechas de caducidad. Tener demasiado inventario significa riesgo de pérdidas; tener muy poco significa ventas perdidas. BI ayuda a predecir la demanda según estacionalidad, días de la semana, e incluso eventos locales.' },
                { title: 'Análisis de Rentabilidad', desc: 'No todos los productos generan el mismo margen. BI permite identificar qué medicamentos son más rentables, cuáles tienen alta rotación pero baja ganancia, y optimizar el mix de productos.' },
                { title: 'Atención al Cliente', desc: 'Si la farmacia tiene consultorio médico, se pueden analizar patrones: ¿qué padecimientos son más comunes? ¿Hay correlación entre las consultas y las ventas de ciertos medicamentos?' },
                { title: 'Decisiones de Expansión', desc: 'Al analizar datos de ventas por zona geográfica, horarios de mayor demanda, y perfil de clientes, se pueden tomar decisiones informadas sobre dónde abrir nuevas sucursales.' }
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-white/30 pl-4">
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-white/90 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}