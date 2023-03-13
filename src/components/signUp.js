import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const nav = useNavigate();
  const onSubForm = (_bodyData) => {
    // console.log(_bodyData);
    _bodyData.dob = _bodyData.dob.toString();
    delete _bodyData.cpassword;
    doApiPost(_bodyData);
  };

  const doApiPost = async (_bodyData) => {
    if (_bodyData.password.length < 3) {
      return toast.warn("your password need to be more than 2");
    }
    let myUrl = "http://localhost:3002/users";
    try {
      let resp = await axios({
        method: "POST",
        data: _bodyData,
        url: myUrl,
      });
      if (resp.data._id) {
        toast.success("you signed up seccessfully!");
        nav("/");
      }
    } catch (err) {
      console.log(err.response.data.msg);
      toast.warning(err.response.data.msg);
    }
  };
  return (
    <>
      <h2 className="text-center">הרשמה</h2>
      <form
        className="container col-md-3 col-sm-6 text-center d-flex flex-column gap-1 h6"
        onSubmit={handleSubmit(onSubForm)}
        id="id_form"
      >
        <label>שם</label>
        <input
          {...register("name", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.name && (
          <div className="text-danger">* הכנס שם תקין מעל 2 תווים</div>
        )}
        <label>שם משתמש</label>
        <input
          {...register("username", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.username && (
          <div className="text-danger">* הכנס שם משתמש תקין מעל 2 תווים</div>
        )}
        <label>תאריך לידה</label>

        <input
          {...register("dob", { required: true, minLength: 2 })}
          className="form-control"
          type="date"
        />
        {errors.dob && (
          <div className="text-danger">
            * הכנס תאריך לידה תקין - דוגמא (10/01/2003)
          </div>
        )}
        <label>אימייל</label>
        <input
          {...register("email", {
            required: true,
            pattern: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          className="form-control"
          type="text"
        />
        {errors.email && <div className="text-danger">* הכנס אימייל תקין</div>}
        <label>סיסמא</label>
        <input
          {...register("password", { required: true })}
          className="form-control"
          type="password"
        />
        {errors.password && (
          <div className="text-danger">* הכנס סיסמא תקינה</div>
        )}
        <label>סיסמא שוב</label>
        <input
          {...register("cpassword", {
            required: "**Password is required",
            validate: (value) => value === watch("password"),
          })}
          className="form-control"
          type="password"
        />
        {errors.cpassword && (
          <div className="text-danger">* הכנס את אותה סיסמא תקינה</div>
        )}
        <label>עיר</label>
        <input
          {...register("city", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.city && <div className="text-danger">* הכנס עיר תקינה</div>}
        <label>כתובת</label>
        <input
          {...register("address", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.address && (
          <div className="text-danger">* הכנס כתובת תקינה</div>
        )}
        <label>טלפון</label>
        <input
          {...register("phone", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.phone && <div className="text-danger">* הכנס טלפון תקין</div>}
        <label>מיקוד</label>
        <input
          {...register("postal_code", { required: true, minLength: 2 })}
          className="form-control"
          type="number"
        />
        {errors.postal_code && (
          <div className="text-danger">* הכנס מיקוד תקין</div>
        )}
        <div className="d-flex justify-content-center">
          <div className="btn-group">
            <button className="mt-3 btn btn-info">הרשם</button>
          </div>
        </div>
        <Link className="text-decoration-none" to="/login">Alredy have an Account?</Link>
      </form>
    </>
  );
}
