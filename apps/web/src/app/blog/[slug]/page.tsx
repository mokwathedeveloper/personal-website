import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { Container, Display, Text } from '@repo/ui';

export const generateStaticParams = () =>
  allPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return {
    title: post.title,
    description: post.description,
  };
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Container className="py-16 md:py-24">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <div className="mb-8 text-center">
          <Text size="sm" className="text-muted-foreground">
            <time dateTime={post.date}>
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
          </Text>
          <Display className="mt-2">{post.title}</Display>
        </div>
        <MDXContent />
      </article>
    </Container>
  );
}
