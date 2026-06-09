export function calculateSalePrice(
    price: number,
    salePercent: number
  ) {
    return Number(
      (price * (1 - salePercent / 100)).toFixed(2)
    );
  }