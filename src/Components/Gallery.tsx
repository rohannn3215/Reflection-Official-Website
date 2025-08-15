// import React, { useState } from 'react';

// interface EventData {
//   id: number;
//   name: string;
//   videoUrl: string;
//   youtubeId?: string;
//   images: string[];
//   description: string;
//   category?: string;
//   duration?: string;
//   views?: string;
// }

// const events: EventData[] = [
//   {
//     id: 1,
//     name: "Reflection Event 1",
//     videoUrl: "https://youtu.be/TM_RRsHKSxk",
//     youtubeId: "TM_RRsHKSxk",
//     images: [
//       ""
//     ],
//     description: "Watch the highlights of Reflection Event 1.",
//     category: "Dance Performance",
//     duration: "3:45",
//     views: "2.5K views"
//   },
//   {
//     id: 2,
//     name: "Reflection Event 2",
//     videoUrl: "https://youtu.be/ptMWJaWjWgE",
//     youtubeId: "ptMWJaWjWgE",
//     images: [],
//     description: "Watch the highlights of Reflection Event 2.",
//     category: "Live Performance",
//     duration: "4:12",
//     views: "1.8K views"
//   },
//   {
//     id: 3,
//     name: "Reflection Event 3",
//     videoUrl: "https://youtu.be/-YnH5YqpIXs",
//     youtubeId: "-YnH5YqpIXs",
//     images: [],
//     description: "Watch the highlights of Reflection Event 3.",
//     category: "Choreography",
//     duration: "5:30",
//     views: "3.2K views"
//   },
//   {
//     id: 4,
//     name: "Reflection Event 4",
//     videoUrl: "https://youtu.be/SuzpFhrQqS8",
//     youtubeId: "SuzpFhrQqS8",
//     images: [],
//     description: "Watch the highlights of Reflection Event 4.",
//     category: "Group Dance",
//     duration: "6:15",
//     views: "4.1K views"
//   },
//   {
//     id: 5,
//     name: "Reflection Event 5",
//     videoUrl: "https://youtu.be/VT4WiSk0gtY",
//     youtubeId: "VT4WiSk0gtY",
//     images: [],
//     description: "Watch the highlights of Reflection Event 5.",
//     category: "Solo Performance",
//     duration: "2:58",
//     views: "1.5K views"
//   },
//   {
//     id: 6,
//     name: "Reflection Event 6",
//     videoUrl: "https://youtu.be/J7H5CxxBCMs",
//     youtubeId: "J7H5CxxBCMs",
//     images: [],
//     description: "Watch the highlights of Reflection Event 6.",
//     category: "Fusion Dance",
//     duration: "7:22",
//     views: "5.6K views"
//   },
//   {
//     id: 7,
//     name: "Reflection Event 7",
//     videoUrl: "https://youtu.be/PIuf71iR-DU",
//     youtubeId: "PIuf71iR-DU",
//     images: [],
//     description: "Watch the highlights of Reflection Event 7.",
//     category: "Contemporary",
//     duration: "4:45",
//     views: "2.9K views"
//   }
// ];

// const Gallery: React.FC = () => {
//   const [selectedEvent, setSelectedEvent] = useState<EventData>(events[0]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const categories = ['All', 'Dance Performance', 'Live Performance', 'Choreography', 'Group Dance', 'Solo Performance', 'Fusion Dance', 'Contemporary'];

//   const filteredEvents = events.filter(event => {
//     const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const handleEventSelect = (event: EventData) => {
//     setSelectedEvent(event);
//   };

//   return (
//     <div className="min-h-screen bg-[#121212] text-white flex">
//       {/* Left Sidebar - 20% width */}
//       <div className="w-1/5 bg-[#000000] border-r border-[#282828] flex flex-col">
//         {/* Sidebar Header */}
//         <div className="p-6 border-b border-[#282828]">
//           <div className="flex items-center space-x-3 mb-4">
//             <div className="w-8 h-8 bg-gradient-to-br from-[#1DB954] to-[#1ed760] rounded-full flex items-center justify-center">
//               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
//               </svg>
//             </div>
//             <h1 className="text-xl font-bold text-white">Reflection</h1>
//           </div>
          
//           {/* Search Bar */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search events..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-3 py-2 bg-[#282828] text-white placeholder-gray-400 rounded-md border border-[#404040] focus:outline-none focus:border-[#1DB954] focus:ring-1 focus:ring-[#1DB954] transition-all duration-200 text-sm"
//             />
//             <svg className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
//         </div>

