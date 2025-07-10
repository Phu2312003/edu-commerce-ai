import React from "react";

const SuggestionButton = ({ onSuggest, loading }) => (
  <button className="suggestion-btn" onClick={onSuggest} disabled={loading}>
    {loading ? "Đang gợi ý..." : "Gợi ý sản phẩm phù hợp"}
  </button>
);

export default SuggestionButton; 