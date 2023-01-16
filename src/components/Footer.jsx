import React from "react";

function Footer() {
  const date = new Date();
  const latest = date.getFullYear();
  return (
    <div className="footer max-[830px]:hidden">
      <div className="links flex justify-center py-[15px] px-[5%] space-x-6">
        <a href="#" className="hover:underline">
          Meta
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Blog
        </a>
        <a href="#" className="hover:underline">
          Jobs
        </a>
        <a href="#" className="hover:underline">
          Help
        </a>
        <a href="#" className="hover:underline">
          API
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Terms
        </a>
        <a href="#" className="hover:underline">
          Top Accounts
        </a>
        <a href="#" className="hover:underline">
          Locations
        </a>
        <a href="#" className="hover:underline">
          Instagram Lite
        </a>
      </div>
      <div className="copyright flex justify-center">
        &copy; {latest} Instagram from Meta
      </div>
    </div>
  );
}

export default Footer;
