import React from 'react'
import Navbar from '../components/Navbar'
export default function Mainlayout(props) {
  return (
    <>
     <Navbar/>
   {props.children}
   </>
   
  );
}
