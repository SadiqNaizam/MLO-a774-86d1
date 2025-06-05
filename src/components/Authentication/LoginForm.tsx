import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import FormHeading from './FormHeading';
import InputField from './InputField';
import ActionButton from './ActionButton';
import SecondaryLink from './SecondaryLink';

const loginFormSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z.string().min(1, { message: "Password is required." }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    console.log('Login form submitted with:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    // Example: show success toast with sonner if integrated
    // toast.success('Successfully logged in!');
    form.reset(); // Reset form after submission
  };

  return (
    <Card className={cn("w-full max-w-sm p-6 bg-card text-card-foreground rounded-lg shadow-md")}>
      <FormHeading text="Log in" className="mb-8 text-left" /> 
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputField
                    id="username"
                    label="Username"
                    placeholder="Username"
                    type="text"
                    autoComplete="username"
                    {...field}
                    inputClassName="h-11" // Adjusted height for visual balance
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputField
                    id="password"
                    label="Password"
                    placeholder="Password"
                    type="password"
                    autoComplete="current-password"
                    {...field}
                    inputClassName="h-11" // Adjusted height for visual balance
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ActionButton
            type="submit"
            text="Log in"
            isLoading={isLoading}
            className="w-full h-11 text-base font-semibold" // Adjusted height and font
          />
        </form>
      </Form>
      <SecondaryLink
        text="or, sign up"
        onClick={() => console.log("Navigate to sign up page")}
        className="mt-6 block w-full text-center"
      />
    </Card>
  );
};

export default LoginForm;
