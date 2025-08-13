import React from 'react';
import Image from 'next/image';
import LineChartComponent from './LineChartComponent';

interface ChartCardProps {
  title: string;
  imageUrl?: string;
  altText?: string;
  imageHeight?: string;
  chartType?: 'line';
  chartData?: any[];
  chartDataKey?: string;
  chartLineDataKey?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  imageUrl,
  altText,
  imageHeight,
  chartType,
  chartData,
  chartDataKey,
  chartLineDataKey,
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-400 mb-2">{title}</h3>
      <div className={`relative ${imageHeight || 'h-48'}`}>
        {chartType === 'line' && chartData && chartDataKey && chartLineDataKey ? (
          <LineChartComponent
            data={chartData}
            dataKey={chartDataKey}
            lineDataKey={chartLineDataKey}
          />
        ) : imageUrl ? (
          <Image
            alt={altText || ''}
            src={imageUrl}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-md"
          />
        ) : null}
      </div>
    </div>
  );
};

export default ChartCard;