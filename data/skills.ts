export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React / Next.js",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "JavaScript ES6+",
        "Bootstrap"
    ]
  },
  {
    category: "Backend",
    skills: [
      "PHP / Laravel",
      "Node.js",
    ]
  },
  {
    category: "Mobile",
    skills: [
      "React Native",
      "Flutter(Dart)",
    ]
  },
  {
    category: "Base de données",
    skills: [
      "SQLite",
      "MySQL",
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
      "Firewall & VPN",
    ]
  }
];