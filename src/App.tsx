import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { CategoriesPage } from './components/pages/CategoriesPage';
import { BlogPage } from './components/pages/BlogPage';
import { ContactPage } from './components/pages/ContactPage';
import { LoadingScreen } from './components/LoadingScreen';
import { PreloadScreen } from './components/PreloadScreen';

type Page = 'inicio' | 'acerca' | 'categorias' | 'blog' | 'contacto';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('inicio');
  const [isLoading, setIsLoading] = useState(false);
  const [isPreloading, setIsPreloading] = useState(true);

  const handleNavigate = (page: Page) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  const handlePreloadFinish = () => {
    setIsPreloading(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <HomePage onNavigate={handleNavigate} />;
      case 'acerca':
        return <AboutPage />;
      case 'categorias':
        return <CategoriesPage />;
      case 'blog':
        return <BlogPage />;
      case 'contacto':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#E9ECF5] flex flex-col">
      {isPreloading && <PreloadScreen onFinish={handlePreloadFinish} />}
      {isLoading && <LoadingScreen />}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}