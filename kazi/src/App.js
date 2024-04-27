import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import SharedLayout from './components/SharedLayout';
import Vans from './pages/Vans/Vans'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<SharedLayout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path='vans' element={<Vans />} />

  <Route path='host' element={<HostLayout />}>
   <Route index element={<Dashboard />} />
   <Route path='income' element={<Income />} />
   <Route path='reviews' element={<Reviews />} />

  </Route>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
