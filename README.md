# Spot the Fake News 🎯

A hackathon prototype game where players guess which headline is fake.

## Features

### Core Gameplay
- Multiple choice questions with fake news headlines
- Score tracking and game completion
- Immediate feedback on answers

### Stretch Features ✨
- **Countdown Timer**: 10-second countdown per round with visual progress bar
- **Enhanced Explanations**: Detailed popup after each round showing:
  - Whether your answer was correct/incorrect
  - Your selected answer
  - The correct answer
  - Detailed explanation of why the fake headline is fake
- **Team Mode**: Three-round competition with:
  - **Round 1**: Pick which headline is false (10 questions)
  - **Round 2**: Click for evidence - fact-check blurbs, sources, truth verification (10 questions)
  - **Round 3**: Analyze "Why is this misinformation?" with options like "No credible source," "Misleading statistic," "Clickbait wording" (10 questions)
  - Separate score tracking for each player and round
  - Player turn indicators
  - Final winner determination with round-by-round breakdown
  - Tie game handling
- **Single Player Mode**: Alternating question types:
  - **Headline Type**: Identify fake headlines
  - **Evidence Type**: Evaluate source reliability and fact-checking
  - **Misinformation Type**: Analyze why content is misleading
- **Tips Page**: Comprehensive guide that appears before gameplay including:
  - Step-by-step game rules
  - Pro tips for detecting fake news
  - Game mode explanations
  - Strategy advice
- **Smart Question System**: 30+ diverse questions organized by rounds and types:
  - No immediate repetition of questions
  - Covers multiple categories (science, health, technology, politics, etc.)
  - Reliable fake news examples from real conspiracy theories
  - Educational explanations for each fake headline

## Game Modes

1. **Single Player**: Practice and improve your skills
   - Alternates between three question types
   - Headline identification → Evidence evaluation → Misinformation analysis
   - Perfect for developing comprehensive fake news detection skills
2. **Team Mode**: Three-round competitive gameplay
   - **Round 1**: Headline identification (10 questions)
   - **Round 2**: Evidence and source evaluation (10 questions)
   - **Round 3**: Misinformation analysis (10 questions)
   - Turn-based gameplay with score comparison
   - Round-by-round scoring and final winner determination

## Question Types

### **Round 1: Headline Identification**
- "Pick which headline is false"
- Players identify fake news headlines from multiple options
- Covers various topics: science, health, technology, politics

### **Round 2: Evidence Evaluation**
- "Click for evidence - fact-check blurbs, where the story came from, or what the truth is"
- Players evaluate source reliability and fact-checking
- Teaches critical evaluation of information sources

### **Round 3: Misinformation Analysis**
- "Why is this misinformation?" with options like:
  - "No credible source"
  - "Misleading statistic"
  - "Clickbait wording"
  - "All of the above"
- Players analyze why content is misleading
- Develops deeper understanding of misinformation tactics

## How to Play

1. **Read the Tips**: Start with the comprehensive tips page to learn the rules
2. **Choose Game Mode**: Select between Single Player or Team Mode
3. **Round Structure**: 
   - **Team Mode**: Complete 3 rounds of 10 questions each
   - **Single Player**: Experience all three question types in rotation
4. **Answer Within 10 Seconds**: Use the countdown timer to make your choice
5. **Review Explanations**: Learn why each fake headline is fake
6. **Track Progress**: Monitor scores by round and overall performance
7. **Return to Home**: Use the home button to change modes or restart

## Tips for Success

- **Look for sensational language** and extreme claims
- **Check if stories seem too good to be true**
- **Pay attention to timing and context**
- **Trust your instincts** - if it feels off, it probably is!
- **Use the 10-second timer wisely** - don't rush but don't overthink
- **Learn from explanations** - each fake headline teaches you something new
- **Evaluate sources critically** - consider credibility and evidence
- **Recognize common misinformation patterns** - understand why content is misleading

## Smart Question System

The game features intelligent question distribution:
- **Round-Based Organization**: Questions are organized by difficulty and type
- **Type Rotation**: Single player mode alternates between all three question types
- **Balanced Distribution**: Ensures all question categories are represented
- **Learning Progression**: Players encounter diverse examples to improve skills
- **Fresh Experience**: Each playthrough feels different and engaging

## Local Development

The app is currently running on **http://localhost:3000**

To start the development server:
```bash
npm install
npm start
```

## Technologies Used

- React 18
- Tailwind CSS
- Modern JavaScript (ES6+)
- Responsive design for all devices
- State management with React hooks
- Smart algorithms for question rotation and round management
