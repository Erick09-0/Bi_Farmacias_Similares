export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#E9ECF5] flex items-center justify-center z-50 animate-fadeIn">
      <div className="text-center flex flex-col items-center">
        {/* Logo/Icon Container */}
        <div className="neomorph rounded-[25px] p-8 mb-6">
          <div className="relative w-20 h-20">
            {/* Animated Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-4 border-[#5B7CFF] border-t-transparent animate-spin"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5B7CFF] to-[#FF6B9D] animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="neomorph-sm rounded-[20px] px-6 py-3">
          <p className="text-[#5B7CFF] font-semibold animate-pulse">
            Cargando...
          </p>
        </div>
      </div>
    </div>
  );
}