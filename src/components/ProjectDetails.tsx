import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import LinkButton from "./ui/LinkButton";
import placeholder from "@/assets/placeholder.png";

interface ProjectDetailsProps {
  image?: string;
  title?: string;
  description?: string;
  year?: number;
  content: string;
}

const ProjectDetails = ({
  image = placeholder,
  title = "Project Title",
  description = "This is a detailed description of the project, highlighting key features and technologies used.",
  year = 2023,
  content = "Here is some additional content about the project, including challenges faced and solutions implemented.",
}: ProjectDetailsProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" }); // animasi trigger sedikit sebelum masuk

  const fadeBlurVariants = {
    hidden: { opacity: 0, filter: "blur(6px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="py-40 mx-auto w-full">
  <LinkButton title="‹  Back" link="/" />

  <motion.h1
    initial={{ opacity: 0, filter: "blur(6px)", y: 20 }}
    animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0 }}
  >
    {title}
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, filter: "blur(6px)", y: 20 }}
    animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    {description}
    <br />
    <time>{year}</time>
  </motion.p>

  <motion.hr
    initial={{ opacity: 0, filter: "blur(6px)", y: 20 }}
    animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="h-0.5 bg-darkgray w-full mt-4"
  />

  <motion.img
    src={image}
    alt={title}
    className="w-full h-auto rounded-2xl mb-10"
    initial={{ opacity: 0, filter: "blur(6px)", y: 20 }}
    animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.6 }}
  />

  <motion.p
    initial={{ opacity: 0, filter: "blur(6px)", y: 20 }}
    animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.8 }}
  >
    {content}
  </motion.p>
</section>

  );
};

export default ProjectDetails;