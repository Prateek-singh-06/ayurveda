import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

export default function Home() {
  return (
    <main className="flex   items-center justify-between">
      <div className="max-w-md bg-white mx-auto px-4 text-black min-h-screen">
      <h1 className="text-3xl mb-5 mt-7  font-serif font-bold">Leave a review</h1>
      <div className="mb-10">
        <h2 className="text-xl font-semibold my-2">Safety</h2>
        <div className="text-gray-500 font-medium text-xs mb-3" >What would you rate the safety of the product?</div>
        <div className="flex mb-5">
          <FaStar className="text-yellow-500 text-4xl mx-2" />
          <FaStar className="text-yellow-500 text-4xl mx-2" />
          <FaStar className="text-yellow-500 text-4xl mx-2" />
          <FaStar className="text-yellow-500 text-4xl mx-2" />
          <FaStar className="text-yellow-500 text-4xl mx-2" />
          
         
          
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-1">Communication</h2>
        <div className="text-gray-500 font-medium text-xs mb-3" >how would you rate the communication skills of the service provider?</div>
        <div className="flex mb-5 ">
          <FaStar className="text-yellow-500 text-4xl mx-2" />
          <FaStar className="text-yellow-500 text-4xl mx-2" />
          <FaStar className="text-yellow-500 text-4xl mx-2" />
          <FaStar className="text-yellow-500 text-4xl mx-2" />
          
          <FaStar className="text-gray-400 text-4xl mx-2" />
        </div>
      </div>
      <div className=" mb-10">
        <h2 className="text-xl font-semibold mb-1">Would you recommend Traustit?</h2>
        <div className="text-gray-500 font-medium text-xs mb-3">Based on your experience with our service, would you recommend Traustit to your friends?</div>
        <div className="flex text-4xl">
        <div className="flex">
        <AiFillDislike className="mx-3 text-gray-400" />
        <button  className="mr-2 text-base">No</button>
        </div>
        <div className="flex text-green-400">
        <AiFillLike className="mx-3"/>
        <button  className="mr-2 text-base">Yes</button>
        </div>
        </div>
        
      </div>
      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-1">Praise</h2>
        <div className="text-gray-500 font-medium text-xs mb-3">and we’re truly grateful for the exceptional experience!</div>
        <ul className="flex justify-between">
          <li className="border border-gray-300 px-2 py-1 rounded-full cursor-pointer bg-gray-100">Adventurous</li>
          <li className="border border-gray-300 px-2 py-1 rounded-full cursor-pointer bg-green-300">Clean</li>
          <li className="border border-gray-300 px-2 py-1 rounded-full cursor-pointer bg-gray-100 focus:bg-green-400">Good Listener</li>
        </ul>
      </div>
    </div>
    </main>
  );
}
