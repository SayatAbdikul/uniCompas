// src/chatBlock/ChatInput.jsx
import React, { useState } from 'react';
import styles from './chat.module.css';

const ChatInput = ({ onSendMessage, isLoading }) => {
    const [inputMessage, setInputMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        onSendMessage(inputMessage);
        setInputMessage('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.inputForm}>
            <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className={styles.messageInput}
                disabled={isLoading}
            />
            <button
                type="submit"
                disabled={isLoading}
                className={styles.sendButton}
            >
                Send
            </button>
        </form>
    );
};

export default ChatInput;