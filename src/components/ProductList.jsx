import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onDetail, onLike, likedList, onAddToCart, cart }) => {
  if (!products || products.length === 0) {
    return <div>Không có sản phẩm nào.</div>;
  }
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDetail={onDetail}
          onLike={onLike}
          liked={likedList.includes(product.id)}
          onAddToCart={onAddToCart}
          inCart={cart ? cart.includes(product.id) : false}
        />
      ))}
    </div>
  );
};

export default ProductList; 