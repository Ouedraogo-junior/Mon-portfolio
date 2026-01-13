import { skillsData } from "@/data/skills";

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Mes Compétences
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Un aperçu des technologies et outils que je maîtrise
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">
              {category.category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition-colors font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">
          🚀 Toujours en apprentissage
        </h2>
        <p className="text-lg leading-relaxed">
          Le domaine du développement évolue constamment. Je reste à l'affût des nouvelles 
          technologies et des meilleures pratiques pour offrir des solutions modernes et performantes. 
        </p>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-4xl mb-2">💻</div>
          <h3 className="font-bold text-gray-900 mb-2">Clean Code</h3>
          <p className="text-gray-600 text-sm">
            Code maintenable et bien documenté
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-4xl mb-2">🔄</div>
          <h3 className="font-bold text-gray-900 mb-2">Méthodologie Agile</h3>
          <p className="text-gray-600 text-sm">
            Développement itératif et collaboratif
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-4xl mb-2">🧪</div>
          <h3 className="font-bold text-gray-900 mb-2">Tests & Qualité</h3>
          <p className="text-gray-600 text-sm">
            Tests unitaires et d'intégration
          </p>
        </div>
      </div>
    </div>
  );
}