import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (phone && password) {
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-warm-100 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm animate-fade-in">
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 rounded-full bg-warm-200 flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary-600" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-brown-800 mb-2">欢迎回来</h1>
          <p className="text-brown-500 text-sm">开启您的新鲜烘焙之旅</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="请输入手机号"
              className="w-full h-14 px-5 rounded-xl bg-warm-50 border-0 text-brown-700 placeholder-brown-300 focus:ring-2 focus:ring-primary-300 transition-all"
              maxLength={11}
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入密码"
              className="w-full h-14 px-5 pr-12 rounded-xl bg-warm-50 border-0 text-brown-700 placeholder-brown-300 focus:ring-2 focus:ring-primary-300 transition-all"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-brown-400 hover:text-brown-600 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="w-full h-14 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all active:scale-[0.98]"
          >
            登录
          </button>
        </div>

        <div className="flex justify-between mt-4">
          <button className="text-brown-500 text-sm hover:text-brown-700 transition-colors">
            忘记密码?
          </button>
          <button className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
            没有账号 立即注册
          </button>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-warm-300"></div>
            <span className="px-4 text-brown-400 text-xs">更多方式</span>
            <div className="w-16 h-px bg-warm-300"></div>
          </div>
          <div className="flex justify-center gap-8">
            <button className="w-12 h-12 rounded-full bg-warm-50 flex items-center justify-center text-brown-400 hover:bg-warm-200 hover:text-brown-600 transition-all">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-warm-50 flex items-center justify-center text-brown-400 hover:bg-warm-200 hover:text-brown-600 transition-all">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
