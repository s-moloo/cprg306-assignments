"use client"
import NewItem from './new-items';
import ItemList from './item-list';
import itemsData from './items.json';
import { useState } from 'react';

export default function Page() {

const [items, setItems] = useState(itemsData);

const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
};

return (
    <main className="min-h-screen bg-black p-4 text-white">
    <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>
    
    {/* Pass the handleAddItem event handler to the NewItem component as a prop called onAddItem */}
    <NewItem onAddItem={handleAddItem} />

    {/* Pass the items state to the ItemList component as a prop */}
    <ItemList items={items} />
  </main>
);
}
