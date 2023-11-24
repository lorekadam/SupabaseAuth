import { Stack, Title } from '@mantine/core';
import { SignOut } from '@/lib/authentication/components';

export default async function Dashboard() {
  return (
    <Stack>
      <Title>Dashboard</Title>
      <SignOut />
    </Stack>
  );
}
