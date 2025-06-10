import "./Correo.css"

function Correo(props){
    const {id,formulario,setFormulario,error}=props;

    const handleChange = (event) =>{
        event.preventDefault();
        setFormulario((form)=>{
            return {
                ...form,
                txtCorreo: event.target.value
            }
        })//setFormulario()
    }//handleChange()



    return(<>
        <div className="fluid-container text-start">
            <label htmlFor={id}>Correo electrónico</label>
            <input 
                type="email" 
                name="correo" 
                id={id} 
                value={formulario.txtCorreo} 
                placeholder="usuario@dominio"
                onChange={handleChange}
                className="w-100"
                required
            />
            {error && <p style={{color:"red"}}>{error.map((err)=>err+"."+"\n")}</p>}
        </div>
    </>)

}

export default Correo;