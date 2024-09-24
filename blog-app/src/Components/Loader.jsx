import React from "react";
import spinner from '../assets/loader.gif'
export default function LoadingSpinner() {
    return (
      <div className="flex justify-center items-center h-[62vh]">
 <img className="h-12 w-12"  src={spinner} alt="" />
  <h1>loading...</h1>
      </div>
    );
  }