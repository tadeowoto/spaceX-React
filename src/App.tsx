import MainLayout from "./components/templates/MainLayout"
import Home from "./components/pages/Home"
import HeroSection from "./components/organism/HeroSection";

function App() {
  return (
    <>
      <MainLayout>
        <Home />
        <HeroSection />
      </MainLayout>
    </>
  )
}

export default App
