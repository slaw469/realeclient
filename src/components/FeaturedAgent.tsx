import React from 'react';

const FeaturedAgent = () => {
  return (
    <section id="agent" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Featured Agent</h2>
            
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              My name is Connor Lyon, I am a dedicated real estate agent in Utah County, I am passionate about helping buyers and sellers navigate the exciting world of real estate. Whether you're purchasing your first home, upgrading to your dream property, or selling to start a new chapter, I am here to guide you every step of the way.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              With a strong knowledge of the local market, a commitment to top-notch service, and a keen eye for detail, I strive to make every transaction as smooth and stress-free as possible. I take pride in providing clear communication, strong negotiation skills, and a personalized approach tailored to your unique needs.
            </p>

            {/* Agent Name and Button */}
            <div className="flex items-center gap-6 pt-6">
              <div>
                <h3 className="text-2xl font-light text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Connor Lyon</h3>
                <p className="text-gray-600 font-light">Licensed Real Estate Agent</p>
                <p className="text-gray-600 font-light text-sm">The Perry Group</p>
              </div>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Agent Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden">
              <img
                src="/headshot.webp"
                alt="Connor Lyon"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">5.0</div>
                <div className="text-sm text-gray-600 font-light">★★★★★</div>
                <div className="text-xs text-gray-500 font-light">5 Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgent;