import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, PlusCircle } from 'lucide-react';
import api from '../api/axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await api.get('/posts');
      setPosts(res.data);
    } catch {
      console.error("Error");
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      setPosts(posts.filter(p => p.id !== id));
    } catch {
      alert("Error");
    }
  };

  useEffect(() => { fetchPosts(); }, []);

  if (loading) return <div style={{textAlign: 'center', marginTop: '50px'}}>Caricamento...</div>;

  return (
    <div className="animate-fade">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700' }}>Post Recenti</h1>
        <Link to="/new" style={{ 
          display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', 
          backgroundColor: '#2563eb', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600'
        }}>
          <PlusCircle size={20} /> Nuovo Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px', backgroundColor: 'white', borderRadius: '12px', border: '1px dashed #d1d5db' }}>
          <p>Nessun post presente. Inizia a scriverne uno!</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {posts.map(post => (
            <div key={post.id} className="animate-fade" style={{ 
              backgroundColor: 'white', padding: '24px', borderRadius: '12px', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)', position: 'relative', border: '1px solid #f3f4f6'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.25rem' }}>{post.title}</h3>
              <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' }}>{post.content}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#9ca3af' }}>
                <span>✍️ {post.author}</span>
                <span>📅 {post.date}</span>
              </div>
              <button 
                onClick={() => deletePost(post.id)} 
                style={{ position: 'absolute', top: '20px', right: '20px', color: '#ef4444', border: 'none', background: 'none' }}
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;