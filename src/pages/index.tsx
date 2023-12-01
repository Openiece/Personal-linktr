import Image from "next/image";
import Avatar from "../photos/user-circle.256x256.png";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Linktr</title>
        <meta name="description" content="Personal accounts of Openiece" />
      </Head>
      <main className=" bg-gradient-to-bl from-black via-gray-600 to-black h-screen w-screen text-white absolute">
        <div className="flex justify-center m-10">
          <Image width={256} height={256} alt="avatar" src={Avatar}></Image>
        </div>
        <div className="flex justify-center m-8 text-2xl	">@Openiece</div>

        <div className="flex justify-center items-center m-6">
          <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </div>

        <div className="flex justify-center flex-col gap-10 items-center">
          <a
            className="border flex justify-center items-center rounded-lg w-80 p-3 hover:border-black ease-in duration-200"
            href="https://www.facebook.com/EnkhMandakhbn"
          >
            Facebook
          </a>
          <a
            className="border flex justify-center items-center rounded-lg w-80 p-3 hover:border-black ease-in duration-200"
            href="https://www.instagram.com/openiece_/"
          >
            Instagram
          </a>
          <a
            className="border flex justify-center items-center rounded-lg w-80 p-3 hover:border-black ease-in duration-200"
            href="https://www.youtube.com/channel/UC4P0GLc1tU40m6T8hNPnSmw"
          >
            Youtube
          </a>
          <a
            className="border flex justify-center items-center rounded-lg w-80 p-3 hover:border-black ease-in duration-200"
            href="https://github.com/Openiece"
          >
            Github
          </a>
        </div>

        <div className="flex justify-center items-center m-9 gap-9">
          <div>
            <FaGithub />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaYoutube />
          </div>
        </div>

        <div className="flex justify-center items-center italic">IDK?</div>
      </main>
    </>
  );
}
