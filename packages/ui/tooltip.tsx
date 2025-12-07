import * as React from 'react';
import { cn } from '../../apps/web/src/lib/utils';

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip = ({ content, children, side = 'top' }: TooltipProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const sideClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            'absolute z-50 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white',
            sideClasses[side]
          )}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export { Tooltip };
