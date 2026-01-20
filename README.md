# Yatori Checkout – React Starter (JavaScript)

A React starter template for integrating Yatori Checkout into your application.

## Links

- **NPM Package**: [yatori-checkout](https://www.npmjs.com/package/yatori-checkout)
- **Yatori Platform**: [yatori.io](https://yatori.io/)

## Installation

```bash
npm install yatori-checkout
```

## Usage

Import the component and use it in your React app:

```jsx
import React, { useRef } from 'react'
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
    <yatori-checkout 
      ref={checkoutRef}
      wallet='YOUR_WALLET_ADDRESS' 
      amount='0.01' 
    />
  )
}
```

## Event Handling

The `yatori-checkout` component emits a `yatori-confirmed` event when a payment is confirmed. Listen for this event using a ref and `addEventListener`:

- **Event Name**: `yatori-confirmed`
- **Event Detail**: Contains `{ signature, status, confirmed }`

## Props

- `wallet` (string, required): The wallet address to receive payments
- `amount` (string, required): The payment amount

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
