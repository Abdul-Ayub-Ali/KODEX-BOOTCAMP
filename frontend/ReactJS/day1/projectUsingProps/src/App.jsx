import ProductCard from './components/ProductCard';

const App = () => {
  const cartData = [
    {
      id: 101,
      productName: "Wireless Ergonomic Mouse",
      price: 45.99,
      quantity: 1,
      category: "Electronics",
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 102,
      productName: "Cotton Oversized Hoodie",
      price: 59.50,
      quantity: 2,
      category: "Apparel",
      imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=300&q=80"
    },
    {
  "id": 103,
  "productName": "Fresh Mixed Fruits ",
  "price": 24.00,
  "quantity": 1,
  "category": "Fruits",
  "imageUrl": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80"
}
  ];

  return (
    <section className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;