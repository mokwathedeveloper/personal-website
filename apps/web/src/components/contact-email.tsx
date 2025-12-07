import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New message from your portfolio site</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Message from Contact Form</Heading>
        <Section>
          <Text style={paragraph}>
            You have received a new message from your portfolio contact form.
          </Text>
          <Hr style={hr} />
          <Text style={label}>
            <strong>From:</strong> {name}
          </Text>
          <Text style={label}>
            <strong>Email:</strong> {email}
          </Text>
          <Hr style={hr} />
          <Heading as="h2" style={subHeading}>
            Message:
          </Heading>
          <Text style={paragraph}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '48px',
  textAlign: 'center' as const,
};

const subHeading = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginTop: '32px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#333',
};

const label = {
  ...paragraph,
  fontWeight: 'bold',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};
