import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'inicio' | 'acerca' | 'categorias' | 'blog' | 'contacto';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio' as Page, label: 'Inicio' },
    { id: 'acerca' as Page, label: 'Acerca del Proyecto' },
    { id: 'categorias' as Page, label: 'Categorías' },
    { id: 'blog' as Page, label: 'Blog' },
    { id: 'contacto' as Page, label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 py-6">
      <nav className="max-w-7xl mx-auto neomorph rounded-[25px] bg-[#E9ECF5] px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => onNavigate('inicio')}
            className="flex items-center gap-3 group transition-all duration-300"
          >
            <div className="w-12 h-12 neomorph rounded-[18px] bg-gradient-to-br from-[#5B7CFF] to-[#4A5FCC] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white text-xl font-bold">BI</span>
            </div>
            <span className="text-[#2D3748] font-bold text-lg hidden sm:block group-hover:text-[#5B7CFF] transition-colors duration-300">BI Académico</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-6 py-3 rounded-[18px] transition-all duration-300 transform hover:scale-105 ${
                  currentPage === item.id
                    ? 'neomorph-inset text-[#5B7CFF] font-semibold'
                    : 'text-[#4A5568] hover:text-[#2D3748] font-medium hover:neomorph-sm'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden neomorph rounded-[15px] p-3 transition-all duration-300 active:neomorph-inset"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#2D3748]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2D3748]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-[rgba(0,0,0,0.05)] animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-6 py-4 mb-2 rounded-[18px] transition-all duration-300 transform hover:scale-[1.02] ${
                  currentPage === item.id
                    ? 'neomorph-inset text-[#5B7CFF] font-semibold'
                    : 'text-[#4A5568] hover:neomorph-sm hover:text-[#2D3748]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}