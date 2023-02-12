import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useCountdown } from "../../../helpers/hooks"

type CountdownProps = {
  player: string
  arrivalDate: string
}

export const Countdown = ({ player, arrivalDate }: CountdownProps) => {
  const { hours, days, mins, secs, HTime } = useCountdown({ arrivalDate })

  return (
    <Card w="full">
      <CardHeader>
        <Heading textAlign="center" size="lg" color="red.500">
          {player}
        </Heading>
      </CardHeader>

      <CardBody>
        <VStack spacing={6}>
          <HStack justifyContent="center" spacing="5">
            <VStack>
              <Text fontWeight="bold">{days}</Text>
              <Text>Jours</Text>
            </VStack>
            <Text>:</Text>
            <VStack>
              <Text fontWeight="bold">{hours}</Text>
              <Text>Heures</Text>
            </VStack>
            <Text>:</Text>
            <VStack>
              <Text fontWeight="bold">{mins}</Text>
              <Text>Minutes</Text>
            </VStack>
            <Text>:</Text>
            <VStack>
              <Text fontWeight="bold">{secs}</Text>
              <Text>Secondes</Text>
            </VStack>
          </HStack>

          <Text textAlign="center">OU</Text>

          <Text fontWeight="bold">{`H - ${HTime}`}</Text>
        </VStack>
      </CardBody>
    </Card>
  )
}
