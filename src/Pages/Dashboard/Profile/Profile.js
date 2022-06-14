import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { BsTelephoneFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { FcElectronics } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md'
import Nav from '../../../components/navbar/Nav';
import auth from '../../../Firekey/Firekey';



const Profile = () => {

    // user handel
    const [user] = useAuthState(auth)

  // react hook from
   const { register, formState: { errors }, handleSubmit } = useForm();

   //imagebb key 
   const imagekey = '3362cfddeacc2a6837eed7c9e23636a9'

    // handel submit
    const onSubmit = data => {
        const image = data.image[0]
        const userinfo = {
            biography : data.biography,
            skillf: data.skillf,
            skillh: data.skillh,
            skillt: data.skillt,
            skillo : data.skillo,
            hoby : data.hoby,
            location: data.location,
            profession: data.profession,
            username: data.username,
            img : ""
        }
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imagekey}`
        console.log(url)
        console.log(url);
        fetch(url,{
            method : "POST",
            body : formData,
        })
        .then(res => res.json())
        .then(data => {
            const email = user?.email
            if(data){ 
            const img = data.data.url
            userinfo.img = img
            const urls = `http://localhost:8000/profiles/${email}`
            fetch(urls,{
                method :"PUT",
                headers: {                    
                   'Content-Type': 'application/json' ,              
                   },
                body: JSON.stringify(userinfo),
            })
            .then(res => res.json())
            .then(data => console.log(data))
            }

            }) 
    
        
    }


    return (
        <div> 
            <div>
                <Nav></Nav>
            </div>
        <div className='bg-[#FBFBFB]'>
            <h6 className='text-3xl text-[#00A99D] font-extrabold pt-3'> Edit your Profile !! </h6>
            <form onSubmit={handleSubmit(onSubmit)}> 
            <div className='flex flex-col lg:flex-row  mx-[200px] mt-20' >
                {/* info taking form here */}
                <div className='basis-2/4' >
                    <div>
                        <label for='images' > <CgProfile className='text-8xl rounded-md ' ></CgProfile> </label>
                        <input {...register("image")} className='d-none invisible' id='images' type="file" placeholder='aaa'/>
                    </div>
                    <div className='flex justify-center items-center mt4 '>
                        <label> <MdEmail className='text-3xl mr-2'></MdEmail></label>
                        <h6> {user?.email}</h6>
                    </div>
                    <div className='flex justify-center items-center mt-2 mr-10'>
                        <label> <BsTelephoneFill className='text-3xl ' ></BsTelephoneFill> </label>
                        <h6 className='ms-2'>  01867029836 </h6>
                    </div>
                    <div>

                    </div>
                </div>
                {/* profile input */}
                <div className='basis-2/4'>
                    <div>                    
                        <div className='bg-[#ffffff] p-10 shadow-2xl rounded-md'>
                            <h6 className='text-3xl font-extrabold mb-5 text-[#0076a3]'> Your Informations </h6>
                            <div className='mb-4 flex items-center' >
                                <label className='mr-10'> Name </label>
                                <input  {...register("username")} type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs" />
                            </div>
                            {/*  */}
                            <div className=' col-span-3 mb-5 flex items-center' >
                                <h6 className='mr-10'> proffession </h6>
                                <input  {...register("profession")} type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs " />
                            </div>
                            {/*  */}
                            <div className='mb-5 flex items-center' >
                                <label className='mr-10'> Location </label>
                                <input  {...register("location")} type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs" />
                            </div>
                            {/*  */}
                            <div className='mb-5 flex items-center' >
                                <label className='mr-10'> Hobby </label>
                                <input  {...register("hoby")} type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs" />
                            </div>
                            {/*  */}
                            <div className='flex items-center' >
                                <input  {...register("skillo")} type="text" placeholder="skill 1" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs" />
                                <input {...register("skillt")} type="text" placeholder="skill 2" className="ms-2 supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div className='flex items-center mt-3' >
                                <input {...register("skillh")} type="text" placeholder="skill 3" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs" />
                                <input {...register("skillf")} type="text" placeholder="skill 4" className="ms-2 supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs" />
                            </div>
                            {/*  */}
                            <div className='row-span-3 mt-5 flex  items-center' >
                                <label className='mr-10 '> bio </label>
                                <textarea {...register("biography")} className="h-[50px] bg-[#FBFBFB] border-solid  p-2 ms-1
                             input-bordered input-primary w-full max-w-xs" cols="30" rows="10"></textarea>
                            </div>
                            {/*  */}
                            <input type="submit" className='bg-[#0076a3] p-3 rounded-md mt-4 text-white font-bold w-full' />
                        </div>
                    </div>
                </div>
            </div>
                </form>
        </div>
        </div>
    );
};

export default Profile;