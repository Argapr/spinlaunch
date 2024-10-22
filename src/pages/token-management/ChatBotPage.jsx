import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import GeminiInReact from '../../components/chatbot/Chatbot';

const ChatBotPage = () => {
  return (
    <MainLayout>
      <GeminiInReact />
    </MainLayout>
  );
};

export default ChatBotPage;