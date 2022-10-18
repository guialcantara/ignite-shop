import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100vh'
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: "0 auto",
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '#cart-button': {
    position: 'relative',
    padding: '0.75rem',
    borderRadius: '6px',
    backgroundColor: '$gray800',
    color: '$gray300',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      filter: 'brightness(1.5)',
      cursor: 'pointer'
    }
  }
})