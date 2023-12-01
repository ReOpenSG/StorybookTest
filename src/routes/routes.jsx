import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import About from '../views/About';
import Home from '../views/Home';
import History from '../views/History';
import Team from '../views/Team';
import Location from '../views/Location';
import Solutions from '../views/Solutions';
import Machines from '../views/Machines';
import Notice from '../views/Notice';
import Library from '../views/Library';
import Industries from '../views/Industries';
import News from '../views/News';
import Contact from '../views/Contact';
import Ceo from '../views/CEO';
import Device from '../views/Device';
import Recruit from '../views/Recruit';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/ceo' element={<Ceo />} />
      <Route path='/history' element={<History />} />
      <Route path='/team' element={<Team />} />
      <Route path='/location' element={<Location />} />
      <Route path='/solutions' element={<Solutions />} />
      <Route path='/machines' element={<Machines />} />
      <Route path='/device' element={<Device />} />
      <Route path='/industries' element={<Industries />} />
      <Route path='/notice' element={<Notice />} />
      <Route path='/library' element={<Library />} />
      <Route path='/news' element={<News />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/recruit' element={<Recruit />} />
    </Route>,
  ),
);

export default router;
