


import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { toast, Toaster } from 'react-hot-toast';
import PrivateMessageCSS from '../assets/styles/PrivateMessage.module.css';

const PrivateMessage = ({ userId }) => {
  const [socket, setSocket] = useState(null);
  const [recipientId, setRecipientId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const url = "http://localhost:8000";

  useEffect(() => {
    const newSocket = io(url, { withCredentials: true });
    setSocket(newSocket);

    newSocket.emit('register', userId);

    newSocket.on('private message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    newSocket.on('private message error', (data) => {
      toast.error(data.error);
    });

    newSocket.on('register error', (data) => {
      toast.error(data.error);
    });

    return () => newSocket.close();
  }, [userId]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!recipientId || !message) {
      toast.error('Recipient ID and message are required');
      return;
    }
    socket.emit('private message', { senderId: userId, recipientId, message });
    setMessage('');
  };

  return (
    <div className={PrivateMessageCSS.container}>
      <Toaster />
      <form className={PrivateMessageCSS.form} onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Recipient User ID"
          value={recipientId}
          onChange={(e) => setRecipientId(e.target.value)}
          className={PrivateMessageCSS.input}
        />
        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={PrivateMessageCSS.input}
        />
        <button type="submit" className={PrivateMessageCSS.button}>Send</button>
      </form>

      <div className={PrivateMessageCSS.messages}>
        {messages.map((msg, index) => (
          <div key={index} className={PrivateMessageCSS.message}>
            From {msg.sender}: {msg.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivateMessage;
