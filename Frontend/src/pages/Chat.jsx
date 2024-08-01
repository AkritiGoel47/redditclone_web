



import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { toast, Toaster } from 'react-hot-toast';
import PrivateMessageCSS from '../assets/styles/PrivateMessage.module.css';
import axios from 'axios';

const PrivateMessage = () => {
  const [socket, setSocket] = useState(null);
  const [recipientId, setRecipientId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);
  const url = "https://redditclone-web-backend.onrender.com";
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await axios.get(`${url}/api/get-userid`, {
          withCredentials: true 
        });

        if (response.data.success) {
          setUserId(response.data.user_id);
        } else {
          throw new Error(`Failed to fetch user_id: ${response.data.msg}`);
        }
      } catch (error) {
        console.error("Error fetching user_id:", error.message);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (!userId) return;

    const newSocket = io(url, { withCredentials: true });
    setSocket(newSocket);

    newSocket.emit('register', userId);

    newSocket.on('private message', (data) => {
      console.log('Received message:', data); // Debugging: log received message
      setMessages((prevMessages) => {
        console.log("message :" ,messages);
        const updatedMessages = [...prevMessages, data];
        scrollToBottom();
        return updatedMessages;
      });
      setMessage('');
      
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
    if (!userId) {
      toast.error('User ID is not available.');
      return;
    }

    socket.emit('private message', { senderId: userId, recipientId, message });
    setMessage('');
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div 
              key={index} 
              className={`${PrivateMessageCSS.message} ${msg.sender === userId ? PrivateMessageCSS.sent : PrivateMessageCSS.received}`}
            >
              <p style={{ color: 'black' }}><strong>From {msg.sender}:</strong> {msg.message}</p>
            </div>
          ))
        ) : (
          <p>No messages to display</p>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default PrivateMessage;


