import React, { useState } from 'react';
import axios from 'axios';
import styles from './chat.module.css';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const API_URL = 'http://127.0.0.1:8000/api/qa/';  // Adjust if your Django server is on a different port

const Chat = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! How can I assist you today?",
            sender: 'assistant',
            timestamp: new Date().toISOString()
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async (message) => {
        if (!message.trim()) return;

        // Add user message
        const userMessage = {
            id: Date.now(),
            text: message,
            sender: 'user',
            timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, userMessage]);

        // Call API
        setIsLoading(true);
        try {
            const response = await axios.post(API_URL, { question: message });
            const assistantMessage = {
                id: Date.now() + 1,
                text: response.data.answer,
                sender: 'assistant',
                timestamp: new Date().toISOString()
            };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Error:', error);
            // Optionally, add an error message to the chat
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: "Sorry, there was an error processing your request.",
                sender: 'assistant',
                timestamp: new Date().toISOString()
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.messagesArea}>
                {messages.map(message => (
                    <ChatMessage key={message.id} message={message} />
                ))}
                {isLoading && (
                    <div className={styles.loadingIndicator}>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                    </div>
                )}
            </div>
            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
    );
};

export default Chat;