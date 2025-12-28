import { ImageAsset, NavItem, Review, Feature } from './types';

export const COLORS = {
  primary: '#1A2A3A',
  secondary: '#D4AF37',
  background: '#F5F5F7',
  text: '#333333',
  accent: '#00B4D8',
};

export const IMAGES: Record<string, ImageAsset> = {
  HERO_BG: {
    name: "HERO_BG",
    url: "https://loremflickr.com/1600/900/luxury_spa,dark",
    description: "메인 히어로 섹션 배경"
  },
  SCIENCE_CHART: {
    name: "SCIENCE_CHART",
    url: "https://loremflickr.com/800/600/science,data",
    description: "운동 효과 비교"
  },
  FEATURE_TECH: {
    name: "FEATURE_TECH",
    url: "https://loremflickr.com/800/600/smart_home,tech",
    description: "기능 섹션"
  },
  GUIDE_INTERIOR: {
    name: "GUIDE_INTERIOR",
    url: "https://loremflickr.com/800/600/modern_bathroom,interior",
    description: "설치 가이드"
  },
  CONTACT_SUPPORT: {
    name: "CONTACT_SUPPORT",
    url: "https://loremflickr.com/1600/900/concierge,luxury",
    description: "문의 페이지"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/' },
  { label: '과학적 원리', path: '/science' },
  { label: '기능 및 스펙', path: '/features' },
  { label: '설치 가이드', path: '/guide' },
  { label: '문의하기', path: '/contact' },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "김민준",
    role: "금융 전문직 (38세)",
    content: "야근 후 20분 스팀 배스로 하루 피로가 완전히 씻겨 나갑니다. 운동할 시간이 부족했는데, 체지방 감소 효과까지 보고 있어 대만족입니다.",
    rating: 5
  },
  {
    id: 2,
    name: "이서연",
    role: "IT 기업 임원 (42세)",
    content: "처음엔 반신반의했지만, 실제 사용해보니 피부 톤이 달라졌어요. 집 안의 작은 스파가 삶의 질을 바꿔놓았습니다.",
    rating: 5
  },
  {
    id: 3,
    name: "최진우",
    role: "건축가 (35세)",
    content: "디자인이 욕실 인테리어와 완벽하게 어우러집니다. 기능뿐만 아니라 미적인 부분까지 고려한 최고의 제품입니다.",
    rating: 5
  }
];

export const CORE_FEATURES: Feature[] = [
  {
    id: 'f1',
    title: '나노 미스트 기술',
    description: '일반 증기보다 100배 미세한 입자로 피부 깊숙이 침투하여 독소를 배출합니다.',
    iconName: 'CloudRain'
  },
  {
    id: 'f2',
    title: 'IoT 스마트 컨트롤',
    description: '퇴근 전 스마트폰으로 미리 예열하고, 도착하자마자 최적의 온도로 즐기세요.',
    iconName: 'Smartphone'
  },
  {
    id: 'f3',
    title: '자동 세척 시스템',
    description: '사용 후 버튼 하나로 내부 살균과 건조가 자동으로 진행되어 관리가 편리합니다.',
    iconName: 'Sparkles'
  }
];