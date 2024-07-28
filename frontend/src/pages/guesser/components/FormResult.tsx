import { Box, Center, Grid, Loader, Text, useMantineTheme } from "@mantine/core";

type Props = {
    name: string | undefined;
    email: string | undefined;
    isPending: boolean;
    error: Error | null;
}

export function FormResult({ name, email, isPending, error }: Props) {
    const theme = useMantineTheme();

    if (error) {
        return (<Box p={'md'} style={{
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: theme.colors.cyan[8],
            borderRadius: '10px',
        }}>
            <Center>
                <Text c={theme.colors.red[5]} > Error occured while fetching the data! Please contact the admin</Text>
            </Center>
        </Box>);
    }

    if (isPending) {
        return <Center> <Loader color="blue" type="dots" /> </Center>;
    }

    if (!name || !email) return <></>;

    return (
        <Box p={'md'} style={{
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: theme.colors.cyan[8],
            borderRadius: '10px',
        }}>
            <Grid>
                <Grid.Col span={6}>
                    <Center>
                        <Text
                            size="lg"
                            fw={700}
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'lime', deg: 90 }}>
                            You can reach out to {name} on ....
                        </Text>
                    </Center>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Center>
                        <Text
                            size="lg"
                            fw={700}
                            variant="gradient"
                            gradient={{ from: 'green', to: 'gray', deg: 90 }}>
                            {email}
                        </Text>
                    </Center>
                </Grid.Col>
            </Grid>
        </Box>
    )
}