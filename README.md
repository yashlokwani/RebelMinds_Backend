# 🍽️ Restaurant POS Backend

A simple backend service for managing restaurant orders using Node.js, Express, and MongoDB. It includes endpoints to create and fetch orders, with validation and total price calculation.

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose

---

## 📁 Project Structure

```
.
├── controllers/
│   └── orderController.js       # Create and fetch order logic
├── models/
│   ├── Restaurant.js
│   ├── MenuItem.js
│   └── Order.js
├── routes/
│   ├── orders.js
│   └── seed.js                  # Populate seed data
├── config/
│   └── db.js                    # MongoDB connection setup
├── seed/
│   └── seedData.js              # Sample menu/restaurant data
├── .env
├── server.js
└── README.md
```

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yashlokwani/restaurant-pos-backend.git
cd restaurant-pos-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_atlas_uri
PORT=3000
```

### 4. Start the Server

```bash
npm start
```

Server will run at: `http://localhost:3000`

---

## 🌱 Seed the Database

To add one sample restaurant and menu items:

```bash
GET http://localhost:3000/seed
```

---

## 📦 API Endpoints

### ➕ Create Order

```http
POST /orders
Content-Type: application/json
```

#### 📅 Sample Request Body

```json
{
  "restaurant_id": "6808ca3a9760e22fc6dc75c4",
  "customer_name": "Lok",
  "order_type": "DINE_IN",
  "items": [
    { "menu_item_id": "6808ca3a9760e22fc6dc75c8", "quantity": 3 },
    { "menu_item_id": "6808ca3a9760e22fc6dc75c6", "quantity": 1 }
  ]
}
```

#### ✅ Response

```json
{
    "order_id": "6808cadc9760e22fc6dc75cc",
    "customer_name": "Lok",
    "order_type": "DINE_IN",
    "created_at": "2025-04-23T11:11:24.413Z",
    "items": [
        {
            "name": "Garlic Bread",
            "quantity": 3,
            "total": 450
        },
        {
            "name": "Margherita Pizza",
            "quantity": 1,
            "total": 300
        }
    ],
    "total_price": 750
}
```


---

### 📄 Get Order Details

```http
GET /orders/:id
```

#### ✅ Response

```json
{
    "order_id": "6808cadc9760e22fc6dc75cc",
    "customer_name": "Lok",
    "order_type": "DINE_IN",
    "created_at": "2025-04-23T11:11:24.413Z",
    "items": [
        {
            "name": "Garlic Bread",
            "quantity": 3,
            "total": 450
        },
        {
            "name": "Margherita Pizza",
            "quantity": 1,
            "total": 300
        }
    ],
    "total_price": 750
}
```



---

## 🌐 Deployment Instructions

1. Push your code to GitHub
2. Deploy the project
3. Connect to MongoDB Atlas using your connection string in `.env`

---

## 🛠️ Future Improvements

- Add user authentication
- Order status tracking (e.g., PREPARING, READY, COMPLETED)
- Admin dashboard for managing restaurants and menus
- Pagination & filtering for orders

---

## 👨‍💻 Author

- GitHub: [@yashlokwani](https://github.com/yashlokwani)

---

## 📃 License

This project is licensed under the MIT License.

