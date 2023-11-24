'use client';

import { Group } from '@mantine/core';
import { IconDashboard } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './Sidebar.module.css';
import { SignOut } from '@/lib/authentication/components';
import { Routes } from '@/routes';

const data = [{ href: Routes.dashboard, label: 'Dashboard', icon: IconDashboard }];

export function Sidebar() {
  const pathname = usePathname();

  const links = data.map((link) => (
    <Link
      className={classes.link}
      href={link.href}
      key={link.label}
      data-active={link.href === pathname || undefined}
    >
      <link.icon className={classes.linkIcon} stroke={1.5} />
      <span>{link.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          SupabaseAuth
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <SignOut />
      </div>
    </nav>
  );
}
