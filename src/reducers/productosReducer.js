import {
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMIANR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR,
} from "../types";
const initialState = {
  producto: [],
  error: null,
  loading: false,
  productoeliminar: null,
  productoeditar: null,
};

export default function f(state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_PRODUCTOS:
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };

    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.producto, action.payload],
      };

    case AGREGAR_PRODUCTO_ERROR:
    case DESCARGA_PRODUCTOS_ERROR:
    case PRODUCTO_ELIMINADO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DESCARGA_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        producto: action.payload,
      };
    case OBTENER_PRODUCTO_ELIMIANR:
      return {
        ...state,
        productoeliminar: action.payload,
      };
    case PRODUCTO_ELIMINADO_EXITO:
      return {
        ...state,
        producto: state.producto.filter(
          (pro) => pro.id !== state.productoeliminar
        ),
        productoeliminar: null,
      };

    case OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        productoeditar: action.payload,
      };

    case PRODUCTO_EDITADO_EXITO:
      return {
        ...state,
        productoeditar: null,
        producto: state.producto.map((prod) =>
          prod.id === action.payload.id
            ? (state.producto = action.payload)
            : state.producto
        ),
      };
    default:
      return state;
  }
}
