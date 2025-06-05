import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginForm from '../components/Authentication/LoginForm';

/**
 * IndexPage serves as the main entry point for the login functionality.
 * It utilizes the MainAppLayout to provide a consistent page structure
 * and renders the LoginForm component for user authentication.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
