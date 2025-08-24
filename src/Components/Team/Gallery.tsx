import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';

// Lazy load heavy components
const VideoPlayer = lazy(() => import('./VideoPlayer'));

interface EventData {
  id: number;
  name: string;
  videoUrl: string;
  youtubeId?: string;
  images: string[];
  description: string;
}

const events: EventData[] = [
  {
    id: 1,
    name: "FlashMob 2k22",
    videoUrl: "https://youtu.be/PIuf71iR-DU?feature=shared",
    youtubeId: "PIuf71iR-DU",
    images: [
      "/Events/Flashmob22/IMG1.png",
      "/Events/Flashmob22/IMG2.png",
      "/Events/Flashmob22/IMG3.png"
    ],
    description: "An electrifying evening of hip hop dance performances featuring our talented dancers showcasing their skills in this high-energy event."
  },
  {
    id: 2,
    name: "FlashMob 2k24",
    videoUrl: "https://youtu.be/TM_RRsHKSxk?feature=shared",
    youtubeId: "TM_RRsHKSxk",
    images: [
      "/Images/classical1.jpg",
      "/Images/classical2.jpg",
      "/Images/classical3.jpg",
      "/Images/classical4.jpg",
      "/Images/classical5.jpg",
      "/Images/classical6.jpg",
      "/Images/classical7.jpg",
      "/Images/classical8.jpg"
    ],
    description: "Blending traditional classical dance with modern elements, creating a unique fusion that bridges the gap between heritage and contemporary expression."
  },
  {
    id: 3,
    name: "Reflections 2k25",
    videoUrl: "https://youtu.be/ptMWJaWjWgE?feature=shared",
    youtubeId: "ptMWJaWjWgE",
    images: [
      "/Events/Reflection25/IMG1.JPG",
      "/Events/Reflection25/IMG2.JPG",
      "/Events/Reflection25/IMG3.JPG",
      "/Events/Reflection25/IMG4.JPG",
      "/Events/Reflection25/IMG5.JPG",
      "/Events/Reflection25/IMG6.JPG",
      "/Events/Reflection25/IMG7.JPG",
      "/Events/Reflection25/IMG8.JPG",
      "/Events/Reflection25/IMG9.JPG",
      "/Events/Reflection25/IMG10.JPG",
      "/Events/Reflection25/IMG11.JPG",
      "/Events/Reflection25/IMG12.JPG",
      "/Events/Reflection25/IMG13.JPG",
      "/Events/Reflection25/IMG14.JPG",
      "/Events/Reflection25/IMG15.JPG",
      "/Events/Reflection25/IMG16.JPG",
      "/Events/Reflection25/IMG17.JPG",
      "/Events/Reflection25/IMG18.JPG",
      "/Events/Reflection25/IMG19.JPG",
      "/Events/Reflection25/IMG20.JPG",
      "/Events/Reflection25/IMG21.JPG",
      "/Events/Reflection25/IMG22.JPG",
      "/Events/Reflection25/IMG23.JPG",
      "/Events/Reflection25/IMG24.JPG",
      "/Events/Reflection25/IMG25.JPG",
      "/Events/Reflection25/IMG26.JPG",
      "/Events/Reflection25/IMG27.JPG",
      "/Events/Reflection25/IMG28.JPG"
    ],
    description: "Modern contemporary dance performances that push boundaries and explore new forms of artistic expression through movement and emotion."
  },
  {
    id: 4,
    name: "Garba Night",
    videoUrl: "https://youtu.be/J7H5CxxBCMs?feature=shared",
    youtubeId: "J7H5CxxBCMs",
    images: [
      "/Events/Garbanight22/IMG1.jpg",
      "/Events/Garbanight22/IMG2.jpg",
      "/Events/Garbanight22/IMG3.jpg",
      "/Events/Garbanight22/IMG4.jpg",
      "/Events/Garbanight22/IMG5.jpg",
      "/Events/Garbanight22/IMG6.jpg",
      "/Events/Garbanight22/IMG7.jpeg",
      "/Events/Garbanight24/IMG1.JPG",
      "/Events/Garbanight24/IMG2.JPG",
      "/Events/Garbanight24/IMG3.JPG",
      "/Events/Garbanight24/IMG4.JPG",
      "/Events/Garbanight24/IMG5.JPG",
      "/Events/Garbanight24/IMG6.JPG",
      "/Events/Garbanight24/IMG7.JPG",
      "/Events/Garbanight24/IMG8.JPG",
      "/Events/Garbanight24/IMG9.JPG",
      "/Events/Garbanight24/IMG10.JPG",
      "/Events/Garbanight24/IMG11.JPG",
      "/Events/Garbanight24/IMG12.JPG",
      "/Events/Garbanight24/IMG13.JPG",
      "/Events/Garbanight24/IMG14.JPG",
      "/Events/Garbanight24/IMG15.JPG",
      "/Events/Garbanight24/IMG16.JPG",
      "/Events/Garbanight24/IMG17.JPG",
      "/Events/Garbanight24/IMG18.JPG",
      "/Events/Garbanight24/IMG19.JPG",
      "/Events/Garbanight24/IMG20.JPG",
      "/Events/Garbanight24/IMG21.JPG",
      "/Events/Garbanight24/IMG22.JPG",
      "/Events/Garbanight24/IMG23.JPG",
      "/Events/Garbanight24/IMG24.JPG",
      "/Events/Garbanight24/IMG25.JPG",
      "/Events/Garbanight24/IMG26.JPG"
    ],
    description: "Vibrant Bollywood dance extravaganza featuring colorful costumes, energetic choreography, and the spirit of Indian cinema brought to life."
  },
  {
    id: 5,
    name: "FlashMob",
    videoUrl: "https://youtu.be/VT4WiSk0gtY?feature=shared",
    youtubeId: "VT4WiSk0gtY",
    images: [
    ],
    description: "Intense street dance competition where our dancers showcase their raw talent, creativity, and competitive spirit in electrifying battles."
  },
  {
    id: 6,
    name: "FlashMob 2k22",
    videoUrl: "https://youtu.be/PIuf71iR-DU?feature=shared",
    youtubeId: "PIuf71iR-DU",
    images: [
    ],
    description: "Elegant jazz and rhythmic tap performances that showcase the timeless beauty of American dance traditions with modern flair."
  },
  {
    id: 7,
    name: "Freshers Party",
    videoUrl: "https://youtu.be/SuzpFhrQqS8?feature=shared",
    youtubeId: "SuzpFhrQqS8",
    images: [
      "/Events/Fresher's22/IMG1.jpeg",
      "/Events/Fresher's22/IMG2.jpeg",
      "/Events/Fresher's22/IMG3.jpeg",
      "/Events/Fresher's22/IMG4.jpeg",
      "/Events/Fresher's22/IMG5.jpeg",
      "/Events/Fresher's22/IMG6.jpeg",
      "/Events/Fresher's22/IMG7.jpeg",
      "/Events/Fresher's22/IMG8.jpeg",
      "/Events/Fresher's22/IMG9.jpeg",
      "/Events/Fresher's22/IMG10.jpeg",
      "/Events/Freshers24/IMG1.JPG",
      "/Events/Freshers24/IMG2.JPG",
      "/Events/Freshers24/IMG3.JPG",
      "/Events/Freshers24/IMG4.JPG",
      "/Events/Freshers24/IMG5.JPG",
      "/Events/Freshers24/IMG6.JPG",
      "/Events/Freshers24/IMG7.JPG",
      "/Events/Freshers24/IMG8.JPG",
      "/Events/Freshers24/IMG9.JPG",
      "/Events/Freshers24/IMG10.JPG",
      "/Events/Freshers24/IMG11.JPG",
      "/Events/Freshers24/IMG12.JPG",
      "/Events/Freshers24/IMG13.JPG",
      "/Events/Freshers24/IMG14.JPG",
      "/Events/Freshers24/IMG15.JPG",
      "/Events/Freshers24/IMG16.JPG",
      "/Events/Freshers24/IMG17.JPG",
      "/Events/Freshers24/IMG18.JPG",
      "/Events/Freshers24/IMG19.JPG",
      "/Events/Freshers24/IMG20.JPG",
      "/Events/Freshers24/IMG21.JPG",
      "/Events/Freshers24/IMG22.JPG",
      "/Events/Freshers24/IMG23.JPG",
      "/Events/Freshers24/IMG24.JPG",
      "/Events/Freshers24/IMG25.JPG",
      "/Events/Freshers24/IMG26.JPG",
      "/Events/Freshers24/IMG27.JPG",
      "/Events/Freshers24/IMG28.JPG",
      "/Events/Freshers24/IMG29.JPG",
      "/Events/Freshers24/IMG30.JPG",
      "/Events/Freshers24/IMG31.JPG",
      "/Events/Freshers24/IMG32.JPG",
      "/Events/Freshers24/IMG33.JPG",
      "/Events/Freshers24/IMG34.JPG",
      "/Events/Freshers24/IMG35.JPG",
      "/Events/Freshers24/IMG36.JPG",
      "/Events/Freshers24/IMG37.JPG",
      "/Events/Freshers24/IMG38.JPG",
      "/Events/Freshers24/IMG39.JPG",
      "/Events/Freshers24/IMG40.JPG",
      "/Events/Freshers24/IMG41.JPG",
      "/Events/Freshers24/IMG42.JPG",
      "/Events/Freshers24/IMG43.JPG"
    ],
    description: "Passionate Latin dance performances featuring salsa, bachata, and cha-cha with authentic rhythms and vibrant energy."
  },
];

