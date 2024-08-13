// src/components/UserSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const UserSelector = ({ selectedUserId, onUserChange }) => {
  const { t } = useTranslation();

  return (
    <div>
      <label>{t('Select User')}</label>
      <select value={selectedUserId || ''} onChange={(e) => onUserChange(Number(e.target.value))}>
        <option value="">{t('All Users')}</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
        {/* Add more users as needed */}
      </select>
    </div>
  );
};

export default UserSelector;

