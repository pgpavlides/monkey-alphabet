import { useState } from 'react';
import { Book, VolumeX, Volume2, Home, Globe2, GraduationCap } from 'lucide-react';

const MonkeyLanguageApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [audioEnabled, setAudioEnabled] = useState(true);

  // Complete Monkey language data
  const alphabet = [
    { letter: 'A', word: 'Aooga', pronunciation: 'ah-OOH-gah', usage: 'Excited greeting, start of adventure' },
    { letter: 'B', word: 'Bouga', pronunciation: 'BOO-gah', usage: 'Strong emotion, warning call' },
    { letter: 'C', word: 'Choogu', pronunciation: 'CHOO-goo', usage: 'Expressing curiosity, discovery' },
    { letter: 'D', word: 'Dooga', pronunciation: 'DOO-gah', usage: 'Direction, movement commands' },
    { letter: 'E', word: 'Eeoug', pronunciation: 'EE-owg', usage: 'Surprise or amazement' },
    { letter: 'F', word: 'Fooba', pronunciation: 'FOO-bah', usage: 'Food-related communication' },
    { letter: 'G', word: 'Googa', pronunciation: 'GOO-gah', usage: 'Group activities, gathering' },
    { letter: 'H', word: 'Hooga', pronunciation: 'HOO-gah', usage: 'Happy emotions, celebration' },
    { letter: 'I', word: 'Inga', pronunciation: 'ING-ah', usage: 'Individual actions, self-reference' },
    { letter: 'J', word: 'Jooga', pronunciation: 'JOO-gah', usage: 'Jumping, active movement' },
    { letter: 'K', word: 'Kooga', pronunciation: 'KOO-gah', usage: 'Conflict, disagreement' },
    { letter: 'L', word: 'Looga', pronunciation: 'LOO-gah', usage: 'Love, affection' },
    { letter: 'M', word: 'Mooga', pronunciation: 'MOO-gah', usage: 'Morning, start of day' },
    { letter: 'N', word: 'Nooga', pronunciation: 'NOO-gah', usage: 'Night, darkness' },
    { letter: 'O', word: 'Ooga', pronunciation: 'OO-gah', usage: 'Basic acknowledgment' },
    { letter: 'P', word: 'Pooga', pronunciation: 'POO-gah', usage: 'Play, fun activities' },
    { letter: 'Q', word: 'Quuga', pronunciation: 'KOO-gah', usage: 'Questions, confusion' },
    { letter: 'R', word: 'Rooga', pronunciation: 'ROO-gah', usage: 'Rest, relaxation' },
    { letter: 'S', word: 'Shooga', pronunciation: 'SHOO-gah', usage: 'Sleep, tiredness' },
    { letter: 'T', word: 'Tooga', pronunciation: 'TOO-gah', usage: 'Time, temporal concepts' },
    { letter: 'U', word: 'Unga', pronunciation: 'UNG-ah', usage: 'Urgency, importance' },
    { letter: 'V', word: 'Vooga', pronunciation: 'VOO-gah', usage: 'Victory, achievement' },
    { letter: 'W', word: 'Wooga', pronunciation: 'WOO-gah', usage: 'Water, rain, weather' },
    { letter: 'X', word: 'Xooga', pronunciation: 'KSOO-gah', usage: 'Extreme emotions' },
    { letter: 'Y', word: 'Yooga', pronunciation: 'YOO-gah', usage: 'Yes, agreement' },
    { letter: 'Z', word: 'Zooga', pronunciation: 'ZOO-gah', usage: 'Sleep, end of day' }
  ];

  const grammar = {
    basics: [
      { 
        rule: 'Repetition for emphasis', 
        example: 'Ooga-Ooga = Very important!',
        explanation: 'Double any word to intensify its meaning. More repetitions = more intensity!'
      },
      { 
        rule: 'End with higher pitch', 
        example: 'Booga↗ = Is there danger?',
        explanation: 'Raise your voice at the end to make any word a question'
      },
      { 
        rule: 'Chest beating rhythm', 
        example: '*thump* Unga-Unga = Emergency!',
        explanation: 'Add chest beats to show urgency or importance'
      },
      {
        rule: 'Word combinations',
        example: 'Fooba-Looga = I love this food!',
        explanation: 'Combine words to create complex meanings'
      },
      {
        rule: 'Sound duration',
        example: 'Oooogaaa = Really big emphasis',
        explanation: 'Longer sounds indicate greater importance or size'
      }
    ],
    advanced: [
      { 
        rule: 'Multiple hoots',
        meaning: 'Shows excitement level',
        example: 'Ooga-ooga-OOGA! = Extremely exciting news!'
      },
      { 
        rule: 'Volume variation',
        meaning: 'Indicates emotional intensity',
        example: 'whispered "ooga" = secret or careful'
      },
      {
        rule: 'Rhythm patterns',
        meaning: 'Creates different moods',
        example: 'Ooga-ooga-booga (fast) = urgency'
      },
      {
        rule: 'Gesture combinations',
        meaning: 'Enhances communication',
        example: 'Hooga + arm wave = friendly greeting from far away'
      },
      {
        rule: 'Tonal shifts',
        meaning: 'Changes word context',
        example: 'Deep Booga = serious warning, High Booga = playful warning'
      }
    ],
    expressions: [
      {
        phrase: 'Ooga Booga',
        meaning: 'Hello friend!',
        context: 'Basic greeting'
      },
      {
        phrase: 'Booga Wooga',
        meaning: 'Watch out for rain!',
        context: 'Weather warning'
      },
      {
        phrase: 'Fooba Googa',
        meaning: "Let's eat together!",
        context: 'Meal invitation'
      },
      {
        phrase: 'Looga Hooga',
        meaning: 'Happy to see you!',
        context: 'Warm greeting'
      },
      {
        phrase: 'Unga Dooga',
        meaning: 'Come quickly!',
        context: 'Urgent request'
      },
      {
        phrase: 'Mooga Fooba',
        meaning: 'Breakfast time',
        context: 'Morning routine'
      }
    ],
    sentenceStructure: [
      {
        type: 'Basic Statement',
        structure: 'Action + Object',
        example: 'Fooba Mooga = Eat banana'
      },
      {
        type: 'Question',
        structure: 'Object + Action↗',
        example: 'Fooba Googa↗ = Should we eat together?'
      },
      {
        type: 'Command',
        structure: 'Action + Unga',
        example: 'Dooga Unga = Come now!'
      },
      {
        type: 'Description',
        structure: 'Object + Modifier',
        example: 'Fooba Hooga = Happy food'
      }
    ]
  };

  const culturalNotes = [
    {
      title: 'Greeting Rituals',
      content: 'Always start with a chest pat followed by "Ooga Booga". The louder the pat, the more respectful the greeting!'
    },
    {
      title: 'Meal Etiquette',
      content: 'Share your Fooba-calls with everyone before eating. Its considered rude to eat without announcing it!'
    },
    {
      title: 'Social Hierarchy',
      content: 'The longest "Ooga" chain in a group usually indicates the leader or eldest member.'
    },
    {
      title: 'Weather Signals',
      content: 'Three quick Wooga calls mean incoming rain - its a community service to warn others!'
    }
  ];

  const pronunciationTips = [
    {
      tip: 'Chest Resonance',
      description: 'All words should resonate from the chest for authentic sound',
      practice: 'Place hand on chest while speaking to feel vibration'
    },
    {
      tip: 'Vowel Length',
      description: 'All double vowels (oo) are held longer than single vowels',
      practice: 'Oooga should be "OOO-gah" not "O-gah"'
    },
    {
      tip: 'Emphasis',
      description: 'First syllable is always emphasized',
      practice: 'BOO-ga not boo-GA'
    },
    {
      tip: 'Rhythm',
      description: 'Maintain steady beat when combining words',
      practice: 'Use chest pats to keep timing'
    }
  ];

