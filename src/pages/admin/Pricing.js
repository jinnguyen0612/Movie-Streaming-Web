import React, { useState } from 'react'

function Pricing() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const Head = "text-xs text-center text-main font-semibold px-6 py-2 uppercase";
  const Text = "text-sm text-center leading-6 whitespace-nowrap px-5 py-3";

  const Create = () =>{
    setShowModal(true); 
    setTitle("Create Genre");
  };
  const Edit = () =>{
    setShowModal(true); setTitle("Edit Genre");
  };
  const Submit = () =>{
    setShowModal(false);
  };

  const DataG = [
    {
      id: '1',
      name: 'Romantic',
    },
    {
      id: '2',
      name: 'Action',
    },
    {
      id: '3',
      name: 'Horror',
    },
    {
      id: '4',
      name: 'Comedy',
    },]

  return (
    <div>Pricing</div>
  )
}

export default Pricing