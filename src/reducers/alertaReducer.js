import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

// state alerta

const initialState = {
  alerta: null,
};

export default function a(state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_ALERTA:
      return {
        ...state,
        alerta: action.payload,
      };
    default:
      return state;
  }
}
