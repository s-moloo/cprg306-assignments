

export default function Item({ name, quantity, category }) {

  return (
    <li className="p-4 border-b border-gray-200 bg-black hover:bg-gray-100">
      <div className="flex flex-col">
        <div className="text-lg font-bold">{name}</div>
        <div className="text-sm text-gray-500">Buy {quantity} in {category}</div>
        </div>
     </li>
  );
}

function categoryColor(category) {
  switch (category) {
    case 'dairy':
      return 'bg-blue-200 text-blue-800';
    case 'bakery':
      return 'bg-red-200 text-red-800';
    case 'produce':
      return 'bg-green-200 text-green-800';
    case 'meat':
      return 'bg-pink-200 text-pink-800';
    case 'canned goods':
      return 'bg-yellow-200 text-yellow-800';
    case 'dry goods':
      return 'bg-purple-200 text-purple-800';
    case 'household':
      return 'bg-gray-200 text-gray-800';
    default:
      return 'bg-gray-200 text-gray-800';
  }
}

