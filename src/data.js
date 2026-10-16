export const stackGroups = [
  {
    k: "Frontend",
    icon: "monitor",
    items: ["React", "Next.js", "Tailwind", "JavaScript"],
  },
  { k: "Backend", icon: "db", items: ["Laravel", "PHP", "MySQL", "Supabase"] },
  { k: "Also", icon: "chip", items: ["ESP32", "Git", "Figma"] },
];

export const projects = [
  {
    name: "Quran Class Management System",
    status: "LIVE",
    icon: "book",
    stack: ["Laravel", "MySQL"],
    link: "https://an-nur-quran.netlify.app/",
    desc: "Students, tutors, attendance, fees and PDF receipts in one dashboard.",
  },
  {
    name: "Study Workspace",
    status: "PROTOTYPE",
    icon: "books",
    stack: ["React", "Supabase"],
    link: "https://github.com/iamsyahirah/studora",
    desc: "Assignments, tasks and class schedules for students, in one place.",
  },
  {
    name: "Deadline Tracker",
    status: "LIVE",
    icon: "clock",
    stack: ["React", "Supabase"],
    link: "https://deadline-expiry-tracker.ira-dev.workers.dev",
    desc: "Never miss a bill or subscription renewal again.",
  },
  {
    name: "Orbit Attendance",
    status: "DEMO",
    icon: "check",
    stack: ["Laravel", "Chart.js"],
    desc: "Staff clock-ins, lateness and absences at a glance.",
  },
];
