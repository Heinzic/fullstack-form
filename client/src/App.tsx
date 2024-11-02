import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import FormPage from "./pages/FormPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Main/>} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>     
    </>
  )
}

export default App
