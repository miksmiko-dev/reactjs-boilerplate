import type {
  RecentSalesProps,
  RevenueChartProps,
  SummaryCardProps,
} from "@/modules/admin/dashboard/types/types";

export const summaryData: SummaryCardProps[] = [
  {
    label: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
  },
  {
    label: "Subscriptions",
    value: "+2350",
    change: "+180.1% from last month",
  },
  {
    label: "Sales",
    value: "+12,234",
    change: "+19% from last month",
  },
  {
    label: "Active Now",
    value: "+573",
    change: "+201 since last hour",
  },
];

export const revenueData: RevenueChartProps[] = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export const recentSalesData: RecentSalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "$39.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "$299.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "$99.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "$39.00",
  },
];
