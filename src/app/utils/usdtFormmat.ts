export function formatUSDTCustom(usdtString: string): string {
  const usdtValue = parseFloat(usdtString);

  if (isNaN(usdtValue)) {
    return "$0,00";
  }

  // Separa a parte inteira da decimal
  const [integerPart, decimalPart = "00"] = usdtValue.toFixed(2).split(".");

  // Adiciona separadores de milhares
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `$${formattedInteger},${decimalPart}`;
}
