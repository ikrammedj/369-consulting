import * as React from "react";
import { ArrowRight, Target, Leaf, Users, Zap, TrendingUp, Globe, Briefcase } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="h-10 w-16 sm:h-12 sm:w-20">
            <img
              src="./logo.png"
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>
          
          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#services" className="text-base lg:text-lg hover:text-accent transition-colors">
              Expertise
            </a>
            <a href="#expertise" className="text-base lg:text-lg hover:text-accent transition-colors">
              Approche
            </a>
            <a href="#contact" className="text-base lg:text-lg hover:text-accent transition-colors">
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {/* Vous pouvez ajouter un menu burger ici si nécessaire */}
          </div>
          
          {/* Contact Button */}
          <a href="tel:+213659507399">
            <button className="bg-accent text-accent-foreground px-4 py-2 sm:px-6 sm:py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
              Contactez-nous
            </button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        <div className="spotlight hidden lg:block" style={{ width: "800px", height: "800px", top: "-300px", right: "-200px" }}></div>
        <div className="spotlight hidden lg:block" style={{ width: "800px", height: "800px", bottom: "50px", left: "-300px" }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight text-accent">
            DU CONSEIL À LA RÉUSSITE  
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 text-balance max-w-2xl mx-auto px-4">
            Combinez rentabilité et durabilité pour transformer vos projets. Une analyse financière
            rigoureuse associée à une évaluation ESG complète.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a href="tel:+213659507399">
              <button className="bg-accent text-accent-foreground px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full sm:w-auto">
                Contactez-nous <ArrowRight size={18} />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-4 lg:space-y-6 lg:pr-8 xl:pr-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-accent">Notre mission</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Nous sommes convaincus que durabilité et rentabilité vont de pair. Notre approche d'investissement combine une analyse financière rigoureuse avec une évaluation complète des facteurs environnementaux, sociaux et de gouvernance (ESG). En investissant dans des projets conformes à nos critères de durabilité, nous pouvons atténuer les risques, améliorer la rentabilité à long terme et contribuer à des résultats sociaux et environnementaux positifs.
              Nous apportons à cette mission les valeurs et principes des Nations Unies ainsi que l'innovation, l'amélioration continue et l'excellence opérationnelle au quotidien.
            </p>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-[4/5] rounded-2xl lg:rounded-3xl overflow-hidden bg-secondary">
              <img
                src="./Unknown.jpg"
                alt="Consulting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        <div className="spotlight hidden lg:block" style={{ width: "700px", height: "700px", top: "-200px", left: "-300px" }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-accent">Nos valeurs fondamentales</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-card rounded-lg border border-border p-6 sm:p-8">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Excellence opérationnelle</h3>
              <p className="text-muted-foreground">
                Optimisation des processus et amélioration continue pour maximiser l'efficacité et la performance.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 sm:p-8">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Partenariat et croissance partagée</h3>
              <p className="text-muted-foreground">
                Collaboration étroite avec nos clients pour créer de la valeur mutuelle et durable.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 sm:p-8">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Apprentissage continu</h3>
              <p className="text-muted-foreground">
                Renforcement des capacités et développement des compétences pour une transformation durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Expertise */}
      <section
        id="services"
        className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
      >
        <div className="spotlight hidden lg:block" style={{ width: "800px", height: "800px", bottom: "100px", right: "-200px" }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-accent">Notre expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-card rounded-lg border border-border p-6 sm:p-8">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Développement stratégique et institutionnel</h3>
              <p className="text-muted-foreground mb-4">
                Gestion de projets complexes, structuration institutionnelle et accompagnement stratégique pour
                transformer vos organisations.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Stratégie d'entreprise</li>
                <li>• Gouvernance institutionnelle</li>
                <li>• Gestion de projets</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 sm:p-8">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Gestion de chaîne de valeur</h3>
              <p className="text-muted-foreground mb-4">
                Optimisation des chaînes de valeur, intégration technologique et amélioration de la durabilité
                opérationnelle.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Optimisation des processus</li>
                <li>• Transformation numérique</li>
                <li>• Durabilité opérationnelle</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 sm:p-8">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Incubation de startups</h3>
              <p className="text-muted-foreground mb-4">
                Mentorat, développement commercial, accompagnement au financement et scaling pour les entrepreneurs
                innovants.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Mentorat entrepreneurial</li>
                <li>• Développement commercial</li>
                <li>• Support au financement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Approach */}
      <section
        id="expertise"
        className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
      >
        <div className="spotlight hidden lg:block" style={{ width: "700px", height: "700px", top: "-200px", left: "-300px" }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-accent">Approche sectorielle</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-foreground">Secteur public</h3>
              <p className="text-sm text-muted-foreground">
                Conformité réglementaire, transformation institutionnelle et modernisation des services.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <Briefcase className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-foreground">Secteur privé</h3>
              <p className="text-sm text-muted-foreground">
                Innovation, compétitivité et création de valeur pour les entreprises en croissance.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-foreground">Secteur institutionnel</h3>
              <p className="text-sm text-muted-foreground">
                Renforcement des capacités et transformation organisationnelle des institutions.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">Approche fonctionnelle</h3>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h4 className="font-bold mb-3 text-accent">Domaines clés</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Stratégie et planification</li>
                  <li>• Opérations et amélioration des processus</li>
                  <li>• Ressources humaines et talent</li>
                  <li>• Transformation numérique</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-accent">Domaines complémentaires</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Engagement des parties prenantes</li>
                  <li>• ESG et responsabilité sociale</li>
                  <li>• Marketing et branding</li>
                  <li>• Communication stratégique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background text-foreground overflow-hidden"
      >
        <div className="spotlight hidden lg:block" style={{ width: "700px", height: "700px", top: "-200px", left: "-300px" }}></div>
        <div className="spotlight hidden lg:block" style={{ width: "600px", height: "600px", bottom: "100px", right: "-200px" }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Prêt à transformer votre impact ?</h2>
          <p className="text-lg mb-6 sm:mb-8 text-muted-foreground text-balance">
            Contactez-nous pour discuter de vos projets et découvrir comment 369 peut vous accompagner vers la
            durabilité et la rentabilité.
          </p>
          <a href="tel:+213659507399">
            <button className="bg-accent text-accent-foreground px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mx-auto">
              Contactez-nous <ArrowRight size={18} />
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <img
                src="./logo.png"
                alt="Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 mb-3"
              />
              <p className="text-sm text-muted-foreground">Investir pour impacter</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-foreground">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:contact@369.dz" className="hover:text-accent transition-colors">
                    contact@369.dz
                  </a>
                </li>
                <li>
                  <a href="tel:+213659507399" className="hover:text-accent transition-colors">
                    +213 (0) 659 507 399
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 sm:pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 369 Consulting. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}