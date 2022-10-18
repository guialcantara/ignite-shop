import Image from "next/image"
import Link from "next/link"
import { Handbag } from "phosphor-react"
import { useShoppingCart } from "use-shopping-cart"
import logoImg from '../assets/logo.svg'
import { CartCounter } from "../styles/cart"
import { Header } from "../styles/pages/app"
import { Cart } from "./Cart"

export function HeaderComponent() {
  const { handleCartHover, cartCount } = useShoppingCart()
  return (
    <Header>
      <Link href='/' prefetch={false}>
        <Image src={logoImg.src} width={logoImg.width} height={logoImg.height} alt="" />
      </Link>
      <div id="cart-button" onClick={() => handleCartHover()}>
        <Handbag size={32} />
        {cartCount > 0 &&
          <CartCounter>
            {cartCount}
          </CartCounter>
        }
      </div>

      <Cart />
    </Header>
  )
}