export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const updateStateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const CartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { id } = actionPayload;
      const repeatedProductInCartIndex = state.findIndex(
        (cartProduct) => cartProduct.id === id
      );

      //Deteccion de productos ya en el carrito (solo sumar cantidad)
      if (repeatedProductInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[repeatedProductInCartIndex].quantity += 1;

        updateStateLocalStorage(newState);
        return newState;
      }

      //Producto que no está en el carrito
      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];

      updateStateLocalStorage(newState);
      return newState;
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      const newState = structuredClone(state);
      const productIndex = newState.findIndex(
        (cartProduct) => cartProduct.id === id
      );

      if (productIndex > -1) {
        newState[productIndex].quantity--;
        if (newState[productIndex].quantity === 0) {
          newState.splice(productIndex, 1);
        }
      }

      updateStateLocalStorage(newState);
      return newState;
    }

    case CART_ACTIONS.CLEAR_CART: {
      updateStateLocalStorage([]);
      return [];
    }
  }
};
