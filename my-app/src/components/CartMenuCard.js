import React from "react";

function CartMenuCard({ menu }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium text-gray-800">{menu.name}</h3>
          <p className="text-gray-600">{menu.price.toLocaleString()}원</p>
        </div>
        <button 
          className="text-red-500 hover:text-red-600"
          onClick={() => {
            // 삭제 기능은 나중에 구현
            console.log('메뉴 삭제:', menu.id);
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default CartMenuCard;