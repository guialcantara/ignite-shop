import { AppProps } from "next/app"
import { CartProvider } from "use-shopping-cart"
import { HeaderComponent } from "../components/Header"
import { globalStyles } from "../styles/global"
import { Container } from "../styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const successUrl = `${process.env.NEXT_PUBLIC_NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_PUBLIC_NEXT_URL}`
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY


  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      currency="BRL"
      stripe={stripeKey}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
    >
      <Container>
        <HeaderComponent />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}

