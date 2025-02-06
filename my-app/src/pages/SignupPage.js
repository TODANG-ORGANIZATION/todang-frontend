import React, { useState } from 'react';import { useNavigate } from "react-router-dom";
import Button5 from '../components/Button5';

function SignupPage() {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="pt-14 p-4 pb-24 relative min-h-screen">
      <div className="max-w-sm mx-auto space-y-6">
        {/* 프로필 이미지 업로드 */}
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-2">
            {profileImage ? (
              <img
                src={profileImage}
                alt="프로필"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">사진</span>
              </div>
            )}
            <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              +
            </label>
          </div>
        </div>

        {/* 입력 폼 */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="이름"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 border rounded-lg"
          />

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="닉네임"
              value={formData.nickname}
              onChange={(e) => setFormData({...formData, nickname: e.target.value})}
              className="flex-1 p-3 border rounded-lg"
            />
            <button className="px-4 py-2 bg-gray-200 rounded-lg">
              중복확인
            </button>
          </div>

          <input
            type="tel"
            placeholder="전화번호"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="이메일"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 border rounded-lg"
          />

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="주소"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="flex-1 p-3 border rounded-lg"
            />
            <button className="px-4 py-2 bg-gray-200 rounded-lg">
              검색
            </button>
          </div>

          <Button5 
            text="회원가입 하기"
            onClick={() => console.log('회원가입', formData)}
          />
        </div>
      </div>
    </div>
  );
}

export default SignupPage; 