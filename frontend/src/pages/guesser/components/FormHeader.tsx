import { Flex, SimpleGrid, Text } from "@mantine/core";

type Props = {
    heading: string;
    subHeading: string;
}

export function FormHeader({ heading, subHeading }: Props) {
    return (
        <SimpleGrid cols={1} mt="sm">
            <Flex justify='center' align='center' direction="column">
                <Text
                    size="xl"
                    fw={700}
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                >
                    {heading}
                </Text>
                <Text size="sm" c="dimmed">
                    {subHeading}
                </Text>
            </Flex>
        </SimpleGrid>
    )
}