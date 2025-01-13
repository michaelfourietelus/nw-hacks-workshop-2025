import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function QuestionForm() {
  // State for user question input

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Question Submit logic goes here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default QuestionForm;