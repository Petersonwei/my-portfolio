import { Timeline } from "@/components/timeline"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Vexit IT Consulting, Brisbane QLD, Australia",
      date: "July 2024 – Present",
      description: [
        "Developed a dynamic data wiki page with Next.js, React, ShadCN UI, integrated with a .NET backend using Azure DevOps and Agile."
      ]
    },
    {
      title: "IT Developer Intern",
      company: "Easy Skill, Brisbane QLD, Australia",
      date: "Aug 2024 – Dec 2024",
      description: [
        "Developed a payroll system managing 1,500+ projects, leveraging React, Vite, Tailwind CSS, TypeScript, Axios, MongoDB, and Nest.js to streamline payroll data processing and generate accurate PDFs.",
        "Integrated with Boond Manager and deployed via AWS CI/CD pipelines."
      ]
    },
    {
      title: "Web Developer & Co-Founder",
      company: "Dribag Coffee Co., Brisbane QLD, Australia",
      date: "Aug 2024 – Present",
      description: [
        "Led Shopify development and SEO strategy, securing corporate clients, and generating 30K+ social media views."
      ]
    },
    {
      title: "Web Developer Intern",
      company: "AxCharge Ltd. Pty, Brisbane QLD, Australia",
      date: "Apr 2024 – Present",
      description: [
        "Developed and launched the official website for a start-up team of 4, increasing user engagement by 30% through innovative UI/UX design.",
        "Created optimized content and delivered daily IT support, ensuring seamless operations and prompt resolution of technical issues with HTML, CSS, JavaScript, WordPress, and Adobe Tools."
      ]
    },
    {
      title: "Web Master",
      company: "Rotary Club of Brisbane, Brisbane QLD, Australia",
      date: "Mar 2024 – Present",
      description: [
        "Redesigned and updated the Rotary Club of Brisbane's website, enhancing content accessibility and user engagement by 25% using HTML, CSS, and Club Runner in collaboration with the executive team."
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Work Experience</h1>
      <Timeline items={experiences} />
    </div>
  )
}

