import { Calendar, Clock, Tag, Search } from 'lucide-react';
import { useState } from 'react';
import { BlogPost, BlogPostData } from '../BlogPost';
import { blogPosts } from '../../data/blogPosts';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { LoadingScreen } from '../LoadingScreen';
import { UserComments } from '../UserComments';

export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPostData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    'all',
    'Business Intelligence',
    'Arquitectura de Negocios',
    'Modelo Estrella',
    'Experiencias del Equipo',
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePostClick = (post: BlogPostData) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedPost(post);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  const handleBackClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedPost(null);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  // If a post is selected, show the full post
  if (isLoading) {
    return <LoadingScreen />;
  }

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={handleBackClick} />;
  }

  return (
    <div className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Search */}
              <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-6">
                <h3 className="text-[#2D3748] font-semibold mb-4">Buscar Artículos</h3>
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-neomorph w-full"
                />
              </div>

              {/* Categories Filter */}
              <div className="neomorph rounded-[25px] bg-[#E9ECF5] p-6">
                <h3 className="text-[#2D3748] font-semibold mb-4">Categorías</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-5 py-3 rounded-[15px] transition-all duration-300 ${
                        selectedCategory === category
                          ? 'neomorph-inset text-[#5B7CFF] font-semibold'
                          : 'text-[#4A5568] hover:neomorph-sm'
                      }`}
                    >
                      {category === 'all' ? 'Todas las Categorías' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* About Widget */}
              <div className="neomorph rounded-[25px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] p-6 text-white">
                <h3 className="text-white font-semibold mb-3">Sobre Este Blog</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Un proyecto académico que explora Business Intelligence aplicado a Farmacias Similares en Acámbaro, Guanajuato.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-[#2D3748] mb-4">Blog</h1>
              <p className="text-[#4A5568] leading-relaxed">
                Artículos, análisis y reflexiones sobre Business Intelligence, Arquitectura de 
                Negocios y el Modelo Estrella aplicados a Farmacias Similares.
              </p>
            </div>

            {/* Blog Posts */}
            {filteredPosts.length > 0 ? (
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="neomorph-hover rounded-[25px] bg-[#E9ECF5] p-8 group cursor-pointer transform transition-all duration-300"
                    onClick={() => handlePostClick(post)}
                  >
                    {/* Post Image */}
                    {post.imageUrl && (
                      <div className="neomorph rounded-[20px] overflow-hidden mb-6">
                        <ImageWithFallback
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Category Tag */}
                    <div className="inline-flex items-center gap-2 neomorph-sm rounded-[15px] px-4 py-2 mb-4">
                      <Tag className="w-4 h-4 text-[#5B7CFF]" />
                      <span className="text-sm text-[#4A5568] font-medium">{post.category}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-[#2D3748] mb-3 group-hover:text-[#5B7CFF] transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[#4A5568] mb-6 leading-relaxed">
                      {post.content.introduction ? post.content.introduction[0] : ''}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center gap-6 text-sm text-[#4A5568] mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} de lectura</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <button className="text-[#5B7CFF] font-semibold hover:underline">
                      Leer artículo completo →
                    </button>
                  </article>
                ))}

                {/* User Comments Section */}
                <UserComments />
              </div>
            ) : (
              // Empty State
              <div className="neomorph-inset rounded-[25px] bg-[#E9ECF5] p-12 text-center">
                <Search className="w-12 h-12 text-[#4A5568] mx-auto mb-4 opacity-40" />
                <h3 className="text-[#2D3748] mb-2">No se encontraron artículos</h3>
                <p className="text-[#4A5568]">
                  Intenta con otros términos de búsqueda o selecciona una categoría diferente
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}