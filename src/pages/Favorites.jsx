import React from "react";
import ProductList from "../components/ProductList";

const Favorites = ({ products, likedList, onDetail, onLike }) => {
  const favoriteProducts = products.filter((p) => likedList.includes(p.id));
  return (
    <div className="favorites-page">
      <h2>Danh sách sản phẩm yêu thích</h2>
      {favoriteProducts.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#888', margin: '32px 0' }}>
          Bạn chưa có sản phẩm nào trong danh sách yêu thích.
        </div>
      ) : (
        <ProductList
          products={favoriteProducts}
          onDetail={onDetail}
          onLike={onLike}
          likedList={likedList}
        />
      )}
    </div>
  );
};

export default Favorites; 