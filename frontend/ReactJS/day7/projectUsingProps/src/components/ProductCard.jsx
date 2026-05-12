const ProductCard = ({ product }) => {
  const { productName, price, quantity, imageUrl, category } = product;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <img 
          src={imageUrl} 
          alt={productName} 
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
          {category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {productName}
        </h3>
        
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xl font-bold text-orange-600">${price.toFixed(2)}</p>
          <p className="text-sm text-gray-500">Qty: {quantity}</p>
        </div>

        <div className="mt-5 flex gap-2">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            Add
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Ref-Icon-Path-Here" />
              <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;