import React, { ReactNode } from 'react';

interface CollapsibleProps {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  children: ReactNode;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ open, onOpenChange, children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
       
       return React.cloneElement(child as React.ReactElement, { open, onOpenChange });


      })}
    </div>
  );
};

interface CollapsibleTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void; // Maneja el clic
  children: ReactNode;
}

export const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> = ({ onClick, children, ...props }) => {
  return (
    <button onClick={onClick} className="w-full text-left" {...props}>
      {children}
    </button>
  );
};

interface CollapsibleContentProps {
  open: boolean;
  children: ReactNode;
}

export const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ open, children }) => {
  return (
    <div style={{ display: open ? 'block' : 'none' }} className="pl-4">
      {children}
    </div>
  );
};
