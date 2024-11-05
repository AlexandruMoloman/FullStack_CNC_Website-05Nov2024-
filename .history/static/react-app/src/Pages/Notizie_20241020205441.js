import React, { useState, useEffect } from 'react';
import { Container, Button, Form, Card, Col, Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';

const Notizie = () => {
  const [posts, setPosts] = useState([]); // Состояние для постов
  const [hasMore, setHasMore] = useState(true); // Для lazy load

  useEffect(() => {
    // Получение постов при загрузке страницы
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // Загрузка постов из базы данных
    // Например, через API
    // const newPosts = await fetch('/api/posts');
    // setPosts([...posts, ...newPosts]);
  };

  const handleLike = (postId) => {
    // Обработка клика по сердечку
  };

  const handleAddComment = (postId, comment) => {
    // Добавление комментария
  };

  const handleDeletePost = (postId) => {
    // Удаление поста
  };

  return (
    <section>
      <Container
        fluid
        className="py-5"
        style={{
          background: 'linear-gradient(black, darkred, darkred)',
          minHeight: '100vh',
          marginTop: '2rem',
        }}>
        <Container fluid className="py-5">
          <Row className="justify-content-center mb-4 py-5">
            <Col md={8} className="text-center">
              <p style={{ color: 'white', fontSize: '3rem' }}>Vuota Pagina!</p>
            </Col>
          </Row>
        </Container>
        <InfiniteScroll
          dataLength={posts.length}
          next={fetchPosts}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more posts</p>}>
          {posts.map((post) => (
            <Card key={post.id} style={{ marginBottom: '20px' }}>
              <Card.Body>
                {post.image && <img src={post.image} alt="Post" />}
                {post.video && <video controls src={post.video} />}
                <Card.Text>{post.text}</Card.Text>

                <Button onClick={() => handleLike(post.id)}>❤️ {post.likes}</Button>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const comment = e.target.elements.comment.value;
                    handleAddComment(post.id, comment);
                  }}>
                  <Form.Group>
                    <Form.Control type="text" name="comment" placeholder="Add a comment" />
                  </Form.Group>
                  <Button type="submit">Submit</Button>
                </Form>

                <Button variant="danger" onClick={() => handleDeletePost(post.id)}>
                  Delete Post
                </Button>
              </Card.Body>
            </Card>
          ))}
        </InfiniteScroll>
      </Container>
    </section>
  );
};

export default Notizie;
