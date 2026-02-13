import React from "react";
import { Heart, Star, ShoppingCart } from "react-feather";
import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img
          className="product-image w-full h-80 object-cover"
          src={product.image}
          alt={product.name}
        />
        <div className="absolute top-2 right-2">
          <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100" aria-label="Wish">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        {product.badge && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <span className="text-white font-medium">{product.badge}</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-brand-navy">{product.name}</h3>
        <div className="mt-1 flex justify-between items-center">
          <p className="text-brand-navy font-bold">${product.price.toFixed(2)}</p>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-gray-600 ml-1">{product.rating}</span>
          </div>
        </div>

        <button
          onClick={() => addItem(product, 1)}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 font-semibold shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 active:scale-[0.99] transition"
          style={{ 
            backgroundColor: '#0a2342', 
            color: '#ffffff',
            border: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f97316';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0a2342';
          }}
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}