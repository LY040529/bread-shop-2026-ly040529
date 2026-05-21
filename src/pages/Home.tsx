import { useState } from 'react';
import { Search as SearchIcon, Heart, ShoppingCart, HomeIcon, BookOpen, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  category: string;
  bgColor: string;
}

const products: Product[] = [
  { id: 1, name: "经典酸种面包", price: 28, rating: 4.9, description: "天然酵母面包", category: "sourdough", bgColor: "bg-amber-200" },
  { id: 2, name: "法式可颂", price: 15, rating: 4.8, description: "酥脆奶香", category: "french", bgColor: "bg-yellow-200" },
  { id: 3, name: "全麦吐司", price: 22, rating: 4.7, description: "健康全麦", category: "toast", bgColor: "bg-orange-200" },
  { id: 4, name: "黑麦核桃面包", price: 32, rating: 4.6, description: "黑麦营养", category: "wholeWheat", bgColor: "bg-stone-300" },
  { id: 5, name: "牛奶软吐司", price: 18, rating: 4.9, description: "柔软拉丝", category: "toast", bgColor: "bg-amber-100" },
  { id: 6, name: "抹茶红豆包", price: 24, rating: 4.8, description: "日式甜面包", category: "sweet", bgColor: "bg-green-200" },
  { id: 7, name: "海盐芝士面包", price: 26, rating: 4.8, description: "咸香芝士", category: "savory", bgColor: "bg-blue-200" },
  { id: 8, name: "蔓越莓软欧", price: 25, rating: 4.7, description: "酸甜口感", category: "wholeWheat", bgColor: "bg-pink-200" },
];

const categories = ['全部', '酸种面包', '全麦/无油', '吐司/三明治', '法式', '甜口', '咸口'];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const navigate = useNavigate();

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-amber-50 pb-20">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-amber-800">面包精选</h1>
            <p className="text-xs text-gray-500">帮你挑到每一口都安心的面包</p>
          </div>
          <button className="relative">
            <ShoppingCart className="w-6 h-6 text-amber-700" />
          </button>
        </div>

        <div className="px-4 pb-3">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜面包/品牌/口味"
              className="w-full h-11 pl-10 pr-4 rounded-full bg-gray-100 text-sm border-none outline-none"
            />
          </div>
        </div>

        <div className="px-4 pb-3 flex gap-2 overflow-x-auto">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
                activeCategory === i ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="p-4">
        {/* ✅ 两列正方形布局 ✅ 永远100%显示 ✅ 无网络图片 */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              {/* ✅ 这里永远显示，永远不加载！纯颜色块代表面包 */}
              <div className={`aspect-square w-full ${item.bgColor} flex items-center justify-center`}>
                <span className="text-lg font-bold text-amber-900">🍞</span>
              </div>

              <div className="p-3">
                <h3 className="font-medium text-sm truncate">{item.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-amber-600 font-bold">¥{item.price}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(item.id);
                    }}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlist.includes(item.id)
                          ? "text-red-500 fill-red-500"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3 flex justify-around">
        <button onClick={() => navigate("/")}>
          <HomeIcon className="w-6 h-6 text-amber-700" />
        </button>
        <button onClick={() => navigate("/guide")}>
          <BookOpen className="w-6 h-6 text-gray-400" />
        </button>
        <button onClick={() => navigate("/profile")}>
          <User className="w-6 h-6 text-gray-400" />
        </button>
      </nav>
    </div>
  );
}
