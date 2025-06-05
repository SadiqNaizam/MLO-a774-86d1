import React from 'react';
import { cn } from '@/lib/utils';

interface FormHeadingProps {
  text: string;
  className?: string;
}

const FormHeading: React.FC<FormHeadingProps> = ({ text, className }) => {
  return (
    <h1 className={cn('text-3xl font-bold text-card-foreground', className)}>
      {text}
    </h1>
  );
};

export default FormHeading;
