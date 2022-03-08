import { Box, Spinner, Text } from "@chakra-ui/react";

export default function Error() {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" p={10}>
        <Text fontSize="xl" ml="1rem">
          Error!
        </Text>
      </Box>
    </>
  );
}
