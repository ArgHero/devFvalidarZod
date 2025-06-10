import "./Password.css"

function Password(props){

    const {id,formulario,setFormulario,error}=props;
    const handleChange = (event) =>{
        event.preventDefault();
        setFormulario((form)=>{
            return {
                ...form,
                txtPassword: event.target.value
            }
        })//setFormulario()
    }//handleChange()
    //console.log();
    

    return(<>
        <div className="fluid-container text-start w-100">
            <label htmlFor={id}>Contraseña</label>
            <input 
                type="password" 
                name="password" 
                id={id} 
                value={formulario.txtPassword} 
                placeholder="Contraseña"
                onChange={handleChange}
                className="w-100"
                required
            />
            {error && <p style={{color:"red"}}>{error.map((err)=>err+"."+"\n")}</p>}
        </div>
    </>)

    
}

export default Password;