import solutionsData from './solutionsData.json';

const industries = {
  semiconductor: {
    name: '반도체',
    desc: '기술과 지식이 집약된 첨단 하이테크 산업인 반도체/태양광은 제품의 고사양화에 따라 공정 난이도가 높아지면서 사람의 판단이나 숙련도를 배제한 자동화된 시스템에 의한 제조환경 운영이 보편화되고 있습니다. 복잡한 공정/설비, 데이터양의 폭발적 증가로 자동화 및 시스템에 의한 공정관리가 필수임에 따라 많은 기업에서 제조설비, 측정/검사설비 및 물류설비에 대한 자동화 제어 기술과 빅데이터 기반 AI 기술을 적용한 품질관리 및 설비 엔지니어링 시스템으로 제조 경쟁력 향상을 추진하고 있습니다.',
    solutions: [],
  },
  display: {
    name: '디스플레이',
    desc: '디스플레이는 LCD, OLED, QLED, LED, PDP 등 다양한 기술로 제조되며, 특히 OLED는 고가의 제품으로써 제조 공정의 안정성과 품질관리가 매우 중요합니다. 디스플레이 제조 공정에서는 고객사의 요구에 맞는 공정 제어 및 품질관리 시스템을 구축하여 공정 안정성 및 품질관리를 통한 제조 경쟁력을 확보하고 있습니다.',
    solutions: [],
  },
  battery: {
    name: '배터리',
    desc: '배터리 제조 공정에서는 고객사의 요구에 맞는 공정 제어 및 품질관리 시스템을 구축하여 공정 안정성 및 품질관리를 통한 제조 경쟁력을 확보하고 있습니다.',
    solutions: [],
  },
  port: {
    name: '항만',
    desc: '항만은 물류센터와 함께 물류산업의 중심이 되는 산업입니다. 항만에서는 고객사의 요구에 맞는 자동화 설비를 구축하여 물류센터의 생산성을 향상시키고 있습니다.',
    solutions: [],
  },
};

Object.entries(solutionsData).forEach(([solution, { 산업군 }]) => {
  산업군.forEach((industry) => {
    if (industries[industry]) {
      industries[industry].solutions.push(solution);
    }
  });
});

export default industries;
