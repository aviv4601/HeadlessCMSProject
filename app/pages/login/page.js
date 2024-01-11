import Forms from "../../components/login-page/forms";
import Image from "next/image";
import LoginPageImg from "../../assets/LoginPageImg.jpg";

export default function Login() {
  return (
    <div>
      <section className="text-gray-400 body-font relative">
        <div className="px-5 py-24 mx-auto flex sm:flex flex-wrap items-center">
          <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <Image
              src={LoginPageImg}
              width={400}
              height={400}
              alt="Random Image"
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <Forms />
          </div>
        </div>
      </section>
    </div>
  );
}
