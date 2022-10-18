import { styled } from '.'

export const CartContainer = styled('div', {
  height: '100vh',
  backgroundColor: '$gray800',
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 1,
  transition: 'all 0.2s ease-in-out',
  overflow: 'hidden',

  padding: '1.5rem 0',
  width: '0px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '>span': {
    alignSelf: 'flex-end',
    marginBottom: '1.5rem',

    '&:hover': {
      filter: 'brightness(1.5)',
      cursor: 'pointer'
    }
  },

  '&.open': {
    width: '480px',
    padding: '1.5rem',
  }
})


export const CartCounter = styled('span', {
  width: '1.5rem',
  height: '1.5rem',
  color: '$white',
  background: '$green500',
  borderRadius: '99999px',
  border: '1px solid $gray900',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: -10,
  right: -10,

})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 95,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const CartList = styled('div', {
  flex: 1,
  gap: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  h2: {
    marginBottom: '2rem'
  }
})

export const CartItem = styled('div', {
  minWidth: '27rem',
  display: 'flex',
  gap: '2rem',
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '0.5rem',

    p: {
      fontSize: '$md',
    },

    span: {
      fontSize: '$md',
      fontWeight: 'bold',
      color: '$gray100',
    },

    button: {
      background: 'transparent',
      border: 'none',
      color: '$green500',
      fontWeight: 'bold',
      width: 'min-content',
      fontSize: '1rem',

      '&:hover': {
        cursor: 'pointer',
        color: '$green300'
      }
    }
  }
})

export const CartSummary = styled('footer', {
  justifySelf: 'flex-end',
  div: {
    display: 'flex',
    justifyContent: 'space-between',

    p: {
      fontSize: '$md',
      color: '$gray300'
    },
    span: {
      fontSize: '$lg',
      fontWeight: 'bold',
      marginTop: '0.5rem'
    }
  },
  button: {
    width: '100%',
    marginTop: '3.5rem',
    backgroundColor: '$green500',
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: "$green300"
    }
  }
})