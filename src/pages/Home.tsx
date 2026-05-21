const Home = () => {
  return (
    <div className="p-4 pb-20">
      <h1 className="text-xl font-bold mb-4">面包商店</h1>

      {/* 👇 这就是你要的正方形两列卡片 */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow">
          <div className="aspect-square bg-gray-100 flex items-center justify-center p-2">
            <img 
              src="https://images.unsplash.com/photo-1586444248902-2f7c55f22106" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="p-3">
            <p>全麦面包</p>
            <p className="text-orange-500">¥12</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow">
          <div className="aspect-square bg-gray-100 flex items-center justify-center p-2">
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="p-3">
            <p>牛角包</p>
            <p className="text-orange-500">¥15</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
