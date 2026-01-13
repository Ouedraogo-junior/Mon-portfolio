export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
        À propos de moi
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Mon Parcours
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Passionné par l'informatique depuis mon plus jeune âge, j'ai développé mes compétences 
          à travers des formations académiques et une pratique constante. Mon parcours m'a permis 
          d'acquérir une solide expertise en développement web full stack.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Actuellement, je me spécialise dans la création d'applications web modernes et performantes, 
          tout en maintenant un focus important sur la sécurité et l'infrastructure réseau.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Mes Orientations
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              🌐 Développement Web
            </h3>
            <p className="text-gray-700">
              Création d'applications web modernes et responsives avec Laravel, React, Next.js, etc. 
              Je maîtrise l'ensemble du stack, du frontend au backend, en passant par les bases de données 
              et les API REST.
            </p>
          </div>

          {/* <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              🔒 Sécurité Informatique
            </h3>
            <p className="text-gray-700">
              Sensibilisé aux enjeux de cybersécurité, j'intègre les bonnes pratiques OWASP dans mes projets. 
              Je m'intéresse aux tests de pénétration web et à l'analyse de vulnérabilités pour créer 
              des applications robustes et sécurisées.
            </p>
          </div> */}

          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              🖥️ Réseau & Infrastructure
            </h3>
            <p className="text-gray-700">
              Compétences en administration système Linux, configuration réseau (TCP/IP, DNS, DHCP). Je comprends l'importance d'une infrastructure 
              bien configurée pour garantir performance et disponibilité.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ce que je recherche
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Je suis à la recherche d'opportunités professionnelles qui me permettront de continuer 
          à développer mes compétences techniques tout en contribuant à des projets stimulants.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Mon objectif est de travailler dans un environnement où je pourrai combiner mes compétences 
          en développement web, sécurité et infrastructure pour créer des solutions complètes et innovantes.
        </p>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-gray-800 font-semibold">
            💼 Ouvert aux opportunités : Stage, Alternance, CDI
          </p>
          <p className="text-gray-600 mt-2">
            N'hésitez pas à me contacter pour discuter de potentielles collaborations !
          </p>
        </div>
      </div>
    </div>
  );
}