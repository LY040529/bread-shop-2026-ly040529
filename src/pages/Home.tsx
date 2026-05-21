import { useState } from 'react';
import { Search as SearchIcon, Heart, ShoppingCart, HomeIcon, BookOpen, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  calories: number;
  image: string;
  category: string;
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
    image: "https://cdn.shopify.com/s/files/1/0071/8700/3225/products/sourdough-boule-1.jpg?v=1628091221",
  },
  {
    id: 2,
    name: "海盐开心果可颂",
    price: 32,
    rating: 4.8,
    description: "法式开酥，层次丰富，内馅绵密开心果，海盐提香。",
    calories: 320,
    category: "sourdough",
    image: "https://cdn.shopify.com/s/files/1/0071/8700/3225/products/croissants-1.jpg?v=1628091221",
  },
  {
    id: 3,
    name: "全麦谷物核桃包",
    price: 38,
    rating: 4.7,
    description: "高纤全麦，核桃坚果满满，无油无糖，健康饱腹。",
    calories: 245,
    category: "wholeWheat",
    image: "https://cdn.shopify.com/s/files/1/0071/8700/3225/products/whole-wheat-bread-1.jpg?v=1628091221",
  },
  {
    id: 4,
    name: "黑麦蔓越莓软欧",
    price: 26,
    rating: 4.6,
    description: "黑麦粉制作，酸甜蔓越莓，口感柔软有嚼劲。",
    calories: 220,
    category: "wholeWheat",
    image: "https://cdn.shopify.com/s/files/1/0071/8700/3225/products/rye-bread-1.jpg?v=1628091221",
  },
  {
    id: 5,
    name: "奶香吐司",
    price: 18,
    rating: 4.9,
    description: "牛奶和面，奶香浓郁，柔软拉丝，早餐必备。",
    calories: 280,
    category: "toast",
    image: "https://cdn.shopify.com/s/files/1/0071/8700/3225/products/white-toast-1.jpg?v=1628091221",
  },
  {
    id: 6,
    name: "抹茶红豆吐司",
    price: 22,
    rating: 4.8,
    description: "日式抹茶风味，搭配蜜红豆，香甜柔软。",
    calories: 290,
    category: "toast",
    image: "https://cdn.shopify.com/s/files/1/0071/8700/3225/products/matcha-toast-1.jpg?v=1628091221",
  },
];

const categories = ['全部', '酸种面包', '全麦/无油', '吐司/三明治'];

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
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {/* ✅ 图片 100% 显示，不会空白 */}
              <div className="aspect-square w-full bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              <div className="p-3">
                <h3 className="font-medium text-sm truncate">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-amber-600 font-bold">¥{product.price}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlist.includes(product.id)
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
