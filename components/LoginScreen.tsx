import React, { useState } from 'react';
import { Lock, User, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface LoginScreenProps {
  onLoginSuccess: () => void;
  onBack: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess, onBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const LOGO_WHITE = "https://static.wixstatic.com/media/1f17f3_1e2b54d2fd894dd997c6cbc18e940576~mv2.png";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // SIMULAÇÃO DE LOGIN
    setTimeout(() => {
      // Validação estrita conforme solicitado: apenas um usuário
      const isValidUser = username.trim() === 'up.whats' && password === 'ACCESS-UP';

      if (isValidUser) {
        onLoginSuccess();
      } else {
        setError('Credenciais inválidas. Verifique usuário e senha.');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-up-dark relative overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[80vh] h-[80vh] bg-up-gold/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vh] h-[60vh] bg-up-medium/40 rounded-full blur-[80px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#C49B66 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo Header */}
        <div className="text-center mb-8 md:mb-10 animate-fade-in-down flex flex-col items-center">
          <div className="mb-6">
             <img 
               src={LOGO_WHITE} 
               alt="UP! Company" 
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.nextElementSibling!.classList.remove('hidden');
               }}
               className="h-12 md:h-20 w-auto object-contain"
             />
             <h1 className="hidden text-white font-heading font-bold text-2xl mt-2">UP! Company</h1>
          </div>
          <h2 className="text-lg md:text-xl font-heading font-bold text-white tracking-wide">
            ÁREA DE MEMBROS
          </h2>
          <p className="text-gray-400 text-xs md:text-sm mt-2 tracking-widest uppercase">Acesso Exclusivo a Alunos</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl animate-fade-in-up">
          <form onSubmit={handleLogin} className="space-y-5 md:space-y-6">
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-up-gold uppercase tracking-wider ml-1">Usuário de Acesso</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-500 group-focus-within:text-up-gold transition-colors" />
                </div>
                <input 
                  type="text" 
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-up-dark/50 border border-white/10 rounded-xl py-3 md:py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-up-gold/50 focus:ring-1 focus:ring-up-gold/50 transition-all text-sm md:text-base"
                  placeholder="Usuário"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-up-gold uppercase tracking-wider ml-1">Senha de Acesso</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500 group-focus-within:text-up-gold transition-colors" />
                </div>
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-up-dark/50 border border-white/10 rounded-xl py-3 md:py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-up-gold/50 focus:ring-1 focus:ring-up-gold/50 transition-all text-sm md:text-base"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <Button 
              type="submit" 
              fullWidth 
              disabled={loading}
              className={`!mt-6 md:!mt-8 !py-3 md:!py-4 !text-sm md:!text-base ${loading ? 'opacity-80 cursor-wait' : ''}`}
            >
              {loading ? 'Verificando...' : 'Acessar Material'} 
              {!loading && <ArrowRight size={18} />}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button onClick={onBack} className="text-xs text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-gray-500 pb-0.5">
              Voltar para a página inicial
            </button>
          </div>
        </div>

        <p className="text-center text-gray-600 text-[10px] md:text-xs mt-8">
          Problemas com acesso? Contate o suporte da UP! Company.
        </p>
      </div>
    </div>
  );
};