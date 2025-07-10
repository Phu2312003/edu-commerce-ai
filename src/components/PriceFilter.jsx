import React from "react";

const priceOptions = [
  { label: "Tất cả", value: "all" },
  { label: "< 500K", value: "lt500" },
  { label: "500K – 1 triệu", value: "500to1m" },
  { label: "> 1 triệu", value: "gt1m" },
];

const PriceFilter = ({ value, onChange }) => {
  return (
    <div className="price-filter">
      {priceOptions.map((opt) => (
        <label key={opt.value}>
          <input
            type="radio"
            name="price"
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
};

export default PriceFilter; 