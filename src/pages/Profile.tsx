import { Home, LayoutGrid, Heart, BookOpen, User, Settings, ChevronRight, MapPin, CreditCard, Bell, HelpCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { icon: MapPin, label: '收货地址', badge: '' },
  { icon: CreditCard, label: '支付方式', badge: '' },
  { icon: Bell, label: '消息通知', badge: '3' },
  { icon: HelpCircle, label: '帮助与反馈', badge: '' },
  { icon: Settings, label: '设置', badge: '' },
];

const orderStats = [
  { label: '待付款', count: 2 },
  { label: '待收货', count: 1 },
  { label: '待评价', count: 3 },
  { label: '退换/售后', count: 0 },
];

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-warm-100 pb-20">
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 pt-12 pb-20 px-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-white">BakeSelect</h1>
            <p className="text-white/80 text-sm">烘焙爱好者</p>
          </div>
          <button className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full hover:bg-white/30 transition-all">
            编辑资料
          </button>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-white/70 text-xs mt-1">收藏</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">28</p>
            <p className="text-white/70 text-xs mt-1">订单</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">156</p>
            <p className="text-white/70 text-xs mt-1">积分</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">3</p>
            <p className="text-white/70 text-xs mt-1">优惠券</p>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-14">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-brown-800">我的订单</h2>
            <button className="text-primary-600 text-sm font-medium flex items-center gap-1">
              全部订单
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {orderStats.map((item, index) => (
              <button key={index} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-warm-50 transition-all">
                <div className="relative">
                  <div className="w-12 h-12 bg-warm-100 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 7h-9M14 17H5m15-3a2 2 0 11-4 0 2 2 0 014 0zm-10 0a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  {item.count > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {item.count}
                    </span>
                  )}
                </div>
                <span className="text-sm text-brown-600">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          {menuItems.map((item, index) => (
            <button 
              key={index}
              className={`w-full flex items-center justify-between p-4 hover:bg-warm-50 transition-all ${
                index !== menuItems.length - 1 ? 'border-b border-warm-100' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-brown-600" />
                </div>
                <span className="text-brown-700 font-medium">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="w-5 h-5 text-brown-400" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4">
        <button className="w-full flex items-center justify-center gap-2 py-4 text-primary-600 font-medium hover:text-primary-700 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>退出登录</span>
        </button>
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
            className="flex flex-col items-center gap-1 px-4 py-2 text-brown-400 hover:text-primary-600 transition-colors"
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-xs">科普</span>
          </button>
          <button 
            onClick={() => navigate('/profile')}
            className="flex flex-col items-center gap-1 px-4 py-2 text-primary-600"
          >
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">我的</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
