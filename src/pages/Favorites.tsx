import { useState } from 'react';
import { Heart, Search, Trash2, Home, LayoutGrid, BookOpen, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  calories: number;
  image: string;
}

const favorites: FavoriteItem[] = [
  {
    id: 1,
    name: '全麦核桃欧包',
    price: 28,
    rating: 4.9,
    calories: 210,
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=whole%20wheat%20walnut%20bread%20on%20wooden%20board%20bakery%20style&image_size=landscape_4_3',
  },
  {
    id: 2,
    name: '法式海盐牛角包',
    price: 18,
    rating: 4.8,
    calories: 285,
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=french%20sea%20salt%20croissant%20on%20wooden%20board%20bakery%20style&image_size=landscape_4_3',
  },
  {
    id: 3,
    name: '静冈抹茶红豆卷',
    price: 22,
    rating: 4.7,
    calories: 240,
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=matcha%20red%20bean%20roll%20cake%20on%20plate%20bakery%20style&image_size=landscape_4_3',
  },
];

export default function Favorites() {
  const [items, setItems] = useState(favorites);
  const navigate = useNavigate();

  const removeFavorite = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-warm-100 pb-20">
      <header className="sticky top-0 z-50 bg-white shadow-soft">
        <div className="px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-brown-800">我的收藏</h1>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-warm-50 flex items-center justify-center hover:bg-warm-100 transition-all">
              <Search className="w-5 h-5 text-brown-600" />
            </button>
            <button className="text-primary-600 text-sm font-medium">管理</button>
          </div>
        </div>
      </header>

      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-semibold text-brown-800">已收藏 ({items.length})</h2>
              <p className="text-sm text-brown-400">您最中意的烘焙选品都在这里</p>
            </div>
            <button className="text-primary-600 text-sm font-medium">最近添加</button>
          </div>

          <div className="space-y-4">
            {items.map((item, index) => (
              <div 
                key={item.id}
                className="flex gap-3 p-3 bg-warm-50 rounded-xl hover:bg-warm-100 transition-all animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-brown-800">{item.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-500" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="text-xs text-brown-500">{item.rating}</span>
                      </div>
                      <span className="text-xs text-brown-400">{item.calories} kcal</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-600">¥{item.price}</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFavorite(item.id);
                      }}
                      className="flex items-center gap-1 px-3 py-1.5 bg-warm-200 text-brown-600 text-sm rounded-full hover:bg-warm-300 transition-all"
                    >
                      再来一份
                    </button>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFavorite(item.id);
                  }}
                  className="self-start w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-brown-400 hover:text-red-500 hover:bg-red-50 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-brown-800 mb-1">不知道怎么挑好面包?</h3>
              <p className="text-sm text-brown-500 mb-3">查看我们的《避雷科普指南》，学会通过配料表挑选真正健康美味的面包。</p>
              <button 
                onClick={() => navigate('/guide')}
                className="w-full h-10 rounded-full bg-white text-primary-600 font-medium hover:bg-warm-50 transition-all flex items-center justify-center gap-2"
              >
                查看指南
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
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
            className="flex flex-col items-center gap-1 px-4 py-2 text-primary-600"
          >
            <Heart className="w-6 h-6" fill="currentColor" />
            <span className="text-xs font-medium">收藏</span>
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
