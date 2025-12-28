import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Clock, BatteryCharging, ChevronRight, Star } from 'lucide-react';
import Button from '../components/Button';
import { IMAGES, REVIEWS, CORE_FEATURES } from '../constants';

const Main: React.FC = () => {
  return (
    <div className="bg-background">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO_BG.url} 
            alt="Luxury Steam Bath" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <span className="inline-block py-1 px-3 border border-secondary/50 rounded-full text-secondary text-sm tracking-widest uppercase mb-6 animate-fade-in-up">
            Premium Home Wellness
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-in-up delay-100">
            물 1리터로 완성하는<br/>
            <span className="text-secondary">4시간의 유산소 효과</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light animate-fade-in-up delay-200">
            시간이 없는 당신을 위한 가장 효율적인 웰니스 솔루션.<br/>
            집 안의 작은 스파, 스팀펄스를 만나보세요.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link to="/contact">
              <Button size="lg" className="w-full md:w-auto">프라이빗 쇼룸 예약하기</Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" size="lg" className="w-full md:w-auto border-white text-white hover:bg-white hover:text-primary">
                자세히 알아보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hook Section (Infographic) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-primary rounded-3xl p-8 md:p-16 text-white shadow-2xl transform -translate-y-24">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                <span className="text-secondary">효율</span>의 차이가<br/>
                <span className="text-secondary">삶</span>의 차이를 만듭니다.
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                일반 반신욕은 200L 이상의 물과 40분 이상의 시간이 필요합니다.
                스팀펄스는 단 1L의 물과 20분의 시간으로, 심부 체온을 빠르게 높여
                운동한 것과 같은 땀 배출과 칼로리 소모를 유도합니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-sm text-gray-400">Time Saved</p>
                  <p className="text-3xl font-bold">2.5 hrs</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-sm text-gray-400">Water Saved</p>
                  <p className="text-3xl font-bold">99%</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex flex-col items-center justify-center text-center">
                <Droplet className="text-blue-400 mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-1">1 L</h3>
                <p className="text-sm text-gray-300">필요한 물의 양</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex flex-col items-center justify-center text-center">
                <Clock className="text-secondary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-1">20 Min</h3>
                <p className="text-sm text-gray-300">권장 사용 시간</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex flex-col items-center justify-center text-center sm:col-span-2">
                <BatteryCharging className="text-green-400 mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-1">400 kcal</h3>
                <p className="text-sm text-gray-300">소모 칼로리 (최대)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Why SteamPulse</span>
            <h2 className="text-4xl font-serif font-bold text-primary mt-2">The Science of Relaxation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors">
                  {/* Dynamic Icon loading is simplified here for the example, relying on the mapping logic or static icons */}
                  <span className="font-bold text-xl">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {feature.description}
                </p>
                <Link to="/features" className="inline-flex items-center text-secondary font-medium hover:underline">
                  더 알아보기 <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
            이미 <span className="text-secondary">3,000명</span>의 리더들이<br/>
            스팀펄스와 함께 아침을 맞이합니다.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <div className="flex text-secondary mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 mb-6 italic">"{review.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">
            당신의 욕실이<br/>완벽한 웰니스 공간으로 다시 태어납니다.
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            지금 프라이빗 쇼룸을 예약하고,<br/>
            스팀펄스의 놀라운 효과를 직접 체험해보세요.
          </p>
          <Link to="/contact">
            <Button size="lg" className="shadow-2xl">
              무료 체험 및 상담 예약하기
            </Button>
          </Link>
          <p className="mt-4 text-xs text-gray-400">
            * 매월 선착순 30분께 프리미엄 아로마 키트를 증정합니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Main;