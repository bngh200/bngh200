import React from 'react';
import { IMAGES } from '../constants';
import { CheckCircle, Clock, Ruler } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Guide: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Installation & Design
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            어떤 욕실에도 조화롭게 어울리는 미니멀한 디자인.<br/>
            전문 설치팀이 방문하여 3시간 이내에 완벽하게 설치해 드립니다.
          </p>
        </div>

        {/* Interior Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={IMAGES.GUIDE_INTERIOR.url} 
            alt="Modern Bathroom Interior" 
            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Installation Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-8">설치 프로세스</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">사전 상담 및 실측</h3>
                  <p className="text-gray-600 text-sm">전문 컨설턴트가 방문하여 욕실 구조와 배관 상태를 점검하고 최적의 모델을 추천합니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">제품 제작</h3>
                  <p className="text-gray-600 text-sm">주문 확정 후 고객님의 사양에 맞춰 프리미엄 공정으로 제작됩니다. (약 2주 소요)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">방문 설치</h3>
                  <p className="text-gray-600 text-sm">약속된 일시에 설치팀이 방문하여 3시간 이내에 설치 및 테스트를 완료합니다.</p>
                </div>
              </div>
               <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">사용 설명 및 멤버십 가입</h3>
                  <p className="text-gray-600 text-sm">사용법 안내와 함께 VIP 멤버십 혜택을 등록해 드립니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
             <h2 className="text-2xl font-serif font-bold text-primary mb-6">설치 조건 확인</h2>
             <ul className="space-y-4 mb-8">
               <li className="flex items-center gap-3 text-gray-700">
                 <Ruler className="text-secondary" />
                 <span>최소 공간: 1200mm x 800mm</span>
               </li>
               <li className="flex items-center gap-3 text-gray-700">
                 <Clock className="text-secondary" />
                 <span>설치 소요 시간: 약 2.5 ~ 3시간</span>
               </li>
               <li className="flex items-center gap-3 text-gray-700">
                 <CheckCircle className="text-secondary" />
                 <span>필요 설비: 급수/배수 시설, 220V 콘센트</span>
               </li>
             </ul>
             
             <div className="bg-gray-50 p-6 rounded-lg mb-8">
               <p className="text-sm text-gray-600 mb-2 font-bold">우리 집 욕실에 설치가 가능할까요?</p>
               <p className="text-xs text-gray-500">사진을 찍어 보내주시면 24시간 이내에 설치 가능 여부를 알려드립니다.</p>
             </div>

             <Link to="/contact">
               <Button className="w-full">설치 상담 신청하기</Button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;