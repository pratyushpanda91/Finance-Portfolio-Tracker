# Finance Portfolio Tracker

A full-stack Finance Portfolio Tracker application built using the MERN-style architecture with PostgreSQL and Prisma ORM. The application allows users to securely manage their investment portfolio through JWT-based authentication and perform complete CRUD operations while tracking portfolio performance.

---

## Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Hashing using bcrypt

### Portfolio Management
- Add Investment
- View Investments
- Update Investment
- Delete Investment

### Dashboard
- Portfolio Summary
- Total Investment
- Current Portfolio Value
- Profit / Loss
- Total Investments

### Additional Features
- Search Investments
- Pagination
- Responsive Layout
- Form Validation
- Toast Notifications

---

# Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast
- Lucide React Icons

## Backend

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- bcrypt
- Zod Validation

---

# Project Architecture

```
React Frontend
       │
Axios API Calls
       │
Express Backend
       │
Authentication Middleware
       │
Controllers
       │
Service Layer
       │
Prisma ORM
       │
PostgreSQL Database
```

---

# Project Structure

```
Finance-Portfolio-Tracker
│
├── backend
│   ├── prisma
│   │   ├── migrations
│   │   └── schema.prisma
│   │
│   ├── src
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── routes
│   │   ├── services
│   │   ├── validations
│   │   ├── utils
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── routes
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/yourusername/Finance-Portfolio-Tracker.git
```

---

# Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
PORT=5000
```

Run Prisma Migration

```bash
npx prisma migrate dev
```

Generate Prisma Client

```bash
npx prisma generate
```

Start Backend

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

---

# Environment Variables

## Backend

| Variable | Description |
|----------|-------------|
| DATABASE_URL | PostgreSQL Connection String |
| JWT_SECRET | Secret Key for JWT |
| PORT | Backend Port |

---

## Frontend

| Variable | Description |
|----------|-------------|
| VITE_API_URL | Backend API URL |

---

# API Documentation

## Authentication

### Register

```
POST /api/auth/register
```

Request Body

```json
{
  "name":"John Doe",
  "email":"john@example.com",
  "password":"password123"
}
```

---

### Login

```
POST /api/auth/login
```

Request Body

```json
{
  "email":"john@example.com",
  "password":"password123"
}
```

Returns

```json
{
  "message":"Login Successful",
  "token":"JWT_TOKEN"
}
```

---

# Investments

## Create Investment

```
POST /api/investments
```

Authorization

```
Bearer Token
```

---

## Get All Investments

```
GET /api/investments
```

Supports

- Pagination
- Search

Example

```
GET /api/investments?page=1&limit=5&search=tata
```

---

## Get Investment By ID

```
GET /api/investments/:id
```

---

## Update Investment

```
PUT /api/investments/:id
```

---

## Delete Investment

```
DELETE /api/investments/:id
```

---

# Portfolio APIs

## Portfolio Summary

```
GET /api/portfolio/summary
```

Returns

- Total Investment
- Current Value
- Profit/Loss
- Total Investments

---

# Authentication Flow

```
User Login
      │
JWT Generated
      │
Stored in Local Storage
      │
Axios sends Authorization Header
      │
Backend Authentication Middleware
      │
Protected Routes
```

---

# Validation

Implemented using **Zod**

Validated fields include

- User Registration
- Login
- Investment Creation
- Investment Update

---

# Database

Database

```
PostgreSQL
```

ORM

```
Prisma ORM
```

Schema

```
backend/prisma/schema.prisma
```

Migration Files

```
backend/prisma/migrations
```

---

# Sample Credentials

Email

```
pratyush@gmail.com
```

Password

```
123456
```

---

# Future Improvements

- Stock Market API Integration
- Charts and Portfolio Analytics
- Export Portfolio Reports
- Investment Categories
- Email Notifications
- Dark Mode

---

# Author

**Pratyush Panda**


GitHub

https://github.com/pratyushpanda91

---
