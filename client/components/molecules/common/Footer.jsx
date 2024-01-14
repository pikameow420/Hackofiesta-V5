import React from "react";
import { Footer } from "@lobehub/ui";
import { ThemeProvider } from "@lobehub/ui";
import Link from "next/link";

const columns = [
  {
    items: [
      {
        description: "AIGC Components",
        openExternal: true,
        title: "🤯 Lobe UI",
        url: "https://github.com/lobehub/lobe-ui",
      },
      {
        description: "Chatbot Client",
        openExternal: true,
        title: "🤯 Lobe Chat",
        url: "https://github.com/lobehub/lobe-chat",
      },
      {
        description: "Node Flow Editor",
        openExternal: true,
        title: "🤯 Lobe Flow",
        url: "https://github.com/lobehub/lobe-flow",
      },
    ],
    title: "Resources",
  },
  {
    items: [
      {
        description: "AI Commit CLI",
        openExternal: true,
        title: "💌 Lobe Commit",
        url: "https://github.com/lobehub/lobe-commit",
      },
      {
        description: "Lint Config",
        openExternal: true,
        title: "📐 Lobe Lint",
        url: "https://github.com/lobehub/lobe-lint",
      },
    ],
    title: "More Products",
  },
];

const Footerr = () => {
  return (
    <>
      <footer id="contact" className="bg-[#111111] pt-16 pb-6">
        <h1 className=" text-center text-3xl mb-4 sm:mb-2">Social Links</h1>

        <section className="flex flex-wrap max-w-[] gap-x-96 gap-y-16 justify-center">
          <div className="flex mt-1 flex-col gap-y-4">
            <div className="">
              <Link
                href="https://iiitl.ac.in/"
                target="_blank"
                className="hover:text-rose-500 transition-all duration-500  ml-1 text-gray-400"
              >
                ✉️ Email
              </Link>
              {/* <span className=""> - </span>
              <span className="">AIGC Components</span> */}
            </div>
            <div className="rc-footer-item">
              <Link
                href="https://twitter.com/hof_iiitl"
                target="_blank"
                className="hover:text-rose-500 transition-all duration-500 text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                  className=" inline-block"
                >
                  <path
                    fill="#03A9F4"
                    d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                  ></path>
                </svg>
                <span>Twitter</span>
              </Link>
              {/* <span> - </span>
              <span className="rc-footer-item-description">Chatbot Client</span> */}
            </div>
            <div className="rc-footer-item -mt-1">
              <Link
                href="https://www.facebook.com/hackofiesta/"
                target="_blank"
                className="hover:text-rose-500 transition-all flex items-center duration-500 text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                  className="inline-block"
                >
                  <linearGradient
                    id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                    x1="9.993"
                    x2="40.615"
                    y1="9.993"
                    y2="40.615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#2aa4f4"></stop>
                    <stop offset="1" stop-color="#007ad9"></stop>
                  </linearGradient>
                  <path
                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                  ></path>
                </svg>
                <span className="mt-1">FaceBook</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="">
              <Link
                href="https://www.linkedin.com/company/hackofiesta-iiitl/"
                target="_blank"
                className="hover:text-rose-500 transition-all duration-500 text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                  className="inline-block"
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  ></path>
                </svg>{" "}
                <span>Linkedin</span>
              </Link>
            </div>
            <div className="">
              <Link
                href=" https://discord.gg/8VK8jMt63j"
                target="_blank"
                className="hover:text-rose-500 transition-all duration-500 text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                  className="inline-block"
                >
                  <radialGradient
                    id="La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1"
                    cx="24"
                    cy="10.009"
                    r="32.252"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#8c9eff"></stop>
                    <stop offset=".368" stop-color="#889af8"></stop>
                    <stop offset=".889" stop-color="#7e8fe6"></stop>
                    <stop offset="1" stop-color="#7b8ce1"></stop>
                  </radialGradient>
                  <path
                    fill="url(#La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1)"
                    d="M40.107,12.15c-0.065-0.102-0.139-0.182-0.236-0.255c-0.769-0.578-4.671-3.339-9.665-3.875	c-0.01-0.001-0.048-0.003-0.057-0.003c-0.098,0-0.183,0.057-0.224,0.14l-0.269,0.538c0,0-0.001,0-0.001,0	c-0.017,0.033-0.026,0.071-0.026,0.111c0,0.109,0.07,0.202,0.168,0.236c0.006,0.002,0.048,0.011,0.063,0.014	c4.267,1.028,6.863,2.89,9.149,4.945c-4.047-2.066-8.044-4.001-15.009-4.001s-10.961,1.936-15.009,4.001	c2.286-2.055,4.882-3.917,9.149-4.945c0.015-0.004,0.057-0.012,0.063-0.014c0.098-0.034,0.168-0.127,0.168-0.236	c0-0.04-0.009-0.078-0.026-0.111c0,0-0.001,0-0.001,0l-0.269-0.538c-0.041-0.083-0.125-0.14-0.224-0.14	c-0.009,0-0.048,0.002-0.057,0.003c-4.994,0.536-8.896,3.297-9.665,3.875c-0.097,0.073-0.17,0.153-0.236,0.255	c-0.708,1.107-5.049,8.388-5.892,21.632c-0.009,0.142,0.04,0.289,0.135,0.395c4.592,5.144,11.182,5.752,12.588,5.823	c0.167,0.008,0.327-0.065,0.427-0.199l1.282-1.709c0.1-0.134,0.046-0.322-0.111-0.379c-2.705-0.986-5.717-2.7-8.332-5.706	C11.231,34.457,16.12,37,24,37s12.769-2.543,16.009-4.993c-2.616,3.006-5.627,4.719-8.332,5.706	c-0.157,0.057-0.211,0.245-0.111,0.379l1.282,1.709c0.101,0.134,0.26,0.208,0.427,0.199c1.407-0.072,7.996-0.679,12.588-5.823	c0.095-0.106,0.144-0.253,0.135-0.395C45.156,20.538,40.815,13.257,40.107,12.15z"
                  ></path>
                  <ellipse
                    cx="30.5"
                    cy="26"
                    opacity=".05"
                    rx="4.5"
                    ry="5"
                  ></ellipse>
                  <ellipse
                    cx="30.5"
                    cy="26"
                    opacity=".05"
                    rx="4"
                    ry="4.5"
                  ></ellipse>
                  <ellipse
                    cx="30.5"
                    cy="26"
                    fill="#fff"
                    rx="3.5"
                    ry="4"
                  ></ellipse>
                  <ellipse
                    cx="17.5"
                    cy="26"
                    opacity=".05"
                    rx="4.5"
                    ry="5"
                  ></ellipse>
                  <ellipse
                    cx="17.5"
                    cy="26"
                    opacity=".05"
                    rx="4"
                    ry="4.5"
                  ></ellipse>
                  <ellipse
                    cx="17.5"
                    cy="26"
                    fill="#fff"
                    rx="3.5"
                    ry="4"
                  ></ellipse>
                </svg>
                Discord
              </Link>
            </div>
            <div className="">
              <Link
                href="https://www.instagram.com/hackofiesta/"
                target="_blank"
                className="hover:text-rose-500 transition-all duration-500 text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                  className="inline-block"
                >
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                    cx="19.38"
                    cy="42.035"
                    r="44.899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#fd5"></stop>
                    <stop offset=".328" stop-color="#ff543f"></stop>
                    <stop offset=".348" stop-color="#fc5245"></stop>
                    <stop offset=".504" stop-color="#e64771"></stop>
                    <stop offset=".643" stop-color="#d53e91"></stop>
                    <stop offset=".761" stop-color="#cc39a4"></stop>
                    <stop offset=".841" stop-color="#c837ab"></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                    cx="11.786"
                    cy="5.54"
                    r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#4168c9"></stop>
                    <stop
                      offset=".999"
                      stop-color="#4168c9"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                  ></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                  ></path>
                </svg>
                <span>Instagram</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="text-center text-base font-bold tracking-wide text-slate-500">
            Equinox © 2024
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footerr;
