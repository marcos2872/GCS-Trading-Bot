import InfoCard from "./components/InfoCard";
import ChartCard from "./components/ChartCard";
import Actions from "./components/Actions";
import OrdersList from "./components/OrdersList";

export default function Home() {
  const openOrders = [
    {
      id: 1,
      text: "Compra: 0.01 BTC | Quant: 0.005 | Venda: 5% | Data: 12/12/23",
    },
    {
      id: 2,
      text: "Compra: 0.02 BTC | Quant: 0.01 | Venda: 3% | Data: 11/12/23",
    },
    {
      id: 3,
      text: "Compra: 0.008 BTC | Quant: 0.002 | Venda: 7% | Data: 10/12/23",
    },
    {
      id: 4,
      text: "Compra: 0.015 BTC | Quant: 0.007 | Venda: 4% | Data: 09/12/23",
    },
    {
      id: 5,
      text: "Compra: 0.03 BTC | Quant: 0.015 | Venda: 2.5% | Data: 08/12/23",
    },
    {
      id: 6,
      text: "Compra: 0.012 BTC | Quant: 0.006 | Venda: 6% | Data: 07/12/23",
    },
    {
      id: 7,
      text: "Compra: 0.025 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
    {
      id: 8,
      text: "Compra: 0.025 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
    {
      id: 9,
      text: "Compra: 0.025 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
    {
      id: 10,
      text: "Compra: 0.025 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
    {
      id: 11,
      text: "Compra: 0.025 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
    {
      id: 12,
      text: "Compra: 0.025 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
    {
      id: 13,
      text: "Compra: 0.025 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
    {
      id: 14,
      text: "Compra: 0.029 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
    {
      id: 15,
      text: "Compra: 0.029 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
    {
      id: 16,
      text: "Compra: 0.029 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
    {
      id: 17,
      text: "Compra: 0.029 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
    {
      id: 18,
      text: "Compra: 0.029 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
    {
      id: 19,
      text: "Compra: 0.029 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
    {
      id: 20,
      text: "Compra: 0.029 BTC | Quant: 0.012 | Venda: 3.5% | Data: 06/12/23",
    },
  ];

  const closedOrders = [
    {
      id: 1,
      text: "Compra: 0.009 BTC | Venda: 0.0095 BTC | Lucro: ",
      isClosed: true,
      profit: "+5.5%",
    },
    {
      id: 2,
      text: "Compra: 0.018 BTC | Venda: 0.0175 BTC | Prejuízo: ",
      isClosed: true,
      profit: "-2.7%",
    },
    {
      id: 3,
      text: "Compra: 0.007 BTC | Venda: 0.0078 BTC | Lucro: ",
      isClosed: true,
      profit: "+11.4%",
    },
    {
      id: 4,
      text: "Compra: 0.014 BTC | Venda: 0.0146 BTC | Lucro: ",
      isClosed: true,
      profit: "+4.2%",
    },
    {
      id: 5,
      text: "Compra: 0.028 BTC | Venda: 0.029 BTC | Lucro: ",
      isClosed: true,
      profit: "+3.5%",
    },
    {
      id: 6,
      text: "Compra: 0.011 BTC | Venda: 0.0117 BTC | Lucro: ",
      isClosed: true,
      profit: "+6.3%",
    },
    {
      id: 7,
      text: "Compra: 0.023 BTC | Venda: 0.022 BTC | Prejuízo: ",
      isClosed: true,
      profit: "-4.3%",
    },
    {
      id: 8,
      text: "Compra: 0.023 BTC | Venda: 0.022 BTC | Prejuízo: ",
      isClosed: true,
      profit: "-4.3%",
    },
    {
      id: 9,
      text: "Compra: 0.023 BTC | Venda: 0.022 BTC | Prejuízo: ",
      isClosed: true,
      profit: "-4.3%",
    },
    {
      id: 10,
      text: "Compra: 0.023 BTC | Venda: 0.022 BTC | Prejuízo: ",
      isClosed: true,
      profit: "-4.3%",
    },
    {
      id: 11,
      text: "Compra: 0.023 BTC | Venda: 0.022 BTC | Prejuízo: ",
      isClosed: true,
      profit: "-4.3%",
    },
    {
      id: 12,
      text: "Compra: 0.023 BTC | Venda: 0.022 BTC | Prejuízo: ",
      isClosed: true,
      profit: "-4.3%",
    },
  ];

  // Generate mock data for 60 minutes
  const generateMinuteData = (
    startValue: number,
    fluctuation: number,
    isPrice: boolean = false,
  ) => {
    const data = [];
    let currentValue = startValue;
    for (let i = 0; i < 60; i++) {
      const date = new Date();
      date.setMinutes(date.getMinutes() - (59 - i)); // Go back 59 minutes from now
      const time = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      if (isPrice) {
        currentValue += (Math.random() - 0.5) * fluctuation * 100; // Larger fluctuation for price
      } else {
        currentValue += (Math.random() - 0.5) * fluctuation; // Smaller fluctuation for value
      }

      // Ensure values don't go below a certain threshold for price/value
      if (isPrice) {
        currentValue = Math.max(currentValue, 30000); // BTC price won't go below 30k
      } else {
        currentValue = Math.max(currentValue, 1000); // Wallet value won't go below 1k
      }

      data.push({ time, value: parseFloat(currentValue.toFixed(2)) });
    }
    return data;
  };

  const walletProgressData = generateMinuteData(1200, 10);
  const btcChartData = generateMinuteData(45000, 50, true);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4 mb-4">
        <InfoCard title="Valor na Carteira" value="$1.234,56" />
        <InfoCard title="Valor em BTC" value="0.025 BTC" />
        <InfoCard title="Saldo Acumulado" value="$3000.00" />
        <InfoCard title="Valor Atual do BTC" value="$49.382,40" />
      </div>

      <div className="flex flex-nowrap gap-4 mb-4">
        <div className="w-3/5 flex flex-col gap-4">
          <ChartCard
            title="Gráfico do progresso da carteira"
            chartType="line"
            chartData={walletProgressData}
            chartDataKey="time"
            chartLineDataKey="value"
            imageHeight="h-69"
          />
          <ChartCard
            title="Gráfico BTC"
            chartType="line"
            chartData={btcChartData}
            chartDataKey="time"
            chartLineDataKey="value"
            imageHeight="h-70"
          />
          <OrdersList title="Lista de ordens fechadas" orders={closedOrders} />
        </div>

        <div className="w-2/5 flex flex-col gap-4">
          <Actions />
          <OrdersList
            title="Lista de ordens abertas"
            orders={openOrders}
            max_height={588}
          />
        </div>
      </div>
    </div>
  );
}
