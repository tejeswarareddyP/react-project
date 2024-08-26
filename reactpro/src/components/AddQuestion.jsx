import React, { useState } from 'react';

const AddQuestion = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle adding a question (e.g., sending it to an API or storing in state)
    console.log('Question Submitted:', question);
    setQuestion(''); // Clear the input field after submission
  };

  return (
    <div>
      <h1>Ask a Question</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          rows="5"
          cols="50"
        ></textarea>
        <br />
        <button type="submit">Submit Question</button>
      </form>
    </div>
  );
};

export default AddQuestion;
