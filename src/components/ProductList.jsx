import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../redux/CartSlice';

const plantData = {
  indoorPlants: {
    category: 'Indoor Plants',
    plants: [
      { id: 'indoor-1', name: 'Golden Pothos', price: 15, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&h=300&fit=crop' },
      { id: 'indoor-2', name: 'Snake Plant', price: 25, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=300&h=300&fit=crop' },
      { id: 'indoor-3', name: 'Peace Lily', price: 22, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&h=300&fit=crop' },
      { id: 'indoor-4', name: 'Spider Plant', price: 12, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=300&h=300&fit=crop' },
      { id: 'indoor-5', name: 'Rubber Plant', price: 30, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop' },
      { id: 'indoor-6', name: 'ZZ Plant', price: 28, image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=300&h=300&fit=crop' },
    ],
  },
  succulents: {
    category: 'Succulents',
    plants: [
      { id: 'succ-1', name: 'Echeveria', price: 10, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300&h=300&fit=crop' },
      { id: 'succ-2', name: 'Aloe Vera', price: 14, image: 'https://images.unsplash.com/photo-1567331711402-509c12c41959?w=300&h=300&fit=crop' },
      { id: 'succ-3', name: 'Jade Plant', price: 18, image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=300&h=300&fit=crop' },
      { id: 'succ-4', name: 'Haworthia', price: 12, image: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=300&h=300&fit=crop' },
      { id: 'succ-5', name: 'String of Pearls', price: 16, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop' },
      { id: 'succ-6', name: "Burro's Tail", price: 15, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop' },
    ],
  },
  floweringPlants: {
    category: 'Flowering Plants',
    plants: [
      { id: 'flower-1', name: 'Orchid', price: 35, image: 'https://images.unsplash.com/photo-1610397648930-477b8c7f0943?w=300&h=300&fit=crop' },
      { id: 'flower-2', name: 'Anthurium', price: 32, image: 'https://images.unsplash.com/photo-1567331711402-509c12c41959?w=300&h=300&fit=crop' },
      { id: 'flower-3', name: 'African Violet', price: 18, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=300&fit=crop' },
      { id: 'flower-4', name: 'Bromeliad', price: 28, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop' },
      { id: 'flower-5', name: 'Hibiscus', price: 24, image: 'https://images.unsplash.com/photo-1567990989224-6441e1483ac8?w=300&h=300&fit=crop&auto=format' },
      { id: 'flower-6', name: 'Jasmine', price: 20, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=300&fit=crop' },
    ],
  },
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">🌿 Paradise Nursery</div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link active">Plants</Link>
          <Link to="/cart" className="nav-link cart-link">
            🛒 Cart
            {totalQuantity > 0 && (
              <span className="cart-count">{totalQuantity}</span>
            )}
          </Link>
        </div>
      </nav>

      {/* Product Categories */}
      <div className="products-container">
        <h1 className="products-title">Our Plant Collection</h1>
        
        {Object.values(plantData).map((categoryData) => (
          <div key={categoryData.category} className="category-section">
            <h2 className="category-title">{categoryData.category}</h2>
            <div className="plants-grid">
              {categoryData.plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />
                  <div className="plant-info">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-price">${plant.price}</p>
                    <button
                      className={`add-to-cart-btn ${isInCart(plant.id) ? 'added' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
