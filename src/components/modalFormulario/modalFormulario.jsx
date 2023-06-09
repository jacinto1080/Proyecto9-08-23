import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../modalFormulario/modalFormulario.css";

const ModalFormulario = ({ updateSelectedValue, updateSelectedValue2 }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const handleFormulario = (data) => {
    updateSelectedValue2(false);
    updateSelectedValue(null);
    alert("Su solicitud se ha registrado correctamente");
    navigate("/");
    reset();
  };
  const closeModalFormulario = () => {
    updateSelectedValue2(false);
    updateSelectedValue("");
    navigate("/modalCitas");
  };
  return (
    <div className="modal">
      <form
        className="formulario2"
        autoComplete="off"
        onSubmit={handleSubmit(handleFormulario)}
      >
        <p className="peDatos">Datos Personales</p>

        <input
          type="text"
          className="inputFormDatos"
          placeholder="Nombre"
          {...register("Name", { required: true })}
        />
        {errors.Name && <p className="peForm">Campo requerido.</p>}

        <input
          className="inputFormDatos"
          placeholder="Apellidos"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <p className="peForm">Campo requerido.</p>}

        <input
          className="inputFormDatos"
          placeholder="Teléfono de contacto"
          {...register("telefono", { required: true })}
        />
        {errors.lastName && <p className="peForm">Campo requerido.</p>}

        <input
          className="inputFormDatos"
          placeholder="Correo electrónico"
          {...register("correo", {
            required: true,
            pattern: /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/,
          })}
        />
        {errors?.correo?.type === "required" && (
          <p className="peForm">Campo requerido.</p>
        )}
        {errors?.correo?.type === "pattern" && (
          <p className="peForm">Email incorrecto.</p>
        )}
        <input
          className="inputFormDatos"
          placeholder="Código postal"
          {...register("codigo", {
            required: true,
            pattern: /(?=.*[0-9]).{5,}/,
          })}
        />
        {errors?.codigo?.type === "required" && (
          <p className="peForm">Campo requerido.</p>
        )}
        {errors?.codigo?.type === "pattern" && (
          <p className="peForm">Codigo postal incorrecto.</p>
        )}
        <button
          title="Volver a página Cita previa"
          onClick={closeModalFormulario}
          className="inputFormEnviar"
          type="submit"
        >
          Volver
        </button>
        <input
          title="Enviar sus datos"
          className="inputFormEnviar"
          type="submit"
        />
        
      </form>
    </div>
  );
};
export default ModalFormulario;
