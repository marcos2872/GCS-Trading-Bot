export interface BuySignalStatus {
  btc_purchase_progress_pct: number;
  btc_purchase_target: number;
  reason: string;
  should_buy: boolean;
}

export interface OpenPosition {
  current_price: number;
  entry_price: number;
  price_to_target: number;
  progress_to_sell_target_pct: number;
  quantity: number;
  sell_target_price: number;
  trade_id: string;
  unrealized_pnl: number;
  usd_to_target: number;
}

export interface DecisionContext {
  reason: string;
}

export interface TradeHistory {
  backtest_id: string | null;
  binance_trade_id: number;
  commission: number;
  commission_asset: string;
  commission_usd: number | null;
  decision_context: DecisionContext;
  environment: string;
  exchange: string;
  exchange_order_id: string;
  held_quantity: number | null;
  hodl_asset_amount: number | null;
  hodl_asset_value_at_sell: number | null;
  id: number;
  order_type: "buy" | "sell";
  price: number;
  quantity: number;
  realized_pnl: number | null;
  realized_pnl_usd: number | null;
  run_id: string;
  sell_target_price: number;
  status: "OPEN" | "CLOSED" | "TREASURY";
  strategy_name: string;
  symbol: string;
  timestamp: string;
  trade_id: string;
  usd_value: number;
}

export interface WalletBalance {
  asset: string;
  free: string;
  locked: string;
}

export interface TradingData {
  buy_signal_status: BuySignalStatus;
  current_btc_price: number;
  mode: "test" | "live" | "backtest";
  open_positions_status: OpenPosition[];
  symbol: string;
  trade_history: TradeHistory[];
  wallet_balances: WalletBalance[];
}
