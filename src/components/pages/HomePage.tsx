import { BookOpen, BarChart3, Building2, Star, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="neomorph rounded-[25px] overflow-hidden mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763038311036-6d18805537e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ4ODMzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Business Intelligence Dashboard"
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="inline-block neomorph-sm rounded-[20px] px-6 py-2 mb-6">
            <span className="text-[#5B7CFF] font-semibold text-sm">Proyecto Académico 2025</span>
          </div>
          <h1 className="text-[#2D3748] mb-6">
            Inteligencia de Negocios Aplicada a Farmacias Similares
          </h1>
          <p className="text-[#4A5568] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Bienvenido a nuestro blog académico donde exploramos cómo la tecnología y el análisis 
            de datos pueden transformar la operación de una farmacia real. Analizamos Farmacias 
            Similares ubicada en Av. 1ro de Mayo #1683, Acámbaro, Guanajuato.
          </p>
          <button className="btn-primary">
            Explorar el Proyecto
          </button>
        </div>
      </section>

      {/* Propósito Académico */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-8 md:p-10">
          <h2 className="text-[#2D3748] mb-4">¿Qué encontrarás en este blog?</h2>
          <p className="text-[#4A5568] mb-4 leading-relaxed">
            Este es un proyecto universitario desarrollado por estudiantes apasionados por el análisis 
            de datos y la tecnología aplicada a negocios reales. Nuestro objetivo es documentar cómo 
            herramientas como Business Intelligence, arquitecturas empresariales bien diseñadas y modelos 
            de datos eficientes pueden ayudar a una farmacia a tomar mejores decisiones.
          </p>
          <p className="text-[#4A5568] mb-4 leading-relaxed">
            A lo largo de estas páginas, no solo compartimos teoría, sino que la aplicamos a un caso 
            real: Farmacias Similares en Acámbaro. Exploramos desde cómo organizar sus datos de ventas 
            e inventario, hasta cómo analizar patrones de compra de medicamentos y optimizar la atención 
            al cliente.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            Te invitamos a explorar nuestras categorías, leer los artículos, y sobre todo, a dejar tus 
            comentarios y preguntas. Este blog es también un espacio de aprendizaje colaborativo, y nos 
            encantaría conocer tu opinión sobre nuestro trabajo.
          </p>
        </div>
      </section>

      {/* Conceptos Principales */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-[#2D3748] text-center mb-12">Los Tres Pilares de Nuestro Análisis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Intelligence */}
          <div className="card-neomorph-hover group">
            <div className="w-16 h-16 neomorph-sm rounded-[20px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-[#2D3748] mb-3">Business Intelligence (BI)</h3>
            <p className="text-[#4A5568] mb-4 leading-relaxed">
              Imagina poder saber exactamente qué medicamentos se venden más cada temporada, qué días 
              hay más clientes, o cuáles son los productos más rentables. Eso es Business Intelligence: 
              convertir los datos que genera una farmacia día a día en información útil para tomar 
              decisiones inteligentes.
            </p>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              En lugar de adivinar qué pedir al proveedor o cuándo contratar más personal, el dueño de 
              la farmacia puede verlo en dashboards claros y gráficas que le muestran la realidad de su 
              negocio.
            </p>
            <button className="inline-flex items-center gap-2 text-[#5B7CFF] font-semibold group-hover:gap-3 transition-all duration-300">
              Explorar BI <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Arquitectura de Negocios */}
          <div className="card-neomorph-hover group">
            <div className="w-16 h-16 neomorph-sm rounded-[20px] bg-gradient-to-br from-[#FF6B9D] to-[#C9559E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-[#2D3748] mb-3">Arquitectura de Negocios</h3>
            <p className="text-[#4A5568] mb-4 leading-relaxed">
              Antes de analizar datos, necesitamos entender cómo funciona realmente Farmacias Similares. 
              ¿Qué procesos tiene? ¿Cómo atienden a los clientes? ¿Cómo manejan su inventario? ¿Qué 
              relación hay entre la farmacia y los consultorios médicos que muchas veces están en el 
              mismo local?
            </p>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              La arquitectura de negocios es como el plano de una casa: nos muestra cómo están conectadas 
              todas las partes de la organización. Esto nos ayuda a diseñar soluciones de BI que realmente 
              resuelvan problemas reales del negocio.
            </p>
            <button className="inline-flex items-center gap-2 text-[#FF6B9D] font-semibold group-hover:gap-3 transition-all duration-300">
              Ver Arquitectura <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Modelo Estrella */}
          <div className="card-neomorph-hover group">
            <div className="w-16 h-16 neomorph-sm rounded-[20px] bg-gradient-to-br from-[#FFC837] to-[#FF8008] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-[#2D3748] mb-3">Modelo Estrella</h3>
            <p className="text-[#4A5568] mb-4 leading-relaxed">
              Los datos de una farmacia están por todas partes: ventas, clientes, productos, proveedores, 
              fechas... ¿Cómo los organizamos para poder analizarlos fácilmente? Aquí entra el Modelo 
              Estrella, una forma inteligente de estructurar bases de datos.
            </p>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              Imagina una estrella donde en el centro están las ventas (lo que pasó), y en cada punta 
              hay información adicional: qué producto se vendió, cuándo, a qué cliente, en qué sucursal. 
              Esta estructura hace que las consultas sean rapidísimas y los análisis muy eficientes.
            </p>
            <button className="inline-flex items-center gap-2 text-[#FFC837] font-semibold group-hover:gap-3 transition-all duration-300">
              Descubrir el Modelo <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Intro Cards */}
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left Card - Image */}
          <div className="neomorph rounded-[25px] overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758573467057-955f803660a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMGludGVyaW9yJTIwbWVkaWNpbmV8ZW58MXx8fHwxNzY0ODgzNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Farmacias Similares"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Card - Text */}
          <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-8 flex flex-col justify-center">
            <h3 className="text-[#2D3748] mb-4">¿Por Qué Farmacias Similares?</h3>
            <p className="text-[#4A5568] leading-relaxed">
              Farmacias Similares es una cadena de farmacias que se destaca por su compromiso con la 
              accesibilidad y la calidad de sus productos. Con una presencia en varios estados de México, 
              incluyendo Acámbaro, Guanajuato, han demostrado ser un recurso valioso para las comunidades 
              que sirven.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              Su modelo de negocio incluye la venta de medicamentos genéricos a precios competitivos, 
              así como la integración de consultorios médicos que ofrecen servicios de atención médica 
              complementarios. Esta combinación hace que Farmacias Similares sea un punto clave en la 
              salud de las comunidades que sirven.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              En este blog, exploraremos cómo el análisis de datos y la inteligencia de negocios pueden 
              ayudar a Farmacias Similares a mejorar sus operaciones, optimizar sus recursos y mejorar 
              la experiencia del cliente.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto">
        <div className="neomorph-lg rounded-[25px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] p-12 md:p-16 text-center text-white">
          <h2 className="mb-4 text-white">Caso de Estudio Real: Farmacias Similares Acámbaro</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6 leading-relaxed">
            Hemos elegido analizar la sucursal ubicada en Av. 1ro de Mayo #1683, Acámbaro, Guanajuato, 
            porque representa perfectamente el modelo de negocio de Farmacias Similares: medicamentos 
            genéricos accesibles, consultorios médicos integrados, y un papel fundamental en la salud 
            de comunidades mexicanas de todos los tamaños.
          </p>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            ¿Te interesa saber cómo el análisis de datos puede ayudar a una farmacia de tu comunidad? 
            Explora nuestros artículos, descubre las categorías y aprende con nosotros.
          </p>
          <button 
            onClick={() => onNavigate('blog')}
            className="neomorph rounded-[20px] bg-white text-[#5B7CFF] px-8 py-4 font-semibold hover:neomorph-lg transition-all duration-300"
          >
            Leer Nuestros Artículos
          </button>
        </div>
      </section>

      {/* Videos Section */}
      <section className="max-w-5xl mx-auto mt-16">
        <div className="text-center mb-8">
          <h2 className="text-[#2D3748] mb-4">Videos del Proyecto</h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
            Mira nuestros videos explicativos sobre Business Intelligence y Data Warehouse aplicados a este proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video 1 */}
          <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-6">
            <h3 className="text-[#2D3748] mb-4">Modelo estrella: Uso en BI</h3>
            <div className="neomorph-inset rounded-[20px] overflow-hidden">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/dYaySwNR4kQ"
                title="Modelo estrella: Uso en BI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Video 2 */}
          <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-6">
            <h3 className="text-[#2D3748] mb-4">Estructura del DataWarehouse: uso de dashboards empresariales</h3>
            <div className="neomorph-inset rounded-[20px] overflow-hidden">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/fxCHOULL8IQ"
                title="Estructura del DataWarehouse: uso de dashboards empresariales"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}