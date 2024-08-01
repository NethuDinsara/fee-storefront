import Hero from "./components/Hero"
import Navigation from './components/Navigations'
import Products from "./components/Products";

// import './App.css'

function App() {
  const name="Nethu";

  return (
    <main>
      <Navigation name={name}/>
      <Hero/>
      <Products/>
    </main>
  );
}

export default App
