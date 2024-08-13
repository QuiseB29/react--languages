
import React from 'react';
import { useTranslation } from 'react-i18next';

const PostContent = ({ title, body }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t(title)}</h3>
      <p>{t(body)}</p>
    </div>
  );
};

export default PostContent;
