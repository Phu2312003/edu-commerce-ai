import React from "react";

const ProductModal = ({ product, open, onClose, likedCount }) => {
  if (!open || !product) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={product.image} alt={product.name} className="modal-image" />
        <h2 style={{ marginBottom: 8 }}>{product.name}</h2>
        <div className="modal-info" style={{ alignItems: 'center' }}>
          <span className="modal-price">{product.price.toLocaleString()}đ</span>
          <span className="modal-rating" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} style={{ color: i < Math.round(product.rating) ? '#fbc02d' : '#eee', fontSize: 22 }}>&#9733;</span>
            ))}
            <span style={{ color: '#fbc02d', fontWeight: 600, marginLeft: 4 }}>{product.rating}</span>
          </span>
        </div>
        {typeof likedCount === 'number' && (
          <div style={{ color: '#e53935', fontWeight: 500, marginBottom: 8 }}>
            <span role="img" aria-label="heart">❤️</span> Đã thích: {likedCount}
          </div>
        )}
        <p className="modal-desc">{product.longDesc}</p>
      </div>
    </div>
  );
};

export default ProductModal; 