import React from "react";

const ActionInput = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
      <input
        className="bg-gray-700 text-white p-2 rounded-l-md w-full focus:outline-none"
        placeholder="Input de valor"
        type="text"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-md text-nowrap">
        Compra forçada
      </button>
    </div>
  );
};

interface InfoItemProps {
  title: string;
  value: string;
  valueColor?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, value, valueColor }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-400">{title}</h3>
      <p className={`text-lg font-semibold ${valueColor || ""}`}>{value}</p>
    </div>
  );
};

const Actions: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <ActionInput />
      <InfoItem title="Identificação da conta" value="Conta Principal" />
      <InfoItem title="Estratégia de Trade Usada" value="Scalping" />
      <InfoItem
        title="Indicador de Lucro/Perda"
        value="+ 5.2%"
        valueColor="text-green-500"
      />
    </div>
  );
};

export default Actions;
