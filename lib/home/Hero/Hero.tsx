import { Title, Box } from '@mantine/core';
import classes from './Hero.module.css';

export async function Hero() {
  return (
    <Box pos="relative" pt={120}>
      <div className={classes.inner}>
        <Title className={classes.title}>Hello</Title>
      </div>
    </Box>
  );
}
