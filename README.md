# 💻 TypeMaster

A modern, interactive typing test application designed to help users evaluate and improve their typing speed and accuracy.

## 🚀 Live Demo

Visit the application at: [https://type-master-lac.vercel.app/](https://type-master-lac.vercel.app/)

## ✨ Features

- **Interactive Typing Tests**: Real-time typing evaluation with immediate feedback
- **Speed Measurement**: Track your Words Per Minute (WPM) and Characters Per Minute (CPM)
- **Accuracy Tracking**: Monitor typing accuracy with detailed error analysis
- **Multiple Test Modes**: 
  - Time-based tests (15s, 30s, 60s, 120s)
  - Word count-based tests (10, 25, 50, 100 words)
- **Progress Analytics**: Comprehensive performance statistics and historical data
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Customizable Settings**: Adjust themes, fonts, and difficulty levels
- **Performance Metrics**: Detailed breakdown of:
  - Words Per Minute (WPM)
  - Accuracy percentage
  - Error count and analysis
  - Typing consistency
  - Time elapsed

## 🛠️ Technologies Used

- **Frontend**: React.js with modern hooks
- **Styling**: Tailwind CSS for utility-first styling
- **Deployment**: Vercel
- **State Management**: React Context API or useState/useReducer hooks
- **Analytics**: Local storage for progress tracking
- **Build Tool**: Vite or Create React App

## 📊 How It Works

1. **Choose Test Parameters**: Select duration or word count for your typing test
2. **Start Typing**: Begin typing the displayed text as accurately and quickly as possible
3. **Real-time Feedback**: See live WPM, accuracy, and error highlighting
4. **Results Analysis**: Review detailed performance metrics after completion
5. **Track Progress**: Monitor improvement over time with historical data

## 🎨 Tailwind CSS Features

TypeMaster leverages Tailwind CSS for:

- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Custom Color Palette**: Typing-specific colors for correct/incorrect characters
- **Animation**: Smooth transitions and typing cursor animations
- **Utility Classes**: Rapid prototyping and consistent styling
- **JIT Compilation**: Just-in-time compilation for optimal performance

### Key Tailwind Classes Used

```css
/* Layout & Responsiveness */
.container mx-auto px-4 py-8
.grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
.flex flex-col md:flex-row items-center justify-between

/* Typing Interface */
.bg-gray-900 text-white rounded-lg p-6
.font-mono text-lg leading-relaxed tracking-wider
.transition-colors duration-200 ease-in-out

/* Interactive Elements */
.bg-blue-500 hover:bg-blue-600 active:bg-blue-700
.focus:ring-2 focus:ring-blue-500 focus:outline-none
.transform hover:scale-105 transition-transform

/* Stats & Metrics */
.bg-gradient-to-r from-green-400 to-blue-500
.shadow-lg hover:shadow-xl transition-shadow
.border-l-4 border-green-500 bg-green-50
```

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/type-master.git

# Navigate to project directory
cd type-master

# Install dependencies
npm install

# Start development server
npm run dev
# or
npm start
```


## 📁 Project Folder Structure

```bash
TYPING/
├── node_modules/
├── public/
│   ├── logo.png
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   └── react.svg
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ResultPage.jsx
│   │   └── TestPage.jsx
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── vercel.json
└── vite.config.js



### Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel
vercel --prod
```

### Tailwind Production Optimization

The build process automatically:
- Purges unused CSS classes
- Minifies the final CSS output
- Optimizes for performance with Tailwind's JIT compiler

## 📱 Usage


1. **Configure Settings**: Adjust difficulty or text type
2. **Begin Test**: Click "Start" and begin typing the displayed text
3. **Monitor Performance**: Watch real-time WPM and accuracy metrics
4. **Review Results**: Analyze detailed performance breakdown

## 🎨 Customization Options

TypeMaster uses Tailwind's utility classes for easy customization:

- **Typography**: Tailwind's font utilities (`font-mono`, `font-sans`, `text-lg`, `tracking-wide`)
- **Color Schemes**: Customizable via Tailwind config with typing-specific colors
- **Spacing & Layout**: Responsive utilities (`p-4`, `m-2`, `space-y-4`)
- **Animations**: Built-in transitions (`transition-all`, `duration-300`, `ease-in-out`)
- **Responsive Design**: Breakpoint-specific styles (`sm:`, `md:`, `lg:`, `xl:`)

## 📈 Performance Metrics

TypeMaster tracks comprehensive typing statistics:

- **Speed Metrics**:
  - Gross WPM (Words Per Minute)
  - Net WPM (adjusted for errors)
  - CPM (Characters Per Minute)

- **Accuracy Metrics**:
  - Overall accuracy percentage
  - Error rate analysis
  - Most common mistakes

- **Progress Tracking**:
  - Performance trends over time
  - Best scores and achievements
  - Consistency measurements

## 🏆 Features for Improvement

- **Targeted Practice**: Focus on specific keys or letter combinations
- **Error Analysis**: Identify and practice problematic key patterns
- **Progressive Difficulty**: Gradually increase text complexity
- **Typing Goals**: Set and track personal improvement targets

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Inspiration from popular typing test platforms
- Community feedback for feature development
- Open source contributors and testers

## 📞 Support

If you encounter any issues or have suggestions:

- Create an issue on GitHub
- Contact: https://www.rashmijoshi.me/
- Documentation: Available in the `/docs` folder

---

**Happy Typing!** 🎯✨

Start improving your typing skills today at [type-master-lac.vercel.app](https://type-master-lac.vercel.app/)
