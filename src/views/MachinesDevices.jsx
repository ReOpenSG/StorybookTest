import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CradsWrapper from '@/components/MachinesDevices/CradsWrapper';
import machinesData from '@/data/machinesData';
import devicesData from '@/data/devicesData';
import Desc from '@/components/MachinesDevices/Desc';
import FuncChar from '@/components/MachinesDevices/FuncChar';

function MachinesDevices() {
  const [data, setData] = useState({});
  const [currentLocation, setCurrentLocation] = useState('');
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (location.pathname.includes('machines')) {
      setData(machinesData);
      setCurrentLocation('machines');
    } else if (location.pathname.includes('devices')) {
      setData(devicesData);
      setCurrentLocation('devices');
    }
  }, [location]);

  return (
    <section className="w-full">
      <section className="w-full desktop:py-open-2xl tablet:py-open-2xl py-open-xl">
        {Object.keys(data).length > 0 && (
          <CradsWrapper data={data} currentLocation={currentLocation} />
        )}
      </section>
      <section>
        {Object.keys(data).length > 0 && (
          <Desc data={data} id={id} currentLocation={currentLocation} />
        )}
      </section>
      <section className="-bg--open-gray-50 desktop:py-open-5xl tablet:py-open-5xl py-open-3xl">
        {Object.keys(data).length > 0 && <FuncChar data={data} id={id} />}
      </section>
    </section>
  );
}

export default MachinesDevices;
