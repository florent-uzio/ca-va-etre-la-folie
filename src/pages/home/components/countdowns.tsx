import { Stack } from "@chakra-ui/react"
import { Countdown } from "./countdown"

export const Countdowns = () => {
  return (
    <Stack
      flex={1}
      direction={{ base: "column", md: "row" }}
      mt={{ base: 4, md: 8 }}
    >
      <Countdown player="F..." arrivalDate="2023/02/19 20:40" />
      <Countdown player="V..." arrivalDate="2023/02/20 06:00" />
    </Stack>
  )
}
