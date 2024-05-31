import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="p-10 bg-base-200 text-base-content">
        <div className="footer">
          <aside>
            <img
              className="w-20 h-20"
              src="https://i.ibb.co/ccjKtJv/logo.png"
              alt=""
            />
            <p>
              ToyCars Ltd.
              <br />
              Providing reliable Products since 1991
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Company</h6>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Blog</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <Link>
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link>
                <FaYoutube className="w-6 h-6" />
              </Link>
              <Link>
                <FaFacebookF className="w-6 h-6" />
              </Link>
            </div>
          </nav>
        </div>
        <div className="footer-center mt-10">
          <aside>
            <p>Copyright © 2024 - All right reserved by ToyCars Ltd</p>
          </aside>
        </div>
      </footer>
    </>
  );
};

export default Footer;
