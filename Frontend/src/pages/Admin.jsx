
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import PostNavbar from '../components/PostNavbar';
// import PostCSS from '../assets/styles/Post.module.css';

// function Admin() {
//   const url = "http://localhost:8000";
//   const [posts, setPosts] = useState([]);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(`${url}/api/admin/post`, { withCredentials: true });
//       console.log("Posts Data: ", response.data)
//       setPosts(response.data.data);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   const handleApprove = async (postId) => {
//     try {
//       await axios.post(`${url}/api/admin/approve-post`, { id: postId }, { withCredentials: true });
//       toast.success('Post approved');
//       fetchPosts(); // Refresh the list of posts
//     } catch (error) {
//       toast.error('Error approving post');
//     }
//   };

//   const handleReject = async (postId) => {
//     try {
//       await axios.post(`${url}/api/admin/reject-post`, { id: postId }, { withCredentials: true });
//       toast.success('Post rejected');
//       fetchPosts(); // Refresh the list of posts
//     } catch (error) {
//       toast.error('Error rejecting post');
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <>
//       <PostNavbar />
//       <div className={PostCSS.background}>
//         <div className={PostCSS.inside}>
//           <h2>Admin Dashboard</h2>
//           <div className={PostCSS.postList}>
//             {posts.length > 0 ? (
//               posts.map(post => (
//                 <div key={post._id} className={PostCSS.post1}>
//                   <h3>{post.title}</h3>
//                   <p>{post.description}</p>
//                   <p>Status: {post.status}</p>
//                   {post.status === 'pending' && (
//                     <div className={PostCSS.actions}>
//                       <button onClick={() => handleApprove(post._id)} className={PostCSS.approve}>Approve</button>
//                       <button onClick={() => handleReject(post._id)} className={PostCSS.reject}>Reject</button>
//                     </div>
//                   )}
//                 </div>
//               ))
//             ) : (
//               <p>No posts available</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Admin;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import PostNavbar from '../components/PostNavbar';
import PostCSS from '../assets/styles/Post.module.css';

function Admin() {
  const url = "http://localhost:8000";
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${url}/api/admin/post`, { withCredentials: true });
      console.log("Posts Data: ", response.data); // Check what the response looks like
      if (response.data && response.data.data) {
        setPosts(response.data.data); // Update posts state with fetched data
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      toast.error('Error fetching posts');
    }
  };

  const handleApprove = async (postId) => {
    try {
      await axios.post(`${url}/api/admin/approve-post`, { id: postId }, { withCredentials: true });
      toast.success('Post approved');
      fetchPosts(); // Refresh the list of posts after approval
    } catch (error) {
      console.error("Error approving post:", error);
      toast.error('Error approving post');
    }
  };

  const handleReject = async (postId) => {
    try {
      await axios.post(`${url}/api/admin/reject-post`, { id: postId }, { withCredentials: true });
      toast.success('Post rejected');
      fetchPosts(); // Refresh the list of posts after rejection
    } catch (error) {
      console.error("Error rejecting post:", error);
      toast.error('Error rejecting post');
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when component mounts
  }, []);

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

export default Admin;
