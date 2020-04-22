import React, { Suspense } from 'react'
import { SWRConfig } from 'swr'
import CheckoutSteps from './CheckoutSteps'
import SuspenseLoader from '../components/SuspenseLoader'

export default function Index() {
  const isSSR = typeof window === "undefined"

  return (
    <SWRConfig 
      value={{
        refreshInterval: 0
      }}
    >
      {
        !isSSR && (
          <Suspense fallback={<SuspenseLoader />}>
            <CheckoutSteps />
          </Suspense>
        )
      }
    </SWRConfig>
  )
}