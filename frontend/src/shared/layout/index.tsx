import { AppShell, Avatar, Container, Group, Title, useMantineTheme } from '@mantine/core';
import { Outlet } from '@tanstack/react-router';

function Layout() {
    const theme = useMantineTheme();
    return (
        <AppShell
            header={{ height: 70 }}
            padding="md"
        >
            <AppShell.Header styles={{ header: { backgroundColor: theme.colors.dark[4], color: 'white'} }}>
                <Group h="100%" px="md">
                    <Avatar src='https://cdn.iconscout.com/icon/premium/png-512-thumb/guess-8099840-6602079.png?f=webp&w=512' alt="guess my email!" />
                    <Title order={3}>EMAIL GUESSER</Title>
                </Group>
            </AppShell.Header>
            <AppShell.Main>
                <Container mt='20px' >
                    <Outlet />
                </Container>
            </AppShell.Main>
        </AppShell>
    )
}

export default Layout;
