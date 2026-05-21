import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Search, Home, BookOpen, User } from "lucide-react";
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
    name: "酸种乡村面包",
    description: "天然酵母发酵，外皮酥脆内里柔软",
    price: 28,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586444248902-2f7c55f22106?w=700&h=700&fit=crop",
    category: "sourdough",
  },
  {
    id: 2,
    name: "全麦吐司",
    description: "100%全麦，无油无糖，健康早餐首选",
    price: 22,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=700&h=700&fit=crop",
    category: "wholewheat",
  },
  {
    id: 3,
    name: "葡萄干核桃吐司",
    description: "天然酵母发酵，外皮酥脆内里柔软",
    price: 28,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1508738327661-681090a923f4?w=700&h=700&fit=crop",
    category: "sourdough",
  },
  {
    id: 4,
    name: "黑麦酸种面包",
    description: "天然酵母发酵，外皮酥脆内里柔软",
    price: 28,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566709661243-347e175b5ecd?w=700&h=700&fit=crop",
    category: "sourdough",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [visible, setVisible] = useState(true);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 pb-20">
      <header className="sticky top-0 z-10 bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-amber-800">帮你挑到每一口都安心的面包</h1>
        <Button variant="ghost" size="icon" onClick={() => navigate("/search")}>
          <Search className="h-5 w-5" />
        </Button>
      </header>

      <div className="p-4 space-y-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["全部", "酸种面包", "全麦/无油", "吐司/三明治", "欧式面包"].map((category) => (
            <Button
              key={category}
              variant={category === "全部" ? "default" : "secondary"}
              className="rounded-full"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className={`space-y-4 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="flex gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-brown-800 mb-1">{product.name}</h3>
                      <p className="text-sm text-brown-500 mb-3 line-clamp-2">{product.description}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                    >
                      <Heart className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-amber-600 font-bold">¥{product.price}</div>
                    <Button variant="default" size="sm" className="rounded-full bg-amber-500 hover:bg-amber-600">
                      加入购物车
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3 flex justify-around">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
          <Home className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => navigate("/guide")}>
          <BookOpen className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => navigate("/profile")}>
          <User className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
