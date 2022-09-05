import { useRef } from "react";

function FormNoControlado() {

    const formulario = useRef(null)

    const handleSubmit = e => {
        e.preventDefault();
        console.log("procesando")

        const datos = new FormData(formulario.current)
        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos)

        const {todoDescripcion} = objetoDatos
        if (!todoDescripcion.trim()) {
            console.log("vacío")
            return;
        }
    }

    return (
      <>
        <h2>No Controlado</h2>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Ingrese Todo"
                name="todoName"
                className="form-control mb-2"
                defaultValue="Tarea #1"
            />
            <textarea
                type="text"
                name="todoDescripcion"  
                placeholder="Descripción Todo" 
                className="form-control mb-2" 
            />
            <select
              name="todoEstado"
              className="form-control mb-2">
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button 
                className="btn btn-primary"
            >
                Agregar
            </button>
        </form>
      </>
    );
  }
  
  export default FormNoControlado;
  