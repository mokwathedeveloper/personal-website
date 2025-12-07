'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
  Display,
  Icon,
  Input,
  Label,
  Text,
  Textarea,
} from '@repo/ui';
import { contactSchema, type ContactFormValues } from '@/lib/validations';

export default function ContactPage() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading');
    setErrorMessage('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong.');
      }

      setStatus('success');
      reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'An unknown error occurred.'
      );
    }
  };

  return (
    <Container className="py-16 md:py-24">
      <div className="mb-12 text-center">
        <Display>Get In Touch</Display>
        <Text
          size="lg"
          className="text-muted-foreground mx-auto mt-4 max-w-3xl"
        >
          Have a project in mind, want to collaborate, or just want to say hi?
          Fill out the form below or email me. I&apos;ll get back to you as soon
          as possible.
        </Text>
      </div>

      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
          <CardDescription>
            I typically respond within 24 hours.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your Name"
                {...register('name')}
                disabled={status === 'loading'}
              />
              {errors.name && (
                <Text size="sm" className="text-destructive">
                  {errors.name.message}
                </Text>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                {...register('email')}
                disabled={status === 'loading'}
              />
              {errors.email && (
                <Text size="sm" className="text-destructive">
                  {errors.email.message}
                </Text>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Hi Moffat, I'd like to talk about..."
                {...register('message')}
                disabled={status === 'loading'}
                rows={5}
              />
              {errors.message && (
                <Text size="sm" className="text-destructive">
                  {errors.message.message}
                </Text>
              )}
            </div>
            <Button
              type="submit"
              className="w-full"
              loading={status === 'loading'}
              disabled={status === 'loading'}
            >
              Send Message
            </Button>
          </form>
          {status === 'success' && (
            <div className="mt-4 flex items-center gap-x-2 rounded-md border border-green-500 bg-green-50 p-3 text-sm text-green-700">
              <Icon name="check-circle" className="h-5 w-5" />
              <p>
                Thank you for your message! I&apos;ll get back to you shortly.
              </p>
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 flex items-center gap-x-2 rounded-md border border-red-500 bg-red-50 p-3 text-sm text-red-700">
              <Icon name="alert-triangle" className="h-5 w-5" />
              <p>
                <strong>Error:</strong> {errorMessage}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
