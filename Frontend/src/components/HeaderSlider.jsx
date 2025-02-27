// import { useState, useEffect } from 'react';
// import breakfast from '../assets/breakfast.jpg';
// import lunch from '../assets/lunch.jpg';
// import dinner from '../assets/dinner.jpg';
// import desserts from '../assets/desserts.jpg';
// import beverages from '../assets/beverages.jpg';

// const sliderData = [
//   {
//     image: breakfast,
//     title: "Breakfast Delights",
//     description: "Start your day with our delicious breakfast selections",
//     buttonText: "View Breakfast Menu"
//   },
//   {
//     image: lunch,
//     title: "Lunch Specials",
//     description: "Perfect meals for your midday cravings",
//     buttonText: "Explore Lunch Options"
//   },
//   {
//     image: dinner,
//     title: "Dinner Excellence",
//     description: "Savor our evening dining experience",
//     buttonText: "See Dinner Menu"
//   },
//   {
//     image: desserts,
//     title: "Sweet Treats",
//     description: "Indulge in our heavenly desserts",
//     buttonText: "Browse Desserts"
//   },
//   {
//     image: beverages,
//     title: "Refreshing Beverages",
//     description: "Quench your thirst with our drink selection",
//     buttonText: "View Drinks"
//   }
// ];

// const HeaderSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   const goToSlide = (slideIndex) => {
//     setCurrentSlide(slideIndex);
//   };

//   return (
//     <div className="relative h-[600px] overflow-hidden">
//       <div 
//         className="flex transition-transform duration-500 ease-in-out h-full"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {sliderData.map((slide, index) => (
//           <div
//             key={index}
//             className="min-w-full h-full relative"
//           >
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <div className="text-center text-white px-4">
//                 <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
//                 <p className="text-xl mb-6">{slide.description}</p>
//                 <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
//                   {slide.buttonText}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <div className="absolute bottom-4 right-4 flex gap-2">
//         {sliderData.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               currentSlide === index ? 'bg-primary' : 'bg-white bg-opacity-50'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeaderSlider; 