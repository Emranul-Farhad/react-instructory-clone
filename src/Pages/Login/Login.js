import React from 'react';
import { useForm } from "react-hook-form";
import auth from '../../Firekey/Firekey';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import Nav from '../../components/navbar/Nav';



const Login = () => {

  // navigate
  const navigate = useNavigate()
  // react hppk form
  const { register, formState: { errors }, handleSubmit } = useForm();
  // login with google
  const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
  // login with emaial , password
  const [
    signInWithEmailAndPassword,
    signuser,
    signloading,
    signerror,
] = useSignInWithEmailAndPassword(auth);

  // handel submit control
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
    console.log("adhhs" , data);
    // login with google

}

// navigate handel
   if(googleuser || signuser){
     navigate('/')
   }

  //  handeel errro
  let loginformerror;
  if (signerror || googleerror) {
      loginformerror = <h6> {signerror?.message || googleerror?.message} </h6>
  }


  return (
    <div>
      <Nav></Nav>
          <div className='flex justify-center align-center mt-20'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-primary font-bold text-2xl">Login</h2>
                        {/* user login with email form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* daysi ui */}
                            <div className="form-control w-full max-w-xs">
                                <span className="label-text mb-2">Email</span>
                                <input
                                    type="email"
                                    placeholder="Type your Email"
                                    className="input input-bordered w-full max-w-xs input-info"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email required"
                                        },
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'invalid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-[red] "> {errors.email.message} </span>}
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-[red] "> {errors.email.message} </span>}
                                </label>
                            </div>

                            {/*--------------- 
                            email login input end here 
                            ----------------*/}

                            <div className="form-control w-full max-w-xs">
                                <span className="label-text mb-2">Password</span>
                                <input
                                    type="password"
                                    placeholder="Type your Password"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Passwod required"
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: 'eight characters one uppercase  lowercase letter one number one special character'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-600  "> {errors.password.message} </span>}
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-[#f00] "> {errors.password.message} </span>}
                                </label>
                            </div>

                            {/* error */}
                            <p> {loginformerror} </p>
                            {/* error end here */}

                            {/* daysiui end here */}

                            <input className='bg-accent text-red-500 font-bold w-full p-3 rounded-lg shadow-lg mt-3' type="submit" value="login" />

                        </form>

                        {/*form end here */}

                        {/* sign in navigate */}

                        <div className='flex'>
                            <h6 className='text-accent' >New to Instructory?</h6>
                            <NavLink className='text-primary font-semibold' to='/signin'> Create new account </NavLink>
                        </div>

                        {/* <div className='text-secondary fon-bold'>
                           <p onClick={()=> forget ( {...register("email")})}> Foreget password?</p>
                       </div> */}

                        <div className="divider">OR</div>

                        {/* sign in with google */}
                        <div className="card-actions justify-end">
                            <button onClick={() => signInWithGoogle()} className="btn btn-accent text-red-600 font-bold w-full"> Create with Google </button>
                        </div>
                        {/* sign with google end here */}
                    </div>
                </div>
            </div>
        </div>
  
  );
};

export default Login;