import React from 'react';
import { CloudRain, Smartphone, Sparkles, Droplets, ShieldCheck, Zap } from 'lucide-react';
import { IMAGES } from '../constants';

const Features: React.FC = () => {
  const featureList = [
    {
      icon: <CloudRain size={32} />,
      title: "나노 미스트 기술",
      desc: "특허 받은 노즐이 물 분자를 나노 단위로 쪼개어 피부 모공 깊숙이 수분을 공급하고 노폐물을 배출합니다."
    },
    {
      icon: <Smartphone size={32} />,
      title: "스마트 IoT 제어",
      desc: "전용 앱을 통해 언제 어디서나 온도를 조절하고 예열할 수 있습니다. 귀가 시간에 맞춰 완벽한 스파를 준비하세요."
    },
    {
      icon: <Sparkles size={32} />,
      title: "자동 클리닝",
      desc: "사용 후 원터치로 UV 살균과 고온 건조가 실행되어, 물때나 곰팡이 걱정 없이 항상 청결한 상태를 유지합니다."
    },
    {
      icon: <Droplets size={32} />,
      title: "아로마 테라피",
      desc: "전용 아로마 키트를 장착하여 스팀과 함께 천연 향기를 즐기며 깊은 휴식을 취할 수 있습니다."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "안전 센서 시스템",
      desc: "과열 방지, 수위 감지, 미끄럼 방지 등 5중 안전 시스템이 탑재되어 노약자도 안심하고 사용할 수 있습니다."
    },
    {
      icon: <Zap size={32} />,
      title: "에너지 효율",
      desc: "기존 욕조 대비 물 사용량 90% 절감, 고효율 히팅 시스템으로 전기료 부담을 최소화했습니다."
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">Features</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-2">
            Technological Luxury
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            최첨단 기술과 럭셔리 디자인의 만남. <br/>
            사용자의 편의성과 안전을 최우선으로 설계된 스팀펄스의 혁신적인 기능을 소개합니다.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
          {featureList.map((item, index) => (
            <div key={index} className="group p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
              <div className="w-14 h-14 bg-primary text-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Gallery Section with Text Overlay */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
          <img 
            src={IMAGES.FEATURE_TECH.url} 
            alt={IMAGES.FEATURE_TECH.description} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
            <div className="p-12 md:p-20 max-w-xl text-white">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                손끝 하나로 제어하는<br/>나만의 웰니스 루틴
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                복잡한 설정은 필요 없습니다. 직관적인 터치 인터페이스와 스마트폰 연동으로, 
                당신이 원하는 온도와 시간을 가장 편안하게 설정하세요.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>사용자별 커스텀 모드 저장</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>실시간 소비 전력 모니터링</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>음성 인식 제어 (AI 스피커 연동)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;