// src/chatBlock/Chat.jsx
import React, { useState } from 'react';
import styles from './chat.module.css';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

// Simulated response delay
const simulateAPIResponse = async (message) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        id: Date.now(),
        text: `This is a simulated response to: "${message}"`,
        sender: 'assistant',
        timestamp: new Date().toISOString()
    };
};

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

        // Simulate API call
        setIsLoading(true);
        try {
            const response = await simulateAPIResponse(message);
            setMessages(prev => [...prev, response]);
        } catch (error) {
            console.error('Error:', error);
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