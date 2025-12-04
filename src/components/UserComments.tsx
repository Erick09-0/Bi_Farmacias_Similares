import { MessageCircle, ThumbsUp, User, X, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Comment {
  id: number;
  name: string;
  username: string;
  date: string;
  comment: string;
  likes: number;
  avatar: string;
  group: string;
}

export function UserComments() {
  const initialComments: Comment[] = [
    {
      id: 1,
      name: "María González",
      username: "@mariag_utl",
      date: "3 de diciembre, 2025",
      comment: "Excelente artículo sobre el Modelo Estrella! Estoy cursando en la Universidad Tecnológica de León, grupo IEVN-1001, y este ejemplo con Farmacias Similares me ayudó muchísimo a entender cómo se aplican las tablas de hechos y dimensiones en un caso real. La explicación de la granularidad y las claves foráneas está super clara. ¡Gracias por compartir! 📊",
      likes: 12,
      avatar: "MG",
      group: "IEVN-1001"
    },
    {
      id: 2,
      name: "Carlos Ramírez",
      username: "@carlos_utl",
      date: "2 de diciembre, 2025",
      comment: "Me pareció muy interesante el análisis de Business Intelligence aplicado a una farmacia local. Soy del grupo IEVN-1001 de la Universidad Tecnológica de León y muchos de los KPIs que mencionan (rotación de inventario, productos más vendidos, análisis de ventas por temporada) son justo lo que estamos viendo en clase. ¿Han considerado agregar análisis de cohort para entender mejor el comportamiento de compra recurrente de clientes?",
      likes: 8,
      avatar: "CR",
      group: "IEVN-1001"
    },
    {
      id: 3,
      name: "Ana Sofía Torres",
      username: "@anasof_utl",
      date: "1 de diciembre, 2025",
      comment: "¡Wow, qué proyecto tan completo! Soy del grupo IEVN-1002 de la Universidad Tecnológica de León y estoy desarrollando mi proyecto integrador sobre arquitectura de datos. El diagrama de arquitectura que proponen con las capas de ETL, almacenamiento y visualización es muy profesional. Me encantaría saber qué herramientas recomiendan para implementar el ETL en un caso como este. Power BI parece una buena opción pero ¿han probado con Tableau? 🚀",
      likes: 15,
      avatar: "AT",
      group: "IEVN-1002"
    }
  ];

  // Estado para los comentarios
  const [comments, setComments] = useState<Comment[]>([]);
  
  // Estado para mostrar/ocultar el formulario
  const [showForm, setShowForm] = useState(false);
  
  // Estado para el formulario
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    group: 'IEVN-1001',
    comment: ''
  });

  // Cargar comentarios del localStorage al iniciar
  useEffect(() => {
    const savedComments = localStorage.getItem('blogComments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    } else {
      setComments(initialComments);
      localStorage.setItem('blogComments', JSON.stringify(initialComments));
    }
  }, []);

  // Función para generar avatar (iniciales)
  const generateAvatar = (name: string): string => {
    const names = name.trim().split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Función para obtener la fecha actual formateada
  const getCurrentDate = (): string => {
    const months = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    const now = new Date();
    return `${now.getDate()} de ${months[now.getMonth()]}, ${now.getFullYear()}`;
  };

  // Manejar cambios en el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.username.trim() || !formData.comment.trim()) {
      alert('Por favor, completa todos los campos');
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      name: formData.name,
      username: formData.username.startsWith('@') ? formData.username : `@${formData.username}`,
      date: getCurrentDate(),
      comment: formData.comment,
      likes: 0,
      avatar: generateAvatar(formData.name),
      group: formData.group
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem('blogComments', JSON.stringify(updatedComments));

    // Resetear formulario
    setFormData({
      name: '',
      username: '',
      group: 'IEVN-1001',
      comment: ''
    });
    setShowForm(false);
  };

  // Manejar likes
  const handleLike = (commentId: number) => {
    const updatedComments = comments.map(comment =>
      comment.id === commentId
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    );
    setComments(updatedComments);
    localStorage.setItem('blogComments', JSON.stringify(updatedComments));
  };

  return (
    <div className="mt-12">
      {/* Section Header */}
      <div className="neomorph rounded-[25px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] p-8 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <MessageCircle className="w-6 h-6 text-white" />
          <h2 className="text-white">Opiniones de Lectores</h2>
        </div>
        <p className="text-white/90 leading-relaxed">
          Esto es lo que nuestros lectores opinan sobre los artículos del blog
        </p>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="neomorph rounded-[25px] bg-[#E9ECF5] p-6 hover:neomorph-lg transition-all duration-300"
          >
            {/* User Info */}
            <div className="flex items-start gap-4 mb-4">
              {/* Avatar */}
              <div className="neomorph-sm rounded-[18px] w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#5B7CFF] to-[#FF6B9D] flex-shrink-0">
                <span className="text-white font-semibold">{comment.avatar}</span>
              </div>

              {/* Name and Date */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-[#2D3748] !mb-0">{comment.name}</h4>
                  <span className="text-[#5B7CFF] text-sm">{comment.username}</span>
                </div>
                <p className="text-[#4A5568] text-sm">{comment.date}</p>
              </div>
            </div>

            {/* Comment Text */}
            <p className="text-[#2D3748] leading-relaxed mb-4 pl-[72px]">
              {comment.comment}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-4 pl-[72px]">
              <button 
                onClick={() => handleLike(comment.id)}
                className="neomorph-sm rounded-[15px] px-4 py-2 flex items-center gap-2 hover:neomorph transition-all duration-300 group"
              >
                <ThumbsUp className="w-4 h-4 text-[#5B7CFF] group-hover:text-[#FF6B9D] transition-colors" />
                <span className="text-sm text-[#4A5568] font-semibold">{comment.likes}</span>
              </button>
              <button className="text-[#5B7CFF] text-sm font-semibold hover:underline">
                Responder
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Comment CTA / Form */}
      {!showForm ? (
        <div className="neomorph-inset rounded-[25px] bg-[#E9ECF5] p-8 mt-8 text-center">
          <User className="w-12 h-12 text-[#5B7CFF] mx-auto mb-4" />
          <h3 className="text-[#2D3748] mb-2">¿Tienes algo que decir?</h3>
          <p className="text-[#4A5568] mb-4">
            Nos encantaría conocer tu opinión sobre nuestros artículos
          </p>
          <button 
            onClick={() => setShowForm(true)}
            className="neomorph rounded-[20px] bg-white text-[#5B7CFF] px-6 py-3 font-semibold hover:neomorph-lg transition-all duration-300"
          >
            Dejar un Comentario
          </button>
        </div>
      ) : (
        <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-8 mt-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Send className="w-6 h-6 text-[#5B7CFF]" />
              <h3 className="text-[#2D3748] !mb-0">Agregar Comentario</h3>
            </div>
            <button
              onClick={() => setShowForm(false)}
              className="neomorph-sm rounded-[15px] p-2 hover:neomorph transition-all duration-300"
            >
              <X className="w-5 h-5 text-[#4A5568]" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-[#2D3748] mb-2 font-semibold">
                Nombre Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ej: Juan Pérez López"
                className="w-full neomorph-inset rounded-[18px] bg-[#E9ECF5] px-5 py-3 text-[#2D3748] placeholder:text-[#4A5568]/50 focus:outline-none focus:neomorph transition-all duration-300"
                required
              />
            </div>

            {/* Username Input */}
            <div>
              <label className="block text-[#2D3748] mb-2 font-semibold">
                Usuario
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Ej: @juanperez_utl"
                className="w-full neomorph-inset rounded-[18px] bg-[#E9ECF5] px-5 py-3 text-[#2D3748] placeholder:text-[#4A5568]/50 focus:outline-none focus:neomorph transition-all duration-300"
                required
              />
            </div>

            {/* Group Select */}
            <div>
              <label className="block text-[#2D3748] mb-2 font-semibold">
                Grupo
              </label>
              <select
                name="group"
                value={formData.group}
                onChange={handleInputChange}
                className="w-full neomorph-inset rounded-[18px] bg-[#E9ECF5] px-5 py-3 text-[#2D3748] focus:outline-none focus:neomorph transition-all duration-300"
                required
              >
                <option value="IEVN-1001">IEVN-1001</option>
                <option value="IEVN-1002">IEVN-1002</option>
              </select>
            </div>

            {/* Comment Textarea */}
            <div>
              <label className="block text-[#2D3748] mb-2 font-semibold">
                Comentario
              </label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                placeholder="Escribe tu opinión sobre el artículo..."
                rows={5}
                className="w-full neomorph-inset rounded-[18px] bg-[#E9ECF5] px-5 py-3 text-[#2D3748] placeholder:text-[#4A5568]/50 focus:outline-none focus:neomorph transition-all duration-300 resize-none"
                required
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 neomorph rounded-[18px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] text-white px-6 py-3 font-semibold hover:neomorph-lg transition-all duration-300"
              >
                Publicar Comentario
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="neomorph rounded-[18px] bg-white text-[#4A5568] px-6 py-3 font-semibold hover:neomorph-lg transition-all duration-300"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
