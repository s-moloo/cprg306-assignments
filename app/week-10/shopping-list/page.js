"use client";

import { useEffect, useState } from "react";
import NewItem from "./new-items";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = async (newItem) => {
        const itemId = await addItem(user.uid, newItem);
        setItems([...items, { ...newItem, id: itemId }]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '').trim();
        setSelectedItemName(cleanedName);
    };

    const loadItems = async () => {
        if (user) {
          getItems(user.uid, setItems);
        }
      };

      useEffect(() => {
        if (user) {
            loadItems();
          }
      }, [user]);

      if (!user) {
        return <div>Please log in to access the shopping list.</div>;
      }

    return (
        <main className="min-h-screen bg-black p-4 text-white">
            <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>
            <div className="flex">
                <div className="w-1/2 pr-4">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2 pl-4">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}
