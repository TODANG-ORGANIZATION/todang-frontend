import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const AlertPage = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: "조리가 완료되었어요.",
      message: "내만삼겹살 송파점의 조리가 완료되었어요.",
      subMessage: "가게에 방문해, 픽업을 진행해 주세요.",
      timeAgo: "21분전"
    },
    {
      id: 2,
      title: "주문이 접수되었어요",
      message: "내만삼겹살 송파점의 주문이 접수되었어요.",
      subMessage: "30분정도 소요 예정이에요.",
      timeAgo: "54분전"
    }
  ];

  return (
    <div className="w-[415px] h-[915px] bg-white relative">
      {/* 헤더 */}
      <div className="flex items-center px-6 h-[10%] border-b border-gray-100">
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          className="text-2xl cursor-pointer" 
          onClick={() => navigate(-1)}
        />
        <h1 className="text-2xl font-bold ml-4">알림 센터</h1>
      </div>

      {/* 알림 목록 */}
      <div className="p-8 space-y-4">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="text-lg font-bold mb-3">{notification.title}</h3>
            <p className="text-gray-800 mb-1">{notification.message}</p>
            <p className="text-gray-600 text-sm mb-1">{notification.subMessage}</p>
            <p className="text-gray-400 text-sm">{notification.timeAgo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertPage;