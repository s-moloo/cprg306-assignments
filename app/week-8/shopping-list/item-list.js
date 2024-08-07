"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div className="p-4 max-w-lg mx-auto text-black">
            <div className="flex justify-center mb-4 text-black">
                <button
                    className={`px-4 py-2 mr-2 rounded ${sortBy === 'name' ? 'bg-orange-500 text-black' : 'bg-gray-200'}`}
                    onClick={() => setSortBy('name')}
                >
                    Name
                </button>
                <button
                    className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-orange-500 text-black' : 'bg-gray-200'}`}
                    onClick={() => setSortBy('category')}
                >
                    Category
                </button>
            </div>
            <ul className="bg-black text-white shadow-md rounded">
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={onItemSelect}
                    />
                ))}
            </ul>
        </div>
    );
}
