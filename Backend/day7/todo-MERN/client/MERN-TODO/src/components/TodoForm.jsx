import { useRef } from "react";

const TodoForm = ({ addTask }) => {
  const todoItem = useRef({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      task: todoItem.current.task?.value || "",
      description: todoItem.current.description?.value || "",
      priority: todoItem.current.priority?.value || "Medium",
      dueDate: todoItem.current.dueDate?.value || "",
      category: todoItem.current.category?.value || "Personal",
      completed: false,
    };
    addTask(formData)

    console.log("Form Submit Ho Gaya:", formData);
    await addTask(formData);

  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
      <div className="mb-7">
        <h2 className="text-2xl font-extrabold text-slate-950">Kuch Naya Plan Karein?</h2>
        <p className="mt-1 text-base text-slate-500">Naya task define karein aur organize rahein.</p>
      </div>

      {/* 3. Form tag par onSubmit lagana behtar hota hai button ke onClick se */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-800">Task Ka Naam <span className="text-red-500">*</span></label>
          <input
            ref={(el) => (todoItem.current.task = el)}
            type="text"
            placeholder="e.g. Shopping List Banayein..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-800">Description</label>
          <textarea
            ref={(el) => (todoItem.current.description = el)}
            rows="3"
            placeholder="Task ke baare mein zaroori batein likhein..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-800">Category</label>
            <select ref={(el) => (todoItem.current.category = el)} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-indigo-400 outline-none">
              <option>Personal</option>
              <option>Work</option>
              <option>Shopping</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-800">Priority</label>
            <select ref={(el) => (todoItem.current.priority = el)} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-indigo-400 outline-none">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-800">Deadline</label>
            <input ref={(el) => (todoItem.current.dueDate = el)} type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-400 outline-none" />
          </div>
        </div>

        <div className="pt-4">
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-lg py-3.5 px-6 rounded-2xl shadow-xl transition-all">
            Add New Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;