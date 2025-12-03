import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import MediaPlayer from "./components/MediaPlayer"
import MucicContextProvider from "./context/MucicContextProvider"

const App = () => {
  return (
    <MucicContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
        </Routes>
        <MediaPlayer/>
      </BrowserRouter>
    </MucicContextProvider>
  )
}

export default App