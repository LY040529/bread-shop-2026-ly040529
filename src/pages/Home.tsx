import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Home, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "全麦吐司面包",
    description: "健康全麦，柔软细腻",
    price: 12,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586444248902-2f7c55f22106?w=400&h=400&fit=crop",
    category: "bread",
  },
  {
    id: 2,
    name: "奶香牛角包",
    description: "酥软奶香，入口即化",
    price: 15,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
    category: "bread",
  },
  {
    id: 3,
    name: "巧克力吐司",
    description: "浓郁巧克力风味",
    price: 18,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&h=400&fit=crop",
    category: "bread",
  },
  {
    id: 4,
    name: "蓝莓松饼",
    description: "新鲜蓝莓，松软可口",
    price: 22,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1585476263306-07a53990400b?w=400&h=400&fit=crop",
    category: "bread",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const addToCart = (id: number) => {
    setCart((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="sticky top-0 z-10 bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-amber-800">面包商店</h1>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => navigate("/search")}>
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate("/cart")}>
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">精选面包</h2>

          {/* 👇 这里就是你要的：正方形、两列、和水果卡片一样的布局 */}
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {/* 正方形图片区域 */}
                <div className="w-full aspect-square bg-gray-50 flex items-center justify-center p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>

                {/* 文字信息 */}
                <div className="p-3">
                  <h3 className="font-medium text-sm truncate">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-amber-600 font-bold">¥{product.price}</span>
                    <span className="text-yellow-500 text-xs">⭐ {product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 底部导航 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3 flex justify-around">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
          <Home className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => navigate("/search")}>
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => navigate("/profile")}>
          <User className="h-5 w-5" />
        </Button>
      </nav>
    </div>
  );
};

export default Home;
