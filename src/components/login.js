import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const nav = useNavigate();
  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
    // _bodyData.dob = _bodyData.dob.toString();
    doApiPost(_bodyData);
  };

  const doApiPost = async (_bodyData) => {
    let myUrl = "http://localhost:3002/users/login";
    try {
      let resp = await axios({
        method: "POST",
        data: _bodyData,
        url: myUrl,
      });
      if (resp.data._id) {
        alert("you logged in seccessfully!");
        nav("/");
      }
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

  return (
    <div>
      <h2 className="text-center">התחברות</h2>
      <form
        className="container"
        onSubmit={handleSubmit(onSubForm)}
        id="id_form"
      >
        <label>email</label>
        <input
          {...register("email", {
            required: true,
            pattern: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          className="form-control"
          type="text"
        />
        {errors.email && <div className="text-danger">* הכנס אימייל תקין</div>}
        <label>password</label>
        <input
          {...register("password", { required: true, minLength: 2 })}
          className="form-control"
          type="password"
        />
        {errors.password && (
          <div className="text-danger">* הכנס סיסמא תקינה</div>
        )}
        <div className="d-flex justify-content-center">
        <button className="mt-3 btn btn-info">התחבר</button>
        </div>
        <Link className="text-decoration-none" to="/signup">Dont have an account?</Link>
      </form>
    </div>
  );
}
