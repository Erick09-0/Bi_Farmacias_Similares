import { Mail, MessageSquare, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="px-4 py-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <div className="neomorph-lg rounded-[25px] bg-[#E9ECF5] p-12 md:p-16">
          <div className="w-20 h-20 mx-auto neomorph-sm rounded-[20px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] flex items-center justify-center mb-6">
            <MessageSquare className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-[#2D3748] mb-4">Contacto</h1>
          <p className="text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
            ¿Tienes preguntas, comentarios o sugerencias sobre nuestro proyecto? 
            Nos encantaría escucharte. Completa el formulario y te responderemos a la brevedad.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-6 text-center">
            <div className="w-14 h-14 mx-auto neomorph-sm rounded-[18px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-[#2D3748] font-semibold mb-2">Email</h3>
            <p className="text-[#4A5568] text-sm">proyecto.bi@universidad.edu</p>
          </div>

          <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-6 text-center">
            <div className="w-14 h-14 mx-auto neomorph-sm rounded-[18px] bg-gradient-to-br from-[#FF6B9D] to-[#C9559E] flex items-center justify-center mb-4">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-[#2D3748] font-semibold mb-2">Proyecto Académico</h3>
            <p className="text-[#4A5568] text-sm">Universidad [Nombre]</p>
          </div>

          <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-6 text-center">
            <div className="w-14 h-14 mx-auto neomorph-sm rounded-[18px] bg-gradient-to-br from-[#FFC837] to-[#FF8008] flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-[#2D3748] font-semibold mb-2">Respuesta</h3>
            <p className="text-[#4A5568] text-sm">24-48 horas hábiles</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="neomorph-lg rounded-[25px] bg-[#E9ECF5] p-8 md:p-10">
              <h2 className="text-[#2D3748] mb-6">Envíanos un Mensaje</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[#2D3748] font-medium mb-3">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-neomorph w-full"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[#2D3748] font-medium mb-3">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-neomorph w-full"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-[#2D3748] font-medium mb-3">
                    Asunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-neomorph w-full"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="pregunta">Pregunta sobre el proyecto</option>
                    <option value="comentario">Comentario sobre un artículo</option>
                    <option value="sugerencia">Sugerencia</option>
                    <option value="colaboracion">Propuesta de colaboración</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[#2D3748] font-medium mb-3">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-neomorph w-full resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between pt-4">
                  <p className="text-sm text-[#4A5568]">* Campos requeridos</p>
                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center gap-2 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Info Sidebar */}
          <div className="space-y-6">
            <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-6">
              <h3 className="text-[#2D3748] font-semibold mb-4">Tipos de Consultas</h3>
              <ul className="space-y-3">
                {[
                  { icon: '📊', title: 'Preguntas sobre metodología' },
                  { icon: '💬', title: 'Comentarios sobre artículos' },
                  { icon: '📚', title: 'Solicitudes de información' },
                  { icon: '🤝', title: 'Colaboraciones académicas' }
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[#4A5568] text-sm pt-1">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="neomorph-lg rounded-[25px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] p-6 text-white">
              <h3 className="text-white font-semibold mb-3">¿Tienes un proyecto similar?</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                Nos encantaría conocer tu experiencia y compartir aprendizajes.
              </p>
              <p className="text-white/90 text-sm leading-relaxed">
                La comunidad académica se fortalece cuando compartimos conocimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}