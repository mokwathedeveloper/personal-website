import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../apps/web/src/lib/utils';

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b',
        bottom: 'inset-x-0 bottom-0 border-t',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
        right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

export interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const Sheet = ({ children }: SheetProps) => {
  return <>{children}</>;
};

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return <button ref={ref} className={className} {...props} />;
});
SheetTrigger.displayName = 'SheetTrigger';

export interface SheetContentProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ side = 'right', className, children, ...props }, ref) => {
    return (
      <div className="fixed inset-0 z-50">
        <div className="bg-background/80 fixed inset-0 backdrop-blur-sm" />
        <div
          ref={ref}
          className={cn(sheetVariants({ side }), className)}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  }
);
SheetContent.displayName = 'SheetContent';

export { Sheet, SheetTrigger, SheetContent };
