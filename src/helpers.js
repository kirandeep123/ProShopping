export function formatPrice(value) {
    return (value).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR"
    });
  }