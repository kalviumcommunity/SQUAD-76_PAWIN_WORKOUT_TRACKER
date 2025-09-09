# 💪 SQUAD-76_PAWIN_WORKOUT_TRACKER – Smart Workout Tracker with RPE Monitoring

Welcome to **Smart Workout Tracker**, a web and mobile-friendly application designed to enhance your fitness journey by tracking your workouts, estimating your strength, and monitoring exertion levels using the RPE (Rate of Perceived Exertion) scale. 🏋️‍♀️📊

---

## 🌟 Project Overview

Modern fitness progress isn't just about lifting heavier — it's about lifting smarter. The **Workout Tracker** empowers users with detailed workout logging, real-time RPE input, and strength estimation tools to avoid overtraining and optimize performance.

The app offers:

- 📓 Log workouts with sets, reps, and weights  
- ⚖️ Rate exertion per set using the RPE scale (1–10)  
- 🧠 Auto-calculate estimated 1RM based on reps and RPE  
- 📈 Visual dashboard to monitor progress over time  
- 🕘 History log to view past sessions  
- 🔐 (Optional) User authentication for secure, personal tracking

---

## 📅 Day-by-Day Plan

**Day 1: 🎨 UI/UX Design**  
- Create Figma wireframes for workout log, RPE input, and dashboard views

**Day 2: ⚙️ Project Initialization**  
- Set up GitHub repository and folder structure  
- Initialize React frontend and Node.js + Express backend  
- Create README and define project plan

**Day 3–7: 🛠️ Backend Development**  
- Design MongoDB schema for workout logs  
- Develop CRUD APIs for workout creation, update, and deletion  
- Implement RPE and 1RM logic on the backend

**Day 7–13: 🧑‍💻 Frontend Development**  
- Build responsive React components for logging, history, and dashboard  
- Integrate form inputs for sets, reps, RPE  
- Display visual progress using Recharts or Chart.js

**Day Final: 🧪 Testing & Authentication**  
- Add optional JWT-based authentication  
- Final testing and bug fixes  
- Deploy frontend and backend

---

## 🚀 Features

- 🏋️‍♂️ **Workout Logging**: Add exercises with sets, reps, weight, and RPE  
- 📊 **1RM Estimator**: Automatically calculates estimated one-rep max  
- 📈 **Progress Dashboard**: Visualize training trends over time  
- 🗓️ **Workout History**: Access previous training sessions  
- 🔐 **User Authentication (Optional)**: Personal workout profiles  
- 📱 **Responsive Design**: Mobile and desktop-friendly interface

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Charts**: Chart.js or Recharts (for visualization)  
- **Authentication**: JWT (Optional)  
- **Version Control**: Git & GitHub  
- **Deployment**: Vercel (Frontend), Render (Backend)  
- **Design**: Figma (UI/UX)

---

## Backend Deployment : https://squad-76-pawin-workout-tracker-3.onrender.com/

---

## 🔐 Security Best Practices

To keep your data safe and secure:

- Use `.env` files for sensitive variables  
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

