import React from "react";
import "../App.css";

const SkeletonSuggestionList = () => (
  <div className="product-list">
    {[1, 2, 3].map((i) => (
      <div className="product-card skeleton-card" key={i}>
        <div className="skeleton skeleton-img" />
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-desc" />
        <div className="skeleton skeleton-info" />
        <div className="skeleton skeleton-btn" />
      </div>
    ))}
  </div>
);

export default SkeletonSuggestionList; 