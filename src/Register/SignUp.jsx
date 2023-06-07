import { useRef } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const password = useRef({});
    password.current = watch('password', '');
    const onSubmit = data => { console.log(data) };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 w-full">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="Photo" {...register("photo")} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <p className="text-red-500">Password Must be Six Characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}
                                <p className="text-red-500">{errors.password?.message}</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register('confirmPassword', {
                                    required: true,
                                    validate: (value) => value === password.current || 'Passwords must match',
                                })} className="input input-bordered" />
                                <p className="text-red-500">{errors.confirmPassword?.message}</p>
                            </div>
                            <input className="btn btn-primary mt-6" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
///^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/