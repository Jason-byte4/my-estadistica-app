// app/components/ui/collapsible-trigger.tsx
import React from 'react';

const CollapsibleTrigger = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
  return (
    <button onClick={onClick} className="text-left">
      {children}
    </button>
  );
};

export default CollapsibleTrigger;

