Great idea ✅ Let’s build a **detailed `README.md` with extensive documentation** – including setup, folder structure, authentication flow, full API endpoints with example requests/responses, and usage instructions.

Here’s the full version:

---

```markdown
# 🛒 E-Commerce REST API  
A full-featured **E-Commerce API** built using **Node.js, Express, and MongoDB (Mongoose)**.  

This backend system supports **Users, Products, Orders, and Wishlists** with **JWT authentication** for secure access.  

---

## 📌 Features
- 🔑 User Authentication (Register, Login, Profile)
- 📦 Product Management (CRUD operations)
- 🛍️ Order Management (Create & View Orders)
- 💖 Wishlist Management (Add & View Items)
- 🔐 JWT-based authentication
- 📜 Timestamps for tracking creations/updates
- 🛠️ Scalable MongoDB schemas

---

## ⚡ Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB + Mongoose  
- **Authentication:** JWT (JSON Web Token)  
- **Tools:** Postman / cURL for API testing  

---

## 📂 Project Structure
```

ecommerce-api/
│-- models/
│   ├── User.js
│   ├── Product.js
│   ├── Order.js
│   └── Wishlist.js
│-- routes/
│   ├── userRoutes.js
│   ├── productRoutes.js
│   ├── orderRoutes.js
│   └── wishlistRoutes.js
│-- controllers/
│-- middleware/
│-- server.js
│-- package.json
│-- README.md

````

---

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecommerce-api.git
   cd ecommerce-api
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in root directory:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Start the server**

   ```bash
   npm start
   ```

   API will be available at:
   👉 `http://localhost:5000`

---

## 🔐 Authentication

* Routes such as `/user/profile`, `/order/view`, and `/wishlist/all-items` are **protected**.
* You must pass **JWT Token** in headers:

```http
Authorization: Bearer <your_token>
```

* Token is generated during **login**.

---

## 📌 API Documentation

### 🧑 User APIs

**Base URL:** `/user`

| Endpoint    | Method | Input                              | Output                                         |
| ----------- | ------ | ---------------------------------- | ---------------------------------------------- |
| `/register` | POST   | `{ name, phone, email, password }` | `{ message: "User registered", user }`         |
| `/login`    | POST   | `{ email, password }`              | `{ message: "Login successful", token, user }` |
| `/profile`  | GET    | `Auth Token`                       | `{ user }`                                     |

**Example Request (Register)**

```json
POST /user/register
{
  "name": "Rounak",
  "phone": "9876543210",
  "email": "rounak@example.com",
  "password": "123456"
}
```

**Example Response**

```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "64efc9a9d1a4d8",
    "name": "Rounak",
    "phone": "9876543210",
    "email": "rounak@example.com"
  }
}
```

---

### 📦 Product APIs

**Base URL:** `/product`

| Endpoint      | Method | Input                                              | Output                        |
| ------------- | ------ | -------------------------------------------------- | ----------------------------- |
| `/add`        | POST   | `{ title, description, price, banner, zip, user }` | `{ message, product }`        |
| `/all`        | GET    | None                                               | `[ products ]`                |
| `/delete/:id` | DELETE | `:id`                                              | `{ message }`                 |
| `/update/:id` | PUT    | `:id + { fields to update }`                       | `{ message, updatedProduct }` |

**Example Request (Add Product)**

```json
POST /product/add
{
  "title": "iPhone 15",
  "description": "Latest Apple iPhone",
  "price": 1200,
  "banner": "iphone15.png",
  "zip": "700001",
  "user": "64efc9a9d1a4d8"
}
```

**Example Response**

```json
{
  "message": "Product added successfully",
  "product": {
    "_id": "64efcb23d1a4e0",
    "title": "iPhone 15",
    "description": "Latest Apple iPhone",
    "price": 1200,
    "banner": "iphone15.png",
    "zip": "700001",
    "user": "64efc9a9d1a4d8"
  }
}
```

---

### 📑 Order APIs

**Base URL:** `/order`

| Endpoint  | Method | Input               | Output               |
| --------- | ------ | ------------------- | -------------------- |
| `/create` | POST   | `{ user, product }` | `{ message, order }` |
| `/view`   | GET    | `Auth Token`        | `[ orders ]`         |

**Example Request (Create Order)**

```json
POST /order/create
{
  "user": "64efc9a9d1a4d8",
  "product": "64efcb23d1a4e0"
}
```

**Example Response**

```json
{
  "message": "Order created successfully",
  "order": {
    "_id": "64efcd45d1a4e5",
    "user": "64efc9a9d1a4d8",
    "product": "64efcb23d1a4e0",
    "createdAt": "2025-09-07T10:00:00Z"
  }
}
```

---

### 💖 Wishlist APIs

**Base URL:** `/wishlist`

| Endpoint     | Method | Input               | Output                  |
| ------------ | ------ | ------------------- | ----------------------- |
| `/add-item`  | POST   | `{ user, product }` | `{ message, wishlist }` |
| `/all-items` | GET    | `Auth Token`        | `[ wishlistItems ]`     |

**Example Request (Add Item to Wishlist)**

```json
POST /wishlist/add-item
{
  "user": "64efc9a9d1a4d8",
  "product": "64efcb23d1a4e0"
}
```

**Example Response**

```json
{
  "message": "Item added to wishlist",
  "wishlist": {
    "_id": "64efce12d1a4e9",
    "user": "64efc9a9d1a4d8",
    "product": "64efcb23d1a4e0",
    "createdAt": "2025-09-07T10:05:00Z"
  }
}
```

---

## 📬 Example cURL Requests

**Register User**

```bash
curl -X POST http://localhost:5000/user/register \
-H "Content-Type: application/json" \
-d '{"name":"Rounak","phone":"9876543210","email":"rounak@example.com","password":"123456"}'
```

**Login User**

```bash
curl -X POST http://localhost:5000/user/login \
-H "Content-Type: application/json" \
-d '{"email":"rounak@example.com","password":"123456"}'
```

**Get Profile**

```bash
curl -X GET http://localhost:5000/user/profile \
-H "Authorization: Bearer <your_token>"
```

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

Developed by **Rounak** ✨

```

---

Would you like me to also generate a **Postman Collection JSON** file so you can directly import all these endpoints and test them quickly?
```
