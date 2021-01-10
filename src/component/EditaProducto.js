import React from "react";

const EditaProducto = () => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center-mb-4 font-weight-bold">
              Agregar Nuevo producto
            </h2>
            <form>
              <div className="form-group">
                <label>Nombre del producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre producto"
                  name="nombre"
                />
              </div>
              <div className="form-group">
                <label>Precio del producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="precio producto"
                  name="precio"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditaProducto;
