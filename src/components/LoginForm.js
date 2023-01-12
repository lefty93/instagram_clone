import React from "react";
import instagram from "../img/Instagram_Logo_Large.png";
import screenshot from "../img/screenshot1-2x.png";

function LoginForm() {
  return (
    <div className="form-outer inline-grid grid-cols-2 gap-2 place-items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
        <img src={screenshot} alt="" />
      </div>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
        <div className="p-7">
          <img src={instagram} alt="" />
        </div>
        <div className="form-inner">
          <div className="form-group py-2">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Phone number, username or email"
              class="border rounded w-full"
            />
          </div>
          <div className="form-group py-2">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              class="border rounded w-full"
            />
          </div>
          <div className="py-2">
            <input
              type="submit"
              value="Login"
              class="bg-blue-400 w-full rounded-md text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
