import { navigate } from "gatsby"
import { useEffect } from "react"

const Index = () => {
  useEffect(() => {
    navigate("/episodes/1")
  })

  return null
}

export default Index
