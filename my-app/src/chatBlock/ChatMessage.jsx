// src/chatBlock/ChatMessage.jsx
import React from 'react';
import styles from './chat.module.css';

const ChatMessage = ({ message }) => {
    return (
        <div className={`${styles.messageWrapper} ${message.sender === 'user' ? styles.userMessage : styles.assistantMessage}`}>
            <div className={styles.messageContent}>
                <p>{message.text}</p>
                <span className={styles.timestamp}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
            </div>
        </div>
    );
};

export default ChatMessage;