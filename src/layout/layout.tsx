import { Flex } from "@chakra-ui/react"

type LayoutProps = {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex direction="column" flex="1" p="4">
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </Flex>
  )
}
