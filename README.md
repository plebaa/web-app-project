# 📝 Full-Stack Post App (React + Node.js)

Questa è una piccola Web App creata da zero che permette di visualizzare, creare ed eliminare post. Il progetto utilizza un'architettura disaccoppiata con un frontend in React e un backend in Node.js/Express.

## 🚀 Requisiti
Prima di iniziare, assicuratevi di avere installato:
- **Node.js** (v18.x o superiore)
- **npm**

---

## 🛠️ Tecnologie Utilizzate

### Backend
- **Node.js & Express**: Server REST API.
- **fs-extra**: Per la gestione del database JSON in modo asincrono.
- **uuid**: Per la generazione di ID univoci per ogni post.
- **CORS**: Per permettere la comunicazione tra frontend e backend.
- **Nodemon**: Per il riavvio automatico durante lo sviluppo.

### Frontend
- **React (Vite)**: Framework per l'interfaccia utente.
- **React Router Dom**: Per la navigazione tra le pagine.
- **Axios**: Per le chiamate API verso il server.
- **Lucide React**: Per le icone dell'interfaccia.

---

## 📦 Installazione e Avvio

### 1. Installazione
```bash
# Installa dipendenze backend
cd server && npm install
# Installa dipendenze frontend
cd ../client && npm install
```

### 2. Avvio (usa due terminali separati)
**Terminale 1 (Backend):**
```bash
cd server && npm run dev
```

**Terminale 2 (Frontend):**
```bash
cd client && npm run dev
```

---

## 📑 Funzionalità implementate
- [x] **GET /api/posts**: Visualizzazione lista post.
- [x] **POST /api/posts**: Creazione post con validazione.
- [x] **DELETE /api/posts/:id**: Rimozione post tramite ID.
- [x] **Gestione Stati**: Loading, Errore e Lista vuota.
- [x] **Routing**: Navigazione Home/Form.

---

## 👤 Autore
- **Plebaa**
