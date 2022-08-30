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
  Space, ScrollArea, Center, NavLink, Badge, Box
} from '@mantine/core';


import LightAndDarkModeButton from '../components/LightAndDarkButton';


function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  const theme = useMantineTheme();

  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(0);


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
          ]
        },


      }} withGlobalStyles withNormalizeCSS>
        <AppShell styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
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
                        <Avatar radius="lg" size={200} src="../daniel_escobar_professionalportrait.jpg" />
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
                  {/* 
                            <NavLink label="About" component={Link} to="/about" ></NavLink>
                            <NavLink label="Resume" component={Link} to="/resume"></NavLink>
                            <NavLink label="Projects" component={Link} to="/projects"></NavLink>
                            <NavLink label="Stats" component={Link} to="/stats"></NavLink>
                            <NavLink label="Contact" component={Link} to="/contact"></NavLink> */}

                </Navbar.Section>

                <Navbar.Section>
                  {/* <IconBrandGithub></IconBrandGithub>
                  <IconBrandLinkedin></IconBrandLinkedin>
                  <IconMail></IconMail> */}

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

                <Text size="xl" weight={700} lineClamp={1}>
                  Daniel Escobar
                </Text>

                <LightAndDarkModeButton></LightAndDarkModeButton>

              </div>
            </Header>
          }>
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp