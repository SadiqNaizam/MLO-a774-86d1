import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SecondaryLinkProps extends Omit<ButtonProps, 'variant' | 'children'> {
  text: string;
  // onClick and href can be passed via ...props
}

const SecondaryLink: React.FC<SecondaryLinkProps> = ({ text, className, ...props }) => {
  return (
    <Button
      variant="link"
      className={cn(
        'p-0 h-auto text-sm font-normal text-muted-foreground hover:text-primary hover:no-underline focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0',
        className
      )}
      {...props}
    >
      {text}
    </Button>
  );
};

export default SecondaryLink;
