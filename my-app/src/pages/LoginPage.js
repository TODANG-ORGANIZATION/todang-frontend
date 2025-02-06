import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button5 from '../components/Button5';

function LoginPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-10 text-blue-600">투당</h1>

      <div className="w-full max-w-sm space-y-4">
        <div>
          <input
            type="text"
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <Button5 
          text="로그인 하기"
          onClick={() => console.log('로그인')}
        />

        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/signup')}
            className="text-gray-600 hover:underline"
          >
            회원가입하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage; 