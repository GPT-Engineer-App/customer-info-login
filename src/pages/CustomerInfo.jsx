import { Container, Heading, Text } from "@chakra-ui/react";

const CustomerInfo = () => {
  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="xl" mb={6}>
        客户信息
      </Heading>
      <Text>这里是客户信息展示页面。</Text>
    </Container>
  );
};

export default CustomerInfo;
