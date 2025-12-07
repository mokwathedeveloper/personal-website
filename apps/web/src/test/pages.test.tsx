import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../app/page';
import About from '../app/about/page';
import Projects from '../app/projects/page';
import Contact from '../app/contact/page';

describe('Pages', () => {
  it('renders home page', () => {
    render(<Home />);
    expect(screen.getByText('Mokwa')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Full-Stack Developer & DevOps Engineer building modern web applications'
      )
    ).toBeInTheDocument();
  });

  it('renders about page', () => {
    render(<About />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(
      screen.getByText('Full-Stack Developer & DevOps Engineer')
    ).toBeInTheDocument();
  });

  it('renders projects page', () => {
    render(<Projects />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Modern Developer Portfolio')).toBeInTheDocument();
  });

  it('renders contact page', () => {
    render(<Contact />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });
});
