import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import About from '../views/About';
import Home from '../views/Home';
import History from '../views/History';
import Team from '../views/Team';
import Location from '../views/Location';
import Solutions from '../views/Solutions';
import MachinesDevices from '../views/MachinesDevices';
import Library from '../views/Library';
import Industries from '../views/Industries';
import Contact from '../views/Contact';
import Community from '../views/Community';
import CommunityDetail from '@/views/CommunityDetail';
import CommunityForm from '@/views/CommunityForm';
import CommunityEdit from '@/components/Community/CommunityEdit';
import Admin from '@/views/Admin';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/history" element={<History />} />
      <Route path="/team" element={<Team />} />
      <Route path="/team/:id" element={<Team />} />
      <Route path="/location" element={<Location />} />
      <Route path="/solutions/:id" element={<Solutions />} />
      <Route path="/machines/:id" element={<MachinesDevices />} />
      <Route path="/devices/:id" element={<MachinesDevices />} />
      <Route path="/industries/:id" element={<Industries />} />
      <Route path="/library" element={<Library />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/community" element={<Community />} />
      <Route path="/community/:id" element={<CommunityDetail />} />
      <Route path="/community/write" element={<CommunityForm />} />
      <Route path="/community/:id/edit" element={<CommunityEdit />} />
      <Route path="/admin" element={<Admin />} />
    </Route>,
  ),
);

export default router;
