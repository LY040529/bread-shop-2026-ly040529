import { useState } from 'react';
import { ArrowLeft, Share2, Heart, ShoppingCart, Star } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

interface Review {
  id: number;
  userName: string;
  date: string;
  rating: number;
  content: string;
}

const productData = {
  id: 1,
  name: '全麦酸种乡村面包',
  originalPrice: 48,
  price: 36,
  rating: 4.9,
  reviewCount: '2.4k+',
  badge: '匠心手作',
  image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=whole%20wheat%20sourdough%20country%20bread%20on%20wooden%20board%20bakery%20style%20warm%20lighting&image_size=landscape_16_9',
  nutrition: {
    calories: 245,
    protein: 8.5,
    fiber: 4.2,
    fat: 1.2,
  },
  ingredients: ['高筋硬麦粉', '有机海盐', '天然酵母', '纯净矿泉水', '新鲜谷物'],
  taste: '"外壳硬朗香脆，带有淡淡的麦芽焦香；内里蜂窝组织丰富，口感柔韧且富有弹性，咀嚼间能感受到天然酸种带来的微酸回甘。"',
  reviews: [
    {
      id: 1,
      userName: '美食家小林',
      date: '2024.05.12',
      rating: 5,
      content: '这是我在本市吃过最地道的酸种面包！气孔非常漂亮，酸度恰到好处，搭配橄榄油简直绝了。',
    },
    {
      id: 2,
      userName: '健康达人Sarah',
      date: '2024.05.08',
      rating: 5,
      content: '减脂期的救星，配料表非常干净。每天早上一片，饱腹感很强，已经回购好几次了。',
    },
  ],
};

export default function ProductDetail() {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="min-h-screen bg-warm-100 pb-24">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-md">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:shadow-card transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-brown-700" />
        </button>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:shadow-card transition-all">
            <Share2 className="w-5 h-5 text-brown-700" />
          </button>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className={`w-10 h-10 rounded-full shadow-soft flex items-center justify-center hover:shadow-card transition-all ${
              isFavorite ? 'bg-red-500 text-white' : 'bg-white text-brown-700'
            }`}
          >
            <Heart className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>
      </header>

      <div className="relative">
        <img
          src={productData.image}
          alt={productData.name}
          className="w-full h-72 object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
            {productData.badge}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl">
          <span className="text-xs text-brown-400 line-through">¥{productData.originalPrice}</span>
          <span className="text-xl font-bold text-primary-600 ml-2">¥{productData.price}</span>
        </div>
      </div>

      <div className="px-4 py-4 bg-white">
        <h1 className="text-xl font-bold text-brown-800 mb-2">{productData.name}</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
            <span className="font-semibold text-brown-700">{productData.rating}</span>
            <span className="text-sm text-brown-400">({productData.reviewCount}真实评价)</span>
          </div>
          <div className="flex items-center gap-1 text-brown-500">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span className="text-sm">100%纯天然无添加</span>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-soft">
          <h2 className="font-semibold text-brown-800 mb-4">营养价值 (每100g)</h2>
          <div className="grid grid-cols-4 gap-3">
            <div className="flex flex-col items-center p-3 bg-warm-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-orange-500" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-brown-700">{productData.nutrition.calories}</span>
              <span className="text-xs text-brown-400">热量(kcal)</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-warm-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-brown-700">{productData.nutrition.protein}g</span>
              <span className="text-xs text-brown-400">蛋白质</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-warm-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-500" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-brown-700">{productData.nutrition.fiber}g</span>
              <span className="text-xs text-brown-400">膳食纤维</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-warm-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-brown-700">{productData.nutrition.fat}g</span>
              <span className="text-xs text-brown-400">脂肪</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-soft">
          <h2 className="font-semibold text-brown-800 mb-4">核心配料</h2>
          <div className="flex flex-wrap gap-2">
            {productData.ingredients.map((ingredient, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-warm-50 rounded-full text-sm text-brown-600 flex items-center gap-1"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary-500" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                {ingredient}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-soft">
          <h2 className="font-semibold text-brown-800 mb-4">口感特征</h2>
          <p className="text-brown-600 leading-relaxed">{productData.taste}</p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="bg-white rounded-2xl p-4 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-brown-800">用户口碑</h2>
            <button className="text-primary-600 text-sm font-medium">查看全部</button>
          </div>
          <div className="space-y-4">
            {productData.reviews.map((review) => (
              <div key={review.id} className="pb-4 border-b border-warm-100 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <UserIcon />
                    </div>
                    <span className="font-medium text-brown-700">{review.userName}</span>
                  </div>
                  <span className="text-xs text-brown-400">{review.date}</span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500' : 'text-warm-200'}`} 
                      fill={i < review.rating ? 'currentColor' : 'none'} 
                    />
                  ))}
                </div>
                <p className="text-sm text-brown-600 leading-relaxed">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-warm-200 px-4 py-4 safe-area-bottom">
        <div className="flex gap-3">
          <button className="flex-1 h-12 rounded-xl border-2 border-primary-500 text-primary-600 font-medium flex items-center justify-center gap-2 hover:bg-primary-50 transition-all">
            <ShoppingCart className="w-5 h-5" />
            加入购物车
          </button>
          <button className="flex-1 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all">
            立即购买
          </button>
        </div>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-600" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );
}
