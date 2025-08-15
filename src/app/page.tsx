"use client";
import InfoCard from "./components/InfoCard";
import ChartCard from "./components/ChartCard";
import Actions from "./components/Actions";
import OrdersList from "./components/OrdersList";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  OpenPosition,
  TradeHistory,
  TradingData,
  WalletBalance,
} from "./api/bot-infos/interface";
import { formatUSDTCustom } from "./utils/usdtFormmat";
import OpenOrdersList from "./components/OpenOrdersList";

export default function Home() {
  const [openOrders, setOpenOrders] = useState<TradeHistory[]>([]);
  const [closedOrders, setClosedOrders] = useState<TradeHistory[]>([]);
  const [tradeHistory, setTradeHistory] = useState<TradeHistory[]>([]);
  const [walletBalances, setWalleBalances] = useState<WalletBalance[]>([]);

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

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("/api/bot-infos?mode=test");
      const infos: TradingData = await response.json();

      setOpenOrders(
        infos.trade_history.filter(
          ({ order_type, status }) =>
            status === "CLOSED" && order_type === "buy",
        ),
      );
      setClosedOrders(
        infos.trade_history.filter(
          ({ order_type, status }) =>
            status === "CLOSED" && order_type === "sell",
        ),
      );
      setWalleBalances(infos.wallet_balances);
      setTradeHistory(infos.trade_history);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const wallet = useMemo(() => {
    const btc = walletBalances?.find(({ asset }) => asset === "BTC");
    const usdt = walletBalances?.find(({ asset }) => asset === "USDT");
    return {
      btc: `${btc ? btc.free : 0}BTC`,
      usdt: formatUSDTCustom(usdt?.free || ""),
      btc_looked: btc ? btc.locked : 0,
      usdt_looked: formatUSDTCustom(usdt?.locked || ""),
    };
  }, [walletBalances]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4 mb-4">
        <InfoCard title="Valor na Carteira" value={wallet.usdt} />
        <InfoCard title="Valor em BTC" value={wallet.btc} />
        {/*<InfoCard title="Saldo Acumulado" value="$3000.00" />*/}
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
        </div>

        <div className="w-2/5 flex flex-col gap-4">
          <Actions />
          <OrdersList title="Lista de ordens fechadas" orders={closedOrders} />
        </div>
      </div>
      <div>
        <OpenOrdersList data={openOrders} />
      </div>
    </div>
  );
}
