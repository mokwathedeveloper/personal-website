import * as React from 'react';
import { cn } from '../../apps/web/src/lib/utils';

export interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const Dialog = ({ children }: DialogProps) => {
  return <>{children}</>;
};

const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return <button ref={ref} className={className} {...props} />;
});
DialogTrigger.displayName = 'DialogTrigger';

const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-background/80 fixed inset-0 backdrop-blur-sm" />
      <div
        ref={ref}
        className={cn(
          'bg-background relative z-50 grid w-full max-w-lg gap-4 border p-6 shadow-lg sm:rounded-lg',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
});
DialogContent.displayName = 'DialogContent';

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
    {...props}
  />
);

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = 'DialogTitle';

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle };
