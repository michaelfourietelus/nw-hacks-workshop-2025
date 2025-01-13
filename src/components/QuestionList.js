import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  // useEffect to fetch data from Firestore and update questions state on component mount
  useEffect(() => {
    
  }, []);

  // Function to delete a question from Firestore
  const handleDelete = async (id) => {
    
  };

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {questions.map((question) => (
        <li 
          key={question.id} 
          // Logic for showing delete button on hover
          onMouseEnter={ }
          onMouseLeave={ }
          style={{ 
            position: 'relative', 
            padding: '10px', 
            border: '1px solid #ddd', 
            marginBottom: '5px',
            borderRadius: '5px'
          }}
        >
          {/* Render the question text here */}
          {}

          {/* Handle hovering mouse over a question to show delete button */}
          {hoveredId === question.id && (
            <button
            // Logic for deleting a question on button click
              onClick={}
              style={{
                position: 'absolute',
                right: '5px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '18px',
                color: 'red'
              }}
            >
              ×
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default QuestionList;