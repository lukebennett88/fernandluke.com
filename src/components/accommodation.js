import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Accommodation = () => {
  const data = useStaticQuery(graphql`
    query AccommodationQuery {
      file(relativePath: { eq: "camping.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <article id="accommodation" className="flex flex-wrap-reverse mt-12 -mx-4">
      <div className="p-4 w-full md:w-1/2">
        <h2 className="font-serif leading-none text-gray-800 text-4xl">
          Accommodation
        </h2>
        <p className="mt-4">
          The venue is on a large property and we will have space set aside for
          camping if you would like to stay overnight on the property. If you
          would like to set up on Friday and stay an additional day you are
          welcome to — just let us know so we can cater accordingly!
        </p>
      </div>
      <div className="p-4 w-full md:w-1/2">
        <div className="pb-full relative">
          <div className="absolute inset-0">
            <Image className="h-full" fluid={data.file.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Accommodation;
