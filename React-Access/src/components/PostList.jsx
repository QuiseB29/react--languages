// src/components/PostList.js
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import UserSelector from './UserSelector';
import PostContent from './PostContent';

const PostList = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setStatus('loading');
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        setStatus('succeeded');
      } catch (err) {
        setError(err.message);
        setStatus('failed');
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => selectedUserId === null || post.userId === selectedUserId);
  }, [posts, selectedUserId]);

  const handleUserChange = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <Container className="mt-5">
      <h2>{t('Post List')}</h2>
      <UserSelector selectedUserId={selectedUserId} onUserChange={handleUserChange} />

      {status === 'loading' && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">{t('Loading...')}</span>
        </Spinner>
      )}
      {status === 'failed' && <Alert variant="danger">{t('Error')}: {error}</Alert>}
      
      <Row xs={1} md={2} lg={3} className="g-4 mt-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <Col key={post.id}>
              <PostContent title={post.title} body={post.body} />
            </Col>
          ))
        ) : (
          <Alert variant="info">{t('No Posts')}</Alert>
        )}
      </Row>
    </Container>
  );
};

export default PostList;
