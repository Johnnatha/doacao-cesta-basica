import React, { Suspense } from 'react'
import { SWRConfig } from 'swr'
import CheckoutSteps from './CheckoutSteps'
import SuspenseLoader from '../components/SuspenseLoader'

export default function Index() {

  return (
    <SWRConfig 
      value={{
        refreshInterval: 0
      }}
    >
      <Suspense fallback={<SuspenseLoader />}>
        <CheckoutSteps />
      </Suspense>
    </SWRConfig>
  )
}