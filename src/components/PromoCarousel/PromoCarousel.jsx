
import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

import "./PromoCarousel.css";

import gitCourseImage from "../../assets/images/carousel/git-github-course.png";
import communityImage from "../../assets/images/carousel/ats-community.png";
import adsImage from "../../assets/images/carousel/ads-management.png";

const slides = [
  {
    id: 1,
    eyebrow: "LEARN • BUILD • DEPLOY",
    title: "Master Git & GitHub",
    highlight: "One-on-One Training",
    description:
      "Learn Git and GitHub through a practical private session. Build a small project, work with repositories and branches, and deploy your work online.",
    features: [
      "Private 1-on-1 session",
      "30-page commands & notes guide",
      "Cybersecurity bonus notes",
    ],
    oldPrice: "$100",
    price: "$20",
    priceNote: "Limited-time offer",
    buttonText: "Book Your Session",
    buttonLink: "https://wa.me/96176915446",
    image: gitCourseImage,
    theme: "course",
  },
  {
    id: 2,
    eyebrow: "LEARN • CONNECT • GROW",
    title: "Join the ATS",
    highlight: "Community",
    description:
      "Be part of a growing tech community where you can discover free workshops, affordable courses, announcements, opportunities, and upcoming events.",
    features: [
      "Free workshops & learning resources",
      "Affordable courses",
      "Tech opportunities & updates",
    ],
    buttonText: "Join Our Community",
    buttonLink: "https://chat.whatsapp.com/Jp4XUIWKiEF2jD6bqbRf2r",
    image: communityImage,
    theme: "community",
  },
  {
    id: 3,
    eyebrow: "GROW YOUR BUSINESS",
    title: "Meta Ads &",
    highlight: "Boosting Management",
    description:
      "Reach the right audience and grow your business with professionally managed advertising campaigns across Facebook and Instagram.",
    features: [
      "Campaign setup & management",
      "Audience targeting & optimization",
      "Performance monitoring & reporting",
    ],
    price: "$80",
    priceNote: "Management Fee • For 2 Weeks Only",
    buttonText: "Get Started",
    buttonLink: "https://wa.me/96176915446",
    image: adsImage,
    theme: "ads",
  },
];

