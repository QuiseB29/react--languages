import React from 'react';
import PostList from './components/PostList';
import LanguageSwitcher from './components/LanguageSwitcher';
import AccessibleForm from './AccessibleForm';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <LanguageSwitcher />
      <PostList />
      <AccessibleForm />
    </div>
  );
};

export default App;
