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
- **Team Mode**: Two-player turn-based gameplay with:
  - Separate score tracking for each player
  - Player turn indicators
  - Final winner determination
  - Tie game handling
- **Tips Page**: Comprehensive guide that appears before gameplay including:
  - Step-by-step game rules
  - Pro tips for detecting fake news
  - Game mode explanations
  - Strategy advice
- **Smart Question System**: 50+ diverse questions with intelligent rotation:
  - No immediate repetition of questions
  - Covers multiple categories (science, health, technology, politics, etc.)
  - Reliable fake news examples from real conspiracy theories
  - Educational explanations for each fake headline

## Game Modes

1. **Single Player**: Play alone and beat your high score
   - Infinite questions for endless practice
   - Smart question rotation prevents repetition
   - Perfect for improving your fake news detection skills
2. **Team Mode**: Two players take turns
   - Exactly 10 questions for fair competition
   - Turn-based gameplay with score comparison
   - Smart question rotation ensures variety

## Question Categories

The game includes 50+ diverse questions covering:
- **Science & Technology**: AI, space exploration, medical breakthroughs
- **Health & Medicine**: Vaccines, treatments, medical research
- **Conspiracy Theories**: Debunked myths and pseudoscience
- **Environmental Issues**: Climate change, conservation, renewable energy
- **Historical Myths**: Ancient civilizations, archaeological hoaxes
- **Supernatural Claims**: Mythical creatures, paranormal phenomena
- **Government & Politics**: Secret societies, hidden agendas
- **Technology Myths**: Future predictions, impossible inventions

## How to Play

1. **Read the Tips**: Start with the comprehensive tips page to learn the rules
2. **Choose Game Mode**: Select between Single Player or Team Mode
3. **Read Questions Carefully**: One headline in each question is fake
4. **Answer Within 10 Seconds**: Use the countdown timer to make your choice
5. **Review Explanations**: Learn why each fake headline is fake
6. **Track Your Progress**: Monitor your score and question count
7. **Return to Home**: Use the home button to change modes or restart

## Tips for Success

- **Look for sensational language** and extreme claims
- **Check if stories seem too good to be true**
- **Pay attention to timing and context**
- **Trust your instincts** - if it feels off, it probably is!
- **Use the 10-second timer wisely** - don't rush but don't overthink
- **Learn from explanations** - each fake headline teaches you something new

## Smart Question Rotation

The game features intelligent question distribution:
- **No Immediate Repetition**: Questions won't repeat until most others have been used
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
- Smart algorithms for question rotation
