import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

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
          camping in tents and camper-vans if you would like to stay overnight
          on the property.
        </p>
        <p className="mt-4">
          You are more than welcome to set up on Friday and stay an extra night,
          let us know so we can plan accordingly and just be aware that you will
          more than likely get roped into decorating duties!
        </p>
        <p className="mt-4">
          If you would like something a little less Glastonbury and a little
          more glam, you can also find accommadation on{" "}
          <a
            href="https://www.airbnb.com.au/s/Port-Macquarie--Australia/homes?refinement_paths%5B%5D=%2Fhomes&current_tab_id=home_tab&selected_tab_id=home_tab&source=mc_search_bar&click_referer=t%3ASEE_ALL%7Csid%3A97d9f9f9-36c5-4586-aeb4-a9326fc16efd%7Cst%3ALANDING_PAGE_MARQUEE&ne_lat=-31.396534879453487&ne_lng=152.8916835394898&sw_lat=-31.475186948759866&sw_lng=152.86584850225836&zoom=14&search_by_map=true&search_type=unknown&screen_size=large&adults=1"
            title="Port Macquarie on AirBnB"
            className="font-bold text-teal-600 hover:underline hover:text-orange-600"
          >
            Airbnb
          </a>
          .
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
