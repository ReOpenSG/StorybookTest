import React from 'react';
import Group from '@/components/About/Group';
import BannerImage from '@/components/About/BannerImage';
import Vision from '@/components/About/Vision';
import Ci from '@/components/About/Ci';

function About() {
  return (
    <div className="w-full">
      <Group />
      <BannerImage />
      <Vision />
      <Ci />
    </div>
  );
}

export default About;
