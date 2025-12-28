import React, { useState } from 'react';
import Button from '../components/Button';
import { IMAGES } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-background relative">
      <div className="absolute inset-0 z-0 opacity-10">
         <img src={IMAGES.HERO_BG.url} alt="bg" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Private Consultation
          </h1>
          <p className="text-gray-600">
            VIP 전용 프라이빗 쇼룸 예약 또는 구매 상담을 신청하세요.<br/>
            전문 컨시어지가 1:1로 안내해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Contact Info / Image Side */}
          <div className="relative hidden lg:block">
            <img 
              src={IMAGES.CONTACT_SUPPORT.url} 
              alt="Concierge" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80 text-white p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="text-secondary" />
                  <div>
                    <p className="text-sm text-gray-300">대표 전화</p>
                    <p className="text-lg font-bold">02-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-secondary" />
                  <div>
                    <p className="text-sm text-gray-300">이메일 문의</p>
                    <p className="text-lg">vip@steampulse.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-secondary" />
                  <div>
                    <p className="text-sm text-gray-300">쇼룸 위치</p>
                    <p className="text-lg">서울시 강남구 테헤란로 123, 45F</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">신청이 완료되었습니다.</h3>
                <p className="text-gray-600 mb-8">담당자가 확인 후 24시간 이내에 연락드리겠습니다.</p>
                <Button onClick={() => setFormStatus('idle')} variant="outline">다시 작성하기</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6 lg:hidden">상담 신청</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">관심 모델</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                    <option>스팀펄스 시그니처 (1인용)</option>
                    <option>스팀펄스 듀오 (2인용)</option>
                    <option>아직 결정하지 못함</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">문의 내용</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="설치 가능 여부나 가격 등 궁금한 점을 남겨주세요."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? '처리 중...' : '상담 신청하기'}
                  </Button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">
                  개인정보는 상담 목적으로만 사용되며, 제3자에게 제공되지 않습니다.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;