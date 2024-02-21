import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function CustomerPage({
  searchParams,
}: {
  searchParams: {
    query?: string;
  };
}) {
  const { query } = searchParams;
  const customers = query && (await fetchFilteredCustomers(query));

  return (
    <CustomersTable
      customers={customers === '' || customers === undefined ? [] : customers}
    />
  );
}
