import React, { useState, useEffect } from "react";
import TeamData from "../Data/TeamData.json";
import TeamCard from "../Components/Team/TeamCard";
import RotatingText from "../Components/Team/RotatingText";
import styles from "./TeamPage.module.css";
    
interface TeamMember {
  Name: string;
  Role: string;
  photo: string;
  Year: string;
  Domain: string;
}

const domains = [
  "Dance",
  "Management",
  "Choreography",
  "Photography & Social Media",
];

const leadershipTeam: TeamMember[] = [
  {
    Name: "Pratik Patil",
    Role: "Head",
    photo: "/Images/pratik_patil.jpg",
    Year: "Btech",
    Domain: "Management",
  },
  {
    Name: "Mansi Bendale",
    Role: "Co-Head",
    photo: "/Images/Mansi Bendale.jpg",
    Year: "Btech",
    Domain: "Dance",
  },
];

const TeamPage: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>("Dance");
  const [isVisible, setIsVisible] = useState(false);
  const getDefaultVisibleCount = () =>
    typeof window !== "undefined" && window.innerWidth < 640 ? 4 : 8;
  const [visibleCount, setVisibleCount] = useState<number>(getDefaultVisibleCount());

  const filteredMembers = (TeamData as TeamMember[]).filter(
    (member) => member.Domain === selectedDomain
  );

  const handleShowMore = () => setVisibleCount((prev) => prev + 8);
  const handleShowLess = () => setVisibleCount(getDefaultVisibleCount());
  const handleDomainChange = (domain: string) => {
    setSelectedDomain(domain);
    setVisibleCount(getDefaultVisibleCount());
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white px-4 sm:px-8 lg:px-36 py-12">
      <div
        className={`text-center mb-12 transition-all duration-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 flex justify-center gap-2 flex-wrap">
          Talented individuals united by
          <RotatingText
            texts={["passion", "creativity", "dance"]}
            mainClassName="text-4xl md:text-5xl px-3 text-white"
            staggerFrom="last"
            staggerDuration={0.05}
            splitLevelClassName="overflow-hidden"
            rotationInterval={2000}
          />
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Meet the dynamic team behind Reflection, where each member brings a unique
          blend of skills and creativity to the stage.
        </p>
      </div>

      {/* Leadership Team */}
      <div
        className={`mb-16 transition-all duration-800 ease-out ${styles['delay-300']} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-2xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Leadership Team
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {leadershipTeam.map((member, index) => (
            <div
              key={member.Name}
              className={`transition-all duration-600 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${index === 0 ? styles['delay-400'] : styles['delay-500']}`}
            >
              <TeamCard member={member} isLeader />
            </div>
          ))}
        </div>
      </div>

      {/* Domain Buttons */}
      <div
        className={`overflow-x-auto mb-12 px-2 transition-all duration-600 ease-out ${styles['delay-500']} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex gap-4 w-max sm:w-full justify-start sm:justify-center">
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => handleDomainChange(domain)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-semibold transition-all duration-300
                ${
                  selectedDomain === domain
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#73FF8F] to-[#FFB300]"
                    : "text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00C8FF] hover:via-[#73FF8F] hover:to-[#FFB300]"
                }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>

      {/* Heading */}
      <h3
        className={`text-5xl p-5 font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#73FF8F] to-[#FFB300] transition-all duration-600 ease-out ${styles['delay-600']} ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {selectedDomain} Team
      </h3>

      {/* Team Cards - Centered and spaced vertically */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-20 justify-items-center transition-all duration-800 ease-out ${styles['delay-600']} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {filteredMembers.length > 0 ? (
          filteredMembers.slice(0, visibleCount).map((member, index) => (
            <div
              key={member.Name}
              className={`transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              } ${styles[`stagger-${index}`]}`}
            >
              <TeamCard member={member} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-gray-400">
              No members found in {selectedDomain}.
            </p>
          </div>
        )}
      </div>

      {/* Show More / Less */}
      {filteredMembers.length > 0 && (
        <div
          className={`flex justify-center mt-12 gap-4 transition-all duration-800 ease-out ${styles['delay-1200']} ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {visibleCount < filteredMembers.length && (
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full 
              font-medium hover:opacity-90 transition-all duration-300"
            >
              Show More
            </button>
          )}
          {visibleCount >= filteredMembers.length &&
            filteredMembers.length > getDefaultVisibleCount() && (
            <button
              onClick={handleShowLess}
              className="px-6 py-2 bg-gray-800 text-gray-300 rounded-full 
              font-medium hover:bg-gray-700 transition-all duration-300"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamPage;
