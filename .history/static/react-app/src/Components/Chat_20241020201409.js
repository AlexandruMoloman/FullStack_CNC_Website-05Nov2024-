import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ScrollToTop from './ScrollToTop';

const ChatContainer = styled.div`
  background-color: none;
  height: 80vh;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: white;
`;

const MessageBubble = styled.div`
  background-color: ${({ isUser }) => (isUser ? '#007bff' : '#e9ecef')};
  color: ${({ isUser }) => (isUser ? 'white' : 'black')};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 60%;
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
`;

const InputContainer = styled.div`
  padding: 10px;
  background: none;
  display: flex;
`;

const ChatInput = styled(Form.Control)`
  flex: 1;
  border-radius: 20px;
  padding: 10px;
  border: 4px solid linear-gradient(to right, black, right);
  margin-right: 10px;
`;

const SendButton = styled(Button)`
  border-radius: 20px;
  background-color: darkred;
  border: none;
  &:hover {
    background-color: black;
  }
`;

const Chat = () => {
  const [messages, setMessages] = useState([{ text: 'Ciao! Come posso aiutarti?', isUser: false }]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages([...messages, { text: newMessage, isUser: true }]);
    setNewMessage('');
  };

  return (
    <Container fluid="md" className="py-5">
      <ChatContainer>
        <MessagesContainer>
          {messages.map((message, index) => (
            <MessageBubble key={index} isUser={message.isUser}>
              {message.text}
            </MessageBubble>
          ))}
        </MessagesContainer>
        <InputContainer>
          <ChatInput
            type="text"
            placeholder="Scrivi un messaggio..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <SendButton onClick={handleSendMessage}>Invia</SendButton>
        </InputContainer>
      </ChatContainer>
      <ScrollToTop />
    </Container>
  );
};

export default Chat;
