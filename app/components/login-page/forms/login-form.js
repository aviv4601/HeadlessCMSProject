"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function LoginForm({ setIsLoginForm }) {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please add Username"),
      password: Yup.string().required("Please add Password"),
    }),
    onSubmit: async (values) => {
      toast.loading("Waiting...", { duration: 1500 });

      const loginData = {
        username: values.username,
        password: values.password,
        callbackUrl: "/",
        redirect: false,
      };
      const login = await signIn("credentials", loginData);

      console.log("login: ", login);
      if (!login?.error) {
        toast.success("Logging you in...");
        router.push(loginData.callbackUrl);
      } else {
        toast.error("Login failed");
        router.push("/pages/login");
      }
    },
  });

  const switchToRegisterFormHandler = () => {
    setIsLoginForm(false);
  };

  return (
    <div className="md:flex md:justify-center">
      <form onSubmit={formik.handleSubmit} className="lg:w-10/12">
        <h2 className="text-black text-lg mb-1 font-medium title-font">
          Login
        </h2>
        <div className="relative mb-4">
          <label htmlFor="username" className="leading-7 text-sm text-gray-400">
            UserName
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username && formik.touched.username ? (
            <p className="text-red-500 text-xs italic">
              {formik.errors.username}
            </p>
          ) : null}
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-400">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="text-red-500 text-xs italic">
              {formik.errors.password}
            </p>
          ) : null}
        </div>
        <div className="flex justify-center mt-8">
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Sign In
          </button>
        </div>
        <div className="text-center mt-4 text-gray-500">
          <p
            onClick={switchToRegisterFormHandler}
            className="hover:underline cursor-pointer"
          >
            Didn&apos;t signed up yet? click here to create an account
          </p>
        </div>
        <Toaster />
      </form>
    </div>
  );
}
