// STUB
//dumb component
import React from "react";
import classes from "./Charts.module.css";
const Charts = () => {
  return (
    <div className={classes.container}>
      <section className={[classes.box1, "card"].join(" ")}>
        <h1>Revenue</h1>{" "}
        <h6>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          incidunt deleniti neque laudantium nisi id nulla maxime adipisci
          obcaecati ab voluptatibus sit error sed. Illo voluptate quos
          laboriosam inventore autem. Reprehenderit, ad nihil neque, delectus
          sapiente quos dignissimos consequatur placeat doloribus quod corrupti
          dolorum optio, culpa maiores laboriosam provident eum quaerat minima
          ut. Mollitia ipsam autem eius debitis modi id eos ex eligendi tenetur
          quo fuga, eum, ea aperiam hic soluta doloremque tempore adipisci optio
          quaerat quod, dolore deserunt tempora porro. Rerum vel nemo numquam
          corporis, quidem dolorem hic doloribus ad cupiditate maxime ut. In
          molestiae facere adipisci velit illum? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Corrupti, incidunt deleniti neque
          laudantium nisi id nulla maxime adipisci obcaecati ab voluptatibus sit
          error sed. Illo voluptate quos laboriosam inventore autem.
        </h6>
      </section>
      <section className={[classes.box2, "card"].join(" ")}>
        <h1>Potential Revenue</h1>{" "}
        <h6>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </h6>
      </section>
      <section className={[classes.box3, "card"].join(" ")}>
        <h1>Close Ratio</h1>
        <h6>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </h6>
      </section>
    </div>
  );
};

export default Charts;
