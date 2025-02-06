import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginSelectPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* 서비스 로고 */}
      <h1 className="text-4xl font-bold mb-10 text-blue-600">투당</h1>

      {/* 로그인 옵션 버튼들 */}
      <div className="w-full max-w-sm space-y-4">
        <button 
          className="w-full py-3 px-4 bg-[#03C75A] text-white rounded-lg flex items-center justify-center gap-2"
          onClick={() => console.log('네이버 로그인')}
        >
          네이버로 로그인하기
        </button>

        <button 
          className="w-full py-3 px-4 bg-[#FEE500] text-[#000000] rounded-lg flex items-center justify-center gap-2"
          onClick={() => console.log('카카오 로그인')}
        >
          카카오로 로그인하기
        </button>

        <button 
          className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center gap-2"
          onClick={() => navigate('/login')}
        >
          이메일 또는 아이디로 계속하기
        </button>
      </div>
    </div>
  );
}

export default LoginSelectPage; 