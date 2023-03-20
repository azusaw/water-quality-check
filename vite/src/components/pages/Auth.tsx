import { useEffect } from "react"
import { loginGoogle } from "../../libs/firebase"

export default function Auth() {
  useEffect(() => {
    ;(async () => {
      await loginGoogle()
    })()
  }, [])

  return <></>
}
