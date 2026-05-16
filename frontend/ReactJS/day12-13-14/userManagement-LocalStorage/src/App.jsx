import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [members, setMembers] = useState(JSON.parse(localStorage.getItem("users"))||[]);
  const [update, setUpdate] = useState(null);
  console.log(members);
  const handleDelete = (id) => {
    const updatedMembers = members.filter((elem) => elem.id !== id);

    setMembers(updatedMembers);
    localStorage.setItem('users',JSON.stringify(updatedMembers))
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans antialiased">
      <Navbar setToggle={setToggle} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-2">
            System Dashboard
          </h2>
          <p className="text-slate-500 text-lg">
            Manage your users, validate data with RHF, and monitor system
            activity.
          </p>
        </div>

        <div className="space-y-12">
          {toggle ? (
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">
                  Active Members
                </h3>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Total: {members.length}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((card) => (
                  <UserCard
                    key={card.id}
                    card={card}
                    handleDelete={handleDelete}
                    setUpdate={setUpdate}
                    setToggle={setToggle}
                  />
                ))}
              </div>
            </section>
          ) : (
            <section className="flex justify-center">
              <UserForm setMembers={setMembers} members={members} setToggle={setToggle} update={update} />
            </section>
          )}
        </div>
      </main>

      <footer className="py-10 text-center border-t border-slate-200 ">
        <p className="text-slate-400 text-sm font-medium">
          RHF CRUD Practice Application • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;
