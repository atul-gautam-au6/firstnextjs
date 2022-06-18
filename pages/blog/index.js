import React from "react";
import AddButton from "../../componets/addButton";
import Title from "../../componets/title";
import Card from "../../componets/card";
const Blogs = ({ data }) => {
  return (
    <>
      <Title title={"blogs"} />
      <AddButton />
      <Card data={data} />
      
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Blogs;
