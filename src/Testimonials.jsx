import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Raju Paliwal",
    text: "I'm just Completed my MDCA Diploma course from Udan Institute. It's so much amazing..Best institute in Faridabad for computer classes,",
    img: "https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/udaninstitute.com/website/testimonials/image_691575b2c79ad.png",
  },
  {
    name: "Pooja Kumari",
    text: "As a student if I want to give a review than I will say that UDAN INSTITUTE is the best Computer Center in the FARIDABAD.",
    img: "https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/udaninstitute.com/website/testimonials/image_6915928695834.png",
  },
  {
    name: "Amit Kumar",
    text: "It is very good institute and The faculty for tally, basic, DTP are best as per students review.",
    img: "https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/udaninstitute.com/website/testimonials/image_691592f039a06.jpg",
  },
  {
    name: "Priyanka",
    text: "Udan institute in Faridabad is a excellent choice for students who want to establish career in the IT Field.",
    img: "https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/udaninstitute.com/website/testimonials/image_6915939ef41fa.jpg",
  },
  {
    name: "Khushi",
    text: "Udan institute in Faridabad is a excellent choice for students who want to establish career in the IT Field.",
    img: "https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/udaninstitute.com/website/testimonials/image_6915945e763e7.jpg",
  },
];

const TestimonialCard = ({ item }) => (
  <div className="single-column-20">
    <div className="rbt-testimonial-box h-100 d-flex flex-column">
      <div className="inner flex-fill d-flex flex-column">
        <div className="clint-info-wrapper">
          <div className="thumb">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="client-info">
            <h5 className="title">{item.name}</h5>
            <span>
              Student <i>@ UDAN Institute of Computer Technologies</i>
            </span>
          </div>
        </div>

        <div className="description flex-fill d-flex align-items-start">
          <p className="mb-0 subtitle-3">{item.text}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <>
      {/* SECTION TITLE */}
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center section-title mb--10">
                <span className="subtitle bg-primary-opacity">
                  EDUCATION FOR EVERYONE
                </span>
                <h2 className="title">
                  Great journeys begin here. <br />
                  Here's what our learners have to say.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FIRST ROW */}
      <div className="scroll-animation-wrapper mt--50">
        <div className="scroll-animation scroll-right-left d-flex">
          {[...testimonials, ...testimonials].map((item, i) => (
            <TestimonialCard key={`rtl-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="scroll-animation-wrapper mt--30">
        <div className="scroll-animation scroll-left-right d-flex">
          {[...testimonials, ...testimonials].map((item, i) => (
            <TestimonialCard key={`ltr-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* WRITE REVIEW */}
      <div className="write-review-wrapper">
        <a
          href="https://search.google.com/local/writereview?placeid=XXXXXXXX"
          className="write-review-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✍️ Write a Review
        </a>
      </div>
    </>
  );
};

export default Testimonials;
