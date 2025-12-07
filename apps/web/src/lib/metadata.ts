import { Metadata } from 'next';

export const siteConfig = {
  name: 'Mokwa The Developer',
  description:
    'Full-Stack Developer & DevOps Engineer building modern web applications with React, Next.js, and cloud technologies.',
  url: 'https://mokwamoffatportfollio.vercel.app',
  ogImage: 'https://mokwamoffatportfollio.vercel.app/og.jpg',
  links: {
    twitter: 'https://twitter.com/mokwa_dev',
    github: 'https://github.com/mokwa',
    linkedin: 'https://linkedin.com/in/mokwa',
  },
};

export function createMetadata(override: Partial<Metadata> = {}): Metadata {
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      'Full-Stack Developer',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'DevOps',
      'Web Development',
      'Portfolio',
    ],
    authors: [
      {
        name: 'Mokwa The Developer',
        url: siteConfig.url,
      },
    ],
    creator: 'Mokwa The Developer',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: '@mokwa_dev',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    ...override,
  };
}
