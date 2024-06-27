import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import PostNavbar from '../components/PostNavbar';
import PostCSS from '../assets/styles/Post.module.css';

function AdminDashboard() {
    const url = "http://localhost:8000";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${url}/api/admin/posts`, { withCredentials: true });
      setPosts(response.data.posts);
    } catch (error) {
      toast.error('Error fetching posts');
    }
  };

  const handleApprove = async (postId) => {
    try {
      await axios.post(`${url}/api/admin/approve-post`, { id: postId }, { withCredentials: true });
      toast.success('Post approved');
      fetchPosts(); // Refresh the list of posts
    } catch (error) {
      toast.error('Error approving post');
    }
  };

  const handleReject = async (postId) => {
    try {
      await axios.post(`${url}/api/admin/reject-post`, { id: postId }, { withCredentials: true });
      toast.success('Post rejected');
      fetchPosts(); // Refresh the list of posts
    } catch (error) {
      toast.error('Error rejecting post');
    }
  };

  return (
    <>
      <PostNavbar />
      <div className={PostCSS.background}>
        <div className={PostCSS.inside}>
          <h2>Admin Dashboard</h2>
          <div className={PostCSS.postList}>
            {posts.length > 0 ? (
              posts.map(post => (
                <div key={post._id} className={PostCSS.post1}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <p>Status: {post.status}</p>
                  {post.status === 'pending' && (
                    <div className={PostCSS.actions}>
                      <button onClick={() => handleApprove(post._id)} className={PostCSS.approve}>Approve</button>
                      <button onClick={() => handleReject(post._id)} className={PostCSS.reject}>Reject</button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No posts available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;