import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell } from '@mantine/core'
import AppShellDemo from '../components/AppShellContainer'
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { useState } from 'react';
import {
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Paper,
  Title,
  Image,
  Avatar,
  Container,
  Stack,
  Divider,
  Space, ScrollArea, Center, NavLink, Badge, Box, HoverCard, Button, ActionIcon, Group
} from '@mantine/core';

import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons'

import { useRouter } from 'next/router'
import Link from 'next/link'

import LightAndDarkModeButton from '../components/LightAndDarkButton';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  const theme = useMantineTheme();

  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(0);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));




  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{
        // fontFamily: 'Verdana, sans-serif',
        // fontFamilyMonospace: 'Monaco, Courier, monospace',
        // headings: { fontFamily: 'Verdana' },
        colorScheme, breakpoints: {
          xs: 480,
          sm: 736,
          md: 980,
          lg: 1280,
          xl: 1680,
        },
        headings: {
          fontWeight: 400,

        },

        colors: {
          // Add your color
          'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          light: [
            '#d5d7e0',
            '#acaebf',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#34354a',
            '#2b2c3d',
            '#1d1e30',
            '#0c0d21',
            '#01010a',
          ],

        },

      }} withGlobalStyles withNormalizeCSS>

        <AppShell styles={{
          main: {
            background: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
          navbarOffsetBreakpoint="lg"
          navbar={

            <Navbar p="md" hiddenBreakpoint="lg" hidden={!opened} width={{ base: 400 }}>
              <ScrollArea>
                <Navbar.Section>
                  <Container>
                    <Stack>
                      <Center>
                        <Link href="/" passHref>
                          <Avatar radius="lg" size={200} src="../daniel_escobar.jpg" />
                        </Link>
                      </Center>
                      <Center>
                        <Title transform="uppercase">Daniel Escobar</Title>
                      </Center>
                      <Center>
                        <Text>danjay.escobar@gmail.com</Text>
                      </Center>
                    </Stack>
                  </Container>
                </Navbar.Section>
                <Space h="md"></Space>
                <Divider size="sm" />
                <Space h="md"></Space>
                <Navbar.Section >
                  <Link href="/about" passHref>
                    <NavLink label="About" component="a" active={router.pathname === "/about"} color={colorScheme} variant="subtle"></NavLink>
                  </Link>
                  <Link href="/resume" passHref>
                    <NavLink label="Resume" component="a" active={router.pathname === "/resume"} color={colorScheme} variant="subtle"></NavLink>
                  </Link>
                  <Link href="/projects" passHref>
                    <NavLink label="Projects" component="a" active={router.pathname === "/projects"} color={colorScheme} variant="subtle"></NavLink>
                  </Link>
                  <Link href="/stats" passHref>
                    <NavLink label="Stats" component="a" active={router.pathname === "/stats"} color={colorScheme} variant="subtle"></NavLink>
                  </Link>
                  <Link href="/contact" passHref>
                    <NavLink label="Contact" component="a" active={router.pathname === "/contact"} color={colorScheme} variant="subtle"></NavLink>
                  </Link>
                </Navbar.Section>
                <Space h="md"></Space>
                <Divider size="sm" />
                <Space h="md"></Space>
                <Navbar.Section>
                  <Group>
                    <ActionIcon variant="subtle" color={colorScheme} component='a' href="https://github.com/danielesco" target={"_blank"}>
                      <IconBrandGithub></IconBrandGithub>
                    </ActionIcon>
                    <ActionIcon variant="subtle" color={colorScheme} component='a' href="https://linkedin.com/in/danieljayescobar" target={"_blank"}>
                      <IconBrandLinkedin></IconBrandLinkedin>
                    </ActionIcon>
                    <ActionIcon variant="subtle" color={colorScheme} component='a' href="mailto:danjay.escobar@gmail.com">
                      <IconMail></IconMail>
                    </ActionIcon>
                  </Group>
                  <Space h="md"></Space>
                  <Text> © Daniel Escobar danielescobar.com</Text>
                </Navbar.Section>
              </ScrollArea>
            </Navbar>

          }
          header={
            <Header height={70} p="md">
              <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: "space-between" }}>
                <MediaQuery largerThan="lg" styles={{ display: 'none' }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                  />
                </MediaQuery>
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Link href="/" passHref>
                      <Button variant="subtle" color={colorScheme} size="lg" uppercase>Daniel Escobar</Button>
                    </Link>

                  </HoverCard.Target>
                </HoverCard>
                <LightAndDarkModeButton></LightAndDarkModeButton>

              </div>
            </Header>
          }>

          <Container size={2000}>
            <Component {...pageProps} />

          </Container>
        </AppShell>

      </MantineProvider>
    </ColorSchemeProvider >
  )
}

export default MyApp