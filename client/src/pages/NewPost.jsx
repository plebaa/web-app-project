import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const NewPost = () => {
  const [formData, setFormData] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.author) return;
    try {
      await api.post('/posts', formData);
      navigate('/');
    } catch {
      alert("Error");
    }
  };

  return (
    <div className="animate-fade" style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <h1 style={{ marginBottom: '20px' }}>Crea un nuovo post</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Titolo</label>
          <input type="text" placeholder="Esempio: Il mio primo post" onChange={(e) => setFormData({...formData, title: e.target.value})} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Autore</label>
          <input type="text" placeholder="Il tuo nome" onChange={(e) => setFormData({...formData, author: e.target.value})} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Contenuto</label>
          <textarea placeholder="Di cosa vuoi parlare?" rows="6" onChange={(e) => setFormData({...formData, content: e.target.value})} />
        </div>
        <button type="submit" style={{ 
          padding: '12px', backgroundColor: '#10b981', color: 'white', 
          border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '1rem'
        }}>
          Pubblica ora
        </button>
      </form>
    </div>
  );
};

export default NewPost;