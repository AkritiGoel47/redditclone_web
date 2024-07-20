import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import CommunityCSS from '../assets/styles/Community.module.css';

function Community() {
  const url = 'http://localhost:8000';
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [topics, setTopics] = useState([]);
  const [rules, setRules] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const community = { name, description, topics, rules };

    try {
      const response = await axios.post(`${url}/api/community`, community, { withCredentials: true });

      console.log("Backend response:", response.data); // Debug log

      if (response.status === 200) {
        
        setName('');
        setDescription('');
        setTopics([]);
        setRules('');
        toast.success( "Community created successfully!");
      } else {
        toast.error(response.data.msg || "Failed to create community");
      }
    } catch (error) {
      console.error('Error creating community:', error);
      toast.error('Error creating community');
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
        <h2 className={CommunityCSS.heading}>Create Community</h2>
        <form onSubmit={handleSubmit}>
          <div className={CommunityCSS.content}>
            <div className={CommunityCSS.name}>
              <label className={CommunityCSS.label}>Name:</label>
              <input type="text" className={CommunityCSS.input} value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className={CommunityCSS.description}>
              <label className={CommunityCSS.label}>Description:</label>
              <textarea className={CommunityCSS.textarea} value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div className={CommunityCSS.topics}>
              <label className={CommunityCSS.label}>Topics:</label>
              {["Technology", "Science", "Gaming", "Music", "Movies", "Books", "Art", "Sports", "News", "Memes"].map((topic, index) => (
                <div key={index} className={CommunityCSS.checkbox}>
                  <input
                    type="checkbox"
                    value={topic}
                    className={CommunityCSS.checkboxInput}
                    onChange={handleTopicChange}
                  />
                  <label className={CommunityCSS.checkboxLabel}>{topic}</label>
                </div>
              ))}
            </div>
            <div className={CommunityCSS.rules}>
              <label className={CommunityCSS.label}>Rules:</label>
              <textarea className={CommunityCSS.textarea} value={rules} onChange={(e) => setRules(e.target.value)} required />
            </div>
            <button type="submit" ><Link to='/create'  className={CommunityCSS.submit}>Create Community
            </Link></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Community;
