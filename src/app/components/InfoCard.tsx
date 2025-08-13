import React from 'react';

interface InfoCardProps {
  title: string;
  value: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-400">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default InfoCard;
