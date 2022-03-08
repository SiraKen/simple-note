import { Box, Spinner, Text } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" p={10}>
        <Spinner size="lg" />
        <Text fontSize="xl" ml="1rem">
          Loading...
        </Text>
      </Box>
    </>
  );
}
