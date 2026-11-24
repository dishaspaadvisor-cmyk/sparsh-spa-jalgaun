import React from "react";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { useCountAnimationOnView } from "../hooks/useCountAnimation";

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    location: "Jalgaon",
    feedback: "The spa session was deeply relaxing and the massage therapy helped release all my stress. The therapists are highly skilled, and the peaceful environment makes it the best spa experience.",
    rating: 5,
    service: "Deep Tissue Massage",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Vikas Patil",
    location: "Jalgaon",
    feedback: "Sparsh Spa Jalgaon has become my favorite wellness destination whenever I need to escape stress. The ambience is soothing, and the professional massage services are top-notch.",
    rating: 5,
    service: "Aromatherapy Session",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Suresh Desai",
    location: "Jalgaon",
    feedback: "I had an incredible wellness experience here. The full body massage was calming and therapeutic, leaving me light and stress-free. Highly recommended!",
    rating: 5,
    service: "Full Body Massage",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Rahul Sharma",
    location: "Jalgaon",
    feedback: "The staff at this spa are professional and friendly. I felt completely relaxed after my session, and it's now my go-to place for stress relief.",
    rating: 5,
    service: "Swedish Massage",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Rajesh Verma",
    location: "Jalgaon",
    feedback: "Outstanding service! The hot stone massage was extremely relaxing and refreshing. Sparsh Spa Jalgaon is one of the best luxury spas. Totally worth it!",
    rating: 5,
    service: "Hot Stone Massage",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "Nikhil Mehta",
    location: "Jalgaon",
    feedback: "The perfect place to unwind. The body scrub massage left my skin soft, smooth, and glowing. A must-visit spa for anyone looking for wellness and relaxation.",
    rating: 5,
    service: "Body Scrub & Massage",
    date: "3 days ago"
  }
];

const Testimonials = () => {
  // Counting animations for stats
  const { count: happyClients, ref: happyClientsRef } = useCountAnimationOnView(2500, 2500);
  const { count: rating, ref: ratingRef } = useCountAnimationOnView(4.9, 2000);
  const { count: satisfaction, ref: satisfactionRef } = useCountAnimationOnView(99, 2200);
  const { count: years, ref: yearsRef } = useCountAnimationOnView(5, 1800);

  return (
    <section className="relative bg-[#faf8f5] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-stone-200/60">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-200/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-amber-200/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 sm:mb-6 border border-amber-300 bg-amber-50/90 text-[#b58d20] shadow-sm">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-xs sm:text-sm font-semibold">Client Testimonials</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-stone-900 mb-3 sm:mb-4 lg:mb-6 leading-tight px-4">
            What Our <span className="text-[#b58d20]">Happy Clients</span> Say
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Real stories from our valued clients who experienced the luxury and relaxation at Sparsh Spa Jalgaon
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200/80 relative group flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full p-2.5 sm:p-3 shadow-lg">
                <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>

              {/* User Info */}
              <div>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base">{testimonial.name}</h4>
                    <BadgeCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{testimonial.location}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] fill-current" />
                    ))}
                  </div>
                </div>

                {/* Service Badge */}
                <div className="inline-flex items-center text-[#b58d20] px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-amber-200 bg-amber-50">
                  {testimonial.service}
                </div>

                {/* Feedback */}
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 italic">
                  "{testimonial.feedback}"
                </p>
              </div>

              {/* Date */}
              <div className="text-xs text-gray-400 mt-auto pt-3 border-t border-stone-100">
                {testimonial.date}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16">
          <div className="text-center bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-stone-200/80 hover:shadow-xl transition-all duration-300" ref={happyClientsRef}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#b58d20] to-amber-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              {happyClients}+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Happy Clients</div>
          </div>

          <div className="text-center bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-stone-200/80 hover:shadow-xl transition-all duration-300" ref={ratingRef}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#b58d20] to-amber-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              {rating.toFixed(1)}★
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Average Rating</div>
          </div>

          <div className="text-center bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-stone-200/80 hover:shadow-xl transition-all duration-300" ref={satisfactionRef}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#b58d20] to-amber-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              {satisfaction}%
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Satisfaction Rate</div>
          </div>

          <div className="text-center bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-stone-200/80 hover:shadow-xl transition-all duration-300" ref={yearsRef}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#b58d20] to-amber-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              {years}+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
