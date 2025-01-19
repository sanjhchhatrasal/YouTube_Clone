import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Routing from "./Components/utils/Routing";

function App() {
  return (
    <div className=" bg-zinc-900 text-white scrollbar scrollbar-thumb-zinc-600 w-[100%] scrollbar-track-zinc-900 overflow-y-scroll overflow-x-hidden ">
      <Navbar />
      <div className="flex scrollbar scrollbar-thumb-zinc-600 w-[100%] scrollbar-track-zinc-900 overflow-y-scroll overflow-x-hidden">
        <Sidebar />
        {/* <Feed /> */}
        <Routing />
      </div>
    </div>
  );
}

export default App;
