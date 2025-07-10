import { products } from "./products";

function getKeywords(name) {
  return name.toLowerCase().split(/\s|,|\./).filter(Boolean);
}

// Hàm giả lập API gợi ý sản phẩm nâng cao
export function fetchSuggestions(userId, viewed = [], liked = [], cart = []) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Lấy sản phẩm đã thích/xem/giỏ hàng
      const likedProducts = products.filter((p) => liked.includes(p.id));
      const viewedProducts = products.filter((p) => viewed.includes(p.id));
      const cartProducts = products.filter((p) => cart.includes(p.id));
      // Lấy từ khóa và mức giá của sản phẩm đã thích/xem/giỏ hàng
      const keywords = [
        ...likedProducts.flatMap((p) => getKeywords(p.name)),
        ...viewedProducts.flatMap((p) => getKeywords(p.name)),
        ...cartProducts.flatMap((p) => getKeywords(p.name)),
      ];
      const priceRanges = [
        ...likedProducts.map((p) => p.price),
        ...viewedProducts.map((p) => p.price),
        ...cartProducts.map((p) => p.price),
      ];
      // Ưu tiên sản phẩm cùng từ khóa hoặc gần mức giá
      let suggested = products.filter(
        (p) =>
          !viewed.includes(p.id) &&
          !liked.includes(p.id) &&
          !cart.includes(p.id) &&
          (
            keywords.some((kw) => getKeywords(p.name).includes(kw)) ||
            priceRanges.some((pr) => Math.abs(pr - p.price) < 200000)
          )
      );
      // Nếu không còn sản phẩm nào, trả về ngẫu nhiên 2 sản phẩm
      if (suggested.length === 0) {
        suggested = products.filter((p) => !viewed.includes(p.id) && !liked.includes(p.id) && !cart.includes(p.id));
      }
      if (suggested.length === 0) {
        resolve(products.slice(0, 2));
      } else {
        resolve(suggested.slice(0, 3));
      }
    }, 1000);
  });
} 