//         {/* Category Filter */}
//         <div className="p-4 border-b border-[#282828]">
//           <h3 className="text-sm font-semibold text-gray-300 mb-3">Categories</h3>
//           <div className="space-y-1">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
//                   selectedCategory === category
//                     ? 'bg-[#1DB954] text-black'
//                     : 'text-gray-300 hover:bg-[#282828] hover:text-white'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Events List */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="p-4">
//             <h3 className="text-sm font-semibold text-gray-300 mb-3">Events</h3>
//             <div className="space-y-1">
//               {filteredEvents.map((event) => (
//                 <button
//                   key={event.id}
//                   onClick={() => handleEventSelect(event)}
//                   className={`w-full text-left px-3 py-3 rounded-md transition-all duration-200 group hover:translate-x-1 active:scale-95 ${
//                     selectedEvent.id === event.id
//                       ? 'bg-[#282828] text-white'
//                       : 'text-gray-300 hover:bg-[#282828] hover:text-white'
//                   }`}
//                 >
//                   <div className="flex items-center space-x-3">
//                     {/* Event Icon */}
//                     <div className={`w-8 h-8 rounded-md flex items-center justify-center ${
//                       selectedEvent.id === event.id ? 'bg-[#1DB954]' : 'bg-[#404040] group-hover:bg-[#1DB954]'
//                     } transition-colors duration-200`}>
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M8 5v14l11-7z"/>
//                       </svg>
//                     </div>
                    
//                     {/* Event Info */}
//                     <div className="flex-1 min-w-0">
//                       <h4 className={`text-sm font-medium truncate ${
//                         selectedEvent.id === event.id ? 'text-white' : 'text-gray-300'
//                       }`}>
//                         {event.name}
//                       </h4>
//                       <p className="text-xs text-gray-500 truncate">{event.category}</p>
//                     </div>
                    
//                     {/* Duration */}
//                     <span className="text-xs text-gray-500">{event.duration}</span>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Content Area - 80% width */}
//       <div className="flex-1 bg-[#121212] overflow-y-auto">
//         {/* Content Header */}
//         <div className="sticky top-0 z-40 bg-[#121212]/95 backdrop-blur-md border-b border-[#282828] px-8 py-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-2xl font-bold text-white">{selectedEvent.name}</h2>
//               <p className="text-gray-400 mt-1">{selectedEvent.category} • {selectedEvent.views}</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-2 text-sm text-gray-400">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>{selectedEvent.duration}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="p-8">
//           {/* Video Section */}
//           <div
//             key={selectedEvent.id}
//             className="mb-8 opacity-100 translate-y-0 transition-all duration-500"
//           >
//             <div className="bg-[#181818] rounded-xl overflow-hidden shadow-2xl border border-[#282828]">
//               {/* Video Player */}
//               <div className="relative aspect-video bg-black">
//                 {selectedEvent.youtubeId ? (
//                   <iframe
//                     src={`https://www.youtube.com/embed/${selectedEvent.youtubeId}?autoplay=0&rel=0&modestbranding=1&showinfo=0&controls=1`}
//                     title={selectedEvent.name}
//                     className="w-full h-full"
//                     frameBorder="0"
//                     allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     allowFullScreen
//                   />
//                 ) : (
//                   <video
//                     className="w-full h-full object-cover"
//                     controls
//                     autoPlay={false}
//                     muted
//                     loop
//                   >
//                     <source src={selectedEvent.videoUrl} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 )}
                
//                 {/* Video Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
//               </div>
              
//               {/* Video Info */}
//               <div className="p-6">
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-white mb-2">{selectedEvent.name}</h3>
//                     <p className="text-gray-300 leading-relaxed">{selectedEvent.description}</p>
//                   </div>
                  
//                   <button className="px-6 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold rounded-full transition-colors duration-200 flex items-center space-x-2">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M8 5v14l11-7z"/>
//                     </svg>
//                     <span>Watch Now</span>
//                   </button>
//                 </div>
                
//                 {/* Video Stats */}
//                 <div className="flex items-center space-x-6 text-sm text-gray-400">
//                   <div className="flex items-center space-x-2">
//                     <svg className="w-4 h-4 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
//                     </svg>
//                     <span>{selectedEvent.views}</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <span>{selectedEvent.duration}</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
//                     </svg>
//                     <span>{selectedEvent.category}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Images Section */}
//           <div
//             key={`${selectedEvent.id}-images`}
//             className="opacity-100 translate-y-0 transition-all duration-500 delay-200"
//           >
//             <div className="bg-[#181818] rounded-xl p-6 border border-[#282828]">
//               <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
//                 <svg className="w-6 h-6 text-[#1DB954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//                 <span>Event Gallery</span>
//               </h3>
              
//               {selectedEvent.images.length > 0 ? (
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                   {selectedEvent.images.map((image, index) => (
//                     <div
//                       key={index}
//                       className="group relative aspect-square bg-[#282828] rounded-lg overflow-hidden cursor-pointer opacity-100 scale-100 transition-all duration-300"
//                       style={{ transitionDelay: `${index * 100}ms` }}
//                     >
//                       <img
//                         src={image}
//                         alt={`${selectedEvent.name} - Image ${index + 1}`}
//                         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                         onError={(e) => {
//                           e.currentTarget.src = "https://via.placeholder.com/300x300/1DB954/ffffff?text=Event+Image";
//                         }}
//                       />
//                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
//                       <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         {index + 1}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-12">
//                   <div className="w-16 h-16 bg-[#282828] rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <h4 className="text-lg font-semibold text-white mb-2">No Images Available</h4>
//                   <p className="text-gray-400">Images for this event will be added soon</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;