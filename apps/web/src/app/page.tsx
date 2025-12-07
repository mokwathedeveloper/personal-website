import { Button } from '@repo/ui';
import { Container, Flex } from '@repo/ui';
import { Display, Text } from '@repo/ui';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui';
import { Badge } from '@repo/ui';
import Link from 'next/link';

export default function Home() {
  return (
    <Container className="py-16">
      <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <Display className="mb-4">
          Hi, I&apos;m <span className="text-primary">Mokwa</span>
        </Display>
        <Text size="xl" variant="muted" className="mb-8 max-w-2xl">
          Full-Stack Developer & DevOps Engineer building modern web
          applications
        </Text>
        <Flex gap={4} className="mb-16">
          <Button asChild size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </Flex>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Frontend Development</CardTitle>
            <CardDescription>
              Modern React applications with Next.js
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Flex gap={2} className="flex-wrap">
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind</Badge>
            </Flex>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Backend & APIs</CardTitle>
            <CardDescription>
              Scalable server solutions and integrations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Flex gap={2} className="flex-wrap">
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">Redis</Badge>
            </Flex>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>DevOps & Cloud</CardTitle>
            <CardDescription>
              Infrastructure and deployment automation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Flex gap={2} className="flex-wrap">
              <Badge variant="outline">AWS</Badge>
              <Badge variant="outline">Docker</Badge>
              <Badge variant="outline">GitHub Actions</Badge>
              <Badge variant="outline">Vercel</Badge>
            </Flex>
          </CardContent>
        </Card>
      </section>
    </Container>
  );
}
