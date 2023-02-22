import React , {useState} from "react";
import { useFormik} from "formik";
import * as Yup from "yup"; //yup nos permite crear las validaciones




const Formulario = () => {

  const [formularioEnviado , setformularioEnviado] = useState(false)  // => funcion usestate para que aparezca el mensaje de enviado con exito el form.

    const formik = useFormik({
        initialValues : {nombre: "" , apellido:"" , email: ""},
        
        validationSchema : Yup.object({ //validacion con yup

          //CAMPO NOMBRE
          nombre: Yup.string()
          .required("El campo nombre es requerido 😡")
          .max(15 , "el campo nombre tiene como maximo 15 caracteres 🥴"),


          //CAMPO APELLIDO
          apellido : Yup.string()
          .required("Este campo tbn es requerido 😾")
          .min(5 , "el apellido debe tener al menos 5 caracteres"),
       


          //CAMPO EMAIL
          email: Yup.string()
          .required("no te olvides de este pana 🥶")
          .email("el formato de email es incorrecto")

        }),


        
        
        
        
        //funcion para enviar el formulario a una bd o una API
        onSubmit: (values , {resetForm}) => {
          resetForm(); // => despues de enviar el form las casillas vuelven a estar vacias
          console.log("Formulario Enviado");
          setformularioEnviado(true);
          setTimeout(() => setformularioEnviado(false), 5000) // => despues de 5 segundos el sms desaparece
        }
    });








    return <>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Nombre</label>
            <input type="text" name="nombre" id="nombre" 
            onChange={formik.handleChange }
            onBlur={formik.handleBlur}
            value= { formik.values.nombre} 
            />
            {/* {formik.errors.nombre && <div>{formik.errors.nombre}</div> }
            */}

            {formik.touched.nombre && formik.errors.nombre ? (
              <div>{formik.errors.nombre}</div>
            ): null}
          </div>

          <div>
            <label>Apellidos</label>
            <input type="text" name="apellido" id="apellido" 
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value= { formik.values.apellido} />
             {/* {formik.errors.apellido && <div>{formik.errors.apellido}</div>} */}

             {formik.touched.apellido && formik.errors.apellido ? (
              <div>{formik.errors.apellido}</div>
            ): null}
          </div>

          <div>
            <label>Email</label>
            <input type="text" name="email" id="email"
             onChange={formik.handleChange }
             onBlur={formik.handleBlur}
             value= { formik.values.email}  />
             {/* {formik.errors.email && <div>{formik.errors.email}</div>}
             */}
              
              {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ): null}
          
          </div>

          <input type="submit" value="Enviar" />
          {formularioEnviado && <p className="exito">Sus datos han sido enviado con Exito!!</p>}
        </form>
      </>;

}

export default Formulario;