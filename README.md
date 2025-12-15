# Paradise Nursery - Shopping Application

A modern, user-friendly houseplant shopping application built with React and Redux. Browse our curated selection of indoor plants, succulents, and flowering varieties, then add them to your cart for checkout.

## Features

✨ **Landing Page**

- Beautiful gradient background design
- Company description and welcome message
- "Get Started" button to enter the shop

🛍️ **Product Listing Page**

- Browse 9+ houseplants organized into 3 categories:
  - Indoor Plants (Monstera, Pothos, Fiddle Leaf Fig)
  - Succulents (Aloe Vera, Jade Plant, Echeveria)
  - Flowering Plants (Orchid, Anthurium, Peace Lily)
- Each plant displays thumbnail, name, description, and price
- "Add to Cart" buttons that disable after adding to prevent duplicates
- Responsive grid layout

🛒 **Shopping Cart Page**

- View all items in your cart with images, names, and unit prices
- Real-time total cost calculation
- Quantity controls (increase/decrease buttons)
- Delete button for removing items
- Empty cart handling with redirect to continue shopping
- Checkout button (Coming Soon)

📱 **Header Navigation**

- Persistent header on product and cart pages
- Clickable logo to return home
- Navigation buttons to switch between pages
- Shopping cart icon with dynamic badge showing total items count

## Project Structure

```
src/
├── components/
│   ├── Header.jsx             # Navigation and cart icon
│   ├── Header.css
│   ├── LandingPage.jsx        # Home page
│   ├── LandingPage.css
│   ├── ProductListing.jsx     # Shop with categories
│   ├── ProductListing.css
│   ├── ShoppingCart.jsx       # Cart management
│   └── ShoppingCart.css
├── redux/
│   ├── store.js               # Redux store configuration
│   ├── productsSlice.js       # Product data and actions
│   └── cartSlice.js           # Cart state and reducers
├── App.jsx                    # Main app with routing
├── App.css
├── main.jsx                   # Redux Provider setup
└── index.css                  # Global styles
```

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React-Redux** - Redux bindings
- **React Router DOM** - Client-side routing
- **CSS3** - Custom styling with Grid and Flexbox

## Installation & Setup

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory:**

   ```bash
   cd Paradise-nursery
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The app will open at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

## Redux State Management

### Products Slice

- Stores all available houseplants with metadata
- Contains product data: id, name, category, price, image, description
- Read-only (no actions needed)

### Cart Slice

- Manages shopping cart items
- **Actions:**
  - `addToCart` - Add a product to cart
  - `incrementQuantity` - Increase quantity of an item
  - `decrementQuantity` - Decrease quantity of an item
  - `removeFromCart` - Delete an item from cart
  - `clearCart` - Empty the entire cart

## Product Catalog

### Indoor Plants

- **Monstera Deliciosa** - $45.99
- **Pothos** - $24.99
- **Fiddle Leaf Fig** - $55.99

### Succulents

- **Aloe Vera** - $19.99
- **Jade Plant** - $29.99
- **Echeveria** - $22.99

### Flowering Plants

- **Orchid** - $39.99
- **Anthurium** - $34.99
- **Peace Lily** - $28.99

## Key Features Explained

### Add to Cart Behavior

1. Click "Add to Cart" button on any plant
2. Button becomes disabled and shows "In Cart"
3. Cart icon badge increments
4. Item added to Redux store

### Shopping Cart Management

- View all items with images and details
- Adjust quantities with + and - buttons
- Real-time total cost updates
- Delete items individually
- Continue shopping returns to product page

### Responsive Design

- Mobile-friendly layout
- Adaptive grid for products
- Touch-friendly buttons and controls
- Responsive header navigation

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- 🔐 User authentication
- 💳 Payment integration
- 📦 Order tracking
- ⭐ Product reviews and ratings
- 🔍 Search and filtering
- 💬 Live chat support
- 📧 Email notifications

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
