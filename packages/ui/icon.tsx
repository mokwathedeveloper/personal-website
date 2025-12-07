import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../apps/web/src/lib/utils';

const iconVariants = cva('', {
  variants: {
    size: {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-8 w-8',
    },
    animation: {
      none: '',
      spin: 'animate-spin',
      pulse: 'animate-pulse',
      bounce: 'animate-bounce',
    },
  },
  defaultVariants: {
    size: 'md',
    animation: 'none',
  },
});

export interface IconProps
  extends React.SVGAttributes<SVGElement>, VariantProps<typeof iconVariants> {
  children: React.ReactNode;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size, animation, children, ...props }, ref) => (
    <svg
      ref={ref}
      className={cn(iconVariants({ size, animation }), className)}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  )
);
Icon.displayName = 'Icon';

export { Icon, iconVariants };
