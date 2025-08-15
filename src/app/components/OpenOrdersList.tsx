import React from "react";
import { TradeHistory } from "../api/bot-infos/interface";
import { formatUSDTCustom } from "../utils/usdtFormmat";

const OpenOrdersList: React.FC<{ data: TradeHistory[] }> = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-400 mb-2">Lista de ordens abertas</h3>
      <div className="space-y-2 overflow-y-auto max-h-[588px]">
        {data.map((order) => {
          return (
            <div
              key={order.trade_id}
              className="bg-gray-700 p-2 rounded-md flex justify-between items-center text-sm"
            >
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-600 px-2 py-1 rounded-md w-44">
                  Compra: {formatUSDTCustom(`${order.price}`)}
                </span>
                <span className="bg-gray-600 px-2 py-1 rounded-md w-32">
                  Valor: {formatUSDTCustom(`${order.usd_value}`)}
                </span>
                <span
                  className={`bg-gray-600 px-2 py-1 rounded-md w-24 ${
                    order.unrealized_pnl > 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  P/L: {formatUSDTCustom(`${order.realized_pnl}`)}
                </span>
                <span className="bg-gray-600 px-2 py-1 rounded-md w-44">
                  Lucro Faltante: {order.quantity}
                </span>
                <span className="bg-gray-600 px-2 py-1 rounded-md w-60">
                  Meta de Venda:{" "}
                  {formatUSDTCustom(`${order.sell_target_price}`)}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-xs">
                  Vender
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-xs">
                  Guardar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OpenOrdersList;
