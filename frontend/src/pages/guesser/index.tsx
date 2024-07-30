import { GuessingForm } from "./components/GuessingForm";
import { Center, Divider, Text } from "@mantine/core";

export default function Guesser() {

  return (
    <>
      <Center mb={'lg'}>
        <Text
          size="xl"
          fw={700}
          variant="gradient"
          gradient={{ from: 'dark', to: 'cyan', deg: 90 }}
        >
          We will try our best to get your contact email using our knowledge!
        </Text>
      </Center>
      <Divider my={"md"}/>
      <GuessingForm />
    </>
  );
}



