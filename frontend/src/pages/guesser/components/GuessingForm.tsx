import { Box, Button, Group, useMantineTheme } from "@mantine/core";
import { FormHeader } from "./FormHeader";
import { FormBody } from "./FormBody";
import { FormDataType } from "../types";
import { useForm } from "@mantine/form";
import { FormResult } from "./FormResult";
import { useDeriveEmail } from "../api/deriveEmail";


const nameValidator = (value: string) => {
    const trimmedValue = value.trim();
    const words = trimmedValue.split(/\s+/);
    const hasTwoWords = words.length >= 2 && words.every(word => word.length > 0);
    return !trimmedValue || !hasTwoWords;
};

const domainValidator = (value: string) => {
    const trimmedValue = value.trim();
    const parts = trimmedValue.split('.');
    const isValidDomain = parts.length > 1 && parts.every(part => part.length > 0);
    return !trimmedValue || !isValidDomain;
};


export function GuessingForm() {
    const theme = useMantineTheme();
    const { mutateAsync, data, error, isPending } = useDeriveEmail();
    const form = useForm<FormDataType>({
        initialValues: {
            name: "",
            domain: "",
        },
        validate: {
            name: (value) => nameValidator(value) ? 'Please enter your full name ex. (Ahmad Beltagy)' : null,
            domain: (value) => domainValidator(value) ? 'Please enter correct domain ex. (example.com' : null,
        },
    });

    const handleSubmit = async (values: FormDataType, event: React.FormEvent<HTMLFormElement> | undefined) => {
        event?.preventDefault();
        mutateAsync({ name: values.name.trim(), domain: values.domain.trim() });
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
                        subHeading='Please enter full name and domain so we can start derive the email based on our data' />
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
