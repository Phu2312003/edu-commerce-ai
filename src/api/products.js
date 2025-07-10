// Mock data sản phẩm
export const products = [
  {
    id: 1,
    name: "Khóa học React cơ bản",
    price: 450000,
    image: "https://picsum.photos/seed/react/400/250",
    shortDesc: "Học React từ cơ bản đến nâng cao.",
    longDesc: "Khóa học này giúp bạn nắm vững React, xây dựng ứng dụng thực tế, thực hành dự án lớn.",
    rating: 4.5
  },
  {
    id: 2,
    name: "Lập trình Python cho người mới bắt đầu",
    price: 600000,
    image: "https://picsum.photos/seed/python/400/250",
    shortDesc: "Bắt đầu với Python dễ dàng.",
    longDesc: "Khóa học Python từ A-Z, phù hợp cho người chưa biết gì về lập trình.",
    rating: 4.7
  },
  {
    id: 3,
    name: "Giáo trình Machine Learning",
    price: 1200000,
    image: "https://picsum.photos/seed/ml/400/250",
    shortDesc: "Tài liệu học máy đầy đủ, chi tiết.",
    longDesc: "Giáo trình chuyên sâu về Machine Learning, bài tập thực hành, ví dụ thực tế.",
    rating: 4.8
  },
  {
    id: 4,
    name: "Khóa học Vue nâng cao",
    price: 800000,
    image: "https://picsum.photos/seed/vue/400/250",
    shortDesc: "Nâng cao kỹ năng với Vue.js.",
    longDesc: "Khóa học dành cho lập trình viên muốn làm chủ Vue, xây dựng SPA chuyên nghiệp.",
    rating: 4.6
  },
  {
    id: 5,
    name: "Tài liệu Data Science",
    price: 300000,
    image: "https://picsum.photos/seed/ds/400/250",
    shortDesc: "Tài liệu nhập môn Khoa học dữ liệu.",
    longDesc: "Tổng hợp kiến thức cơ bản về Data Science, phù hợp cho người mới bắt đầu.",
    rating: 4.3
  }
];

// Hàm giả lập API lấy danh sách sản phẩm
export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 700);
  });
} 