import React, { useState } from 'react';
import { Fingerprint, MapPin, MessageCircleQuestion, Info, Phone, Mail, Building, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import GoogleMap from './GoogleMap';

// Animated card component with hover effects
const InfoCard = ({ icon: Icon, title, description, hasButton = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg
        transition-all duration-500 transform ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16
          rounded-2xl rotate-45 bg-black hover:bg-amber-600 groups transition-all duration-500
          ${isHovered ? 'rotate-[225deg]' : ''}`}>
          <Icon className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            text-white h-8 w-8 transition-all duration-500
            ${isHovered ? '-rotate-[225deg]' : '-rotate-45'}`} />
        </div>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// Interactive contact card with animation
const ContactCard = ({ icon: Icon, label, value, isLink = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group p-4 rounded-xl transition-all duration-300
        ${isHovered ? 'bg-black/50 text-white' : 'bg-white'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-full transition-all duration-300
          ${isHovered ? 'bg-white' : 'bg-black'}`}>
          <Icon className={`h-6 w-6 transition-all duration-300
            ${isHovered ? 'text-black' : 'text-white'}`} />
        </div>
        <div>
          <p className="text-sm font-medium opacity-60">{label}</p>
          {isLink ? (
            <a
              href={value.startsWith('mailto') ? value : `tel:${value}`}
              className={`md:text-lg text-[15px] font-bold hover:underline transition-all duration-300
                ${isHovered ? 'text-amber-300' : 'text-amber-500'}`}
            >
              {value.replace('mailto:', '')}
            </a>
          ) : (
            <p className="text-lg font-bold">{value}</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Accreditation card with hover effect
const AccreditationCard = ({ title, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl transition-all duration-500
        ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 bg-white">
        <h3 className="text-xl font-bold text-center mb-6">{title}</h3>
        <div className={`relative transform transition-all duration-500
          ${isHovered ? 'scale-110' : 'scale-100'}`}>
          <img
            src={image}
            alt={title}
            className="mx-auto object-contain"
            style={{ height: title.includes('Member') ? '80px' : '128px' }}
          />
        </div>
      </div>
      <div className={`absolute inset-0 bg-gradient-to-tr from-amber-300/20 to-transparent
        transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

const About = () => {
  const infoCards = [
    {
      icon: Fingerprint,
      title: "What We Do",
      description: "Timeless Accesseries, with innovaition and Style."
    },
    {
      icon: MessageCircleQuestion,
      title: "Why Choose Us",
      description: "Experience the perfect blend of Tradition , Art and Quality with Affordability."
    },
    {
      icon: Info,
      title: "Our Mission",
      description: "Our Aim is to please our customers with Authentic Elegant style that is unique and Artistic.Our Leather accessories will enhance your beauty as you knon when you look good OUTSIDE you'll feel good INSIDE"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 select-none">
      {/* Hero Section */}
      <div className="text-center mb-24">
        <h1 className="text-4xl animate-pulse transition-all md:text-5xl font-bold mb-6">
          The Authentic Boulevard
          <span className="block animate-pulse text-amber-700 mt-3">We don't just craft accesseries but Memories</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">

        </p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 pt-12">
        {infoCards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>

      {/* Contact Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard
            icon={Phone}
            label="Call Us"
            value="+27 78 715 8533"
            isLink={true}
          />
          <ContactCard
            icon={Mail}
            label="Email Us"
            value="mailto:theauthenticboulevard@gmail.com"
            isLink={true}
          />
          <ContactCard
            icon={Building}
            label="Visit Us"
            value=""
          />
        </div>
        <GoogleMap className="mt-4"/>
      </div>
    </div>
  );
};

export default About;
