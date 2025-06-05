import * as React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  labelClassName?: string;
  inputClassName?: string;
  wrapperClassName?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({
    id,
    label,
    type = "text",
    labelClassName,
    inputClassName,
    wrapperClassName,
    className, // Consuming className passed by FormField/Controller for the input itself
    ...props
  }, ref) => {
    return (
      <div className={cn("grid w-full items-center gap-1.5", wrapperClassName)}>
        <Label 
          htmlFor={id} 
          className={cn(
            "text-sm font-medium text-card-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", 
            labelClassName
          )}
        >
          {label}
        </Label>
        <Input
          type={type}
          id={id}
          ref={ref}
          className={cn("border-border placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0", inputClassName, className)}
          {...props}
        />
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
