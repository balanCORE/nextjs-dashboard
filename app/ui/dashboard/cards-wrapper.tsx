import { fetchCardData } from '@/app/lib/data';
import { Card } from './cards';

export default async function CardWrapper() {
  const {
    totalPaidInvoices,
    numberOfCustomers,
    numberOfInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      {/* TODO: translation should be applied here */}
      <Card title="collected" value={totalPaidInvoices} type="collected" />
      <Card title="pending" value={totalPendingInvoices} type="pending" />
      <Card title="total_invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="total_customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}
