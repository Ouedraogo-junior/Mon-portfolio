export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React / Next.js",
      "TypeScript / JavaScript ES6+",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Bootstrap"
    ]
  },
  {
    category: "Backend",
    skills: [
      "PHP / Laravel",
      "Node.js (Express, Fastify)",
      "Prisma"
    ]
  },
  {
    category: "Mobile",
    skills: [
      "Flutter (Dart)",
      "React Native"
    ]
  },
  {
    category: "Base de données",
    skills: [
      "PostgreSQL",
      "Supabase",
      "MySQL",
      "SQLite",
      "Redis",
      "Access"
    ]
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      "Git / GitHub",
      "Linux Administration",
      "Nginx / Apache",
      "AWS / VPS"
    ]
  },
  {
    category: "Réseau & Sécurité",
    skills: [
      "Configuration Réseau (TCP/IP, DNS, DHCP)",
      "Firewall & VPN"
    ]
  }
];