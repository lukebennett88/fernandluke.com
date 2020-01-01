import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Venue = () => {
  const data = useStaticQuery(graphql`
    query VenueQuery {
      file(relativePath: { eq: "kingspoint-resport.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <article id="venue" className="flex flex-wrap mt-12 -mx-4">
      <div className="w-full p-4 md:w-1/2">
        <div className="relative pb-full">
          <div className="absolute inset-0">
            <Image className="h-full" fluid={data.file.childImageSharp.fluid} />
          </div>
        </div>
      </div>
      <div className="relative w-full p-4 md:w-1/2">
        <h2 className="font-serif text-4xl leading-none text-gray-800">
          The Venue
        </h2>
        <p className="mt-4">
          The ceremony and reception will be held at{' '}
          <a
            href="https://goo.gl/maps/M9UvUSArKuCKq3GH8"
            title="Kings Point Resort"
            className="font-bold text-teal-600 hover:underline hover:text-teal-600"
          >
            Kings Point Resort
          </a>{' '}
          found on Riverside Drive on Port Macquarie’s North Shore. This is
          accessed via the Hibbard Ferry (tickets cost $5 each way), once off
          the ferry, take an immediate right, drive through the oyster farm and
          you will find our venue. Don’t worry, there will be signs!
        </p>
        <p className="mt-4">
          The Hibbard Ferry stops running at 6:30 pm on Saturday, so if you are
          not staying overnight you will need to take the Settlement Point Ferry
          via Shoreline Drive. You can find out more information about the
          Ferries and their running times on{' '}
          <a
            href="https://www.pmhc.nsw.gov.au/Services/Transport/Ferries"
            title="Ferry Information"
            className="font-bold text-teal-600 hover:underline hover:text-teal-600"
          >
            the council website
          </a>
          .
        </p>
      </div>
    </article>
  );
};

export default Venue;
