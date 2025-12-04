import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface BlogPostData {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  content: {
    introduction?: string[];
    sections: {
      title: string;
      paragraphs: string[];
    }[];
    conclusion?: string[];
  };
  imageUrl?: string;
}

interface BlogPostProps {
  post: BlogPostData;
  onBack: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  return (
    <div className="px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="neomorph rounded-[18px] bg-[#E9ECF5] px-6 py-3 mb-8 inline-flex items-center gap-2 text-[#4A5568] hover:text-[#2D3748] hover:neomorph-sm transition-all duration-300 transform hover:scale-105 hover:-translate-x-1"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Volver al Blog
        </button>

        {/* Post Header */}
        <header className="mb-12">
          {/* Featured Image */}
          {post.imageUrl && (
            <div className="neomorph rounded-[25px] overflow-hidden mb-8">
              <ImageWithFallback
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          )}

          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 neomorph-sm rounded-[15px] px-4 py-2 mb-6">
            <Tag className="w-4 h-4 text-[#5B7CFF]" />
            <span className="text-sm text-[#4A5568] font-medium">{post.category}</span>
          </div>
          
          <h1 className="text-[#2D3748] mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-sm text-[#4A5568]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} de lectura</span>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-8 md:p-12">
          {/* Introduction */}
          {post.content.introduction && (
            <div className="mb-10">
              {post.content.introduction.map((paragraph, index) => (
                <p key={index} className="text-[#4A5568] mb-4 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Sections */}
          {post.content.sections.map((section, index) => (
            <section key={index} className="mb-10">
              <h2 className="text-[#2D3748] mb-4">{section.title}</h2>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-[#4A5568] mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {/* Conclusion */}
          {post.content.conclusion && (
            <div className="neomorph-inset rounded-[20px] bg-[#E9ECF5] p-6 md:p-8 mt-10">
              {post.content.conclusion.map((paragraph, index) => (
                <p key={index} className="text-[#4A5568] mb-4 leading-relaxed last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Post Footer */}
        <div className="mt-8 neomorph rounded-[25px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] p-8 text-white text-center">
          <h3 className="text-white mb-3">¿Te gustó este artículo?</h3>
          <p className="text-white/90 mb-6 leading-relaxed">
            Nos encantaría conocer tu opinión. ¿Tienes preguntas, comentarios o sugerencias? 
            Visita nuestra sección de contacto para enviarnos un mensaje.
          </p>
          <button className="neomorph rounded-[18px] bg-white text-[#5B7CFF] px-8 py-3 font-semibold hover:neomorph-sm transition-all duration-300 transform hover:scale-105">
            Dejar un Comentario
          </button>
        </div>
      </div>
    </div>
  );
}