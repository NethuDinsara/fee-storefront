import Hero from "./components/Hero"
import Navigation from './components/Navigations'

// import './App.css'

function App() {
  const name="Nethu";

  return (
    <>
    <div>
    

      <i class="fas fa-search"></i>
      <h1>ChatGpt</h1>
     
     </div>
     <div>
      <Navigation name={name}/>
     </div>
     
     <div>
      <Hero/>
     </div>
     
    </>
     

  )
}

export default App
