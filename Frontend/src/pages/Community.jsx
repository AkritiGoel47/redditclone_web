


import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom"; // Use useNavigate for navigation
import CommunityCSS from '../assets/styles/Community.module.css';

function Community() {
  const url = 'https://redditclone-web-backend.onrender.com';
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [topics, setTopics] = useState([]);
  const [rules, setRules] = useState('');
  const [isCommunityCreated, setIsCommunityCreated] = useState(false); // Track community creation status

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || topics.length === 0 || !rules) {
      toast.error("Please fill out all fields.");
      return;
    }

    const community = { name, description, topics, rules };

    try {
      const response = await axios.post(`${url}/api/community`, community, { withCredentials: true });

      console.log("Backend response:", response.data);

      if (response.status === 200) {
        setName('');
        setDescription('');
        setTopics([]);
        setRules('');
        setIsCommunityCreated(true);
        toast.success("Community created successfully!");
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

  // Redirect to Create Post page if the community is created successfully
  if (isCommunityCreated) {
    navigate('/create');
  }

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
            <button type="submit" className={CommunityCSS.submit}>Create Community</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Community;

