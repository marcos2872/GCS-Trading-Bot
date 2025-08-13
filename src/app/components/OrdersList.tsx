import React from "react";

interface OpenOrder {
  id: number;
  purchaseBtc: number;
  quantity: number;
  targetProfitPercentage: number;
  date: string;
}

interface ClosedOrder {
  id: number;
  text: string;
  isClosed: boolean;
  profit: string;
}

type Order = OpenOrder | ClosedOrder;

interface OrdersListProps {
  title: string;
  orders: Order[];
  max_height?: number;
  currentBtcPrice?: number;
  minProfitPercentage?: number;
}

const OrdersList: React.FC<OrdersListProps> = ({
  title,
  orders,
  max_height = 256,
  currentBtcPrice,
  minProfitPercentage,
}) => {
  const containerStyle = { maxHeight: `${max_height}px` };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-400 mb-2">{title}</h3>
      <div className="space-y-2 overflow-y-auto" style={containerStyle}>
        {orders.map((order) => {
          // Type guard to differentiate between OpenOrder and ClosedOrder
          const isClosedOrder = (o: Order): o is ClosedOrder =>
            (o as ClosedOrder).isClosed !== undefined;

          if (isClosedOrder(order)) {
            return (
              <div
                key={order.id}
                className="bg-gray-700 p-2 rounded-md flex justify-between items-center text-sm"
              >
                <span>{order.text}</span>
                {order.isClosed && order.profit && (
                  <span
                    className={
                      order.profit.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {order.profit}
                  </span>
                )}
              </div>
            );
          } else {
            // This is an OpenOrder
            const purchaseValueUsd = order.purchaseBtc * (currentBtcPrice || 0);
            const targetSellValueUsd =
              purchaseValueUsd * (1 + (minProfitPercentage || 0));

            console.log("purchaseValueUsd:", purchaseValueUsd);
            console.log("targetSellValueUsd:", targetSellValueUsd);

            return (
              <div
                key={order.id}
                className="bg-gray-700 p-2 rounded-md flex justify-between items-center text-sm"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-600 px-2 py-1 rounded-md">
                    Compra: {formatCurrency(purchaseValueUsd)}
                  </span>
                  <span className="bg-gray-600 px-2 py-1 rounded-md">
                    Venda Alvo: {formatCurrency(targetSellValueUsd)}
                  </span>
                  <span className="bg-gray-600 px-2 py-1 rounded-md">
                    Data: {order.date}
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
          }
        })}
      </div>
    </div>
  );
};

export default OrdersList;
