import React, { useState } from "react";

interface TeamMember {
  Name: string;
  Role: string;
  photo: string;
  Year?: string;
}

interface TeamCardProps {
  member: TeamMember;
  isLeader?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, isLeader = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const glowColor = isLeader
    ? "rgba(168, 85, 247, 0.5)" // Purple glow
    : "rgba(34, 211, 238, 0.5)"; // Teal glow

  return (
    <div
      className="cursor-pointer hover:scale-105 transition-transform duration-300 ease-out"
      style={{ transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
    >
      <div
        className="relative w-64 h-80 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden shadow-lg transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow Background */}
        {isHovered && (
          <div
            className="absolute -inset-1 rounded-2xl z-0 opacity-100 transition-opacity duration-400"
            style={{
              boxShadow: `0 0 20px ${glowColor}, 0 0 40px ${glowColor}, 0 0 80px ${glowColor}`,
            }}
          />
        )}

        {/* Profile Image */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <img
            src={member.photo}
            alt={member.Name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hover Info Panel */}
        <div
          className={`absolute bottom-0 left-0 right-0 z-20 bg-black/70 backdrop-blur-sm px-4 py-3 flex transition-all duration-400 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="w-1 bg-red-500 rounded-sm mr-3"></div>
          <div>
            <h3 className="text-white font-semibold text-sm">{member.Name}</h3>
            <p className="text-red-200 text-xs mt-1">{member.Role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
