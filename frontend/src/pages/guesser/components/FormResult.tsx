import { Alert, Box, Center, Grid, Loader, Text, useMantineTheme } from "@mantine/core";

type Props = {
    name: string | undefined;
    email?: string;
    isPending: boolean;
    error: Error | null;
}

export function FormResult({ name, email, isPending, error }: Props) {
    const theme = useMantineTheme();

    if (error) {
        return (
            <Alert variant="light" color="red">
                <Center>
                    <Text fw={500} ff={"monospace"}>Error occured while fetching the data! Please contact the admin</Text>
                </Center>
            </Alert>
        );
    }

    if (isPending) {
        return <Center> <Loader color="blue" type="dots" /> </Center>;
    }

    if (!name && !email) return <></>;

    if (!email) {
        // fallback logic
        return (
            <Alert variant="light" color="cyan">
                <Center>
                    <Text fw={500} ff={"monospace"}>{name}'s email could not be derived!  Please try another domain</Text>

                </Center>
            </Alert>
        )
    }

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
                            size="md"
                            fw={700}
                            variant="gradient"
                            style={{ wordBreak: 'break-word' }}
                            gradient={{ from: 'blue', to: 'lime', deg: 90 }}>
                            You can reach out to {name} on ....
                        </Text>
                    </Center>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Center>
                        <Text
                            size="md"
                            fw={700}
                            variant="gradient"
                            style={{ wordBreak: 'break-word' }}
                            gradient={{ from: 'green', to: 'gray', deg: 90 }}>
                            {email}
                        </Text>
                    </Center>
                </Grid.Col>
            </Grid>
        </Box>
    )
}