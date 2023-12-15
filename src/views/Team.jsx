import React, { useState } from 'react';
import styles from '@/components/Team/Team.module.css';
import TeamLnb from '@/components/Team/TeamLnb';
import { roleData } from '@/data/teamData';
import RoleSection from '@/components/Team/RoleSection';
// import TitleSection from '@/components/Common/TitleSection';

function Team() {
  const data = Object.entries(roleData);
  const [category, setCategory] = useState('');

  return (
    <div className={styles.teamWrapper}>
      {/* TitleSection Merge 후 주석 해제 */}
      {/* <TitleSection
        category="About Us"
        title="직무소개"
        background="bg-[url('@/assets/team_background.svg')]"
      /> */}
      <div className={styles.teamContainer}>
        <div className={styles.sectionWrapper}>
          <TeamLnb data={data} state={category} setState={setCategory} />
          <RoleSection data={data} state={category} />
        </div>
      </div>
    </div>
  );
}

export default Team;
