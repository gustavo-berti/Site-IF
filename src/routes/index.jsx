import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import { Home, About, Contact, Extension, Works, WorkDetails } from '../pages'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="extension" element={<Extension />} />
            <Route path="works" element={<Works />}>
                <Route path=":id" element={<WorkDetails />} />
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes