import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        // Overall layout: Full screen, flex column, items centered, content justified to center.
        // From Layout Requirements: overall.definition: "flex flex-col items-center justify-center h-screen"
        // Using min-h-screen for robustness with varying content heights.
        // bg-background ensures the page background color from the theme is applied.
        // Added p-4 for some breathing room around the content area on smaller screens.
        "flex min-h-screen flex-col items-center justify-center bg-background p-4",
        className
      )}
    >
      {/* Form Container Sizing: Constrains the width of the content area.
          From Layout Requirements: overall.sizing.formContainer: "max-w-sm w-full" 
          This div ensures that the children (e.g., LoginTemplate -> LoginForm)
          are contained within a centered block of max-width 'sm' and takes full available width up to that max.
      */}
      <div className="w-full max-w-sm">
        {children}
      </div>
    </main>
  );
};

export default MainAppLayout;
