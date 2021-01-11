import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editaProductoAction } from "../actions/productoActions";
import { useHistory } from "react-router-dom";
const EditaProducto = () => {
  // nuevo state de pro
  const history = useHistory();
  const dispatch = useDispatch();
  const [producto, guardarProducto] = useState({
    nombre: "",
    precio: "",
  });
  const productoeditar = useSelector((state) => state.productos.productoeditar);

  useEffect(() => {
    guardarProducto(productoeditar);
  }, [productoeditar]);

  // leer datos del for

  const onChageFormulario = (e) => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  // if (!producto) return null;
  const { nombre, precio } = producto;

  const submitEditarProducto = (e) => {
    e.preventDefault();

    dispatch(editaProductoAction(producto));
    history.push("/");
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar producto
            </h2>
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Nombre del producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre producto"
                  name="nombre"
                  onChange={onChageFormulario}
                  value={nombre}
                />
              </div>
              <div className="form-group">
                <label>Precio del producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="precio producto"
                  name="precio"
                  onChange={onChageFormulario}
                  value={precio}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Editar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditaProducto;
