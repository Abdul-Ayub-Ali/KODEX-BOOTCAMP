import TodoForm from './components/TodoForm';
import TodoCard from './components/TodoCard';
import axios from 'axios'
import { useEffect, useState } from 'react';

const App = () => {
  const addTask = async (taskData) => {
    try {
      const res = await axios.post('http://localhost:3000/api/v1/tasks', taskData);

      if (res.status === 201 || res.status === 200) {
        console.log("Task Saved!");
        fetchTasks(); // ✨ Yeh yahi se list ko refresh kar dega
      }
      console.log("Success:", res.data);

      return res.data;
    } catch (error) {
      console.error("Error Details:", error.response?.data || error.message);
    }
  };
  const [tasks, setTasks] = useState([]);


  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/tasks');
      console.log("Backend se kya aaya:", res.data);

      // AGAR res.data array nahi hai, toh check karo uske andar kaunsi key mein array hai
      // Example: res.data.data ya res.data.tasks
      const actualArray = Array.isArray(res.data) ? res.data : (res.data.data || res.data.tasks || []);

      setTasks(actualArray);
    } catch (error) {
      console.error("Fetch Error:", error.message);
      setTasks([]); // Error case mein khali array rakhein
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">

      {/* Top Navigation / Header */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-xl font-black tracking-tight">TaskFlow</h1>
          </div>
          <div className="text-sm font-medium text-slate-500">
            {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-10">

        {/* Form Section */}
        <section className="mb-12">
          <TodoForm addTask={addTask} />
        </section>

        {/* List Section Header */}
        <div className="max-w-2xl mx-auto mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Aapke Tasks</h2>
          <span className="bg-slate-200 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-full">
            3 Active
          </span>
        </div>

        {/* Tasks Grid */}
        <div className="max-w-2xl mx-auto space-y-4">
          {tasks?.map((elem) => {
            return <TodoCard key={elem._id || elem.id} taskData={elem} />;
          })}
        </div>

      </main>

      {/* Footer Hint */}
      <footer className="py-10 text-center text-slate-400 text-sm">
        <p>Made with ❤️ for Productive Days</p>
      </footer>

    </div>
  );
};

export default App;