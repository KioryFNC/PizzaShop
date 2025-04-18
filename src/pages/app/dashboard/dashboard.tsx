import { Helmet } from 'react-helmet-async'
import { MonthRevenueCard } from './month-revenue-card'
import { MonthOrdersAmountCard } from './month-order-month-amount-card'
import { DayOrdersAmountCard } from './day-order-amount-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount-card'
import { RevenueChart } from './revenue-chart'
import { PopularProductsChart } from './popular-products-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3x1 font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
