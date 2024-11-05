import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AdminPanel = ({ onUpdate }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Шаг 1: Вызываем функцию обновления с новыми значениями
    onUpdate(text, image);
    // Сбрасываем значения после обновления
    setText('');
    setImage(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formText">
        <Form.Label>Текст</Form.Label>
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите новый текст"
        />
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label>Изображение</Form.Label>
        <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Обновить
      </Button>
    </Form>
  );
};

export default AdminPanel;
