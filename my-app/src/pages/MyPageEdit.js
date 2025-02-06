import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

const MyPageEdit = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState('김토당');
  const [nickname, setNickname] = useState('밥먹다 살찐떡');
  const [phone, setPhone] = useState('010-1234-5678');
  const [email, setEmail] = useState('email@naver.com');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    console.log('저장된 정보:', {
      name,
      nickname,
      phone,
      email,
      address
    });
    navigate('/mypage');
  };

  return (
    <div>   
      {/* 프로필 이미지 */}
      <div className="flex justify-center border-b border-gray-100 pt-8 pb-6">
        <div className="relative">
          <img 
            src="/api/placeholder/160/160"
            alt="프로필" 
            className="w-40 h-40 rounded-full object-cover border border-gray-300"
          />
          <div className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow">
            <FontAwesomeIcon icon={faPaperclip} className="text-gray-500 text-sm" />
          </div>
        </div>
      </div>

      {/* 입력 폼 */}
      <div className="p-6 space-y-6">
        {/* 이름 */}
        <div className="space-y-1">
          <label className="text-base ml-1">이름</label>
          <input
            type="text"
            value={name}
            placeholder="이름을 입력하세요"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-2.5 text-base rounded-lg bg-gray-50 border border-gray-200 text-gray-400"
          />
        </div>

        {/* 닉네임 */}
        <div className="space-y-1">
          <label className="text-base ml-1">닉네임</label>
          <div className="flex gap-3">
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="flex-1 px-5 py-2.5 text-base rounded-lg bg-gray-50 border border-gray-200 text-gray-400"
            />
            <button 
              className="px-4 py-2 text-base bg-[#F78A16] text-white rounded-lg whitespace-nowrap"
            >
              중복 확인
            </button>
          </div>
        </div>

        {/* 전화번호 */}
        <div className="space-y-1">
          <label className="text-base ml-1">전화번호</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-5 py-2.5 text-base rounded-lg bg-gray-50 border border-gray-200 text-gray-400"
          />
        </div>

        {/* 이메일 */}
        <div className="space-y-1">
          <label className="text-base ml-1">이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-2.5 text-base rounded-lg bg-gray-50 border border-gray-200 text-gray-400"
          />
        </div>

        {/* 주소 */}
        <div className="space-y-1">
          <label className="text-base ml-1">주소</label>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={address}
                placeholder="주소를 선택해주세요"
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-5 py-2.5 text-base rounded-lg bg-gray-50 border border-gray-200 pr-8"
              />
            </div>
            <button className="px-7 py-2 text-base bg-[#F78A16] text-white rounded-lg whitespace-nowrap">
              관리
            </button>
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="absolute bottom-7 left-8 right-8 grid grid-cols-2 gap-7">
        <button 
          onClick={handleSubmit}
          className="py-3 bg-[#F78A16] text-white rounded-lg text-lg"
        >
          완료
        </button>
        <button 
          onClick={() => navigate('/mypage')}
          className="py-3 bg-gray-800 text-white rounded-lg text-lg"
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default MyPageEdit;