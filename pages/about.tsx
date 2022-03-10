import { NextPage } from "next";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLaout } from "../components/layouts/DarkLaout";

export const About: NextPage = () => {
  return (
    <MainLayout>
      <DarkLaout>
        <h1>About</h1>
        <h1 className={"title"}>
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href="/">Home </Link>
        </h1>

        <p className={"description"}>
          Get started by editing <code className={"code"}>pages/index.tsx</code>
        </p>
      </DarkLaout>
    </MainLayout>
  );
};

export default About;
