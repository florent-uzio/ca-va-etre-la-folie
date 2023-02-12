import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/dekko/400.css"
import { theme } from "./config/theme"
import { Layout } from "./layout"
import { HomePage } from "./pages/home"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <HomePage />
      </Layout>
    </ChakraProvider>
  )
}

export default App
