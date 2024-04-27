import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Home />}>
  <Route path="about" element={<About />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
