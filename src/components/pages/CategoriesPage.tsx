import { BarChart3, Building2, Star, Users } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export function CategoriesPage() {
  const categories = [
    {
      id: 'business-intelligence',
      title: 'Business Intelligence',
      icon: BarChart3,
      gradient: 'from-[#5B7CFF] to-[#4A5FCC]',
      accentColor: 'text-[#5B7CFF]',
      description: 'Explora cómo el análisis de datos transforma información en decisiones inteligentes. Aquí profundizamos en herramientas, metodologías y casos prácticos de BI aplicados al sector farmacéutico, desde dashboards hasta indicadores clave de desempeño (KPIs).',
      details: [
        'Fundamentos de Business Intelligence y su evolución',
        'Herramientas y tecnologías modernas de BI',
        'KPIs específicos para el sector farmacéutico',
        'Dashboards y visualización de datos efectiva',
        'Procesos ETL y gestión de calidad de datos',
      ],
    },
    {
      id: 'arquitectura-negocios',
      title: 'Arquitectura de Negocios',
      icon: Building2,
      gradient: 'from-[#FF6B9D] to-[#C9559E]',
      accentColor: 'text-[#FF6B9D]',
      description: 'Descubre cómo funciona realmente Farmacias Similares desde dentro. Analizamos su modelo de negocio, procesos operativos, cadena de valor y la integración única entre farmacia y consultorio médico que caracteriza a esta empresa mexicana.',
      details: [
        'Modelo de negocio de Farmacias Similares',
        'Mapeo de procesos operativos y flujos de trabajo',
        'Cadena de valor y ventajas competitivas',
        'Análisis de stakeholders y ecosistema de salud',
        'Capacidades organizacionales y recursos clave',
      ],
    },
    {
      id: 'modelo-estrella',
      title: 'Modelo Estrella',
      icon: Star,
      gradient: 'from-[#FFC837] to-[#FF8008]',
      accentColor: 'text-[#FFC837]',
      description: 'Aprende a diseñar bases de datos optimizadas para análisis. El Modelo Estrella es el corazón de cualquier data warehouse, y aquí te mostramos cómo aplicarlo específicamente a los datos de una farmacia: ventas, inventarios, clientes y más.',
      details: [
        'Conceptos fundamentales del modelo estrella',
        'Diseño de tablas de hechos y dimensiones',
        'Arquitectura del data warehouse farmacéutico',
        'Consultas optimizadas y mejores prácticas',
        'Casos de uso reales aplicados a Farmacias Similares',
      ],
    },
    {
      id: 'experiencias',
      title: 'Experiencias del Equipo',
      icon: Users,
      gradient: 'from-[#A78BFA] to-[#7C3AED]',
      accentColor: 'text-[#A78BFA]',
      description: 'Un proyecto académico es también un viaje de aprendizaje. En esta sección compartimos nuestras reflexiones, los retos que enfrentamos, errores que cometimos, y lecciones aprendidas durante todo el proceso de investigación y desarrollo.',
      details: [
        'Metodología de investigación y recopilación de información',
        'Desafíos técnicos y cómo los resolvimos',
        'Aprendizajes clave de cada etapa del proyecto',
        'Dinámicas de trabajo en equipo y colaboración',
        'Conclusiones finales y recomendaciones para futuros proyectos',
      ],
    },
  ];

  return (
    <div className="px-4 py-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <div className="neomorph-lg rounded-[25px] bg-[#E9ECF5] p-12 md:p-16">
          <h1 className="text-[#2D3748] mb-6">Categorías del Blog</h1>
          <p className="text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
            Explora nuestros artículos organizados por temática. Cada categoría aborda aspectos 
            específicos de Business Intelligence aplicados a Farmacias Similares.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="neomorph-hover rounded-[25px] bg-[#E9ECF5] p-8 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 neomorph-sm rounded-[20px] bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h2 className="text-[#2D3748] mb-3">{category.title}</h2>
              <p className="text-[#4A5568] mb-6 leading-relaxed">{category.description}</p>

              <h3 className="text-[#2D3748] font-semibold mb-4">Temas cubiertos:</h3>
              <ul className="space-y-3 mb-6">
                {category.details.map((detail, index) => (
                  <li key={index} className="flex gap-3 text-[#4A5568] text-sm">
                    <span className={`${category.accentColor} mt-1 font-bold`}>→</span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>

              <button className={`${category.accentColor} font-semibold hover:underline transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2`}>
                Ver todos los artículos <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      {/* All Posts Link */}
      <div className="max-w-4xl mx-auto">
        <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-8 md:p-10 text-center">
          <h2 className="text-[#2D3748] mb-4">¿Buscas algo específico?</h2>
          <p className="text-[#4A5568] mb-6 leading-relaxed">
            Explora todos nuestros artículos sin filtrar por categoría
          </p>
          <button className="btn-primary">
            Ver Todos los Artículos
          </button>
        </div>
      </div>
    </div>
  );
}