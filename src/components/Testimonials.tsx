import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'KYLE S.',
      text: 'Connor really made the whole experience feel a lot less overwhelming than I expected. He was super responsive, easy to talk to, and always made sure I understood what was going on. I never felt rushed or pushed into anything, which I really appreciated.',
      location: 'Pleasant Grove, UT'
    },
    {
      name: 'KIES ABUSHALFEH',
      text: 'Working with Connor was a genuinely great experience. He\'s incredibly knowledgeable, professional, and easy to talk to. I appreciated how patient he was and how clearly he explained things throughout the process.',
      location: 'American Fork, UT'
    },
    {
      name: 'BRICE CHAPA',
      text: 'Connor has been a real pleasure to work with and I can\'t recommend him enough. From our first meeting, he was incredibly knowledgeable, professional, and dedicated to helping me find my perfect home. His excellent communication and responsiveness made the whole process smooth and stress-free.',
      location: 'American Fork, UT'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          transform: 'translateZ(-1px) scale(1.5)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>Client Testimonials</h2>
          <p className="text-lg text-white/80 font-light">
            What our clients say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Quote className="w-6 h-6 text-purple-600" />
              </div>
              
              <p className="text-white/90 mb-4 italic font-light">
                "{testimonial.text}"
              </p>
              
              <div className="text-sm font-medium text-white">
                {testimonial.name}
              </div>
              <div className="text-xs text-white/70">
                {testimonial.location}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
            READ MORE REVIEWS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;