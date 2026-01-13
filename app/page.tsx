import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Salut, je suis <span className="text-blue-600">Junior Omar OUEDRAOGO</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            Développeur Full Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
              Laravel
            </span>
            <span className="px-4 py-2 bg-green-100 text-black-800 rounded-full font-semibold">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
              Node.js
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-semibold">
              React / Next.js
            </span>
            <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full font-semibold">
              Sécurité & Réseau
            </span>
            <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-semibold">
              DevOps
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Passionné par le développement web, la sécurité informatique et l'administration réseau. 
            Je crée des applications performantes et sécurisées.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-semibold text-lg"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Section rapide */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Développement Web</h3>
              <p className="text-gray-600">Applications modernes et performantes avec les dernières technologies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sécurité</h3>
              <p className="text-gray-600">Protection des applications contre les vulnérabilités et menaces</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
              <p className="text-gray-600">Configuration et gestion de réseaux et serveurs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}