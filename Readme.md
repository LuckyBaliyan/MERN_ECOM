# MERN E-Commerce Website  

A full-stack **MERN (MongoDB, Express.js, React, Node.js)** based e-commerce platform featuring a modern, responsive UI, secure authentication, product management, shopping cart, and integrated payment gateway.  
The project includes a dedicated **admin panel** for product, order, and user management, making it suitable for both learning purposes and real-world deployment.  

---

## 🛠 Tech Stack  

**Frontend:**  
- React.js  
- TailwindCSS  
- React Router DOM  
- Axios  
- React Toastify (notifications)  
- Lenis (smooth scrolling)  

**Backend:**  
- Node.js  
- Express.js  
- Mongoose  
- Multer (file uploads)  
- cors  
- body-parser  

**Database:**  
- MongoDB Atlas  

**Other Tools & Services:**  
- Stripe (payment gateway)  
- JSON Web Token (JWT) for authentication  
- bcrypt.js (password hashing)  
- Cloudinary (image storage)  
- dotenv (environment variables)  
- nodemon (development)  

---

## ✨ Features  

### **Frontend (User Side)**  
- 🛍 **Product Browsing** – View products with images, descriptions, and prices.  
- 🔍 **Search & Filters** – Search products by name and filter by category.  
- 🛒 **Shopping Cart** – Add, update, and remove products from the cart.  
- 💳 **Checkout Process** – Seamless checkout with integrated Stripe payment gateway.  
- 📱 **Responsive Design** – Optimized for desktop, tablet, and mobile devices.  
- 🔔 **Real-time Notifications** – Toastify notifications for user actions.  
- 🎯 **Smooth Scrolling** – Implemented with Lenis for enhanced user experience.  

### **Backend**  
- ⚡ **RESTful API** – Fully structured APIs for products, orders, and users.  
- 🔐 **Authentication & Authorization** – Secure login/signup with JWT-based auth.  
- 🔏 **Password Security** – Hashed passwords using bcrypt.  
- 🗂 **Image Uploads** – Product images uploaded via Multer and stored in Cloudinary.  
- 📦 **Order Management** – Backend support for order creation, updates, and tracking.  

### **Admin Panel**  
- 📦 **Product Management** – Create, update, and delete products with image upload.  
- 📊 **Order Tracking** – View and update order statuses.  
- 👥 **User Management** – Manage registered customers.  
- 📈 **Dashboard Overview** – Summary of sales, orders, and products.  

---

## 🚀 Installation & Setup  

### **1. Clone the repository**  
```bash
git clone https://github.com/your-username/mern-ecommerce.git
cd mern-ecommerce

2. Install dependencies
Backend
bash
Copy
Edit
cd backend
npm install
Frontend
bash
Copy
Edit
cd ../frontend
npm install

3. Create Environment Variables
Backend .env
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
Frontend .env
env
Copy
Edit
REACT_APP_API_URL=http://localhost:portNumber

4. Run the development servers
Backend
bash
Copy
Edit
cd backend
npm run dev
Frontend
bash
Copy
Edit
cd ../frontend
npm start

5. Access the Application
Frontend: http://localhost:3000

Backend API: http://localhost:5000

🌍 Production Deployment
Backend Deployment (Render, Railway, Heroku)
Push your backend code to GitHub.

Connect your GitHub repo to your chosen hosting service.

Add all .env variables in the hosting environment settings.

Frontend Deployment (Netlify, Vercel)
Push your frontend code to GitHub.

Connect your GitHub repo to Netlify/Vercel.

Add REACT_APP_API_URL pointing to your backend's deployed URL.

📂 Folder Structure
pgsql
Copy
Edit
mern-ecommerce/
│
├── admin/                  # Admin panel (React)
│   ├── public/              
│   ├── src/
│   │   ├── components/      
│   │   ├── pages/           
│   │   ├── utils/           
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/                 
│   ├── config/              
│   ├── controllers/         
│   ├── middleware/          
│   ├── models/              
│   ├── routes/              
│   ├── uploads/             
│   ├── server.js            
│   └── package.json
│
├── frontend/                
│   ├── public/              
│   ├── src/
│   │   ├── assets/          
│   │   ├── components/      
│   │   ├── context/         
│   │   ├── pages/           
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── screenshots/             
├── README.md
└── package.json  


📡 API Documentation
Auth Routes
Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Authenticate user & return token
GET	/auth/user	Get logged-in user details

Product Routes
Method	Endpoint	Description
GET	/products	Get all products
GET	/products/:id	Get single product details
POST	/products	Create new product (Admin only)
PUT	/products/:id	Update product (Admin only)
DELETE	/products/:id	Delete product (Admin only)

Order Routes
Method	Endpoint	Description
POST	/orders	Create a new order
GET	/orders/my-orders	Get logged-in user's orders
GET	/orders	Get all orders (Admin only)
PUT	/orders/:id	Update order status (Admin)

File Upload
Method	Endpoint	Description
POST	/upload	Upload image using Multer & Cloudinary


🤝 Contributing
Fork the repository

Create a new branch (git checkout -b feature-name)

Commit your changes (git commit -m "Add feature")

Push to the branch (git push origin feature-name)

Open a Pull Request


📜 License
Licensed under the MIT License – see the LICENSE file for details.

## 📬 Contact  
**Author:** Lucky Baliyan  
- **GitHub:** [github.com/your-username](https://github.com/LuckyBaliyan)  
- **LinkedIn:** [linkedin.com/in/your-link](https://linkedin.com/in/lucky-baliyan-67b487299/)  
- **Email:** [your-email@example.com](mailto:baliyanlucky85@gmail.com)  


---

