import React from 'react'
import { Button } from '@material-ui/core'

export default function HomePage({ next }) {

  return (
    <React.Fragment>
      <h1>Home</h1>

      <Button
        onClick={next}
      >
        Doar
      </Button>
    </React.Fragment>
  )
}