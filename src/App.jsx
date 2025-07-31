import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import NewsBoard from "../components/newsbot"
import "./App.css"
import Footer from "../components/footer"
import { ThemContext, theme } from "./themecontex"

function App() {
  const [t, settheme] = useState(theme.light)
  const [category, setcategory] = useState('general')
  
  function handleonclick() {
    t === theme.light ? settheme(theme.dark) : settheme(theme.light)
    t === theme.light ? document.body.style.backgroundColor = 'black' : document.body.style.backgroundColor = 'white'
  }
  return (
    <>
      <ThemContext.Provider value={{ t, handleonclick }}>
        <Navbar setcategory={setcategory} />
        <NewsBoard category={category} />
        <Footer />
      </ThemContext.Provider>
    </>
  )
}

export default App