export default function PromoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const goToPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (Math.abs(difference) > 45) {
      if (difference > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="promo-carousel" aria-label="Promotional offers">
      <div
        className={`promo-card promo-slide-${activeSlide.theme}`}
        key={activeSlide.id}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="promo-image"
          style={{ backgroundImage: `url(${activeSlide.image})` }}
          aria-hidden="true"
        />

        <div className="promo-overlay" />

        <div className="promo-content">
          <span className="promo-eyebrow">
            {activeSlide.eyebrow}
          </span>

          <h2 className="promo-title">
            {activeSlide.title}
            <span>{activeSlide.highlight}</span>
          </h2>

          <p className="promo-description">
            {activeSlide.description}
          </p>

          <ul className="promo-features">
            {activeSlide.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          {(activeSlide.price || activeSlide.oldPrice) && (
            <div className="promo-pricing">
              {activeSlide.oldPrice && (
                <span className="promo-old-price">
                  {activeSlide.oldPrice}
                </span>
              )}

              {activeSlide.price && (
                <strong className="promo-price">
                  {activeSlide.price}
                </strong>
              )}

              <span className="promo-price-note">
                {activeSlide.priceNote}
              </span>
            </div>
          )}

          <a
            className="promo-button"
            href={activeSlide.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {activeSlide.buttonText}
            <ArrowUpRight size={18} />
          </a>
        </div>

        <button
          type="button"
          className="promo-arrow promo-arrow-left"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <ChevronLeft size={23} />
        </button>

        <button
          type="button"
          className="promo-arrow promo-arrow-right"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight size={23} />
        </button>

        <div className="promo-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`promo-dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



// import { useEffect, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   ArrowUpRight,
//   Pause,
//   Play,
// } from "lucide-react";

// import "./PromoCarousel.css";

// import gitCourseImage from "../../assets/images/carousel/git-github-course.png";
// import communityImage from "../../assets/images/carousel/ats-community.png";
// import adsImage from "../../assets/images/carousel/ads-management.png";

// const slides = [
//   {
//     id: 1,
//     eyebrow: "LEARN • BUILD • DEPLOY",
//     title: "Master Git & GitHub",
//     highlight: "One-on-One Training",
//     description:
//       "Learn Git and GitHub through a practical private session. Build a small project, work with repositories and branches, and deploy your work online.",
//     features: [
//       "Private 1-on-1 session",
//       "30-page commands & notes guide",
//       "Cybersecurity bonus notes",
//     ],
//     oldPrice: "$100",
//     price: "$20",
//     priceNote: "Limited-time offer",
//     buttonText: "Book Your Session",
//     buttonLink: "https://wa.me/96176915446",
//     image: gitCourseImage,
//     theme: "course",
//   },
//   {
//     id: 2,
//     eyebrow: "LEARN • CONNECT • GROW",
//     title: "Join the ATS",
//     highlight: "Community",
//     description:
//       "Be part of a growing tech community where you can discover free workshops, affordable courses, announcements, opportunities, and upcoming events.",
//     features: [
//       "Free workshops & learning resources",
//       "Affordable courses",
//       "Tech opportunities & updates",
//     ],
//     buttonText: "Join Our Community",
//     buttonLink: "https://chat.whatsapp.com/Jp4XUIWKiEF2jD6bqbRf2r",
//     image: communityImage,
//     theme: "community",
//   },
//   {
//     id: 3,
//     eyebrow: "GROW YOUR BUSINESS",
//     title: "Meta Ads &",
//     highlight: "Boosting Management",
//     description:
//       "Reach the right audience and grow your business with professionally managed advertising campaigns across Facebook and Instagram.",
//     features: [
//       "Campaign setup & management",
//       "Audience targeting & optimization",
//       "Performance monitoring & reporting",
//     ],
//     price: "$80",
//     priceNote: "Management fee • 2 weeks",
//     buttonText: "Get Started",
//     buttonLink: "https://wa.me/96176915446",
//     image: adsImage,
//     theme: "ads",
//   },
// ];

// export default function PromoCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const goToNext = () => {
//     setActiveIndex((current) => (current + 1) % slides.length);
//   };

//   const goToPrevious = () => {
//     setActiveIndex(
//       (current) => (current - 1 + slides.length) % slides.length
//     );
//   };

//   useEffect(() => {
//     if (isPaused) return;

//     const interval = setInterval(goToNext, 3000);

//     return () => clearInterval(interval);
//   }, [isPaused]);

//   const activeSlide = slides[activeIndex];

//   return (
//     <section
//       className="promo-carousel"
//       aria-label="Promotional offers"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <div
//         className={`promo-slide promo-slide-${activeSlide.theme}`}
//         style={{ backgroundImage: `url(${activeSlide.image})` }}
//         key={activeSlide.id}
//       >
//         <div className="promo-overlay"></div>

//         <div className="promo-content">
//           <span className="promo-eyebrow">
//             {activeSlide.eyebrow}
//           </span>

//           <h2 className="promo-title">
//             {activeSlide.title}
//             <span>{activeSlide.highlight}</span>
//           </h2>

//           <p className="promo-description">
//             {activeSlide.description}
//           </p>

//           <ul className="promo-features">
//             {activeSlide.features.map((feature) => (
//               <li key={feature}>{feature}</li>
//             ))}
//           </ul>

//           {(activeSlide.price || activeSlide.oldPrice) && (
//             <div className="promo-pricing">
//               {activeSlide.oldPrice && (
//                 <span className="promo-old-price">
//                   {activeSlide.oldPrice}
//                 </span>
//               )}

//               {activeSlide.price && (
//                 <strong className="promo-price">
//                   {activeSlide.price}
//                 </strong>
//               )}

//               <span className="promo-price-note">
//                 {activeSlide.priceNote}
//               </span>
//             </div>
//           )}

//           <a
//             className="promo-button"
//             href={activeSlide.buttonLink}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {activeSlide.buttonText}
//             <ArrowUpRight size={18} />
//           </a>
//         </div>

//         <div className="promo-controls">
//           <button
//             type="button"
//             className="promo-arrow"
//             onClick={goToPrevious}
//             aria-label="Previous slide"
//           >
//             <ChevronLeft size={22} />
//           </button>

//           <div className="promo-dots">
//             {slides.map((slide, index) => (
//               <button
//                 key={slide.id}
//                 type="button"
//                 className={`promo-dot ${
//                   index === activeIndex ? "active" : ""
//                 }`}
//                 onClick={() => setActiveIndex(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//                 aria-current={index === activeIndex ? "true" : undefined}
//               />
//             ))}
//           </div>

//           <button
//             type="button"
//             className="promo-arrow"
//             onClick={goToNext}
//             aria-label="Next slide"
//           >
//             <ChevronRight size={22} />
//           </button>

//           <button
//             type="button"
//             className="promo-pause"
//             onClick={() => setIsPaused((paused) => !paused)}
//             aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
//           >
//             {isPaused ? <Play size={16} /> : <Pause size={16} />}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
