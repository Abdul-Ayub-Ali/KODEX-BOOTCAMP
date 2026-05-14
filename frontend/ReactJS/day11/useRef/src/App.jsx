import { useRef } from "react";

const App = () => {

  const inputRef = useRef({});

  const handleSubmit = (e) =>{
    e.preventDefault();
    const productObj = {
      'Product Title' : inputRef.current.title.value,
      'Price' : inputRef.current.price.value,
      'Category' : inputRef.current.category.value,
      'Description' : inputRef.current.description.value
    }
    console.log(productObj)
  }
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-indigo-600 p-6">
          <h2 className="text-xl font-bold text-white">Product Information</h2>
          <p className="text-indigo-100 text-sm">Please fill in the details to add a new product to the inventory.</p>
        </div>

        {/* Form Body */}
        <form className="p-8 space-y-5">
          {/* Product Name */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Product Title</label>
            <input
            ref={(e)=>{
              inputRef.current.title = e
            }}
              type="text"
              placeholder="e.g. Wireless Headphones"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Price */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Price (INR)</label>
              <input
              ref={(e)=>{
              inputRef.current.price = e
            }}
                type="number"
                placeholder="0.00"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>

            {/* Category */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Category</label>
              <select
              ref={(e)=>{
              inputRef.current.category = e
            }} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white transition-all">
                <option>Electronics</option>
                <option>Gadgets</option>
                <option>Accessories</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Description</label>
            <textarea
            ref={(e)=>{
              inputRef.current.description = e
            }}
              rows="4"
              placeholder="Tell us more about the product features..."
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex gap-3">
            <button
              type="button"
              className="flex-1 px-4 py-2.5 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95"
            onClick={handleSubmit}
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App