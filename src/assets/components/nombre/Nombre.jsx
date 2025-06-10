import "./Nombre.css"

function Nombre(props){
    const {id,formulario,setFormulario,error}=props;

    const handleChange = (event) =>{
        event.preventDefault();
        setFormulario((form)=>{
            return {
                ...form,
                txtNombre: event.target.value
            }
        })//setFormulario()
    }//handleChange()



    return(<>
        <div className="fluid-container text-start">
            <label htmlFor={id}>Nombre de usuario</label>
            <input 
                type="text" 
                name="nombre" 
                id={id} 
                value={formulario.txtNombre} 
                placeholder="Usuario"
                onChange={handleChange}
                className="w-100"
                required
            />
            {error && <p style={{color:"red"}}>{error.map((err)=>err+"."+"\n")}</p>}
        </div>
    </>)

}

export default Nombre;