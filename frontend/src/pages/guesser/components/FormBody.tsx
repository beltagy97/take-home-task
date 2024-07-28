import { Center, Grid, Text, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { FormDataType } from "../types";

type Props = {
    form: UseFormReturnType<FormDataType, (values: FormDataType) => FormDataType>
}

export function FormBody({ form }: Props) {
    return (
        <Grid mt="xl">
            <Grid.Col span={6}>
                <TextInput
                    label="Name"
                    placeholder="Your name"
                    name="name"
                    variant="filled"
                    {...form.getInputProps("name")}
                />
            </Grid.Col>
            <Grid.Col span={1}>
                <Center maw={400} h={80}>
                    <Text fw={600}>
                        @
                    </Text>
                </Center>
            </Grid.Col>

            <Grid.Col span={5}>
                <TextInput
                    label="domain"
                    placeholder="company domain"
                    name="domain"
                    variant="filled"
                    {...form.getInputProps("domain")}
                />
            </Grid.Col>
        </Grid>
    )
}