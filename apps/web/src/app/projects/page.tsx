import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Container } from '@repo/ui';
import { Display, Text } from '@repo/ui';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui';
import { Badge } from '@repo/ui';
import { Button } from '@repo/ui';
import Link from 'next/link';

const Icon = dynamic(
  () => import('@repo/ui').then((mod) => ({ default: mod.Icon })),
  {
    loading: () => <div className="bg-muted h-4 w-4 animate-pulse rounded" />,
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A collection of projects showcasing modern web development and full-stack solutions.',
};

const projects = [
  {
    title: 'Modern Developer Portfolio',
    description:
      'A performant portfolio built with Next.js 14, TypeScript, and Tailwind CSS v4.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Contentlayer'],
    github: 'https://github.com/mokwa/portfolio',
    demo: 'https://mokwamoffatportfollio.vercel.app',
    status: 'Live',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with payment integration and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/mokwa/ecommerce',
    demo: 'https://demo-ecommerce.vercel.app',
    status: 'In Progress',
  },
  {
    title: 'Task Management API',
    description:
      'RESTful API for task management with authentication and real-time updates.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/mokwa/task-api',
    status: 'Completed',
  },
];

export default function Projects() {
  return (
    <Container className="py-16">
      <div className="mb-12 text-center">
        <Display className="mb-4">Projects</Display>
        <Text size="xl" variant="muted" className="mx-auto max-w-2xl">
          A collection of projects showcasing modern web development and
          full-stack solutions.
        </Text>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <Badge
                  variant={
                    project.status === 'Live'
                      ? 'default'
                      : project.status === 'In Progress'
                        ? 'secondary'
                        : 'outline'
                  }
                >
                  {project.status}
                </Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between">
              <div className="mb-4">
                <div className="mb-4 flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="github" className="mr-1 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                {project.demo && (
                  <Button size="sm" asChild className="flex-1">
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="external-link" className="mr-1 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
