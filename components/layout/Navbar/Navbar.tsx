import { Button, Flex, Title } from '@mantine/core';
import Link from 'next/link';
import { Routes } from '@/routes';

export const Navbar = async () => (
  <Flex
    px={20}
    py={10}
    align="center"
    justify="space-between"
    style={{ borderBottom: '2px solid', borderColor: 'black' }}
  >
    <Link href={Routes.home} style={{ color: 'black', textDecoration: 'none' }}>
      <Title>SupabaseAuth</Title>
    </Link>
    <Flex gap={16}>
      <Button variant="outline" color="black" component={Link} href={Routes.signup}>
        sign up
      </Button>
      <Button component={Link} color="black" href={Routes.login}>
        login
      </Button>
    </Flex>
  </Flex>
);
