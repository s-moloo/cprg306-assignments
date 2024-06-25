

import ItemList from './item-list';

export default function Page() {
 {
        //console.log('Rendering Page');  // Debugging statement
        return (
            <main className="min-h-screen bg-black p-4 text-white">
              <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>
            <ItemList />
          </main>
        );
      }
}