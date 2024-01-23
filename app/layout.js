import Layout from "./components/layout/layout";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./context/client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blogee",
  description:
    "Discover seamless content creation and management with our headless CMS-powered blog application. Harness the robust capabilities of WordPress backend services, ensuring efficient database management and optimal SEO performance. Empower your development process with a versatile solution that streamlines content workflows and enhances the overall user experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
