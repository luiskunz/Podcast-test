import { navigate } from "gatsby"
import { useEffect } from "react"

export default Index = () => {
  useEffect(() => {
    navigate("/episodes/1")
  })

  return null
}
