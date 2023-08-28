"use client";
import Layout from "@/app/components/layout/layout";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please add Username"),
      password: Yup.string().required("Please add Password"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <Layout>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Login
            </h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="username"
                  className="leading-7 text-sm text-gray-400"
                >
                  UserName
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-400"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ? (
                  <p className="text-red-500 text-xs italic">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
