import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Badge animé */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 rounded-full text-emerald-700 dark:text-emerald-300 text-sm font-medium animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Disponible pour de nouveaux projets
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight px-4">
            Salut, je suis{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
  Junior Omar OUEDRAOGO
</span>

          </h1>
          
          {/* Sous-titre */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium px-4">
            Développeur Full Stack 
          </h2>

          {/* Tags de compétences */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 max-w-4xl mx-auto">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 transition-transform cursor-default shadow-sm">
              Laravel
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-200 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 transition-transform cursor-default shadow-sm">
              Tailwind CSS
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 transition-transform cursor-default shadow-sm">
              Node.js
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 transition-transform cursor-default shadow-sm">
              React / Next.js
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 transition-transform cursor-default shadow-sm">
              Sécurité & Réseau
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 transition-transform cursor-default shadow-sm">
              DevOps
            </span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Développeur Full Stack spécialisé dans la conception et le développement d'applications web modernes.
            J'interviens aussi bien sur le front-end que le back-end, en veillant à la performance, à la sécurité et à la maintenabilité du code.
            Mes connaissances en réseaux informatiques et sécurité me permettent d'avoir une vision globale des systèmes et de proposer des solutions robustes, adaptées aux besoins réels des utilisateurs.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 pt-4">
            <Link
              href="/projects"
              className="group px-6 sm:px-8 py-3 sm:py-3.5 bg-slate-900 dark:bg-blue-600 text-white rounded-xl hover:bg-slate-800 dark:hover:bg-blue-700 transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span className="flex items-center justify-center gap-2">
                Voir mes projets
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-blue-500 text-slate-900 dark:text-white rounded-xl hover:bg-slate-900 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-base sm:text-lg shadow-md hover:shadow-lg hover:scale-105 transform"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Section des services */}
      <section className="bg-white dark:bg-slate-800 py-12 sm:py-16 md:py-20 border-t border-gray-100 dark:border-slate-700 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Ce que je fais
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Des solutions complètes pour vos projets digitaux
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-800 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">Développement Web</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Applications web modernes et performantes avec les dernières technologies et les meilleures pratiques
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-slate-800 p-6 sm:p-8 rounded-2xl border border-green-100 dark:border-green-800 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">Sécurité</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Protection avancée des applications contre les vulnérabilités, audits de sécurité et mise en conformité
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-slate-800 p-6 sm:p-8 rounded-2xl border border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">Infrastructure</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Configuration et gestion optimale de réseaux, serveurs et environnements cloud pour une performance maximale
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}