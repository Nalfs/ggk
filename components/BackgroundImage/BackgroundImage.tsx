import React from 'react'
import Heading from '../Heading';
import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div 
      className="bg-[url('/images/wow.jpg')] relative w-600 h-9 bg-cover bg-opacity-50" >
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
      <h1 className="text-4xl font-bold">Your Heading</h1>
      <Heading>Gamla Gubbar Kan</Heading>
    </div>
  </div>
  );
}
 /* style={{ backgroundImage: 'url("/images/wow.jpg")' }} */