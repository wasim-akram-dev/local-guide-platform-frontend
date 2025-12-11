# 🌍 **Locana – Local Guide Platform (Frontend)**

Locana is a modern travel experience platform that connects travelers with verified local guides offering authentic tours, unique city experiences, and personalized activities. This is the **Frontend Repository** of the project, built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **Shadcn UI**, and **Framer Motion**.

---

## 🚀 **Live URL**

🔗 **Live Demo:** _https://locana.vercel.app_

---

## 📌 **Project Overview**

Locana empowers local guides to share hidden gems of their city, while enabling tourists to discover authentic experiences beyond typical travel spots. It includes features like tour listings, booking requests, secure authentication, reviews, and much more.

This frontend interacts with a Node.js/Express backend using REST APIs.

---

## ✨ **Features**

- 🔐 **JWT Authentication** (Login & Register)
- 👤 **User Profiles** (Guide & Tourist views)
- 🗺️ **Explore Tours Page** with filters
- 🏠 **Home Page** with 6+ sections
- 📝 **Tour Listing Management** (CRUD for guides)
- 📅 **Booking System UI**
- ⭐ **Review & Rating System**
- 💳 **Payment Integration UI** (Stripe/SSLCommerz)
- 📊 **Dashboards** for Guide, Tourist, and Admin roles
- 🎨 **Modern UI/UX** using Shadcn + Tailwind
- ✨ **Smooth Animations** via Framer Motion

---

## 🛠️ **Technology Stack**

### **Frontend**

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**
- **Framer Motion**
- **React Hook Form**
- **Zod** (optional)

### **Others**

- REST API Integration
- Image Upload Support (Cloudinary / ImgBB)
- Secure Environment Variables

---

## 📁 **Folder Structure**

```
frontend/
 ├── app/
 │   ├── (auth)/login
 │   ├── (auth)/register
 │   ├── (public)/explore
 │   ├── (public)/tours/[id]
 │   ├── (dashboard)/guide
 │   ├── (dashboard)/tourist
 │   ├── (dashboard)/admin
 │   ├── components/
 │   └── ...
 ├── public/
 ├── styles/
 ├── utils/
 └── ...
```

---

## ⚙️ **Environment Variables**

Create a `.env.local` file:

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000/api
NEXT_PUBLIC_CLOUDINARY_PRESET=your_value
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_value

# BCRYPT
BCRYPT_SALT_ROUND=7

# JWT
JWT_ACCESS_SECRET=your_jwt_access_secret
JWT_ACCESS_EXPIRES=1d
-------------------------------
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_REFRESH_EXPIRES=30d
```

---

## 🧩 **Setup & Installation**

### 1️⃣ Clone the Repository

```
git clone https://github.com/wasim-akram-dev/local-guide-platform-frontend.git
cd local-guide-platform-frontend
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Run Development Server

```
npm run dev
```

Frontend will run on:

```
http://localhost:3000
```

---

## 📦 **Build for Production**

```
npm run build
npm start
```

---

## 🔗 **API Endpoints Used**

- `/api/auth/login`
- `/api/auth/register`
- `/api/listings`
- `/api/bookings`
- `/api/reviews`
- `/api/payments/booking`
- `/api/users/:id`

---

## 📺 **Video Walkthrough**

🎥 _https://drive.google.com/drive/folders/10BOdkpsk841sgxJqvDWC4YRyv6Ux2lu2?usp=sharing_

---

## 🧪 **Admin Credentials (Required for Evaluation)**

```
Email: admin@gmail.com
Password: 123456
```

---

## 🙌 **Acknowledgments**

- Next.js Team
- Shadcn UI Community
- Tailwind CSS
- Framer Motion

---

## 📜 **License**

This project is for educational purposes under Next Level Web Development(Programming Hero).

---

### 💡 _Built with passion for travelers and local culture._ 🌍✨
