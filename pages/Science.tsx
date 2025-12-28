import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Legend
} from 'recharts';
import { Thermometer, Activity, Clock } from 'lucide-react';
import { COLORS } from '../constants';

const Science: React.FC = () => {
  const tempData = [
    { time: '0분', bodyTemp: 36.5, calories: 0 },
    { time: '5분', bodyTemp: 37.2, calories: 45 },
    { time: '10분', bodyTemp: 38.1, calories: 120 },
    { time: '15분', bodyTemp: 38.8, calories: 280 },
    { time: '20분', bodyTemp: 39.2, calories: 400 },
  ];

  const compareData = [
    { name: '걷기 (1시간)', kcal: 250 },
    { name: '조깅 (30분)', kcal: 300 },
    { name: '스팀배스 (20분)', kcal: 400 },
  ];

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            The Science of Heat
          </h1>
          <p className="text-xl text-gray-600">
            단순한 목욕이 아닙니다. 체온 상승을 통한 <span className="font-bold text-primary">대사 활성화의 과학</span>입니다.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-primary rounded-full mb-6">
              <Thermometer size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">심부 체온 상승</h3>
            <p className="text-4xl font-serif text-secondary mb-2">+1.5°C</p>
            <p className="text-gray-500 text-sm">면역력 강화 및 혈류 개선 효과</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 text-primary rounded-full mb-6">
              <Activity size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">칼로리 소모</h3>
            <p className="text-4xl font-serif text-secondary mb-2">400kcal</p>
            <p className="text-gray-500 text-sm">20분 사용 기준 (개인차 있음)</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 text-primary rounded-full mb-6">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">시간 효율</h3>
            <p className="text-4xl font-serif text-secondary mb-2">12x</p>
            <p className="text-gray-500 text-sm">일반 반신욕 대비 12배 빠른 발한</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">시간 경과에 따른 체온 및 칼로리 변화</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={tempData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="time" />
                  <YAxis yAxisId="left" domain={[36, 40]} />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }} />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="bodyTemp" name="체온 (°C)" stroke={COLORS.primary} strokeWidth={3} activeDot={{ r: 8 }} />
                  <Line yAxisId="right" type="monotone" dataKey="calories" name="칼로리 (kcal)" stroke={COLORS.secondary} strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">운동 vs 스팀배스 칼로리 소모 비교</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={compareData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tick={{fontSize: 12}} />
                  <YAxis />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="kcal" fill={COLORS.primary} radius={[4, 4, 0, 0]} barSize={50}>
                    {/* Add gradient or custom colors if needed */}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              * 성인 남성 70kg 기준 평균 데이터
            </p>
          </div>
        </div>

        {/* Explainer Text */}
        <div className="bg-gray-100 p-10 rounded-2xl">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">HSP (Heat Shock Protein) 효과</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            스팀 배스를 통해 체온이 38°C 이상으로 상승하면 우리 몸은 <strong>열충격단백질(HSP)</strong>을 생성합니다. 
            이 단백질은 손상된 세포를 복구하고, 면역 세포를 활성화하며, 엔돌핀 분비를 촉진하여 통증 완화와 스트레스 해소에 탁월한 효과를 발휘합니다.
            운동을 하지 않아도 운동한 것과 유사한 생리학적 반응을 이끌어내는 핵심 메커니즘입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Science;