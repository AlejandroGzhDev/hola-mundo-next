import Link from "next/link";
import React from "react";
import { MainLayout } from "../components/layouts/MainLayout";

export const Pricing = () => {
  return (
    <MainLayout>
      <h1>Pricing</h1>
      <h1 className={"title"}>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.tsx</code>
      </p>
    </MainLayout>
  );
};

export default Pricing;
