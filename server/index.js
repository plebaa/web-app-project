const express = require('express');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 5000;
const DATA_PATH = path.join(__dirname, 'data', 'posts.json');

app.use(cors());
app.use(express.json());

const getPosts = async () => {
  try {
    return await fs.readJson(DATA_PATH);
  } catch (err) {
    return [];
  }
};

const savePosts = async (posts) => {
  await fs.writeJson(DATA_PATH, posts, { spaces: 2 });
};

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

app.post('/api/posts', async (req, res) => {
  const { title, content, author } = req.body;
  
  if (!title || !content || !author) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const posts = await getPosts();
    const newPost = { 
      id: uuidv4(), 
      title, 
      content, 
      author, 
      date: new Date().toLocaleString('it-IT') 
    };
    posts.push(newPost);
    await savePosts(posts);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Save error" });
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  try {
    const posts = await getPosts();
    const filtered = posts.filter(p => p.id !== req.params.id);
    
    if (posts.length === filtered.length) {
      return res.status(404).json({ error: "Not found" });
    }

    await savePosts(filtered);
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete error" });
  }
});

app.get('/', (req, res) => {
  res.send('API running');
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));