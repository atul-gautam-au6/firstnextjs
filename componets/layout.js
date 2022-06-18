import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <nav>
        <div className="topnav">
          <Link href={"/blog"}>Blog</Link>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
