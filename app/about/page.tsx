import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const skills = [
    "React", "Node.js", "Next.js", "TypeScript", "JavaScript", "Python", "Java", "C#", "HTML", "CSS",
    "SQL", "MongoDB", "AWS", "Docker", "Git", "RESTful APIs", "GraphQL", "Agile", "UI/UX Design"
  ]

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
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
