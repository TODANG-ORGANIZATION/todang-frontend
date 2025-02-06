import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button5 from '../components/Button5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function ReviewWritePage() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  // 주문 정보 (백엔드에서 받아올 데이터)
  const [orderInfo] = useState({
    restaurantName: '김밥천국',
    items: [
      { id: 1, name: '참치김밥' },
      { id: 2, name: '라면' }
    ]
  });

  // 리뷰 상태 관리
  const [reviewImage, setReviewImage] = useState(null);
  const [rating, setRating] = useState(5);
  const [hygieneRating, setHygieneRating] = useState(5);
  const [content, setContent] = useState('');

  // 이미지 업로드 처리
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 별점 렌더링 컴포넌트
  const StarRating = ({ value, onChange, label }) => (
    <div className="flex items-center gap-2">
      <span className="text-gray-600 min-w-[4rem]">{label}</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onChange(star)}
            className="text-2xl"
          >
            <FontAwesomeIcon 
              icon={star <= value ? faStarSolid : faStarRegular}
              className={star <= value ? 'text-yellow-400' : 'text-gray-300'}
            />
          </button>
        ))}
      </div>
    </div>
  );

  // 리뷰 제출 처리
  const handleSubmit = async () => {
    try {
      // accessToken과 user 정보 확인
      const accessToken = localStorage.getItem('accessToken');
      const user = JSON.parse(localStorage.getItem('user'));

      if (!accessToken || !user) {
        throw new Error('로그인이 필요합니다.');
      }

      // TODO: 실제 이미지 업로드 로직 구현 필요
      const imageUrl = "https://example.com/image.jpg"; // 이미지 업로드 후 받은 URL로 교체 필요

      const reviewData = {
        userId: user.userId,
        orderId: Number(orderId),
        reviewPhoto: imageUrl,
        review: content,
        star: rating,
        cleanness: hygieneRating,
        writtenDate: new Date().toISOString().split('T')[0]
      };

      const response = await axios.post('/api/reviews', reviewData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });

      alert(response.data.message);
      navigate('/orders');
    } catch (error) {
      console.error('리뷰 등록 중 오류 발생:', error);
      alert(error.response?.data?.message || '리뷰 등록에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="pt-14 p-4 pb-24 relative min-h-screen">
      {/* 식당 정보 */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">{orderInfo.restaurantName}</h2>
        <p className="text-gray-600">
          {orderInfo.items.map(item => item.name).join(', ')}
        </p>
      </div>

      {/* 사진 업로드 */}
      <div className="mb-6">
        <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
          {reviewImage ? (
            <>
              <img 
                src={reviewImage} 
                alt="리뷰 이미지" 
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setReviewImage(null)}
                className="absolute top-2 right-2 w-8 h-8 bg-black bg-opacity-50 rounded-full text-white flex items-center justify-center"
              >
                ✕
              </button>
            </>
          ) : (
            <label className="w-full h-full flex items-center justify-center cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <span className="text-gray-500">사진을 첨부해주세요</span>
            </label>
          )}
        </div>
      </div>

      {/* 별점 */}
      <div className="space-y-4 mb-6">
        <StarRating 
          value={rating} 
          onChange={setRating} 
          label="별점" 
        />
        <StarRating 
          value={hygieneRating} 
          onChange={setHygieneRating} 
          label="위생별점" 
        />
        <p className="text-sm text-gray-500 mt-1">
          ※ 위생점수는 매장 운영과 유지에 중요한 영향을 미칩니다.
        </p>
      </div>

      {/* 리뷰 내용 */}
      <div className="mb-6">
        <textarea
          placeholder="리뷰를 작성해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-32 p-3 border rounded-lg resize-none"
        />
      </div>

      {/* 작성하기 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button5 
          text="작성하기"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default ReviewWritePage;