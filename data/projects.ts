export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Riadel",
    description: "Application web d'entrepreneuriat, qui offre des services tels que les aides, accompagnements et des formations. Elle permet aussi de générer des revenus passifs grâce à un système d'affilation et offre un réseau social grâce à un forum et un espace de chat où les utilisateurs peuvent interagir afin d'échanger des expériences.",
    technologies: ["Laravel", "Blade", "MySQL", "PHP", "Tailwind CSS", "Reverb", "JavaScript", "Livewire"],
    demoUrl: "https://riadel-bf.com",
    imageUrl: "/images/riadel.jpg"
  },
  {
    id: 2,
    title: "Mila ice cream",
    description: "Application web de vente en ligne de glaces. Il a pour but de permettre aux caissiers de gérer les commandes et les stocks, et permet à l'administrateur de gérer les produits, les caissiers et les transactions de ceux-ci.",
    technologies: ["Laravel", "Blade", "MySQL", "PHP", "Livewire"],
    githubUrl: "https://github.com/Ouedraogo-junior/Mille_Ice_Cream_project",
    demoUrl: "https://millaicecream.com/",
    imageUrl: "/images/mila.png"
  },
  {
    id: 3,
    title: "Task Management",
    description: "Task Management est une application web moderne permettant de gérer efficacement les tâches d'un projet. Elle propose un tableau de type Kanban avec des colonnes « À faire », « En cours » et « Terminé », offrant une vue claire de l'avancement des tâches. Chaque tâche peut inclure des informations importantes telles que la date de création, l'assignation à un utilisateur et son statut.",
    technologies: ["Node.js", "Express", "React", "Tailwind CSS", "MySQL"],
    githubUrl: "https://github.com/Ouedraogo-junior/task-management-api",
    // demoUrl: "https://admin-demo.com",
    imageUrl: "/images/task.png"
  },
  {
    id: 4,
    title: "Gestion de salon de coiffure",
    description: "Logiciel de gestion destiné à un salon de coiffure, permettant de suivre les rendez-vous, les prestations et les paiements au quotidien.",
    technologies: ["React", "Laravel", "MySQL", "PHP", "Tailwind CSS"],
    githubUrl: "https://github.com/Ouedraogo-junior/Projet_gestion_salon",
    demoUrl: "https://app.millaicecream.com",
    imageUrl: "/images/salon-coiffure.jpg"
  },
  {
    id: 5,
    title: "Gestion d'école",
    description: "Logiciel web de gestion destiné à un établissement scolaire : suivi des élèves, des classes et de la scolarité.",
    technologies: ["React", "Laravel", "MySQL", "PHP", "Tailwind CSS"],
    githubUrl: "https://github.com/Ouedraogo-junior/logiciel_gestion_ecole",
    demoUrl: "https://app.fasodev.com",
    imageUrl: "/images/fasodev.jpg"
  },
  {
    id: 6,
    title: "Hamed Telecom, Gestion de vente",
    description: "Logiciel de gestion de vente multi-boutique, permettant de suivre les stocks, les ventes et les transactions de plusieurs points de vente.",
    technologies: ["React", "Laravel", "MySQL", "PHP", "Tailwind CSS"],
    githubUrl: "https://github.com/Ouedraogo-junior/gestion_multi_boutique",
    demoUrl: "https://hamedtelecom.millaicecream.com",
    imageUrl: ""
  },
  {
    id: 7,
    title: "GLOZI",
    description: "Application mobile actuellement en cours de développement.",
    technologies: ["React Native"],
    imageUrl: "/images/glozi.png"
  },
  {
    id: 8,
    title: "Zenbet",
    description: "Site de paris sportifs publiant des informations sur les matchs et les paris, et permettant aux utilisateurs d'investir.",
    technologies: ["Laravel", "Livewire", "Blade", "MySQL", "PHP"],
    githubUrl: "https://github.com/Ouedraogo-junior/ps_sport",
    demoUrl: "https://zzenbet.com/",
    imageUrl: ""
  }
];