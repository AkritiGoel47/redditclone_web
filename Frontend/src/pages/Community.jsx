import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import CommunityCSS from '../assets/styles/Community.module.css';

function Community() {
  const url ='http://localhost:8000';
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [topics, setTopics] = useState([]);
  const [rules, setRules] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const community = { name, description, topics, rules };

    try {
      const response = await axios.post(`${url}/api/community`, community, { withCredentials: true });

      if (response.data.success) {
        toast.success("Community created successfully!");
        setName('');
        setDescription('');
        setTopics([]);
        setRules('');
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      toast.error('Error creating community');
      console.error('Error creating community:', error);
    }
  };

  const handleTopicChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTopics([...topics, value]);
    } else {
      setTopics(topics.filter(topic => topic !== value));
    }
  };

  return (
    <div className={CommunityCSS.background}>
      <Toaster />
      <div className={CommunityCSS.inside}>
        <h2>Create Community</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div>
            <label>Topics:</label>
            {["Technology", "Science", "Gaming", "Music", "Movies", "Books", "Art", "Sports", "News", "Memes"].map((topic, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  value={topic}
                  onChange={handleTopicChange}
                />
                <label>{topic}</label>
              </div>
            ))}
          </div>
          <div>
            <label>Rules:</label>
            <textarea value={rules} onChange={(e) => setRules(e.target.value)} required />
          </div>
          <button type="submit">Create Community</button>
        </form>
      </div>
    </div>
  );
}

export default Community;
