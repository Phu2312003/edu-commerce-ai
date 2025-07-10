import React, { useState, useEffect } from "react";
import './App.css';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import History from "./pages/History";
import { fetchProducts } from "./api/products";
import ProductModal from "./components/ProductModal";
import Toast from "./components/Toast";

function App() {
  const [page, setPage] = useState("home");
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState([]);
  const [viewed, setViewed] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  // Xử lý yêu thích
  const handleLike = (product) => {
    setLiked((prev) => {
      const isLiked = prev.includes(product.id);
      setToast({
        show: true,
        message: isLiked ? `Đã bỏ khỏi yêu thích: ${product.name}` : `Đã thêm vào yêu thích: ${product.name}`,
        type: isLiked ? "error" : "success",
      });
      return isLiked ? prev.filter((id) => id !== product.id) : [...prev, product.id];
    });
  };

  // Xử lý xem chi tiết (mở modal + lưu lịch sử xem)
  const handleDetail = (product) => {
    setModalProduct(product);
    setShowModal(true);
    setViewed((prev) => prev.includes(product.id) ? prev : [...prev, product.id]);
  };

  // Thêm vào giỏ hàng
  const handleAddToCart = (product) => {
    setCart((prev) => prev.includes(product.id) ? prev : [...prev, product.id]);
    setToast({ show: true, message: `Đã thêm vào giỏ hàng: ${product.name}`, type: "success" });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalProduct(null);
  };

  // Tự động ẩn toast sau 2s
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => setToast((t) => ({ ...t, show: false })), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  return (
    <div className="App">
      <header className="main-nav">
        <div className="nav-logo">EduAI</div>
        <nav className="nav-links">
          <button className={page === 'home' ? 'nav-btn active' : 'nav-btn'} onClick={() => setPage('home')}><span role="img" aria-label="home">🏠</span> Trang chủ</button>
          <button className={page === 'favorites' ? 'nav-btn active' : 'nav-btn'} onClick={() => setPage('favorites')}><span role="img" aria-label="heart">❤️</span> Yêu thích ({liked.length})</button>
          <button className={page === 'history' ? 'nav-btn active' : 'nav-btn'} onClick={() => setPage('history')}><span role="img" aria-label="clock">🕒</span> Lịch sử xem</button>
        </nav>
      </header>
      {page === "home" ? (
        <Home
          products={products}
          liked={liked}
          viewed={viewed}
          cart={cart}
          onLike={handleLike}
          onDetail={handleDetail}
          onAddToCart={handleAddToCart}
          setToast={setToast}
        />
      ) : page === "favorites" ? (
        <Favorites
          products={products}
          likedList={liked}
          onLike={handleLike}
          onDetail={handleDetail}
        />
      ) : (
        <History
          products={products}
          viewedList={viewed}
          onLike={handleLike}
          onDetail={handleDetail}
          likedList={liked}
        />
      )}
      <ProductModal product={modalProduct} open={showModal} onClose={handleCloseModal} likedCount={liked.length} />
      <Toast message={toast.message} show={toast.show} type={toast.type} onClose={() => setToast((t) => ({ ...t, show: false }))} />
      <footer className="main-footer">
        © {new Date().getFullYear()} EduAI | Thiết kế & phát triển bởi Lương Đức Phú
      </footer>
    </div>
  );
}

export default App;
