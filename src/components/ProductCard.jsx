import React from "react";

const ProductCard = ({ product, onDetail, onLike, liked }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="product-short-desc">{product.shortDesc}</p>
      <div className="product-info">
        <span className="product-price">{product.price.toLocaleString()}đ</span>
        <span className="product-rating">⭐ {product.rating}</span>
      </div>
      <div className="product-actions">
        <button onClick={() => onDetail(product)}>Xem chi tiết</button>
        <button onClick={() => onLike(product)} className={liked ? "liked" : ""}>
          {liked ? "♥ Yêu thích" : "♡ Yêu thích"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 