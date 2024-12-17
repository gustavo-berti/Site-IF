import { Outlet } from "react-router-dom";
import { Topbar, Sidebar } from "./components";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Topbar />
      <div className="flex h-[85%]">
        <Sidebar />
        <main className="flex-1 w-[80%] overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
