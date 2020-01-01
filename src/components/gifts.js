import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Gifts = () => {
  const data = useStaticQuery(graphql`
    query GiftsQuery {
      file(relativePath: { eq: "fern-and-luke.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <article id="gifts" className="flex flex-wrap mt-12 -mx-4">
      <div className="p-4 w-full md:w-1/2">
        <div className="pb-full relative">
          <div className="absolute inset-0">
            <Image className="h-full" fluid={data.file.childImageSharp.fluid} />
          </div>
        </div>
      </div>
      <div className="p-4 w-full md:w-1/2">
        <h2 className="font-serif leading-none text-gray-800 text-4xl">
          Gifts
        </h2>
        <p className="mt-4">
          We have a toaster, and we don’t need any more wine glasses. Your
          presence on our special day is present enough! If you would like to
          gift us anything, there will be a wishing well set up on the big day
          which will go towards an epic honeymoon in Byron Bay later in the
          year.
        </p>
      </div>
    </article>
  );
};

export default Gifts;
