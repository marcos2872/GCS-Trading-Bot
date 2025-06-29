import { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
} from "recharts";
import {
  Activity,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Brain,
  Settings,
  Play,
  Pause,
  Square,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart3,
  Zap,
  Target,
} from "lucide-react";

const TradingBotDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [botStatus, setBotStatus] = useState("running"); // running, paused, stopped
  const [mode, setMode] = useState("test"); // optimize, test, trade

  // Mock data - em produção viria de APIs
  const portfolioValue = 12543.67;
  const dailyPnL = 234.56;
  const totalReturn = 15.8;
  const sharpeRatio = 1.84;
  const winRate = 68.5;
  const currentPrice = 67245.32;

  const portfolioHistory = [
    { time: "00:00", value: 12000 },
    { time: "04:00", value: 12150 },
    { time: "08:00", value: 12300 },
    { time: "12:00", value: 12200 },
    { time: "16:00", value: 12400 },
    { time: "20:00", value: 12544 },
  ];

  const recentTrades = [
    {
      id: 1,
      type: "BUY",
      price: 67100,
      amount: 0.018,
      time: "14:23:45",
      pnl: null,
      status: "filled",
    },
    {
      id: 2,
      type: "SELL",
      price: 67280,
      amount: 0.018,
      time: "14:45:12",
      pnl: 3.24,
      status: "filled",
    },
    {
      id: 3,
      type: "BUY",
      price: 67150,
      amount: 0.019,
      time: "15:12:33",
      pnl: null,
      status: "filled",
    },
    {
      id: 4,
      type: "SELL",
      price: 67245,
      amount: 0.019,
      time: "15:34:21",
      pnl: 1.81,
      status: "filled",
    },
  ];

  const mlMetrics = [
    { name: "Confidence", value: 0.847, color: "#10B981" },
    { name: "Accuracy", value: 0.732, color: "#3B82F6" },
    { name: "Precision", value: 0.689, color: "#8B5CF6" },
    { name: "Recall", value: 0.756, color: "#F59E0B" },
  ];

  const StatusBadge = ({ status }: { status: string }) => {
    const config: Record<string, { color: string; icon: any; text: string }> = {
      running: { color: "bg-green-500", icon: CheckCircle, text: "Running" },
      paused: { color: "bg-yellow-500", icon: AlertTriangle, text: "Paused" },
      stopped: { color: "bg-red-500", icon: XCircle, text: "Stopped" },
    };
    const { color, icon: Icon, text } = config[status];
    return (
      <div
        className={`${color} text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm`}
      >
        <Icon size={16} />
        {text}
      </div>
    );
  };

  const MetricCard = ({
    title,
    value,
    change,
    icon: Icon,
    color = "blue",
  }: {
    title: string;
    value: string;
    change?: number;
    icon: any;
    color: string;
  }) => (
    <div className="bg-white text-black rounded-lg shadow-md p-6 border-l-4 border-blue-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p
              className={`text-sm ${change > 0 ? "text-green-600" : "text-red-600"} flex items-center gap-1`}
            >
              {change > 0 ? (
                <TrendingUp size={16} />
              ) : (
                <TrendingDown size={16} />
              )}
              {Math.abs(change)}%
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full bg-${color}-100`}>
          <Icon className={`text-${color}-600`} size={24} />
        </div>
      </div>
    </div>
  );

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Status Header */}
      <div className="bg-white text-black rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Bot Status</h2>
            <StatusBadge status={botStatus} />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Mode: {mode.toUpperCase()}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() =>
                setBotStatus(botStatus === "running" ? "paused" : "running")
              }
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              {botStatus === "running" ? (
                <Pause size={16} />
              ) : (
                <Play size={16} />
              )}
              {botStatus === "running" ? "Pause" : "Start"}
            </button>
            <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              <Square size={16} />
              Stop
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-gray-600 text-sm">Current Price</p>
            <p className="text-xl font-bold">
              ${currentPrice.toLocaleString()}
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm">Position</p>
            <p className="text-xl font-bold text-green-600">0.037 BTC</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm">Last Trade</p>
            <p className="text-xl font-bold">2 min ago</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm">ML Confidence</p>
            <p className="text-xl font-bold text-purple-600">84.7%</p>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Portfolio Value"
          value={`$${portfolioValue.toLocaleString()}`}
          change={2.1}
          icon={DollarSign}
          color="green"
        />
        <MetricCard
          title="Daily P&L"
          value={`$${dailyPnL}`}
          change={dailyPnL > 0 ? 12.5 : -5.2}
          icon={TrendingUp}
          color="blue"
        />
        <MetricCard
          title="Total Return"
          value={`${totalReturn}%`}
          change={0.8}
          icon={Target}
          color="purple"
        />
        <MetricCard
          title="Sharpe Ratio"
          value={`${sharpeRatio}`}
          icon={BarChart3}
          color="orange"
        />
      </div>

      {/* Portfolio Chart */}
      <div className="bg-white text-black rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">
          Portfolio Performance (24h)
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={portfolioHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip
                formatter={(value) => [`$${value}`, "Portfolio Value"]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                fill="#93C5FD"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const TradingTab = () => (
    <div className="space-y-6">
      {/* Trading Controls */}
      <div className="bg-white text-black rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Trading Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Allocation
            </label>
            <input
              type="number"
              defaultValue="1000"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Risk per Trade
            </label>
            <input
              type="number"
              defaultValue="2"
              step="0.1"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Long Term Hold %
            </label>
            <input
              type="number"
              defaultValue="50"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>
      </div>

      {/* Recent Trades */}
      <div className="bg-white text-black rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Trades</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Time</th>
                <th className="text-left py-2">Type</th>
                <th className="text-left py-2">Price</th>
                <th className="text-left py-2">Amount</th>
                <th className="text-left py-2">P&L</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTrades.map((trade) => (
                <tr key={trade.id} className="border-b hover:bg-gray-50">
                  <td className="py-2">{trade.time}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        trade.type === "BUY"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {trade.type}
                    </span>
                  </td>
                  <td className="py-2">${trade.price.toLocaleString()}</td>
                  <td className="py-2">{trade.amount} BTC</td>
                  <td className="py-2">
                    {trade.pnl ? (
                      <span
                        className={
                          trade.pnl > 0 ? "text-green-600" : "text-red-600"
                        }
                      >
                        ${trade.pnl}
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="py-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      {trade.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Win Rate Chart */}
      <div className="bg-white text-black rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Win Rate: {winRate}%</h3>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[
                  { name: "Wins", value: winRate, fill: "#10B981" },
                  { name: "Losses", value: 100 - winRate, fill: "#EF4444" },
                ]}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                dataKey="value"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const MLTab = () => (
    <div className="space-y-6">
      {/* ML Model Status */}
      <div className="bg-white text-black rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Model Performance</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mlMetrics.map((metric) => (
            <div key={metric.name} className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-2">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#E5E7EB"
                    strokeWidth="4"
                    fill="transparent"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke={metric.color}
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={`${metric.value * 175.9} 175.9`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold">
                    {Math.round(metric.value * 100)}%
                  </span>
                </div>
              </div>
              <p className="text-sm font-medium">{metric.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Importance */}
      <div className="bg-white text-black rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Feature Importance</h3>
        <div className="space-y-3">
          {[
            { name: "RSI", importance: 0.23 },
            { name: "MACD", importance: 0.19 },
            { name: "Price Change 5m", importance: 0.15 },
            { name: "DXY Change", importance: 0.12 },
            { name: "Bollinger %B", importance: 0.11 },
            { name: "Volume", importance: 0.09 },
            { name: "ATR", importance: 0.07 },
            { name: "ADX", importance: 0.04 },
          ].map((feature) => (
            <div key={feature.name} className="flex items-center gap-3">
              <span className="w-20 text-sm">{feature.name}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${feature.importance * 100}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">
                {Math.round(feature.importance * 100)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Model Training Status */}
      <div className="bg-white text-black rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Training Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Last Training</p>
            <p className="font-semibold">2024-01-15 14:23:45</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Next Retraining</p>
            <p className="font-semibold">2024-01-22 14:23:45</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Training Data</p>
            <p className="font-semibold">30 days (43,200 samples)</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Model Type</p>
            <p className="font-semibold">LightGBM Classifier</p>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: "overview", name: "Overview", icon: Activity },
    { id: "trading", name: "Trading", icon: TrendingUp },
    { id: "ml", name: "ML Model", icon: Brain },
    { id: "settings", name: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white text-black shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={20} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                GCS Trading Bot
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Last Update</p>
                <p className="text-sm font-medium">
                  {new Date().toLocaleTimeString()}
                </p>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon size={16} />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "trading" && <TradingTab />}
        {activeTab === "ml" && <MLTab />}
        {activeTab === "settings" && (
          <div className="bg-white text-black rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Bot Configuration</h3>
            <p className="text-gray-600">Settings panel coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradingBotDashboard;
