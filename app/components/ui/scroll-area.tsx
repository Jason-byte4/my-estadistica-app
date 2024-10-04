// app/components/ui/scroll-area.tsx
import React from 'react';

const ScrollArea = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`overflow-auto ${className}`}>
      {children}
    </div>
  );
};

export default ScrollArea;
