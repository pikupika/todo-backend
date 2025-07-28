# 🗂️ Todo App Backend

This is the backend server of the Todo App, built using **Node.js**, **Express**, and **MongoDB**. It provides RESTful APIs for user authentication and todo management with secure JWT-based access.

---

## 🚀 Features

### 🔐 Auth
- Register new users 
- Login existing users 
- Password hashing with `bcryptjs`
- JWT authentication & middleware

### 📋 Todos
-  Create a todo
-  Fetch all todos of a user
-  Update (complete/read status)
-  Delete a todo

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (`jsonwebtoken`)
- Password hashing (`bcrypt`)
- dotenv for env config
- cors for API access control

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/todo-backend.git
cd todo-backend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Make sure to whitelist your IP in MongoDB Atlas or allow access from anywhere (`0.0.0.0/0`) if testing locally.

---

## 🌐 Deployment (Render)

- Deploy the backend on [Render.com](https://render.com/)
- Add environment variables (`MONGO_URI`, `JWT_SECRET`)
- Set build/start command:
  ```bash
  npm install && npm run dev
  ```

---

## 🔗 Frontend Repo

[Go to Todo App Frontend →](https://github.com/pikupika/Todo-frontend/)

---

## 👤 Author

**Priyanshi Singh**  
Full-Stack Developer  
[GitHub](https://github.com/pikupika/Todo-frontend/) | [LinkedIn](https://www.linkedin.com/in/priyanshi-singh-27980a271/)
