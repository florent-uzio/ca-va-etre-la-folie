import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react"
import dayjs from "dayjs"

type CountdownProps = {
  player: string
  arrivalDate: string
}

export const Countdown = ({ player, arrivalDate }: CountdownProps) => {
  const now = dayjs()
  const arrival = dayjs(arrivalDate)
  const HTime = arrival.diff(now, "hour")

  return (
    <Card w="full">
      <CardHeader>
        <Heading textAlign="center" size="lg" color="blue.600">
          {player}
        </Heading>
      </CardHeader>

      <CardBody>
        <Text textAlign="center" fontWeight="bold">
          {`H - ${HTime}`}
        </Text>
      </CardBody>
    </Card>
  )
}
