import Hero from "./components/Hero/Hero";
import Navbar from './components/Navigation/Navbar'
import Features from "./components/Features/Features";
import Feature2 from "./components/Features/Feature2";
import YearLayout from "./components/Features/YearLayout";
import { FAQ } from "./components/FAQ/FAQ";

function App() {
  return (
    <main className="scroll text-white w-full h-full absolute">
      <Navbar />
      <Hero />
      <Features />
      <Feature2 />
      <YearLayout />
      <FAQ />
    </main>
  )
}

export default App
