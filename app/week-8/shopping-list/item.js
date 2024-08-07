"use client";

export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li onClick={() => onSelect(name)} className="cursor-pointer">
            <div className="flex justify-between items-center p-4 border-gray-700">
                <div>
                    <span className="font-medium text-lg">{name}</span>
                    <div className="text-gray-400">Buy {quantity} in {category}</div>
                </div>
            </div>
        </li>
    );
}
