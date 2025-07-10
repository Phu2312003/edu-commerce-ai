import React from "react";
import ProductList from "../components/ProductList";

const History = ({ products, viewedList, onDetail, onLike, likedList }) => {
  const viewedProducts = products.filter((p) => viewedList.includes(p.id));
  return (
    <div className="history-page">
      <h2>Lịch sử xem sản phẩm</h2>
      {viewedProducts.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#888', margin: '32px 0' }}>
          Bạn chưa xem sản phẩm nào.
        </div>
      ) : (
        <ProductList
          products={viewedProducts}
          onDetail={onDetail}
          onLike={onLike}
          likedList={likedList}
        />
      )}
    </div>
  );
};

export default History; 