import React from "react";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import PriceFilter from "../components/PriceFilter";
import SuggestionButton from "../components/SuggestionButton";
import SkeletonSuggestionList from "../components/SkeletonSuggestionList";

const Home = ({ products, liked, viewed, cart, onLike, onDetail, onAddToCart }) => {
  const [search, setSearch] = React.useState("");
  const [priceFilter, setPriceFilter] = React.useState("all");
  const [suggestions, setSuggestions] = React.useState([]);
  const [suggestLoading, setSuggestLoading] = React.useState(false);
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  // Lọc sản phẩm theo tìm kiếm và giá
  const filteredProducts = products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(search.toLowerCase());
    let matchPrice = true;
    if (priceFilter === "lt500") matchPrice = p.price < 500000;
    else if (priceFilter === "500to1m") matchPrice = p.price >= 500000 && p.price <= 1000000;
    else if (priceFilter === "gt1m") matchPrice = p.price > 1000000;
    return matchName && matchPrice;
  });

  // Gợi ý thông minh
  const handleSuggest = async () => {
    setSuggestLoading(true);
    setShowSuggestions(false);
    try {
      const { fetchSuggestions } = await import("../api/suggestions");
      const data = await fetchSuggestions("user123", viewed, liked, cart);
      setSuggestions(data);
      setShowSuggestions(true);
    } catch (e) {
      setSuggestions([]);
      setShowSuggestions(true);
    } finally {
      setSuggestLoading(false);
    }
  };

  return (
    <div className="home-page">
      <SearchBar value={search} onChange={setSearch} />
      <PriceFilter value={priceFilter} onChange={setPriceFilter} />
      <SuggestionButton onSuggest={handleSuggest} loading={suggestLoading} />
      {showSuggestions && (
        <div className="suggestion-box">
          <div className="suggestion-title">
            <span className="ai-icon" role="img" aria-label="AI">🤖</span>
            Gợi ý cho bạn
          </div>
          {suggestLoading ? (
            <SkeletonSuggestionList />
          ) : suggestions.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#888', margin: '18px 0' }}>
              Không có sản phẩm phù hợp để gợi ý.
            </div>
          ) : (
            <ProductList
              products={suggestions}
              onDetail={onDetail}
              onLike={onLike}
              likedList={liked}
              onAddToCart={onAddToCart}
              cart={cart}
            />
          )}
        </div>
      )}
      <ProductList
        products={filteredProducts}
        onDetail={onDetail}
        onLike={onLike}
        likedList={liked}
        onAddToCart={onAddToCart}
        cart={cart}
      />
    </div>
  );
};

export default Home; 