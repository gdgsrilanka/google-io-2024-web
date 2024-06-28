"use client";

import { useEffect, useState } from 'react';

const Agenda = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch("https://sessionize.com/api/v2/qainm5td/view/GridSmart")
      .then(response => response.text())
      .then(data => {
        setContent(data);
      })
      .catch(error => {
        console.error('Error fetching the session data:', error);
      });

    // Clean up script when component unmounts
    return () => {
      setContent('');
    };
  }, []);

  return (

    <div>
      <section className="container max-w-8xl h-screen flex flex-col items-center justify-center">
      {/* Placeholder while loading */}
      {content ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <p>Loading agenda...</p>
      )}
      </section>
      
    </div>
  );
};

export default Agenda;