// Navigation component
const Navigation = () => (
  <nav className="fixed bottom-0 w-full bg-amber-800 p-4 text-white">
    <div className="flex justify-around items-center max-w-3xl mx-auto">
      <button 
        onClick={() => setCurrentPage('home')} 
        className="flex flex-col items-center hover:text-amber-200 transition-colors"
      >
        <Home size={24} />
        <span className="text-sm">Home</span>
      </button>
      <button 
        onClick={() => setCurrentPage('alphabet')}
        className="flex flex-col items-center hover:text-amber-200 transition-colors"
      >
        <Book size={24} />
        <span className="text-sm">Alphabet</span>
      </button>
      <button 
        onClick={() => setCurrentPage('grammar')}
        className="flex flex-col items-center hover:text-amber-200 transition-colors"
      >
        <GraduationCap size={24} />
        <span className="text-sm">Grammar</span>
      </button>
      <button 
        onClick={() => setCurrentPage('practice')}
        className="flex flex-col items-center hover:text-amber-200 transition-colors"
      >
        <Globe2 size={24} />
        <span className="text-sm">Practice</span>
      </button>
      <button 
        onClick={() => setAudioEnabled(!audioEnabled)}
        className="flex flex-col items-center hover:text-amber-200 transition-colors"
      >
        {audioEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
        <span className="text-sm">Sound</span>
      </button>
    </div>
  </nav>
);

// Home Page with expanded content
const HomePage = () => (
  <div className="min-h-screen bg-amber-50 p-6 pb-24 animate-fadeIn">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-amber-900 mb-6 text-center">
        🐒 Welcome to Monkey Language! 🍌
      </h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 transform hover:scale-105 transition-transform">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">What is Monkey Language?</h2>
        <p className="text-amber-900 mb-4">
          Monkey Language (or Ooga Booga as its affectionately known) is the most primal and 
          fun way to communicate! Its based on ancient primate sounds and is guaranteed to make 
          you the life of any jungle party! 🎉
        </p>
        <p className="text-amber-900">
          Originally developed in the deepest jungles, this language has evolved to become
          the most expressive way to communicate emotions, warnings, and celebrations. From
          simple greetings to complex philosophical discussions about banana ripeness!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-amber-100 transition-colors">
          <h3 className="text-xl font-bold text-amber-800 mb-3">Quick Start Guide</h3>
          <ul className="list-disc list-inside text-amber-900">
            <li className="mb-2">Start with basic Ooga sounds</li>
            <li className="mb-2">Practice chest-beating rhythm</li>
            <li className="mb-2">Master the art of hooting</li>
            <li className="mb-2">Learn to swing while speaking (optional)</li>
            <li className="mb-2">Practice volume control</li>
            <li>Perfect your chest resonance</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-amber-100 transition-colors">
          <h3 className="text-xl font-bold text-amber-800 mb-3">Fun Facts</h3>
          <ul className="list-disc list-inside text-amber-900">
            <li className="mb-2">Used by ancient primates for millennia</li>
            <li className="mb-2">100% banana-friendly vocabulary</li>
            <li className="mb-2">Perfect for tree-to-tree communication</li>
            <li className="mb-2">No grammar police in the jungle!</li>
            <li className="mb-2">Can be learned in just 3 days</li>
            <li>Works underwater (though not recommended)</li>
          </ul>
        </div>
      </div>

      {/* Cultural Notes Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-amber-800 mb-4">Cultural Notes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {culturalNotes.map((note, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:bg-amber-100 transition-colors">
              <h4 className="text-lg font-bold text-amber-800 mb-2">{note.title}</h4>
              <p className="text-amber-900">{note.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pronunciation Tips */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-amber-800 mb-4">Pronunciation Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pronunciationTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:bg-amber-100 transition-colors">
              <h4 className="text-lg font-bold text-amber-800 mb-2">{tip.tip}</h4>
              <p className="text-amber-900 mb-2">{tip.description}</p>
              <p className="text-amber-700 italic">Practice: {tip.practice}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Alphabet Page with enhanced flip cards and complete data
const AlphabetPage = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  // Card component
  const Card = ({ letter, word, pronunciation, usage }) => {
    const isFlipped = flippedCard === letter;

    return (
      <div className="h-64 w-full" onClick={() => setFlippedCard(isFlipped ? null : letter)}>
        <div className="relative w-full h-full">
          {/* Front of card */}
          <div 
            className={`absolute w-full h-full transition-all duration-300 ease-in-out ${
              isFlipped ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="h-full bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
              <div className="text-6xl font-bold text-amber-800 mb-4">{letter}</div>
              <div className="text-2xl text-amber-600 text-center font-semibold">{word}</div>
            </div>
          </div>

          {/* Back of card */}
          <div 
            className={`absolute w-full h-full transition-all duration-300 ease-in-out ${
              isFlipped ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-full bg-amber-700 text-white rounded-lg shadow-lg p-6 flex flex-col">
              <div className="text-lg font-medium mb-2">Pronunciation:</div>
              <div className="text-xl mb-4">{pronunciation}</div>
              <div className="text-lg font-medium mb-2">Usage:</div>
              <div className="text-lg">{usage}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-amber-50 p-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">
          🐒 The Sacred Monkey Alphabet 🍌
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">How to Use the Alphabet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-amber-700 mb-3">Basic Rules</h3>
              <ul className="list-disc list-inside text-amber-900 space-y-2">
                <li>Each letter has a unique sound</li>
                <li>Combine letters to form expressions</li>
                <li>Practice each sound individually</li>
                <li>Master the chest resonance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-700 mb-3">Tips</h3>
              <ul className="list-disc list-inside text-amber-900 space-y-2">
                <li>Start with vowel sounds</li>
                <li>Practice daily for best results</li>
                <li>Record yourself for improvement</li>
                <li>Listen to native speakers (monkeys)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alphabet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {alphabet.map((item) => (
            <Card
              key={item.letter}
              letter={item.letter}
              word={item.word}
              pronunciation={item.pronunciation}
              usage={item.usage}
            />
          ))}
        </div>

        {/* Common Combinations */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">Common Letter Combinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="font-bold text-amber-800 mb-3">Greetings</h3>
              <div className="space-y-2">
                <p className="text-amber-900">Ooga + Booga = Hello!</p>
                <p className="text-amber-900">Hooga + Looga = Welcome!</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="font-bold text-amber-800 mb-3">Emotions</h3>
              <div className="space-y-2">
                <p className="text-amber-900">Xooga + Hooga = Very Happy</p>
                <p className="text-amber-900">Kooga + Unga = Angry Warning</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="font-bold text-amber-800 mb-3">Actions</h3>
              <div className="space-y-2">
                <p className="text-amber-900">Jooga + Dooga = Lets Go!</p>
                <p className="text-amber-900">Fooba + Googa = Share Food</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Grammar Page with complete rules and examples
const GrammarPage = () => (
  <div className="min-h-screen bg-amber-50 p-6 pb-24">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-amber-900 mb-6 text-center">Monkey Grammar Guide</h1>
      
      {/* Basic Rules Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 animate-slideIn">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">Basic Rules</h2>
        {grammar.basics.map((rule, index) => (
          <div key={index} className="mb-6 last:mb-0 border-b last:border-0 border-amber-100 pb-4">
            <h3 className="font-bold text-amber-700 mb-2">{rule.rule}</h3>
            <p className="text-amber-900 mb-2">
              <span className="font-medium">Example: </span>
              <span className="italic">{rule.example}</span>
            </p>
            <p className="text-amber-900">{rule.explanation}</p>
          </div>
        ))}
      </div>

      {/* Advanced Techniques Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 animate-slideIn">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">Advanced Techniques</h2>
        {grammar.advanced.map((rule, index) => (
          <div key={index} className="mb-6 last:mb-0 border-b last:border-0 border-amber-100 pb-4">
            <h3 className="font-bold text-amber-700 mb-2">{rule.rule}</h3>
            <p className="text-amber-900 mb-2">{rule.meaning}</p>
            <p className="text-amber-900 italic">Example: {rule.example}</p>
          </div>
        ))}
      </div>

{/* Common Expressions Section */}
<div className="bg-white rounded-lg shadow-lg p-6 mb-6 animate-slideIn">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">Common Expressions</h2>
          {grammar.expressions.map((expr, index) => (
            <div key={index} className="mb-6 last:mb-0 border-b last:border-0 border-amber-100 pb-4">
              <h3 className="font-bold text-amber-700 mb-2">{expr.phrase}</h3>
              <p className="text-amber-900 mb-1">
                <span className="font-medium">Meaning: </span>
                {expr.meaning}
              </p>
              <p className="text-amber-900 italic">
                <span className="font-medium">Context: </span>
                {expr.context}
              </p>
            </div>
          ))}
        </div>

        {/* Sentence Structure Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 animate-slideIn">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">Sentence Structure</h2>
          {grammar.sentenceStructure.map((structure, index) => (
            <div key={index} className="mb-6 last:mb-0 border-b last:border-0 border-amber-100 pb-4">
              <h3 className="font-bold text-amber-700 mb-2">{structure.type}</h3>
              <p className="text-amber-900 mb-2">
                <span className="font-medium">Structure: </span>
                {structure.structure}
              </p>
              <p className="text-amber-900 italic">
                <span className="font-medium">Example: </span>
                {structure.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Enhanced Practice Page with multiple features
  const PracticePage = () => {
    const [currentPhrase, setCurrentPhrase] = useState('');
    const [translation, setTranslation] = useState('');
    const [practiceMode, setPracticeMode] = useState('translate'); // translate, listen, speak
    const [difficulty, setDifficulty] = useState('beginner');

    const commonPhrases = {
      beginner: [
        "Hello friend",
        "I'm hungry",
        "Let's play",
        "Good morning"
      ],
      intermediate: [
        "The banana is ripe",
        "Watch out for the tree",
        "Let's go find food",
        "Time to sleep"
      ],
      advanced: [
        "The storm is coming soon",
        "This branch is too weak",
        "Meet me at the tall tree",
        "Share the sweet fruits"
      ]
    };

    const translateToMonkey = (phrase) => {
      return phrase
        .toUpperCase()
        .split(' ')
        .map(word => {
          return word
            .split('')
            .map(char => {
              const letter = alphabet.find(item => item.letter === char);
              return letter ? letter.word : char;
            })
            .join('-');
        })
        .join(' ');
    };

    return (
      <div className="min-h-screen bg-amber-50 p-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-amber-900 mb-6 text-center">Practice Your Monkey Talk</h1>
          
          {/* Practice Mode Selection */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex justify-around mb-4">
              <button
                onClick={() => setPracticeMode('translate')}
                className={`px-4 py-2 rounded ${
                  practiceMode === 'translate' ? 'bg-amber-600 text-white' : 'bg-amber-100'
                }`}
              >
                Translate
              </button>
              <button
                onClick={() => setPracticeMode('listen')}
                className={`px-4 py-2 rounded ${
                  practiceMode === 'listen' ? 'bg-amber-600 text-white' : 'bg-amber-100'
                }`}
              >
                Listen
              </button>
              <button
                onClick={() => setPracticeMode('speak')}
                className={`px-4 py-2 rounded ${
                  practiceMode === 'speak' ? 'bg-amber-600 text-white' : 'bg-amber-100'
                }`}
              >
                Speak
              </button>
            </div>

            {/* Difficulty Selection */}
            <div className="flex justify-around mb-6">
              <button
                onClick={() => setDifficulty('beginner')}
                className={`px-4 py-2 rounded ${
                  difficulty === 'beginner' ? 'bg-green-600 text-white' : 'bg-green-100'
                }`}
              >
                Beginner
              </button>
              <button
                onClick={() => setDifficulty('intermediate')}
                className={`px-4 py-2 rounded ${
                  difficulty === 'intermediate' ? 'bg-yellow-600 text-white' : 'bg-yellow-100'
                }`}
              >
                Intermediate
              </button>
              <button
                onClick={() => setDifficulty('advanced')}
                className={`px-4 py-2 rounded ${
                  difficulty === 'advanced' ? 'bg-red-600 text-white' : 'bg-red-100'
                }`}
              >
                Advanced
              </button>
            </div>

            {/* Practice Area */}
            <div className="mb-6">
              <h3 className="font-bold text-amber-800 mb-4">Suggested Phrases:</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {commonPhrases[difficulty].map((phrase, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentPhrase(phrase);
                      setTranslation(translateToMonkey(phrase));
                    }}
                    className="p-2 bg-amber-50 rounded hover:bg-amber-100 text-amber-900"
                  >
                    {phrase}
                  </button>
                ))}
              </div>
            </div>

            {/* Translation Input */}
            <div>
              <label className="block text-amber-800 font-bold mb-2">Enter your phrase:</label>
              <input
                type="text"
                className="w-full p-2 border border-amber-300 rounded mb-4"
                value={currentPhrase}
                onChange={(e) => {
                  setCurrentPhrase(e.target.value);
                  setTranslation(translateToMonkey(e.target.value));
                }}
                placeholder="Type something..."
              />
              
              <div className="bg-amber-100 p-4 rounded">
                <h3 className="font-bold text-amber-800 mb-2">Monkey Translation:</h3>
                <p className="text-lg text-amber-900">{translation || 'Ooga...'}</p>
              </div>
            </div>
          </div>

          {/* Practice Tips */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-amber-800 mb-4">Practice Tips</h2>
            <ul className="list-disc list-inside text-amber-900">
              <li className="mb-2">Start with simple greetings</li>
              <li className="mb-2">Practice chest resonance daily</li>
              <li className="mb-2">Record yourself and compare</li>
              <li className="mb-2">Use gestures while speaking</li>
              <li>Practice with friends for more fun!</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'alphabet' && <AlphabetPage />}
      {currentPage === 'grammar' && <GrammarPage />}
      {currentPage === 'practice' && <PracticePage />}
      <Navigation />
    </div>
  );
};

export default MonkeyLanguageApp;