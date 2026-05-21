import { useState } from 'react';
import { Search as SearchIcon, Heart, ShoppingCart, Home as HomeIcon, LayoutGrid, BookOpen, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  description: string;
  calories: number;
  image: string;
}

const products = [
  {
    id: 1,
    name: "匠心手工酸种面包",
    price: 28,
    rating: 4.9,
    description: "传统工艺发酵，外皮酥脆，内部柔软，麦香浓郁。",
    calories: 250,
    category: "sourdough",
    // 宽高比 8:3，和你的卡片完美适配
    image: "https://images.unsplash.com/photo-1586444248902-2f7c55f22106?w=800&h=300&fit=crop",
  },
  {
    id: 2,
    name: "海盐开心果可颂",
    price: 32,
    rating: 4.8,
    description: "法式开酥，层次丰富，内馅绵密开心果，海盐提香。",
    calories: 320,
    category: "sourdough",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=300&fit=crop",
  },
  {
    id: 3,
    name: "全麦谷物核桃包",
    price: 38,
    rating: 4.7,
    description: "高纤全麦，核桃坚果满满，无油无糖，健康饱腹。",
    calories: 245,
    category: "wholeWheat",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=300&fit=crop",
  },
  {
    id: 4,
    name: "黑麦蔓越莓软欧",
    price: 26,
    rating: 4.6,
    description: "黑麦粉制作，酸甜蔓越莓，口感柔软有嚼劲。",
    calories: 220,
    category: "wholeWheat",
    image: "https://images.unsplash.com/photo-1585476263306-07a53990400b?w=800&h=300&fit=crop",
  },
  {
    id: 5,
    name: "奶香吐司",
    price: 18,
    rating: 4.9,
    description: "牛奶和面，奶香浓郁，柔软拉丝，早餐必备。",
    calories: 280,
    category: "toast",
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=800&h=300&fit=crop",
  },
  {
    id: 6,
    name: "抹茶红豆吐司",
    price: 22,
    rating: 4.8,
    description: "日式抹茶风味，搭配蜜红豆，香甜柔软。",
    calories: 290,
    category: "toast",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=300&fit=crop",
  },
];

const categories = ['全部', '酸种面包', '全麦/无油', '吐司/三明治'];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const navigate = useNavigate();

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-warm-100 pb-20">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-600" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-brown-800">早安, BakeSelect!</p>
              <p className="text-xs text-brown-400">帮你挑到每一口都安心的面包</p>
            </div>
          </div>
          <button className="relative">
            <ShoppingCart className="w-6 h-6 text-brown-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
          </button>
        </div>

        <div className="px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜面包/品牌/口味，比如'全麦吐司'"
              className="w-full h-11 pl-10 pr-10 rounded-full bg-warm-50 text-sm text-brown-700 placeholder-brown-300 focus:ring-2 focus:ring-primary-300 transition-all"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-400" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-warm-200 rounded-full flex items-center justify-center">
              <LayoutGrid className="w-4 h-4 text-brown-500" />
            </button>
          </div>
        </div>

        <div className="px-4 pb-3">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === index
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-warm-100 text-brown-500 hover:bg-warm-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="px-4 py-4 space-y-6">
        <section className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-brown-800">精选推荐</h2>
          <button className="text-primary-600 text-sm font-medium flex items-center gap-1">
            查看全部
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </section>

<div className="grid grid-cols-2 gap-4">
  {products.map((product, index) => (
    <div
      key={product.id}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* 1:1 方形容器，和你水果卡片一样 */}
      <div className="w-full aspect-square bg-gray-50 flex items-center justify-center p-2">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>

      {/* 文字区域，和你水果卡片风格一致 */}
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-sm truncate">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-orange-500 font-bold">¥{product.price}</span>
          <span className="text-yellow-500 text-xs">⭐{product.rating}</span>
        </div>
      </div>
    </div>
  ))}
</div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-warm-200 px-4 py-2 safe-area-bottom">
        <div className="flex items-center justify-around">
          <button 
            onClick={() => navigate('/home')}
            className="flex flex-col items-center gap-1 px-4 py-2 text-primary-600"
          >
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs font-medium">首页</span>
          </button>
          <button 
            onClick={() => navigate('/search')}
            className="flex flex-col items-center gap-1 px-4 py-2 text-brown-400 hover:text-primary-600 transition-colors"
          >
            <SearchIcon className="w-6 h-6" />
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
