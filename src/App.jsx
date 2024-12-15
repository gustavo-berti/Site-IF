import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/contact">Contact</Link> | 
          <Link to="/extension">Extension</Link> | 
          <Link to="/works">Works</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© 2024 Meu Site</footer>
    </div>
  );
};

export default App;
