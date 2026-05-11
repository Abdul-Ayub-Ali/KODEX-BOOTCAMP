import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  let about = () => {
    console.log('I am from App and called at About');
    return 10;
  }

  let contact = (message) => {
    console.log(message)
  }
  return (<div className="bg-red-700">I
    <About about={about} />
    <Contact contact={contact} />
  </div>)
};
export default App;