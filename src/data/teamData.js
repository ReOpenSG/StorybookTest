import PMManufacturingTeam from '@/assets/team_PM_manufacturingTeam.svg';
import RD from '@/assets/team_RD.svg';
import personnelTeam from '@/assets/team_personnelTeam.svg';
import generalAffairsTeam from '@/assets/team_generalAffairsTeam.svg';
import BSTeam from '@/assets/team_BSTeam.svg';
import RDTeam from '@/assets/team_RDTeam.svg';
import UXTeam from '@/assets/team_UXTeam.svg';

export const roleData = {
  FA: [
    {
      img: PMManufacturingTeam,
      team: 'PM&제조팀',
      desc: '하드웨어 제작 및 설치, 시운전 전담 조직',
    },
    {
      img: RD,
      team: 'R&D',
      desc: '기구 설계, 전장 설계, 소프트웨어 설계 전담 조직',
    },
  ],

  경영지원: [
    {
      img: personnelTeam,
      team: '인사팀',
      desc: '핵심인재 확보, 인적자원 관리, 기타 노무 행정 관리',
    },
    {
      img: generalAffairsTeam,
      team: '총무팀',
      desc: '사무환경 조성, 자산 및 비품 관리, 편의시설 관리',
    },
  ],
  IT: [
    {
      img: BSTeam,
      team: 'BS팀',
      desc: '시스템 기획 및 개발, 기존 시스템 유지보수',
    },
    {
      img: RDTeam,
      team: 'R&D팀',
      desc: '자사 소프트웨어 연구 기획 및 개발',
    },
    {
      img: UXTeam,
      team: 'UX팀',
      desc: 'GUI기획 및 디자인, 디자인 요소 비주얼 라이징',
    },
  ],
};
