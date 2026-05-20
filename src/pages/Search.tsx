import { useState } from 'react';
import { ArrowLeft, Search as SearchIcon, Bell, Heart, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: '燕麦酸种面包',
    price: 28,
    rating: 4.9,
    description: '慢发酵，富有嚼劲',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=oat%20sourdough%20bread%20on%20wooden%20board%20bakery%20style&image_size=square',
  },
  {
    id: 2,
    name: '核桃蔓越莓欧包',
    price: 32,
    rating: 4.8,
    description: '果仁满满，酸甜适口',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=walnut%20cranberry%20bread%20on%20wooden%20board%20bakery%20style&image_size=square',
  },
  {
    id: 3,
    name: '海盐卷',
    price: 12,
    rating: 4.7,
    description: '经典日式，咸香松软',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=sea%20salt%20roll%20bread%20on%20plate%20bakery%20style&image_size=square',
  },
  {
    id: 4,
    name: '黑芝麻贝果',
    price: 18,
    rating: 4.9,
    description: 'Q弹饱满，芝麻浓郁',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=black%20sesame%20bagel%20on%20wooden%20board%20bakery%20style&image_size=square',
  },
];

const categories = ['全部', '酸种面包', '香甜午茶', '咸鲜芝士', '法式硬欧', '柔软吐司', '低糖低油'];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(0);
  const [priceRange, setPriceRange] = useState(45);
  const [calorieLimit, setCalorieLimit] = useState(300);
  const [noAdditives, setNoAdditives] = useState(true);
  const [onSale, setOnSale] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const navigate = useNavigate();

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-warm-100 pb-32">
      <header className="sticky top-0 z-50 bg-white shadow-soft">
        <div className="px-4 py-3 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-warm-50 flex items-center justify-center hover:bg-warm-100 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-brown-700" />
          </button>
          <h1 className="font-semibold text-brown-800">筛选与浏览</h1>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-warm-50 flex items-center justify-center hover:bg-warm-100 transition-all">
              <SearchIcon className="w-5 h-5 text-brown-700" />
            </button>
            <button className="w-10 h-10 rounded-full bg-warm-50 flex items-center justify-center hover:bg-warm-100 transition-all relative">
              <Bell className="w-5 h-5 text-brown-700" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>

        <div className="px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜寻你喜欢的风味..."
              className="w-full h-11 pl-10 pr-4 rounded-full bg-warm-50 text-sm text-brown-700 placeholder-brown-300 focus:ring-2 focus:ring-primary-300 transition-all"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-400" />
          </div>
        </div>
      </header>

      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-soft">
          <h2 className="font-semibold text-brown-800 mb-4">热门分类</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === index
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-warm-50 text-brown-500 hover:bg-warm-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="mt-4 text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
            重置
          </button>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-primary-600" />
              <h2 className="font-semibold text-brown-800">精细筛选</h2>
            </div>
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-brown-400" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-brown-600">价格区间 (元)</span>
                <span className="text-sm font-medium text-primary-600">0 - {priceRange}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-2 bg-warm-200 rounded-full appearance-none cursor-pointer accent-primary-500"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-brown-600">热量限制 (kcal)</span>
                <span className="text-sm font-medium text-primary-600">≤ {calorieLimit}</span>
              </div>
              <input
                type="range"
                min="100"
                max="500"
                value={calorieLimit}
                onChange={(e) => setCalorieLimit(Number(e.target.value))}
                className="w-full h-2 bg-warm-200 rounded-full appearance-none cursor-pointer accent-primary-500"
              />
            </div>

            <div className="flex items-center justify-between py-3 border-t border-b border-warm-100">
              <div>
                <p className="text-sm font-medium text-brown-700">仅看无添加</p>
                <p className="text-xs text-brown-400">过滤含防腐剂和人工香精的产品</p>
              </div>
              <button
                onClick={() => setNoAdditives(!noAdditives)}
                className={`w-12 h-7 rounded-full transition-all ${
                  noAdditives ? 'bg-primary-500' : 'bg-warm-200'
                }`}
              >
                <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  noAdditives ? 'translate-x-5' : 'translate-x-0.5'
                }`}></div>
              </button>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-brown-700">正在优惠中</p>
                <p className="text-xs text-brown-400">显示当前有折扣或特价的面包</p>
              </div>
              <button
                onClick={() => setOnSale(!onSale)}
                className={`w-12 h-7 rounded-full transition-all ${
                  onSale ? 'bg-primary-500' : 'bg-warm-200'
                }`}
              >
                <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  onSale ? 'translate-x-5' : 'translate-x-0.5'
                }`}></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-brown-600">为您找到 {products.length} 个结果</span>
          <button className="text-brown-500 text-sm flex items-center gap-1">
            默认排序
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl p-3 shadow-soft hover:shadow-card transition-all cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-1 left-1 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 text-yellow-500" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-xs font-medium text-brown-700">{product.rating}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className={`absolute top-1 right-1 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    wishlist.includes(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/90 backdrop-blur-sm text-brown-400 hover:text-red-500'
                  }`}
                >
                  <Heart className="w-3.5 h-3.5" fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              <h3 className="font-medium text-brown-800 text-sm mb-1">{product.name}</h3>
              <p className="text-xs text-brown-400 mb-2">{product.description}</p>
              <span className="text-lg font-bold text-primary-600">¥{product.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-warm-200 px-4 py-4 safe-area-bottom">
        <button className="w-full h-12 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all flex items-center justify-center gap-2">
          <SlidersHorizontal className="w-5 h-5" />
          确认应用筛选
        </button>
      </div>
    </div>
  );
}
