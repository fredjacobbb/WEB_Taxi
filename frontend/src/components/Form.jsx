import { useForm } from "react-hook-form";


export default function FormRent() {
    const {register, formState: { errors }, handleSubmit} = useForm({
        mode: "onChange"
    })
    
    const { onChange: onChangeRHF, onBlur, name, ref } = register("email", { 
        required: true,
        onChange: (e) => {
            
        }
    });
    
    const onSubmit = (e) => {
        console.log(e);
    }

    return (
        <>
            <form className="bg-green-400 flex flex-wrap content-around mx-auto" onSubmit={handleSubmit(onSubmit)}>
                
                <div className="m-3 relative">
                    <label className="block text-md" htmlFor="email">Email</label>
                    <input id="email" className="mx-auto relative" autoComplete="email" {...register("email", {
                        required: "L'email est obligatoire",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Format d'email invalide",
                        },
                    })} aria-invalid={errors.email ? true : false}/>
                    {errors.email ? <p className="text-red-400 font-bold text-sm absolute">{errors.email.message}</p> : ""}
                </div>

                <div className="m-3 flex align-middle relative">
                    <label className="text-md" htmlFor="gender">Genre</label>
                    <select className="right-0 absolute bg-white" id="gender" {...register("gender")}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <button className={`block mx-auto my-5 bg-black p-1 text-sm text-white p-2 ${errors.email ? 'pointer-events-none' : ''}`}>Envoyer</button>
            
            </form>
        </>
    )
} 