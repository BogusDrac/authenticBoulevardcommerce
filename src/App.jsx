import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Layout from "./Layout/Layout"
import PageNotFound from "./Pages/PageNotFound"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Order from "./Pages/Order"


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="order" element={<Order />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
