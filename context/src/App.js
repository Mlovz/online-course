import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  const isAuth = false;
  let isAdmin = false;
  return (
    <div className="App">
      <Header isAuth={isAuth} />
      <HomePage isAuth={isAuth} />
    </div>
  );
}

export default App;
