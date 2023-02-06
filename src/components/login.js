import axios from 'axios';
import React from 'react'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const{register , handleSubmit , formState: { errors } } = useForm();
    const nav = useNavigate();
    const onSubForm = (_bodyData) => {
        console.log(_bodyData);
        _bodyData.dob = _bodyData.dob.toString();
        doApiPost(_bodyData);
    }

    const doApiPost = async(_bodyData) => {
        let myUrl = "http://localhost:3002/users";
        try{
            let resp = await axios({
                method:'POST',
                data:_bodyData,
                url:myUrl
            })
            if(resp.data._id){
                alert('you signed up seccessfully!');
                nav("/");
            }
        }catch(err){
            console.log(err);
            alert("Error");
        }
      }
    return (
        <>
            <h2 className='text-center'>Sign up</h2>
        <form className='container' onSubmit={handleSubmit(onSubForm)} id="id_form" >
<label>name</label>
<input {...register("name",{required:true, minLength:2})} className="form-control" type="text" />
{errors.name && <div className="text-danger">* Enter valid name</div>}
<label>username</label>
<input {...register("username",{required:true, minLength:2})} className="form-control" type="text" />
{errors.username && <div className="text-danger">* Enter valid username</div>}
<label>date of birth</label>
<input {...register("dob",{required:true, minLength:2})} className="form-control" type="date" />
{errors.dob && <div className="text-danger">* Enter valid date</div>}
<label>email</label>
<input {...register("email",{required:true, pattern:!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} className="form-control" type="text" />
{errors.email && <div className="text-danger">* Enter valid email</div>}
<label>password</label>
<input {...register("password",{required:true, minLength:2})} className="form-control" type="password" />
{errors.password && <div className="text-danger">* Enter valid password</div>}
<label>city</label>
<input {...register("city",{required:true, minLength:2})} className="form-control" type="text" />
{errors.city && <div className="text-danger">* Enter valid city</div>}
<label>address</label>
<input {...register("address",{required:true, minLength:2})} className="form-control" type="text" />
{errors.address && <div className="text-danger">* Enter valid address</div>}
<label>phone</label>
<input {...register("phone",{required:true, minLength:2})} className="form-control" type="text" />
{errors.phone && <div className="text-danger">* Enter valid phone</div>}
<label>postal_code</label>
<input {...register("postal_code",{required:true, minLength:2})} className="form-control" type="number" />
{errors.postal_code && <div className="text-danger">* Enter valid postal_code</div>}
<div className='d-flex justify-content-center'>
<div className="btn-group">
  <button className="mt-3 btn btn-info">Button</button>
</div>
</div>
</form>


</>
    )
}
