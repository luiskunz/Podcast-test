import { navigate } from "gatsby"
import React, { useEffect } from "react"

export default () => {
  useEffect(() => {
    navigate("/episodes/1")
  })

  return null
}
