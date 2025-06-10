import { useState,useEffect } from 'react'
import './App.css'
import Nombre from './assets/components/nombre/Nombre'
import Correo from './assets/components/correo/Correo'
import Password from './assets/components/password/Password'

import "/node_modules/bootstrap/dist/css/bootstrap.css"
import "/node_modules/bootstrap/dist/js/bootstrap.js"
import Z from 'zod'
import Swal from 'sweetalert2'

function App() {

  const formDefault = {
    txtNombre: "",
    txtCorreo: "",
    txtPassword: ""
  }

  const formato = Z.object({
    txtNombre: Z.string().min(3,"El nombre debe tener por lo menos 3 letras").max(30, "Nombre debe ser menor de 30"),
    txtCorreo: Z.string().email("Ingresa un email"),
    txtPassword: Z.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .regex(/[A-Z]/, "Debe incluir al menos una letra mayúscula")
      .regex(/[a-z]/, "Debe incluir al menos una letra minúscula")
      .regex(/[0-9]/, "Debe incluir al menos un número")
      .regex(/[@$!%*?&]/, "Debe incluir al menos un carácter especial (@$!%*?&)")
  })

  const [formulario,setFormulario] = useState(formDefault)
  const [error,setError] = useState(formDefault)

  // useEffect(()=>console.log(formulario),[formulario])
  // useEffect(()=>console.log(error),[error])

  const enviarFormulario = (event) =>{
    event.preventDefault()
    const validarForm = formato.safeParse(formulario);

    if(validarForm.success){
      Swal.fire({
        title: "Cuenta Creada",
        icon: "success",
        text:`Bienvenido ${formulario.txtNombre}`,
        showCloseButton: true,
        focusConfirm: true,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Ok",
      });
      setFormulario(formDefault)
      setError(formDefault)
    }else{
      setError((e)=>({
          ...formDefault, ...validarForm.error.flatten().fieldErrors
        }))//setError
    }//else
  }//enviarFormulario()


  return (
    <main className="container">
      <h1>Validar formulario con Zod</h1>
      <form onSubmit={enviarFormulario} className='d-flex flex-column justify-content-center flex-wrap'>
        <Nombre id="txtNombre" formulario={formulario} setFormulario={setFormulario} error={error.txtNombre}/>
        <Correo id="txtCorreo" formulario={formulario} setFormulario={setFormulario} error={error.txtCorreo}/>
        <Password id="txtPassword" formulario={formulario} setFormulario={setFormulario} error={error.txtPassword}/>

        <button type="submit" className='btn btn-secondary m-1'> Enviar formulario </button>
      </form>
    </main>
  )
}

export default App
