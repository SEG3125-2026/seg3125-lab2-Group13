"use strict";

/**
- Tab navigation (Customer / Products / Cart)
- Read customer preferences (vegetarian, gluten intolerance, organic preference)
- Filter + sort products by price (low -> high)
- Render products with price
- Build cart summary + total
*/

function $(id) {
  return document.getElementById(id);
}

function formatPrice(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return "$0.00";
  return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(num);
}
