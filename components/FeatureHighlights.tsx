import React from "react";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center">
    <div className="bg-lime-400 rounded-full p-3 mb-4">
      <span className="text-gray-800 text-2xl">{icon}</span>
    </div>
    <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeatureHighlights: React.FC = () => {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        How to Use
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Feature
          icon="📝"
          title="Enter Details"
          description="Fill in your contact information in the form provided"
        />
        <Feature
          icon="🎨"
          title="Customize"
          description="Personalize your vCard with additional fields if needed"
        />
        <Feature
          icon="📱"
          title="Generate QR"
          description="Click 'Generate vCard' to create your unique QR code"
        />
        <Feature
          icon="📲"
          title="Share QR Code"
          description="Display the QR code for others to scan with their phones"
        />
        <Feature
          icon="💾"
          title="Save vCard"
          description="Download the vCard file for personal use or sharing"
        />
        <Feature
          icon="📇"
          title="Add to Contacts"
          description="Scan the QR code to instantly add the contact to your phone"
        />
      </div>
    </div>
  );
};

export default FeatureHighlights;
