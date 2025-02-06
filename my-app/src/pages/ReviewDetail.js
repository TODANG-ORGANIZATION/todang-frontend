import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrash,
  faStar
} from '@fortawesome/free-solid-svg-icons';

const ReviewDetail = () => {
  const { reviewId } = useParams();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [review, setReview] = useState(null);

  // 임시 리뷰 데이터 - 실제로는 reviewId를 기반으로 API에서 데이터를 가져와야 함
  useEffect(() => {
    // 임시 데이터
    const tempReview = {
      id: 1,
      storeName: "내만삼겹살 송파점",
      menu: "삼겹살(feat. 육즙팡팡)",
      rating: 1,
      hygiene: 1,
      content: "삼겹살이 쫄깃쫄깃하고 아주 맛있습니다. 이번에 처음 시켜먹었는데, 다음에도 또 시켜먹을 것 같아요",
      ownerReply: "밥먹다 살찐떡님, 내만 삼겹살 송파점을 찾아주셔서 감사합니다. 사랑을 듬~뿍 담아 조리한 저희 음식! 입맛에 맞으셨을까요? 고객님만을 생각하며 늘 조리에 최선을 다하고 있답니다!",
      image: "/api/placeholder/100/100",
      createdAt: "2024-02-06T14:30:00.000Z"
    };
    setReview(tempReview);
  }, [reviewId]);

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    // 삭제 로직 구현 예정
    console.log('삭제된 리뷰:', reviewId);
    setShowDeleteModal(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const renderStars = (count) => {
    return Array(5).fill(0).map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={`text-lg ${index < count ? "text-[#FF9C07]" : "text-gray-200"}`}
      />
    ));
  };

  if (!review) {
    return <div className="w-full p-6 text-center">로딩 중...</div>;
  }

  return (
    <div className="w-full bg-white">
      {/* 리뷰 상세 */}
      <div className="px-6 py-4">
        <div className="border border-gray-100 rounded-xl p-6 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-xs mb-1.5">
                {formatDate(review.createdAt)}
              </p>
              <h3 className="text-lg font-bold">{review.storeName}</h3>
              <p className="text-gray-600 mt-1">{review.menu}</p>
            </div>
            <button onClick={handleDeleteClick}>
              <FontAwesomeIcon 
                icon={faTrash} 
                className="text-gray-400"
              />
            </button>
          </div>

          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 w-16">별점</span>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 w-16">위생점수</span>
                <div className="flex">{renderStars(review.hygiene)}</div>
              </div>
            </div>
            {review.image && (
              <img
                src={review.image}
                alt="리뷰 이미지"
                className="w-24 h-24 rounded-lg object-cover"
              />
            )}
          </div>

          <p className="text-gray-800">{review.content}</p>

          {review.ownerReply && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">{review.ownerReply}</p>
            </div>
          )}
        </div>
      </div>

      {/* 삭제 확인 모달 */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[80%] max-w-[300px]">
            <h3 className="text-lg font-bold mb-4">리뷰 삭제</h3>
            <p className="text-gray-600 mb-6">이 리뷰를 정말 삭제하시겠습니까?</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-600"
              >
                취소
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 py-2 bg-red-500 text-white rounded-lg"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewDetail;