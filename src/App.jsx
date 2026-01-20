
import React, { useRef } from 'react'
import './App.css'
import "yatori-checkout"

function App() {
  const checkoutRef = useRef(null)

  const handlePayment = (event) => {
    console.log('Payment confirmed!', event.detail)
    // event.detail contains: { signature, status, confirmed }
  }

  React.useEffect(() => {
    const element = checkoutRef.current
    if (element) {
      element.addEventListener('yatori-confirmed', handlePayment)
      return () => {
        element.removeEventListener('yatori-confirmed', handlePayment)
      }
    }
  }, [])


  return (
    <>
    <h1>YATORI CHECKOUT</h1>
    <h2>Starter Template</h2>
      <yatori-checkout 
        ref={checkoutRef}
        wallet='G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx' 
        amount='0.01' 
      />
    </>
  )
}

export default App
