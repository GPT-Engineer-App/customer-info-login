import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, VStack, Input, Button, Heading, FormControl, FormLabel, FormErrorMessage, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleShowPasswordClick = () => setShowPassword(!showPassword);

  const validate = () => {
    let valid = true;
    let errors = { email: "", password: "" };

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/customer-info");
    }, 1000);
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack as="form" spacing={4} onSubmit={handleSubmit} width="100%">
        <Heading as="h1" size="xl" mb={6}>
          客户信息管理系统
        </Heading>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">账号</FormLabel>
          <Input id="email" type="email" value={email} onChange={handleEmailChange} />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">密码</FormLabel>
          <InputGroup>
            <Input id="password" type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} />
            <InputRightElement>
              <IconButton aria-label={showPassword ? "Hide password" : "Show password"} icon={showPassword ? <FaEyeSlash /> : <FaEye />} onClick={handleShowPasswordClick} size="sm" />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="teal" isLoading={isSubmitting} width="full">
          登录
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
