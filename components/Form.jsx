/* eslint-disable react/prop-types */



function FormField({type,name,placeholder,value,onChange}) {
    return(
        <input value={value} onChange={onChange} name={name} type={type} placeholder={placeholder} />
    )
    
}
export default function Form({onSubmit, errormessage,formFields,errors}) {
  return  <form onSubmit={onSubmit}>
        {
        formFields.map((field,index)=>(
            <>
        <FormField key={index} value={field.value} onChange={field.onChange} name={field.name} type={field.type} placeholder={field.placeholder} />
        {errors[field.name] ? <p>{errormessage[field.name]}</p>:null}
        </>
        ))
    }
    <button type='submit'>submit</button>
     </form>
    
  
}
