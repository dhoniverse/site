import React, { useState } from 'react';
import { SCHEDULE } from '../constants';
import { Clock } from 'lucide-react';

const Schedule: React.FC = () => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const toggleEvent = (dayIndex: number, eventIndex: number) => {
    const eventId = `${dayIndex}-${eventIndex}`;
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  return (
    <section id="schedule" className="py-24 bg-[#2A221B] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-dhoni-text/10 pb-8">
          <div>
            <h2 className="text-5xl font-cinzel text-dhoni-text mb-2">Festival Timeline</h2>
            <p className="text-dhoni-gold font-sans tracking-widest uppercase">Dec 26 - 28, 2025</p>
          </div>
          <div className="mt-4 md:mt-0">
             <div className="flex items-center gap-2 text-dhoni-text/50 text-sm">
               <Clock size={16} />
               <span>Click events for details</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SCHEDULE.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-dhoni-dark/20 p-8 border-l-2 border-dhoni-gold/30 hover:border-dhoni-gold transition-colors duration-300 rounded-r-lg">
              <div className="mb-6">
                <h3 className="text-3xl font-playfair text-dhoni-text">{day.date}</h3>
                <span className="text-dhoni-gold font-sans uppercase text-sm tracking-wide">{day.day}</span>
              </div>
              <ul className="space-y-3">
                {day.events.map((item, eventIndex) => {
                  const eventId = `${dayIndex}-${eventIndex}`;
                  const isExpanded = expandedEvent === eventId;
                  
                  return (
                    <li 
                      key={eventIndex} 
                      className="relative"
                    >
                      {/* Event Title - Clickable */}
                      <div
                        onClick={() => toggleEvent(dayIndex, eventIndex)}
                        className="flex items-start gap-3 cursor-pointer group"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-dhoni-text/30 group-hover:bg-dhoni-gold transition-colors flex-shrink-0"></span>
                        <div className="flex-1">
                          <span className="font-sans text-dhoni-text/90 group-hover:text-dhoni-gold transition-colors">
                            {item.event}
                          </span>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded ? 'max-h-32 opacity-100 mt-3' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="ml-6 pl-4 border-l border-dhoni-gold/20 space-y-2">
                          <p className="text-sm text-dhoni-text/70 font-sans">
                            {item.description || "Join us for this spectacular event."}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-dhoni-gold">
                            <Clock size={12} />
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;