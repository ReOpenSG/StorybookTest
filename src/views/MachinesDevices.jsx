import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CradsWrapper from '@/components/MachinesDevices/CradsWrapper';
import machinesData from '@/data/machinesData';
import devicesData from '@/data/devicesData';
import Desc from '@/components/MachinesDevices/Desc';
import FuncChar from '@/components/MachinesDevices/FuncChar';

function MachinesDevices() {
  const [data, setData] = useState({});
  const [desc, setDesct] = useState({ 설명: '', 특징: [], 제품: '' });
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

  useEffect(() => {
    if (data && Object.values(data).length > 0) {
      setDesct((prev) => ({
        ...prev,
        ...data[Object.keys(data)[0]][id],
        제품: Object.keys(data)[0],
      }));
    }
  }, [data, id]);

  return (
    <section className="w-full flex flex-col items-center">
      <section className="desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile flex flex-col items-center w-full">
        <CradsWrapper data={data} currentLocation={currentLocation} />
      </section>
      <section className="w-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile">
        <div className="w-full flex flex-col items-center">
          <h2 className="sr-only">제품 소개</h2>
          <Desc desc={desc} id={id} currentLocation={currentLocation} />
        </div>
      </section>
      <section className="-bg--open-gray-50 w-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile ">
        <div className="w-full flex flex-col items-center">
          <h2 className="sr-only">기능 및 특징</h2>
          <FuncChar desc={desc} id={id} />
        </div>
      </section>
    </section>
  );
}

export default MachinesDevices;
