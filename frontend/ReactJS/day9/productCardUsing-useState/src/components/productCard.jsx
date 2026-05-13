const ProductCard = ({product , removeItem}) => {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden font-sans">

      <div className="relative h-64 bg-gray-50 p-6 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full object-contain mix-blend-multiply"
        />
        <span className="absolute top-3 left-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase">
          {product.category}
        </span>
      </div>


      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 truncate mb-1">
          {product.title}
        </h3>
        

        <div className="flex items-center mb-3">
          <div className="flex items-center text-yellow-400">
            <span className="ml-1 text-sm font-medium text-gray-600">
              {product.rating.rate}
            </span>
          </div>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-500">{product.rating.count} reviews</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {product.description}
        </p>


        <div className="flex items-center justify-between">
          <span className="text-2xl font-extrabold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button onClick={()=>{removeItem(product.id)}} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;