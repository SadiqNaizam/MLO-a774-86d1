import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActionButtonProps extends ButtonProps {
  text: string;
  isLoading?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  isLoading = false,
  className,
  children,
  variant = "default", // Ensure default variant is primary if not specified
  ...props
}) => {
  return (
    <Button
      variant={variant} // Default variant should use primary styles from tailwind.config
      className={cn(
        'w-full',
        isLoading ? 'cursor-not-allowed' : '', 
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
      {text}
      {children}
    </Button>
  );
};

export default ActionButton;
