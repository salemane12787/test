import React from 'react';

const PoleIndustrie: React.FC = () => {
  const trainers = [
    { name: 'Mm. Hind', photo: '' },
    { },
    {  },
    { },
  ];

  const handleBack = () => {
    window.location.hash = '';
  };

  return (
    <div className="font-sans text-gray-800 w-full">
      <header className="bg-gray-200 p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#005A9E]">
            Pôle Industrie
          </h1>
          <button
            onClick={handleBack}
            aria-label="Retour"
            className="bg-[#005A9E] text-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8 space-y-8">
        {/* Map Section */}
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-[#005A9E]">Plan du Pôle</h2>
          <div className="bg-gray-200 rounded">
            <img 
              src="https://via.placeholder.com/800x400.png?text=Pole+Map+Placeholder" 
              alt="Plan du Pôle Industrie"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </section>

        {/* Formations Section */}
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-[#005A9E]">Les Formations Disponibles</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Génie Mécanique</li>
            <li>Électromécanique des Systèmes Automatisés</li>
            <li>Techniques des Équipements Automobiles</li>
            <li>Maintenance Industrielle</li>
            <li>Gestion et Management Hôtelier</li>
          </ul>
        </section>

        {/* Trainers Section */}
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-[#005A9E]">Nos Formateurs Principaux</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {trainers.map((trainer, index) => (
              <div key={index} className="flex flex-col items-center">
                <img 
                  src={trainer.photo} 
                  alt={`Photo de ${trainer.name}`}
                  className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white mb-2" 
                />
                <p className="font-medium text-gray-700">{trainer.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-auto p-8">
        <div className="ad-space border-2 border-dashed border-gray-400 p-8 text-center text-gray-500 bg-gray-100 rounded-lg">
          Espace Publicitaire
        </div>
      </footer>
    </div>
  );
};

export default PoleIndustrie;