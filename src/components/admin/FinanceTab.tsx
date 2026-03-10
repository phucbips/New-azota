import React, { useState, useMemo } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Wallet } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const FinanceTab: React.FC = () => {
  const [timePeriod, setTimePeriod] = useState<"today" | "week" | "month" | "all">("month");

  // Mock data for educational platform finance
  const transactions = [
    { id: 1, type: "income", category: "course_revenue", amount: 1500000, created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString() },
    { id: 2, type: "income", category: "course_revenue", amount: 3500000, created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString() },
    { id: 3, type: "expense", category: "server_cost", amount: 500000, created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString() },
    { id: 4, type: "income", category: "course_revenue", amount: 2000000, created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4).toISOString() },
    { id: 5, type: "income", category: "course_revenue", amount: 1200000, created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString() },
    { id: 6, type: "expense", category: "marketing", amount: 1000000, created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6).toISOString() },
    { id: 7, type: "income", category: "course_revenue", amount: 4500000, created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString() },
  ];

  const timeFiltered = useMemo(() => {
    if (timePeriod === "all") return transactions;
    const now = new Date();
    const start = new Date();
    if (timePeriod === "today") {
      start.setHours(0, 0, 0, 0);
    } else if (timePeriod === "week") {
      start.setDate(now.getDate() - now.getDay());
      start.setHours(0, 0, 0, 0);
    } else if (timePeriod === "month") {
      start.setDate(1);
      start.setHours(0, 0, 0, 0);
    }
    return transactions.filter((t) => new Date(t.created_at) >= start);
  }, [timePeriod]);

  const totalIncome = timeFiltered.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const totalExpense = timeFiltered.filter((t) => t.type === "expense").reduce((s, t) => s + t.amount, 0);

  // Format to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const chartData = useMemo(() => {
    const map: Record<string, number> = {};
    timeFiltered.filter((t) => t.type === "income").forEach((t) => {
      const day = new Date(t.created_at).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" });
      map[day] = (map[day] || 0) + t.amount;
    });
    // Sort by date (naive approach for mock data)
    return Object.entries(map).reverse().map(([date, revenue]) => ({ date, revenue }));
  }, [timeFiltered]);

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">

      <div className="flex gap-2 mb-4">
        {["today", "week", "month", "all"].map((p) => (
          <button
            key={p}
            onClick={() => setTimePeriod(p as any)}
            className={`rounded-full px-4 py-1.5 text-sm font-bold transition-all ${
              timePeriod === p
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {p === "today" ? "Hôm nay" : p === "week" ? "Tuần này" : p === "month" ? "Tháng này" : "Tất cả"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl">
               <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Tổng thu</span>
          </div>
          <p className="font-display text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">{formatPrice(totalIncome)}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-red-500/10 rounded-xl">
              <TrendingDown className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Tổng chi</span>
          </div>
          <p className="font-display text-3xl font-extrabold text-red-600 dark:text-red-400">{formatPrice(totalExpense)}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Lợi nhuận ròng</span>
          </div>
          <p className={`font-display text-3xl font-extrabold ${totalIncome - totalExpense >= 0 ? "text-primary" : "text-destructive"}`}>
            {formatPrice(totalIncome - totalExpense)}
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="font-display text-xl font-bold mb-6">Biểu đồ Doanh thu</h3>
        <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    dy={10}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    tickFormatter={(value) => `${value / 1000000}M`}
                />
                <Tooltip
                    contentStyle={{ borderRadius: '12px', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))' }}
                    formatter={(value: number) => [formatPrice(value), "Doanh thu"]}
                />
                <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
