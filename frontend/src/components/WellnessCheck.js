import React, { useState } from 'react';
import { Container, Button, Box, Radio, RadioGroup, FormControlLabel, Typography, Paper } from '@mui/material';

const WellnessCheck = () => {
  const [showQuestions, setShowQuestions] = useState(false);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null)); // Initialize answers array

  const handleCheckUp = () => {
    setShowQuestions(true);
  };

  const handleChange = (index, event) => {
    const value = parseInt(event.target.value);
    const newAnswers = [...answers];
    newAnswers[index] = value; // Store the answer for the specific question
    setAnswers(newAnswers);
    setScore(newAnswers.reduce((acc, val) => acc + (val || 0), 0)); // Update the score based on answers
  };

  const calculateResult = () => {
    if (answers.includes(null)) { // Check if any question is unanswered
      alert("Please answer all questions before submitting.");
      return;
    }

    let resultStatus = '';

    if (score <= 10) {
      resultStatus = "You seem to be doing well. Keep up the good work!";
    } else if (score <= 20) {
      resultStatus = "You may be experiencing some mild symptoms. Consider reaching out to a mental health professional for support.";
    } else if (score <= 30) {
      resultStatus = "You may be experiencing moderate symptoms. It's a good idea to reach out to a mental health professional for support.";
    } else {
      resultStatus = "You may be experiencing severe symptoms. Please reach out to a mental health professional for support.";
    }

    setStatus(resultStatus);
    setSubmitted(true);
  };

  return (
    <Container maxWidth="sm">
      <Box my={5} textAlign="center">
        <Typography variant="h4" gutterBottom>Welcome to Our Website</Typography>
        <Button variant="contained" color="primary" onClick={handleCheckUp}>
          Check Up
        </Button>
      </Box>

      {showQuestions && (
        <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
          <Typography variant="h5" gutterBottom>Answer these questions:</Typography>
          <Box component="form">
            {questions.map((question, index) => (
              <Box key={index} mb={3}>
                <Typography variant="body1">{index + 1}. {question.label}</Typography>
                <RadioGroup onChange={(event) => handleChange(index, event)}>
                  <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                  <FormControlLabel value="1" control={<Radio />} label="Several days" />
                  <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
                  <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
                </RadioGroup>
              </Box>
            ))}
            <Button variant="contained" color="success" onClick={calculateResult}>
              Submit
            </Button>
          </Box>
        </Paper>
      )}

      {submitted && (
        <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
          <Typography variant="h5" gutterBottom>Your Mental Health Status:</Typography>
          <Typography variant="body1" id="status">{status}</Typography>
        </Paper>
      )}
    </Container>
  );
};

const questions = [
  { label: "How often have you felt overwhelmed or unable to cope with everyday tasks in the past two weeks?" },
  { label: "In the last week, how often have you experienced changes in your sleep patterns (sleeping too much or too little)?" },
  { label: "Over the past two weeks, how frequently have you felt restless or agitated?" },
  { label: "How often have you had difficulty enjoying activities you usually find pleasurable in the last week?" },
  { label: "In the past two weeks, have you felt a lack of energy or motivation to do things?" },
  { label: "How often have you experienced feelings of worthlessness or excessive guilt in the last week?" },
  { label: "Over the past two weeks, have you had thoughts of harming yourself or others?" },
  { label: "How often have you found it difficult to control your worries or fears in the last week?" },
  { label: "How often have you experienced significant changes in your appetite in the past two weeks?" },
  { label: "Have you withdrawn from social interactions or activities you used to enjoy in the last two weeks?" }
];

export default WellnessCheck;
