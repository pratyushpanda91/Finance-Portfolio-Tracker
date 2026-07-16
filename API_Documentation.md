# Finance Portfolio Tracker - API Documentation

## Base URL

```
http://localhost:5000/api
```

---

# Authentication APIs

## 1. Register User

**Endpoint**

```
POST /auth/register
```

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Success Response

```json
{
  "success": true,
  "message": "User registered successfully."
}
```

---

## 2. Login User

**Endpoint**

```
POST /auth/login
```

### Request Body

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Login successful.",
  "data": {
    "token": "JWT_TOKEN"
  }
}
```

---

# Investment APIs

> **Authentication Required**

Add the JWT token in the request header:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## 3. Create Investment

**Endpoint**

```
POST /investments
```

### Request Body

```json
{
  "investmentName": "Google",
  "investmentType": "STOCK",
  "investedAmount": 10000,
  "currentValue": 12000,
  "purchaseDate": "2026-07-16T00:00:00.000Z"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Investment created successfully."
}
```

---

## 4. Get All Investments

**Endpoint**

```
GET /investments
```

### Query Parameters

| Parameter | Description |
|------------|-------------|
| page | Page number |
| limit | Records per page |
| search | Search by investment name |

### Example

```
GET /investments?page=1&limit=5&search=google
```

---

## 5. Get Investment By ID

**Endpoint**

```
GET /investments/:id
```

### Success Response

```json
{
  "success": true,
  "data": {
    "id": 1,
    "investmentName": "Google",
    "investmentType": "STOCK",
    "investedAmount": 10000,
    "currentValue": 12000,
    "purchaseDate": "2026-07-16T00:00:00.000Z"
  }
}
```

---

## 6. Update Investment

**Endpoint**

```
PUT /investments/:id
```

### Request Body

```json
{
  "investmentName": "Google",
  "investmentType": "STOCK",
  "investedAmount": 10000,
  "currentValue": 12500,
  "purchaseDate": "2026-07-16T00:00:00.000Z"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Investment updated successfully."
}
```

---

## 7. Delete Investment

**Endpoint**

```
DELETE /investments/:id
```

### Success Response

```json
{
  "success": true,
  "message": "Investment deleted successfully."
}
```

---

# Portfolio APIs

## 8. Get Portfolio Summary

**Endpoint**

```
GET /portfolio/summary
```

### Success Response

```json
{
  "success": true,
  "data": {
    "totalInvestment": 17400,
    "currentValue": 20450,
    "totalProfitLoss": 3050,
    "totalInvestments": 6
  }
}
```

---

# Authentication Flow

```
User Login
      │
      ▼
JWT Token Generated
      │
      ▼
Stored in Local Storage
      │
      ▼
Sent in Authorization Header
      │
      ▼
Authentication Middleware
      │
      ▼
Protected API Access
```

---

# HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request / Validation Error |
| 401 | Unauthorized |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

# Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Zod Validation
- React.js
- Vite
- Tailwind CSS
