import Head from "next/head";
import { Intro } from "../components/Intro";
import { Expertise } from "../components/Expertise";
import { Work } from "../components/Work";
import projects from "../data/projects.json";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { useState } from "react";
import {
  CircleLoader,
  ClipLoader,
  RingLoader,
  RotateLoader,
} from "react-spinners";
import { Featured } from "../components/Featured";
import { Blogs } from "../components/Blogs";

export default function Home({ projects }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Pranjal Shukla - Software Engineer</title>
      </Head>

      <Intro />
      <Expertise />
      {/* <Featured projects={projects} /> */}
      <Work projects={projects} />
      <Blogs />
      <Experience />
      <Contact />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      projects,
    }, // will be passed to the page component as props
  };
}
