import { useState } from 'react';
import {
    AppShell,
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

import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons'


import LightAndDarkModeButton from './LightAndDarkButton';


export default function AppShellDemo() {

    const theme = useMantineTheme();

    const [opened, setOpened] = useState(false);
    const [active, setActive] = useState(0);



    return (

        <AppShell
            styles={{
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
                            <IconBrandGithub></IconBrandGithub>
                            <IconBrandLinkedin></IconBrandLinkedin>
                            <IconMail></IconMail>

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

                        {/* <Text size="xl" weight={700} lineClamp={1} component={Link} to="/">
                            Daniel Escobar
                        </Text> */}

                        <LightAndDarkModeButton></LightAndDarkModeButton>

                    </div>
                </Header>
            }
        >

            <Container size={2000}>
                <h1>hi</h1>
            </Container>
        </AppShell>

    );
}