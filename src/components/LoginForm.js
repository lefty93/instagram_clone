import React from "react";

function LoginForm() {
  return (
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
      <div className="content mt-[45px]">
        <div className="form-container bg-white py-[20px] px-[45px] w-[350px] flex flex-col items-center border border-solid border-[#eee]">
          <h1 className="font-engagement text-[3.8rem] font-medium mb-[30px]">
            Instagram
          </h1>
          <form>
            <input
              type="email"
              name=""
              id=""
              placeholder="Phone number, username, or email"
              className="w-full h-[40px] border border-solid border-[#eee] bg-[#fafafa] rounded-[3px] px-[10px] py-0 mb-[8px] text-xs"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="w-full h-[40px] border border-solid border-[#eee] bg-[#fafafa] rounded-[3px] px-[10px] py-0 mb-[8px] text-xs"
            />
            <button className="bg-[#0095f6] w-full h-[35px] text-white text-base font-semibold border-none rounded-[5px] mt-[10px] mx-0 mb-[20px] ">
              Log in
            </button>
            <div className="or flex justify-between items-center">
              <hr className="bg-[#BDBDBD] w-2/5 h-px border-none" />
              <span className="font-semibold text-[#8e8e8e] text-[0.9rem]">
                OR
              </span>
              <hr className="bg-[#BDBDBD] w-2/5 h-px border-none" />
            </div>
            <div className="facebook flex justify-center items-center mt-[25px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-[18px] fill-[#385185] mr-[10px]"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
              </svg>
              <a href="#" className="text-[#385185] font-semibold">
                Log in with Facebook
              </a>
            </div>
            <div className="forgot w-full text-center text-[0.8rem] mt-[15px]">
              <a href="#" className="text-[#000000]">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
        <div className="signup bg-white border border-solid border-[#eee] mt-[10px] py-[20px] px-0 text-center">
          <span className="text-[#000000] font-medium text-[0.9rem]">
            Don't have an account?{" "}
            <a href="#" className="text-[#0095f6] font-semibold">
              Sign up
            </a>
          </span>
        </div>
        <p className="items-center text-center my-[20px] mx-0">
          Get the app.
        </p>
        <div className="appstore flex justify-center">
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            alt=""
            className="h-[45px] my-0 mx-[5px]"
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            alt=""
            className="h-[45px] my-0 mx-[5px]"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
