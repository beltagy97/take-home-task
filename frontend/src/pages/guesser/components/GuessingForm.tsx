import { Box, Button, Group, useMantineTheme } from "@mantine/core";
import { FormHeader } from "./FormHeader";
import { FormBody } from "./FormBody";
import { FormDataType } from "../types";
import { useForm } from "@mantine/form";
import { FormResult } from "./FormResult";
import { useDeriveEmail } from "../api/deriveEmail";



export function GuessingForm() {
    const theme = useMantineTheme();
    const { mutateAsync, data, error, isPending } = useDeriveEmail();
    const form = useForm<FormDataType>({
        initialValues: {
            name: "",
            domain: "",
        },
        validate: {
            name: (value) => value.trim().length < 1,
            domain: (value) => value.trim().length < 1,
        },
    });

    const handleSubmit = async (values: FormDataType, event: React.FormEvent<HTMLFormElement> | undefined) => {
        event?.preventDefault();
        mutateAsync({ name: values.name, domain: values.domain });
    };

    return (
        <>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Box p={'md'} mb='lg' style={{
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: theme.colors.cyan[6],
                    borderRadius: '20px',
                }}>
                    <FormHeader heading="Guess my email?!"
                        subHeading='Please enter full name and domain so we can start derive the email!' />
                    <FormBody form={form} />
                    <Group justify="flex-end" mt="xl">
                        <Button type="submit" size="md" disabled={isPending}>
                            Derive
                        </Button>
                    </Group>
                </Box>
            </form>
            <FormResult name={data?.data.name} email={data?.data.email} isPending={isPending} error={error} />
        </>
    );
}
