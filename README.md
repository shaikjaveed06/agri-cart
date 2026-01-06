# Paradise Nursery – Online Plant Shop

## Project Description

Paradise Nursery is a dynamic shopping cart web application for an online plant shop. Users can browse a variety of houseplants organized by categories, view plant details, add items to their cart, update quantities, remove items, and see the total cost calculated dynamically.

## Technologies Used

- **React** – Functional components with hooks
- **React Router** – Client-side routing and navigation
- **Redux Toolkit** – State management for shopping cart
- **JSX** – Component templating
- **CSS** – Custom styling with App.css

## Features

- Landing page with company branding
- Product listing with 3+ categories and 6+ plants per category
- Dynamic shopping cart with quantity management
- Add to cart functionality with button state management
- Real-time cart total calculation
- Responsive navigation bar

## How to Run the Project

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd paradise-nursery
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` to view the application.

## Project Structure

```
src/
├── components/
│   ├── AboutUs.jsx      # Company information page
│   ├── ProductList.jsx  # Product catalog with categories
│   └── CartItem.jsx     # Shopping cart page
├── redux/
│   └── CartSlice.jsx    # Redux slice for cart state
├── App.jsx              # Main app with routing
├── App.css              # Application styles
└── main.jsx             # Entry point with Redux Provider
```

## Author

Paradise Nursery Team
