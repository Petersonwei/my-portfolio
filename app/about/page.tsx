import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const skills = {
    programming: {
      title: "Programming Skills",
      items: [
        "Python", "C", "C#", "C++", "HTML", "SQL", "PHP", "CSS", "JavaScript", "TypeScript",
        "VBA", "R-Studio", "REST API", "React", "NextJS", "NestJS", "NodeJS", ".NET",
        "GraphQL", "MongoDB", "Linux"
      ]
    },
    cloud: {
      title: "Cloud Technologies",
      items: [
        "Cloud Computing", "AWS", "Google Cloud", "Docker", "Kubernetes", "Swarm",
        "Heroku", "Internet of Things", "AI agent"
      ]
    },
    dataAnalysis: {
      title: "Data Analysis & Visualization",
      items: [
        "Pandas", "Matplotlib", "Seaborn", "R Studio", "Power BI", "Flourish"
      ]
    },
    machineLearning: {
      title: "Machine Learning",
      items: [
        "Business Analysis", "Data Science", "Statistic", "Logistic Regression",
        "K-means Clustering"
      ]
    },
    webAndSEO: {
      title: "Web & SEO",
      items: [
        "Human Centred Design", "Shopify", "WordPress", "Elementor", "Figma",
        "SEO", "Web analytics", "Swagger"
      ]
    },
    collaboration: {
      title: "Collaboration Tools",
      items: [
        "PowerPoint", "Word", "Excel", "Notion", "Google Meet", "Zoom",
        "Microsoft Teams"
      ]
    },
    soft: {
      title: "Soft Skills",
      items: [
        "Analytical thinking", "Design thinking", "Problem-solving",
        "Teamwork", "Leadership", "Project management", "Agile"
      ]
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">About Me</h1>
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Highly skilled Full Stack Developer and Front-End Developer with a strong IT background, specializing in building scalable and user-friendly 
            web applications using modern frameworks such as React, Node.js, and Next.js with cloud technologies. With comprehensive experience in developing 
            impactful solutions, I am a proactive collaborator and problem-solver, applying Agile principles and innovative approaches to deliver advanced digital solutions. 
            Committed to driving technological innovation, I combine technical expertise with a passion for enhancing UI/UX design, consistently delivering measurable business value.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">Master of Information Technology</h3>
            <p>The University of Queensland, Brisbane QLD, Australia</p>
            <p>Jul 2023 – Jun 2025 | CGPA: Distinction</p>
          </div>
          <div>
            <h3 className="font-semibold">Study Abroad Program</h3>
            <p>University of New South Wales, Sydney NSW, Australia</p>
            <p>Sep 2022 – Jun 2023</p>
          </div>
          <div>
            <h3 className="font-semibold">Bachelor of Business Administration</h3>
            <p>Tunghai University, Taiwan</p>
            <p>Jul 2019 – Jun 2023 | CGPA: 83.83/100, Two-time Dean&apos;s List recipient</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([key, { title, items }]) => (
            <div key={key} className="space-y-2">
              <h3 className="font-semibold text-lg border-b pb-2">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
