import Image from "next/image";
import { X } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";
import { CartContainer, CartItem, CartList, CartSummary, ImageContainer } from "../styles/cart";
export function Cart() {
  const {
    shouldDisplayCart,
    handleCloseCart,
    redirectToCheckout,
    cartDetails,
    cartCount,
    formattedTotalPrice,
    removeItem,
  } = useShoppingCart()

  async function handleCheckout() {
    await redirectToCheckout()
  }

  return (
    <CartContainer className={shouldDisplayCart && 'open'}>
      <span onClick={() => handleCloseCart()}>
        <X size={32} />
      </span>
      <CartList>
        <h2>Sacola de compras</h2>

        {Object.entries(cartDetails).map(product => {
          return (
            <CartItem key={product[0]}>
              <ImageContainer>
                <Image src={product[1].image} width={95} height={95} alt="" />
              </ImageContainer>
              <div>
                <p>{product[1].name}</p>
                <span>{product[1].formattedValue}</span>
                <button onClick={() => removeItem(product[0])}>Remover</button>
              </div>
            </CartItem>
          )
        })}
      </CartList>

      <CartSummary>
        <div>
          <p>Quantidade</p>
          <p>{cartCount} itens</p>
        </div>

        <div>
          <span>Valor total</span>
          <span>{formattedTotalPrice}</span>
        </div>
        <button onClick={handleCheckout}>Finalizar</button>
      </CartSummary>

    </CartContainer>
  )
}