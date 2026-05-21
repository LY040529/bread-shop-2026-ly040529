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

const products: Product[] = [
  {
    id: 1,
    name: "经典酸种面包",
    price: 28,
    rating: 4.9,
    description: "天然酵母发酵，外皮酥脆内里柔软",
    calories: 250,
    category: "sourdough",
    image: "https://images.unsplash.com/photo-1586444248902-2f7c55f22106?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "法式可颂",
    price: 15,
    rating: 4.8,
    description: "层次分明，奶香酥脆，经典早餐",
    calories: 320,
    category: "french",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "全麦吐司",
    price: 22,
    rating: 4.7,
    description: "100%全麦，无油无糖健康首选",
    calories: 245,
    category: "toast",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "黑麦核桃面包",
    price: 32,
    rating: 4.6,
    description: "黑麦粉+核桃，营养饱腹",
    calories: 220,
    category: "wholeWheat",
    image: "https://images.unsplash.com/photo-1566709661243-347e175b5ecd?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "牛奶软吐司",
    price: 18,
    rating: 4.9,
    description: "奶香浓郁，柔软拉丝超好吃",
    calories: 280,
    category: "toast",
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "抹茶红豆包",
    price: 24,
    rating: 4.8,
    description: "日式抹茶+蜜红豆，香甜柔软",
    calories: 290,
    category: "sweet",
    image: "https://images.unsplash.com/photo-1508738327661-681090a923f4?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "海盐芝士面包",
    price: 26,
    rating: 4.8,
    description: "咸香芝士，口感绵密",
    calories: 310,
    category: "savory",
    image: "https://images.unsplash.com/photo-1571091738676-2b5c77471429?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "蔓越莓软欧",
    price: 25,
    rating: 4.7,
    description: "酸甜蔓越莓，健康无负担",
    calories: 230,
    category: "wholeWheat",
    image: "https://images.unsplash.com/photo-1599599810069-5a967779e32f?w=400&h=400&fit=crop",
  },
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
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="aspect-square w-full bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // 兜底图：酸种面包，确保不会出现无关图片
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1586444248902-2f7c55f22106?w=400&h=400&fit=crop";
                  }}
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
