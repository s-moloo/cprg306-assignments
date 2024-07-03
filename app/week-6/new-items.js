"use client"

import { useState } from "react";
// import newItem from "./new-items";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Generate a random ID (assuming a simple unique identifier)
      const id = Math.random().toString(36).substr(2, 9);
  
      // Create the item object with id, name, quantity, and category
      const item = { id, name, quantity, category };
  
      // Call the onAddItem prop with the item object
      onAddItem(item);
  
      // Reset the form fields
      setName("");
      setQuantity(1);
      setCategory("produce");
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-1 border rounded shadow-md"
      >
        <div className="mb-4">
          <label className="block text-white font-bold mb-2">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-1 border rounded w-full text-black"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2">
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              max="99"
              required
              className="mt-1 p-1 border rounded w-full text-black"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2">
            Category:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 p-1 border rounded w-full text-black"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen-foods">Frozen Foods</option>
              <option value="canned-goods">Canned Goods</option>
              <option value="dry-goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-black font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </form>
    );
  }