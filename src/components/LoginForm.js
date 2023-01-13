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
    </div>
  );
}

export default LoginForm;
