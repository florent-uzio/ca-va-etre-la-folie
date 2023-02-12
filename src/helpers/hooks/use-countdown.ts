import dayjs from "dayjs"
import { useEffect, useState } from "react"

type UseCountdownProps = {
  arrivalDate: string
}

export const useCountdown = ({ arrivalDate }: UseCountdownProps) => {
  const arrival = dayjs(arrivalDate)

  const [msDiff, setMsDiff] = useState<number>(arrival.diff(dayjs()))

  useEffect(() => {
    const interval = setInterval(() => {
      setMsDiff(arrival.diff(dayjs()))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [arrival])

  // H minus ...
  const HTime = arrival.diff(dayjs(), "hour")

  return {
    days: dayjs(msDiff).get("days"),
    hours: dayjs(msDiff).get("hours"),
    mins: dayjs(msDiff).get("minutes"),
    secs: dayjs(msDiff).get("seconds"),
    HTime,
  }
}
