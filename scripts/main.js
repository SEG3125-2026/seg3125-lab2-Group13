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


/** Read preferences from Customer form */
function getUserPreferences() {
  const vegetarian = !!$("prefVegetarian")?.checked;
  const glutenIntolerance = !!$("prefGlutenFree")?.checked;

  let organicPref = "any"; // any | organic | nonOrganic
  const organicRadio = document.querySelector('input[name="prefOrganic"]:checked');
  if (organicRadio && typeof organicRadio.value === "string") organicPref = organicRadio.value;

  return { vegetarian, glutenIntolerance, organicPref };
}



/** Filter products based on preferences and sort by price ascending. */