// Removed animated background/effects components

// Simplified Event Card (no animations)
const EventCard: React.FC<{ event: EventData; isSelected: boolean; onClick: () => void }> = ({ event, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-2xl p-6 flex-shrink-0 w-48 relative overflow-hidden ${
        isSelected
          ? 'bg-gray-800 border-2 border-[#73FF8F]'
          : 'bg-black/60 border border-white/20'
      }`}
    >
      <div className="text-center relative z-10">
        <h3 className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-gray-300'}`}>
          {event.name}
        </h3>
      </div>
    </div>
  );
};

// Image Modal Component (no animations)
const ImageModal: React.FC<{ 
  isOpen: boolean; 
  image: string; 
  eventName: string; 
  imageIndex: number; 
  totalImages: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ isOpen, image, eventName, imageIndex, totalImages, onClose, onNext, onPrev }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div ref={modalRef} className="relative max-w-7xl max-h-full">
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 z-10 bg-black text-white p-3 rounded-full border border-white/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {totalImages > 1 && (
              <>
                <button
                  onClick={onPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full border border-white/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={onNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full border border-white/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <img
              src={image}
              alt={`${eventName} - Image ${imageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl"
            />

            <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white px-4 py-3 rounded-xl border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{eventName}</h3>
                  <p className="text-gray-300 text-sm">Image {imageIndex + 1} of {totalImages}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Image Grid (no animations)
const ImageGrid: React.FC<{ 
  images: string[]; 
  visibleCount: number; 
  eventName: string;
  onImageClick: (index: number) => void;
}> = ({ images, visibleCount, eventName, onImageClick }) => {
  const displayedImages = images.slice(0, visibleCount);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 px-2 sm:px-4 md:px-6 w-full">
      {displayedImages.map((image, index) => (
        <div
          key={index}
          onClick={() => onImageClick(index)}
          className="group relative aspect-square bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border border-gray-800 hover:border-gray-700 transition-colors"
        >
          <img
            src={image}
            alt={`${eventName} - Image ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/300x300/111827/ffffff?text=Event+Image";
            }}
          />
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-full border border-white/20">
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Gallery Component
const Gallery: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData>(events[2]);
  const [visibleImages, setVisibleImages] = useState(6);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleEventSelect = (event: EventData) => {
    setSelectedEvent(event);
    setVisibleImages(6);
    setIsImageModalOpen(false);
  };

  const showMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 4, selectedEvent.images.length));
  };

  const showAllImages = () => {
    setVisibleImages(selectedEvent.images.length);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsImageModalOpen(true);
  };

  const handleModalClose = () => {
    setIsImageModalOpen(false);
  };

  const handleNextImage = () => {
    setSelectedImageIndex(prev => 
      prev === selectedEvent.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(prev => 
      prev === 0 ? selectedEvent.images.length - 1 : prev - 1
    );
  };

  const hasMoreImages = visibleImages < selectedEvent.images.length;

  // Removed animation variants

  return (
    <div className="min-h-screen bg-transparent relative">
      {/* Hero Section */}
      <div className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">Reflection's Unfolded</h1> */}
          <div className="flex justify-center items-center relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
        <h1 
    className="relative z-20 text-[12vw] md:text-8xl font-bold tracking-tight 
      bg-gradient-to-r from-[#00C8FF] via-[#73FF8F] to-[#FFB300] 
      bg-clip-text text-transparent animate-gradient-x select-none"
    style={{
      WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 30%, black 100%)',fontFamily: 'serif'
    }}
  >
    Reflection's Unfolded
  </h1>
      </div>

      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl py-10 mx-auto">
            Explore our collection of dance performances and events
          </p>
        </div>
      </div>

      {/* Event Selection */}
      <div className="px-4 pb-16 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Select Event</h2>
          
          <div className="relative group">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full border border-white/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full border border-white/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-4 py-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  isSelected={selectedEvent.id === event.id}
                  onClick={() => handleEventSelect(event)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="px-4 pb-16 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 relative">
            <div className="relative z-10">
              <Suspense fallback={<div className="aspect-video bg-gray-800 rounded-t-3xl flex items-center justify-center text-white">Loading video...</div>}>
                <VideoPlayer event={selectedEvent} />
              </Suspense>
              {/* Event Info */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                      <span className="text-4xl">🎭</span>
                      {selectedEvent.name}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 relative overflow-hidden">
                    <div className="text-center relative z-10">
                      <div className="text-4xl mb-3">📸</div>
                      <h3 className="text-white font-bold text-xl mb-2">Event Highlights</h3>
                      <div className="text-[#00C8FF] font-semibold text-3xl mb-2">
                        {selectedEvent.images.length} Photos
                      </div>
                      <div className="text-gray-400 text-sm">
                        HD Quality • Professional Recording
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="px-0 pb-20 z-10 relative">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Event Gallery</h2>

          <ImageGrid
            images={selectedEvent.images}
            visibleCount={visibleImages}
            eventName={selectedEvent.name}
            onImageClick={handleImageClick}
          />

          {/* Load More Buttons */}
          {hasMoreImages && (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={showMoreImages}
                className="px-8 py-4 bg-black/60 text-white font-medium rounded-xl border border-white/20"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Load More
                </span>
              </button>
              
              <button
                onClick={showAllImages}
                className="px-8 py-4 bg-[#73FF8F] text-black font-semibold rounded-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Show All
                </span>
              </button>
            </div>
          )}

          {/* Image Counter */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-lg">
              Showing <span className="text-[#73FF8F] font-semibold">{visibleImages}</span> of <span className="text-[#73FF8F] font-semibold">{selectedEvent.images.length}</span> images
            </p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        image={selectedEvent.images[selectedImageIndex]}
        eventName={selectedEvent.name}
        imageIndex={selectedImageIndex}
        totalImages={selectedEvent.images.length}
        onClose={handleModalClose}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
};

export default Gallery;

