import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getFieldState,
  } = useForm({
    defaultValues: {
      login: "",
      email: "",
      answer: false,
    },
    mode: "onBlur",
  });
  const myHandler = (data) => {
    console.log(data);
    getFieldState("login").isTouched;
  };
  return (
    <>
      <form onSubmit={handleSubmit(myHandler)}>
        <div className="mb-3">
          <label htmlFor="exampleInputLogin" className="form-label">
            Login
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLogin"
            {...register("login", {
              required: "This field is required",
              minLength: { value: 5, message: "min 5 symbols" },
            })}
            autoComplete="off"
          />
          {errors.login && <p className="error">{errors.login.message}</p>}
          {!errors.login && getFieldState("login").isTouched && (
            <p className="success">Success</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email is invalid",
              },
            })}
            autoComplete="off"
          />
          {errors.email ? (
            <span className="error">{errors.email.message}</span>
          ) : (
            ""
          )}
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            {...register("answer")}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default App;
