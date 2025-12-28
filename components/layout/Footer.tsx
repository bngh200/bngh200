import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
           <Link to="/" className="text-2xl font-serif font-bold text-white tracking-wider flex items-center gap-2 mb-4">
            <span className="text-secondary">✦</span>
            STEAMPULSE
          </Link>
          <p className="text-sm leading-relaxed">
            프리미엄 스팀 배스 솔루션으로<br/>
            당신의 일상에 품격을 더합니다.
          </p>
        </div>

        <div>
          <h4 className="text-white font-serif mb-4">메뉴</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/science" className="hover:text-secondary transition-colors">과학적 원리</Link></li>
            <li><Link to="/features" className="hover:text-secondary transition-colors">기능 및 스펙</Link></li>
            <li><Link to="/guide" className="hover:text-secondary transition-colors">설치 가이드</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif mb-4">고객 지원</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-secondary transition-colors">구매 상담</Link></li>
            <li><a href="#" className="hover:text-secondary transition-colors">자주 묻는 질문</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">A/S 신청</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif mb-4">Contact Us</h4>
          <p className="text-sm mb-2">서울시 강남구 테헤란로 123, 45F</p>
          <p className="text-sm mb-2">02-1234-5678</p>
          <p className="text-sm">support@steampulse.com</p>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} STEAMPULSE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;