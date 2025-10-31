import React from 'react';

const HomePage: React.FC = () => {
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#pole-industrie';
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://emotional-coral-okuaswzsku.edgeone.app/1.png" alt="CMC Logo" className="h-10 mr-3" />
            <h1 className="text-2xl font-bold text-[#005A9E]">CMC Guide</h1>
          </div>
          <a
            href="#pole-industrie"
            onClick={handleNavigate}
            className="bg-[#005A9E] text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Découvrir le Pôle
          </a>
        </nav>
      </header>
      
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Bienvenue sur Notre Projet</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ceci est le contenu principal du site web, qui devient visible après l'écran de chargement.
            Cela garantit une expérience utilisateur fluide et professionnelle pendant que les ressources et les données sont préparées en arrière-plan.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Transitions Fluides</h3>
              <p className="text-gray-600">Le préchargeur offre un point d'entrée épuré à l'application, empêchant les utilisateurs de voir du contenu partiellement chargé.</p>
            </div>
            <img 
              src="https://normal-coffee-mfp1irfi2x.edgeone.app/498248444_759318486610256_4382464077658604328_n.jpg" 
              alt="Placeholder"
              className="rounded-lg shadow-md object-cover w-full h-64" 
            />
          </div>
        </div>
      </main>

      <footer className="bg-white mt-auto py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <img src="https://emotional-coral-okuaswzsku.edgeone.app/1.png" alt="OFPPT Logo" className="h-16" />
          <p className="text-gray-500">
            &copy; 2025 CMC Guide. Tous droits réservés.
          </p>
          <img src="https://operational-gold-fcaecbsoxe.edgeone.app/2.png" alt="CMC Logo" className="h-16" />
        </div>
      </footer>
    </>
  );
};

export default HomePage;