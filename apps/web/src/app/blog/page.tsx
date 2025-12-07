import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
  Display,
  Text,
} from '@repo/ui';

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <Container className="py-16 md:py-24">
      <div className="mb-12 text-center">
        <Display>Blog</Display>
        <Text
          size="lg"
          className="text-muted-foreground mx-auto mt-4 max-w-3xl"
        >
          Thoughts on web development, software engineering, and more.
        </Text>
      </div>

      <div className="mx-auto grid max-w-3xl gap-8">
        {posts.map((post) => (
          <Link href={post.url} key={post.slug} className="group">
            <Card className="transition-shadow group-hover:shadow-lg">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">
                  {post.title}
                </CardTitle>
                <Text size="sm" className="text-muted-foreground">
                  <time dateTime={post.date}>
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                  </time>
                </Text>
              </CardHeader>
              <CardContent>
                <CardDescription>{post.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
