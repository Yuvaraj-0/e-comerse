import React, { useEffect, useState } from 'react';

const images = [
  'https://imgs.search.brave.com/LDDUJgN8elha5tgRWWZRl3_xg9h4af5_9ZCF6z-znq4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0cv/MzEvaW1nMjQvV2ly/ZWxlc3Mvamtrbm5l/dC9KdW5lL3JlYWxt/ZS83MF9UdXJiby5f/U1M0MDBfUUw4NV9G/TXBuZ18ucG5n',
  'https://imgs.search.brave.com/6MryxEI1TlEKxG1mhSyRAUIInxRP4aFrbz6QT31Fsw0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbXMz/LmRpZ2l0YWxvY2Vh/bnNwYWNlcy5jb20v/Z3BjZG4vcHJvbW90/aW9ucy9ob2xpLW1v/YmlsZS1vZmZlcnMt/dG9kYXktZ29wYWlz/YS5qcGc',
  'https://imgs.search.brave.com/rTAeGOmefTOYrVUffsALoA17EsAJUoUq3LhU19IHolk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYXJs/aW5ncmV0YWlsLmNv/bS9jZG4vc2hvcC9m/aWxlcy9XZWJzaXRl/VGhlbWUtMTRfNjAw/eC5qcGc_dj0xNzQ2/MjY4Njk4',
];
const AutoCar = () => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000); // ⏱️ change every 1 second
  
      return () => clearInterval(timer);
    }, []);
  
    return (
        <div className="w-screen h-64 overflow-hidden">
        <img
          src={images[index]}
          alt="slide"
          className="w-screen h-64 object-cover"
        />
      </div>
    );
  };
  
  export default AutoCar;