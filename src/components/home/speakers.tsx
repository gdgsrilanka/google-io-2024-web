'use client';
import React, { useEffect, useState } from 'react';

interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  sessions: { id: number; name: string }[];
  isTopSpeaker: boolean;
  links: any[];
  questionAnswers: any[];
  categories: any[];
}

const Speakers: React.FC = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        if (!process.env.NEXT_PUBLIC_SPEAKERS_API_URL) {
          throw new Error('NEXT_PUBLIC_SPEAKERS_API_URL is not defined in environment variables.');
        }
        const response = await fetch(process.env.NEXT_PUBLIC_SPEAKERS_API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch speakers');
        }
        const data = await response.json();
        setSpeakers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching speakers:', error);
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  return (
    <section className="container max-w-8xl min-h-screen flex flex-col items-center justify-center mt-10">
      <h1 className="xl:text-6xl lg:text-5xl text-4xl font-normal mb-16 text-center">Our Amazing Speaker Lineup</h1>
      {loading ? (
        <p className="text-2xl">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24 lg:gap-x-36 gap-y-10">
          {speakers.map(speaker => (
            <div key={speaker.id} className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-4">
                <img
                  src={speaker.profilePicture}
                  alt={`${speaker.fullName}'s profile`}
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute inset-0 rounded-full before:absolute before:inset-0.5 before:rounded-full before:border-2 before:border-transparent before:z-10 after:absolute after:inset-[-0.5rem] after:rounded-full after:bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 after:p-[2px] after:z-[-1]"></div>
              </div>
              <h2 className="text-xl font-semibold text-center">{speaker.fullName}</h2>
              <p className="text-gray-400 text-center">{speaker.tagLine}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Speakers;
