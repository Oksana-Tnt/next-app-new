import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <h2>Not-Found</h2>
      <p>Sorry, the page id not found</p>
      <Link href="/">Return home</Link>
    </>
  );
};

export default NotFound;
