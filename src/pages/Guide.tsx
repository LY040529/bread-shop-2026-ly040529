import { Search, Bell, Home, LayoutGrid, Heart, BookOpen, User, ArrowRight, AlertTriangle, AlertCircle, Info, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tips = [
  {
    icon: 'wheat',
    title: '首选全麦/黑麦',
    desc: '配料表第一位应是全麦粉，且占比最好大于50%',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    icon: 'clock',
    title: '观察保质期',
    desc: '真正的无添加面包常温下只能保存2-3天，警惕防腐剂',
    color: 'bg-orange-100 text-orange-700',
  },
];

const warnings = [
  {
    icon: 'high-sugar',
    title: '高糖陷阱',
    desc: '起酥类面包糖分极高',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    icon: 'fake-wholemeal',
    title: '伪全麦',
    desc: '只有少量麦麸皮点缀',
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-500',
  },
  {
    icon: 'trans-fat',
    title: '反式脂肪',
    desc: '警惕"起酥油、代可可脂"',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    icon: 'preservatives',
    title: '防腐剂过多',
    desc: '配料表比论文还长',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
];

const ingredientList = [
  { type: '油脂', recommend: '动物黄油', avoid: '植物奶油' },
  { type: '糖分', recommend: '海藻糖/无糖', avoid: '高果糖浆' },
  { type: '面粉', recommend: '石磨全麦粉', avoid: '精制白面粉' },
];

export default function Guide() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-warm-100 pb-20">
      <header className="sticky top-0 z-50 bg-white shadow-soft">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-600" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <h1 className="font-semibold text-brown-800">选购科普</h1>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-warm-50 flex items-center justify-center hover:bg-warm-100 transition-all">
              <Search className="w-5 h-5 text-brown-600" />
            </button>
            <button className="w-10 h-10 rounded-full bg-warm-50 flex items-center justify-center hover:bg-warm-100 transition-all relative">
              <Bell className="w-5 h-5 text-brown-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h2 className="font-semibold text-brown-800">选购小贴士</h2>
          </div>

          <div className="space-y-3">
            {tips.map((tip, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl ${tip.color}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center">
                    {tip.icon === 'wheat' ? (
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{tip.title}</h3>
                    <p className="text-xs opacity-80 mt-0.5">{tip.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h2 className="font-semibold text-brown-800">常见避雷项</h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {warnings.map((warning, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl ${warning.color}`}
              >
                <div className={`w-10 h-10 rounded-full bg-white/80 flex items-center justify-center mb-2 ${warning.iconColor}`}>
                  {warning.icon === 'high-sugar' ? (
                    <AlertCircle className="w-5 h-5" />
                  ) : warning.icon === 'fake-wholemeal' ? (
                    <Info className="w-5 h-5" />
                  ) : warning.icon === 'trans-fat' ? (
                    <XCircle className="w-5 h-5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5" />
                  )}
                </div>
                <h3 className="font-semibold text-brown-800 text-sm">{warning.title}</h3>
                <p className="text-xs text-brown-500 mt-0.5">{warning.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <h2 className="font-semibold text-brown-800">成分红黑榜</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[280px]">
              <thead>
                <tr className="border-b border-warm-100">
                  <th className="text-left py-2 px-3 text-sm font-medium text-brown-500">成分类型</th>
                  <th className="text-center py-2 px-3 text-sm font-medium text-green-600">推荐(红)</th>
                  <th className="text-center py-2 px-3 text-sm font-medium text-red-500">避开(黑)</th>
                </tr>
              </thead>
              <tbody>
                {ingredientList.map((item, index) => (
                  <tr key={index} className="border-b border-warm-50 last:border-0">
                    <td className="py-3 px-3 text-sm text-brown-700">{item.type}</td>
                    <td className="py-3 px-3">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        {item.recommend}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                        {item.avoid}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span className="text-white font-semibold">BakeSelect Formula</span>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
            <p className="text-gray-400 text-sm mb-2">单片参考值 (50G)</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">120~150</span>
              <span className="text-xl text-white">Kcal</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            <span className="text-red-400">*</span> 若单片热量超过 <span className="text-red-400 font-semibold">250Kcal</span>，请警惕隐藏的油脂与馅料糖
          </p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <button 
          onClick={() => navigate('/search')}
          className="w-full h-14 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all flex items-center justify-center gap-2"
        >
          <span>应用所学：快速筛选</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-center text-brown-400 text-xs mt-2">根据健康指标寻找好面包</p>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-warm-200 px-4 py-2 safe-area-bottom">
        <div className="flex items-center justify-around">
          <button 
            onClick={() => navigate('/home')}
            className="flex flex-col items-center gap-1 px-4 py-2 text-brown-400 hover:text-primary-600 transition-colors"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">首页</span>
          </button>
          <button 
            onClick={() => navigate('/search')}
            className="flex flex-col items-center gap-1 px-4 py-2 text-brown-400 hover:text-primary-600 transition-colors"
          >
            <LayoutGrid className="w-6 h-6" />
            <span className="text-xs">探索</span>
          </button>
          <button 
            onClick={() => navigate('/favorites')}
            className="flex flex-col items-center gap-1 px-4 py-2 text-brown-400 hover:text-primary-600 transition-colors"
          >
            <Heart className="w-6 h-6" />
            <span className="text-xs">收藏</span>
          </button>
          <button 
            onClick={() => navigate('/guide')}
            className="flex flex-col items-center gap-1 px-4 py-2 text-primary-600"
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-xs font-medium">科普</span>
          </button>
          <button 
            onClick={() => navigate('/profile')}
            className="flex flex-col items-center gap-1 px-4 py-2 text-brown-400 hover:text-primary-600 transition-colors"
          >
            <User className="w-6 h-6" />
            <span className="text-xs">我的</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
