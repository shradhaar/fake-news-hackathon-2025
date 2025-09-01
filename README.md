# Clickbait Busters 🎯

A hackathon prototype game designed to help players develop critical thinking skills and identify fake news, misinformation, and clickbait content.

## 🎮 Core Gameplay and Stretch Features

### **Countdown Timer**
- **10 seconds per round** to answer each question
- Visual countdown with color changes (green → yellow → red)
- Automatic time-out if no answer is selected

### **Enhanced Explanations**
- **Detailed explanations popup** after each round
- Shows why the fake headline is fake
- Provides educational context and learning opportunities

### **Team Mode**
- **Two players take turns** answering questions
- **Separate score tracking** for each player
- **Competitive gameplay** with round-based scoring
- **3 rounds of competition** with 10 questions per round

## 🎯 Game Modes

### **Single Player Mode**
- **Infinite questions** - play as long as you want
- **Alternating question types** between three categories:
  - **Headline Identification**: Spot fake news headlines
  - **Evidence Evaluation**: Choose reliable information sources
  - **Misinformation Analysis**: Analyze why content is misleading
- **Smart question rotation** prevents immediate repetition

### **Team Mode**
- **3 rounds of competition**
- **10 questions per round** (30 total questions)
- **Round-specific question types**:
  - **Round 1**: Headline identification questions
  - **Round 2**: Evidence evaluation scenarios
  - **Round 3**: Misinformation analysis with examples
- **Separate scoring per round** and **total scores**
- **Winner determination** based on overall performance

## 🎲 How to Play

1. **Start the Game**: Choose between Single Player or Team Mode
2. **Read the Question**: Carefully read the question and all options
3. **Select Your Answer**: Click on the option you think is correct
4. **Review Explanation**: Learn why your answer was right or wrong
5. **Continue Playing**: Move to the next question or round
6. **Track Progress**: Monitor your score and round progress

## 🚀 Local Development

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation
```bash
# Clone the repository
git clone https://github.com/shradhaar/fake-news-hackathon-2025.git

# Navigate to the project directory
cd fake-news-hackathon-2025

# Install dependencies
npm install

# Start the development server
npm start
```

### Access the Game
Open your browser and navigate to: **http://localhost:3000**

## 🛠️ Technologies Used

- **Frontend**: React.js with modern hooks (useState, useEffect, useRef)
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React hooks for game state
- **Question System**: JSON-based question database with smart rotation
- **Timer System**: JavaScript setInterval for countdown functionality

## 🎯 Smart Question System

### **50+ Diverse Questions**
- **Headline Identification**: 20 questions about fake news headlines
- **Evidence Evaluation**: 20 real-world scenarios for students/teenagers
- **Misinformation Analysis**: 20 examples with detailed explanations

### **No Immediate Repetition**
- **Smart rotation algorithm** prevents the same question from appearing twice in a row
- **Question tracking** ensures variety and balanced learning
- **Reset mechanism** allows eventual reuse in infinite mode

### **Balanced Distribution**
- **Equal representation** of all question types
- **Progressive difficulty** within each category
- **Real-world relevance** for practical learning

## 📚 Question Categories

### **Headline Identification (Round 1)**
- **Fake news headlines** that sound too good to be true
- **Conspiracy theories** and pseudoscience claims
- **Clickbait language** and sensationalist wording
- **Scientific misinformation** and health hoaxes

### **Evidence Evaluation (Round 2)**
- **Real-world scenarios** students/teenagers might encounter:
  - Academic research for school assignments
  - Health information and nutrition advice
  - Career planning and college research
  - Fact-checking viral stories and rumors
  - Mental health resources and support
  - Current events and news verification
  - Study techniques and learning strategies
  - Academic help and subject understanding

### **Misinformation Analysis (Round 3)**
- **Specific examples** of misinformation with analysis:
  - Miracle cure claims and health hoaxes
  - Unrealistic promises and clickbait formulas
  - Conspiracy theories and false authority
  - Correlation vs. causation confusion
  - Fear-mongering and urgency manipulation
  - Impossible technology and pseudoscience

## 💡 Tips for Success

### **General Strategies**
- **Read carefully** - don't rush through questions
- **Look for red flags** - if it sounds too good to be true, it probably is
- **Check sources** - always verify information from multiple reliable sources
- **Think critically** - question claims that seem extreme or sensational

### **Headline Identification**
- **Watch for sensational language** like "Shocking!", "Amazing!", "Miracle!"
- **Be skeptical of extreme claims** that promise instant results
- **Look for scientific consensus** - claims that contradict established science are usually false

### **Evidence Evaluation**
- **Government agencies** are usually reliable sources
- **Peer-reviewed research** is more credible than personal opinions
- **Fact-checking organizations** can help verify viral stories
- **University resources** provide credible academic information

### **Misinformation Analysis**
- **Multiple red flags** often indicate fake content
- **Check for sources** - claims without evidence are suspicious
- **Verify with experts** - consult reliable authorities in the field
- **Be patient** - real information takes time to verify

## 🏆 Scoring System

### **Single Player Mode**
- **1 point per correct answer**
- **Unlimited questions** for continuous learning
- **Personal best tracking** for improvement

### **Team Mode**
- **Round-based scoring** with 10 questions per round
- **Individual player scores** tracked separately
- **Round winners** determined by highest scores
- **Overall winner** based on total accumulated score

## 🔄 Game Flow

1. **Tips Page**: Learn strategies and tips before starting
2. **Mode Selection**: Choose Single Player or Team Mode
3. **Game Interface**: Answer questions with countdown timer
4. **Explanation Popup**: Learn from detailed explanations
5. **Score Tracking**: Monitor progress and performance
6. **Round Progression**: Advance through structured competition (Team Mode)
7. **Game Over**: Review final scores and return to home

## 🌟 Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Accessibility**: Clear text, good contrast, and intuitive navigation
- **Educational Content**: Real-world examples and practical learning
- **Engaging Gameplay**: Competitive elements and progress tracking
- **Smart Question System**: Varied content with no immediate repetition
- **Professional UI**: Modern design with smooth animations and transitions

---

**Clickbait Busters** - Empowering the next generation with critical thinking skills to navigate the digital information landscape! 🚀
