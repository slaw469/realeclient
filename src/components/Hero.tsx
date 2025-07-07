import React, { useState, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
    'https://videos.pexels.com/video-files/2098989/2098989-uhd_2560_1440_30fps.mp4',
    'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4',
    'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4'
  ];

  const tabs = [
    { id: 'buy', label: 'BUY A HOME' },
    { id: 'sell', label: 'SELL A HOME' },
    { id: 'value', label: 'HOME VALUE' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multiple Background Videos */}
      {videos.map((video, index) => (
        <video
          key={index}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: index === currentVideoIndex ? 1 : 0 }}
          onLoadedData={() => console.log(`Video ${index} loaded`)}
          onError={(e) => console.error(`Video ${index} error:`, e)}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Your Utah County Real Estate Expert
          </h1>
          
          <p className="text-lg text-white/90 mb-8 font-light">
            Buy and sell real estate in Utah County with a trusted local expert.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'text-white border-white'
                    : 'text-white/70 border-transparent hover:text-white hover:border-white/50'
                }`}
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="American Fork, Lehi, Pleasant Grove, or zip code"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg text-white placeholder-white/70"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              SEARCH
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;