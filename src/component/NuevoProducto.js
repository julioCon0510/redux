import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// action redux
import { crearNuevoproductoAction } from "../actions/productoActions";

const NuevoProducto = ({ history }) => {
  // state del componente
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState(0);

  // utilizar usedispatch y te crea unna function

  const dispatch = useDispatch();
  // acceder al state del store
  const cargando = useSelector((state) => state.productos);
  console.log(cargando.loading);

  // mandar a llamar el action de producto action
  const agregarProducto = (producto) =>
    dispatch(crearNuevoproductoAction(producto));

  // al hacer submit
  const submitNuevoProducto = (e) => {
    e.preventDefault();
    // validar formulario
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }

    // crear el nuevo producto
    agregarProducto({
      nombre,
      precio,
    });
    // redirecionar al home
    history.push("/");
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center-mb-4 font-weight-bold">
              Agregar Nuevo producto
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre del producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio del producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="precio producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => guardarPrecio(Number(e.target.value))}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Agregar
              </button>
            </form>
            {cargando.loading ? <p>Cargando...</p> : null}
            {cargando.error ? (
              <p className="alert alert-danger p2 mt-4 text-center">
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
