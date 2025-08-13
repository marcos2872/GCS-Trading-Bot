import React from "react";

interface Order {
  id: number;
  text: string;
  isClosed?: boolean;
  profit?: string;
}

interface OrdersListProps {
  title: string;
  orders: Order[];
  max_height?: number;
}

const OrdersList: React.FC<OrdersListProps> = ({
  title,
  orders,
  max_height = 256,
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-400 mb-2">{title}</h3>
      <div className={`space-y-2 overflow-y-auto max-h-[${max_height}px]`}>
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-gray-700 p-2 rounded-md flex justify-between items-center text-sm"
          >
            <span>{order.text}</span>
            {!order.isClosed && (
              <div className="flex items-center space-x-2">
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-xs">
                  Vender
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-xs">
                  Guardar
                </button>
              </div>
            )}
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
        ))}
      </div>
    </div>
  );
};

export default OrdersList;
