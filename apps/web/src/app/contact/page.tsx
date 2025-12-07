import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Container, Flex } from '@repo/ui';
import { Display, Text } from '@repo/ui';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui';
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
  title: 'Contact',
  description:
    'Get in touch for new opportunities, collaborations, or technical consultations.',
};

const contactMethods = [
  {
    title: 'Email',
    description: 'Send me a message anytime',
    value: 'mokwa@example.com',
    href: 'mailto:mokwa@example.com',
    icon: 'mail' as const,
  },
  {
    title: 'LinkedIn',
    description: 'Connect with me professionally',
    value: 'linkedin.com/in/mokwa',
    href: 'https://linkedin.com/in/mokwa',
    icon: 'linkedin' as const,
  },
  {
    title: 'GitHub',
    description: 'Check out my code',
    value: 'github.com/mokwa',
    href: 'https://github.com/mokwa',
    icon: 'github' as const,
  },
  {
    title: 'Twitter',
    description: 'Follow me for tech updates',
    value: '@mokwa_dev',
    href: 'https://twitter.com/mokwa_dev',
    icon: 'twitter' as const,
  },
];

export default function Contact() {
  return (
    <Container className="py-16">
      <div className="mb-12 text-center">
        <Display className="mb-4">Get In Touch</Display>
        <Text size="xl" variant="muted" className="mx-auto max-w-2xl">
          I&apos;m always interested in new opportunities and collaborations.
          Feel free to reach out if you&apos;d like to work together!
        </Text>
      </div>
      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {contactMethods.map((method, index) => (
          <Card
            key={index}
            className="text-center transition-shadow hover:shadow-lg"
          >
            <CardHeader>
              <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <Icon name={method.icon} className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">{method.title}</CardTitle>
              <CardDescription>{method.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild className="w-full">
                <Link
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {method.value}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="mx-auto max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Let&apos;s Work Together</CardTitle>
          <CardDescription className="text-base">
            I&apos;m currently available for freelance projects and full-time
            opportunities
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="space-y-4">
            <Text className="leading-relaxed">
              Whether you have a project in mind, need technical consultation,
              or just want to chat about technology, I&apos;d love to hear from
              you. I typically respond within 24 hours.
            </Text>
            <Flex gap={4} className="justify-center">
              <Button size="lg" asChild>
                <Link href="mailto:mokwa@example.com">
                  <Icon name="mail" className="mr-2 h-4 w-4" />
                  Send Email
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://linkedin.com/in/mokwa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="linkedin" className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </Flex>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
