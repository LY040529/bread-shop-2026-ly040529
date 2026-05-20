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

const products: Product[] = [
  {
    id: 1,
    name: '匠心手工酸种面包',
    price: 45,
    rating: 4.9,
    description: '经过72小时自然发酵，外壳酥脆，内里湿润多孔，',
    calories: 210,
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=artisan%20sourdough%20bread%20on%20wooden%20board%20warm%20lighting%20bakery%20style&image_size=landscape_4_3',
  },
  {
    id: 2,
    name: '海盐开心果可颂',
    price: 32,
    rating: 4.8,
    description: '选用法国AOP黄油开酥，层叠分明，内裹浓郁开心果酱，海盐点缀提味。',
    calories: 320,
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=sea%20salt%20pistachio%20croissant%20on%20wooden%20board%20bakery%20style&image_size=landscape_4_3',
  },
  {
    id: 3,
    name: '全麦谷物核桃包',
    price: 38,
    rating: 4.7,
    description: '精选石磨全麦粉，加入大量香脆核桃仁，饱腹感强，是健康的理想选择。',
    calories: 245,
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=whole%20grain%20walnut%20bread%20on%20wooden%20board%20bakery%20style&image_size=landscape_4_3',
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

        <div className="space-y-4">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl p-4 shadow-soft hover:shadow-card transition-all animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-36 object-cover rounded-xl"
                />
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-500" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-xs font-medium text-brown-700">{product.rating}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    wishlist.includes(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/90 backdrop-blur-sm text-brown-400 hover:text-red-500'
                  }`}
                >
                  <Heart className="w-4 h-4" fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              <h3 className="font-semibold text-brown-800 mb-1">{product.name}</h3>
              <p className="text-sm text-brown-500 mb-3 line-clamp-2">{product.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-primary-600">¥{product.price}</span>
                  <span className="text-xs text-brown-400">{product.calories} kcal</span>
                </div>
                <button className="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-full hover:bg-primary-600 transition-all">
                  加购 +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-4 cursor-pointer hover:shadow-soft transition-all"
          onClick={() => navigate('/guide')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-brown-800">选购避雷指南</h3>
                <p className="text-xs text-brown-500">学会辨别配料表，避开添加剂与高糖陷阱。</p>
              </div>
            </div>
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        </div>
      </main>

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
