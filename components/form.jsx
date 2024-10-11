
function FormField ({ name, type, placeholder, value, onChange, label }) {
    return (
        <>
        <input id={name} value={value} onChange={onChange} name={name} type={type} placeholder={placeholder} />
        {label ? <label id={name} htmlFor={name}>{label}</label> : null}
    </>

    )
}


export default function  Form ({formFields,error, onSubmit, errorMessage} ){
    return <form onSubmit={onSubmit}>
         {
            formFields.map((field, index) => (
                <>
                    <FormField value={field.value} onChange={field.onChange} name={field.name} type={field.type} label={field?.label} placeholder={field?.placeholder} key={index} />
                    {error[field.name] ? <p>{errorMessage[field.name].message}</p> : null

                    }
                </>
            ))
        }
        <button type="submit">Submit</button>
    </form >

}