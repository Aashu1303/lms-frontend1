import React from 'react';
import {
    ChakraProvider,
    extendTheme,
    ColorModeScript,
    Box,
    Flex,
    IconButton,
    useColorMode,
    Heading,
    Text,
    Link,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Checkbox,
    Button,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const VARIANT_COLOR = 'teal';

const theme = extendTheme({
});

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <LoginArea />
        </ChakraProvider>
    )
}

const LoginArea = () => {
    return (
        <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
            <Box
                borderWidth={1}
                px={4}
                width='full'
                maxWidth='500px'
                borderRadius={4}
                textAlign='center'
                boxShadow='lg'
            >
                <ThemeSelector />
                <Box p={4}>
                    <LoginHeader />
                    <LoginForm />
                </Box>
            </Box>
        </Flex>
    );
};

const ThemeSelector = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box textAlign='right' py={4}>
            <IconButton
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant='ghost'
            />
        </Box>
    );
};

const LoginHeader = () => {
    return (
        <Box textAlign='center'>
            <Heading>Login</Heading>
        </Box>
    );
};

const LoginForm = () => {
    return (
        <Box my={8} textAlign='left'>
            <form>
                <FormControl>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input type='email' id='email' placeholder='Enter your email address' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input type='password' id='password' placeholder='Enter your password' />
                </FormControl>


                <Box textAlign={'right'}>
                    <Link color={`${VARIANT_COLOR}.500`}>Register</Link>
                </Box>


                <Button variantColor={VARIANT_COLOR} width='full' mt={4}>
                    Sign In
                </Button>
            </form>
        </Box>
    );
};

export default App;
