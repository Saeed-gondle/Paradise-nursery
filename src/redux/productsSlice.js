import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    // Indoor Plants
    {
      id: 1,
      name: "Monstera Deliciosa",
      category: "Indoor Plants",
      price: 45.99,
      image: "🌿",
      description: "Swiss Cheese Plant",
    },
    {
      id: 2,
      name: "Pothos",
      category: "Indoor Plants",
      price: 24.99,
      image: "🪴",
      description: "Devil's Ivy",
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      category: "Indoor Plants",
      price: 55.99,
      image: "🌱",
      description: "Ficus Lyrata",
    },
    // Succulents
    {
      id: 4,
      name: "Aloe Vera",
      category: "Succulents",
      price: 19.99,
      image: "🌵",
      description: "Medicinal Succulent",
    },
    {
      id: 5,
      name: "Jade Plant",
      category: "Succulents",
      price: 29.99,
      image: "💚",
      description: "Money Tree",
    },
    {
      id: 6,
      name: "Echeveria",
      category: "Succulents",
      price: 22.99,
      image: "🌸",
      description: "Flowering Succulent",
    },
    // Flowering Plants
    {
      id: 7,
      name: "Orchid",
      category: "Flowering Plants",
      price: 39.99,
      image: "🌺",
      description: "Elegant Bloomer",
    },
    {
      id: 8,
      name: "Anthurium",
      category: "Flowering Plants",
      price: 34.99,
      image: "❤️",
      description: "Flamingo Flower",
    },
    {
      id: 9,
      name: "Peace Lily",
      category: "Flowering Plants",
      price: 28.99,
      image: "⚪",
      description: "Air Purifying",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // No reducers needed for products - they're read-only
  },
});

export default productsSlice.reducer;
