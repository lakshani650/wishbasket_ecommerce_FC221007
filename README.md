# Wish Basket - E-Commerce Web Application

![Wish Basket Logo](frontend/images/logo.png)

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Technology Stack](#technology-stack)  
4. [Folder Structure](#folder-structure)  
5. [Setup Instructions](#setup-instructions)  
6. [How to Use](#how-to-use)  
7. [API Endpoints](#api-endpoints)  
8. [Database Schema](#database-schema)  
9. [Future Improvements](#future-improvements)  
10. [License](#license)  

---

## Project Overview

**Wish Basket** is a simple e-commerce web application for selling gift items. Users can browse products, add them to a shopping cart, update quantities, remove items, and view contact and feedback sections. The system demonstrates a **frontend-backend-database integration** using:

- Frontend: HTML, CSS, JavaScript  
- Backend: Spring Boot (Java) REST API  
- Database: MySQL  

---

## Features

- Responsive **one-page frontend** with:  
  - Navbar with logo and tabs (Home, Items, Cart, Contact)  
  - Home section with a carousel of gift items  
  - Items section displaying products with image, name, price, discount, and "Add to Cart" button  
  - Cart section with table, quantity adjustment (+/-), remove item button, and total price  
  - Footer section with Feedback, Contact, and Social media links  

- **Backend CRUD functionality** via REST API:  
  - Retrieve products  
  - Add a new product  
  - Delete a product  

- **Database-driven product storage** using MySQL  

---

## Technology Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Spring Boot, Java 17 |
| Database | MySQL |
| API | RESTful endpoints |
| Version Control | Git/GitHub |

---

## Folder Structure
```markdown
```text
wish-basket-project/
│
├── frontend/
│   ├── gifts.html
│   ├── gifts.css
│   └── gifts.js
│   └── images/           
│
├── backend/
│   └── wishbasket-backend/
│       └── src/main/java/com/wishbasket/
│           ├── WishBasketApplication.java
│           ├── entity/
│           │   └── Product.java
│           ├── repository/
│           │   └── ProductRepository.java
│           ├── service/
│           │   └── ProductService.java
│           └── controller/
│               └── ProductController.java
│       └── src/main/resources/
│           └── application.properties
│
└── database/
    └── wishbasket.sql
```
  ## Setup Instructions
git clone https://github.com/<lakshani650/wishbasket_ecommerce_FC221007>.git

## How to Use
1.Open the homepage and view the carousel of gifts.
2.Scroll to the Items section to see products.
3.Click Add to Cart to include items in the shopping cart.
4.Adjust quantity with + / - buttons or remove items with the Remove button.
5.Fill out Feedback form and submit.
6.Contact information and social media links are available in the footer.

## API Endpoints
| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| GET    | `/api/products`      | Get all products       |
| POST   | `/api/products`      | Add a new product      |
| DELETE | `/api/products/{id}` | Delete a product by ID |


## Database Schema
| Column   | Type         | Description                 |
| -------- | ------------ | --------------------------- |
| id       | INT (PK)     | Product ID (auto-increment) |
| name     | VARCHAR(100) | Name of the product         |
| price    | DOUBLE       | Product price               |
| discount | DOUBLE       | Discount percentage         |
| image    | VARCHAR(255) | Image path of the product   |


## Future Improvements
1.Add Admin panel for managing products.
2.Integrate user login/registration.
3.Implement payment gateway.
4.Enhance carousel and animations with a modern JS library.

## Licence
This project is for educational purposes only.
