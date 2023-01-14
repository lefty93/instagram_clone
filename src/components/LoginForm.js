import React from "react";
import insta from "../img/screenshot1-2x.png";

function LoginForm() {
  return (
    <div>
      <div className="flex justify-center content-center">
        <div
          className="bg-center bg-cover bg-no-repeat h-[650px] w-[390px] relative mt-[45px] mr-[45px] mb-0 ml-0"
          style={{
            backgroundImage: `url(${"https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"})`,
          }}
        >
          <div
            className="absolute w-[250px] h-[550px] bg-center bg-cover top-[30px] right-[20px]"
            style={{
              backgroundImage: `url(${"https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"})`,
            }}
          ></div>
        </div>
      </div>
      <div className="content">
        <div className="form-container">
          <h1>Instagram</h1>
          <form>
            <input
              type="email"
              name=""
              id=""
              placeholder="Phone number, username, or email"
            />
            <input type="password" name="" id="" placeholder="Password" />
            <button>Log in</button>
            <div className="or">
              <hr />
              <span>OR</span>
              <hr />
              <div className="facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
