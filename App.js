import React, { useState } from 'react';
import './App.css';

// Sample Categories and Questions

const categories = [
  {
    name: 'Programming',
    questions: [
      { question: 'Which language is primarily used for Android app development?', options: ['Swift', 'Java', 'Python', 'C++'], answer: 'Java' },
      { question: 'What does HTML stand for?', options: ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyper Transfer Markup Language'], answer: 'Hyper Text Markup Language' },
      { question: 'Which programming language is known for its simplicity and readability?', options: ['Java', 'Python', 'C++', 'Ruby'], answer: 'Python' },
      { question: 'In JavaScript, which symbol is used for comments?', options: ['#', '//', '<!-- -->', '%'], answer: '//' },
      { question: 'What is a commonly used language for web development?', options: ['Python', 'C++', 'JavaScript', 'Java'], answer: 'JavaScript' },
      { question: 'Which language is known as a low-level programming language?', options: ['Python', 'Assembly', 'HTML', 'Java'], answer: 'Assembly' },
      { question: 'Which language is widely used for scientific computing?', options: ['JavaScript', 'Python', 'PHP', 'HTML'], answer: 'Python' },
      { question: 'Which language is considered the "language of the web"?', options: ['JavaScript', 'C++', 'Python', 'Java'], answer: 'JavaScript' },
      { question: 'Which language was developed by Microsoft?', options: ['C#', 'Python', 'Swift', 'PHP'], answer: 'C#' },
      { question: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Colorful Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets'], answer: 'Cascading Style Sheets' },
    ],
  },
  {
    name: 'Data Structures',
    questions: [
      { question: 'What is a stack?', options: ['A data structure where elements are queued', 'A data structure where elements are added or removed in LIFO order', 'A circular structure', 'A networked structure'], answer: 'A data structure where elements are added or removed in LIFO order' },
      { question: 'Which data structure is used for implementing recursion?', options: ['Queue', 'Stack', 'Array', 'Linked List'], answer: 'Stack' },
      { question: 'Which data structure uses nodes and pointers?', options: ['Array', 'Stack', 'Queue', 'Linked List'], answer: 'Linked List' },
      { question: 'What does FIFO stand for in data structures?', options: ['First In First Out', 'Fast Input Fast Output', 'File In File Out', 'First In First Over'], answer: 'First In First Out' },
      { question: 'Which of these is a non-linear data structure?', options: ['Array', 'Linked List', 'Binary Tree', 'Stack'], answer: 'Binary Tree' },
      { question: 'Which structure uses a root, left child, and right child?', options: ['Binary Tree', 'Array', 'Queue', 'Hash Map'], answer: 'Binary Tree' },
      { question: 'What is the time complexity of accessing an element in an array?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'], answer: 'O(1)' },
      { question: 'In which data structure are elements added at one end and removed from the other?', options: ['Queue', 'Stack', 'Array', 'Tree'], answer: 'Queue' },
      { question: 'Which data structure is commonly used for a breadth-first search?', options: ['Stack', 'Queue', 'Array', 'Linked List'], answer: 'Queue' },
      { question: 'What is a hash table used for?', options: ['Storing data in arrays', 'Efficient data retrieval using keys', 'Storing data in stacks', 'Executing recursive functions'], answer: 'Efficient data retrieval using keys' },
    ],
  },
  {
    name: 'Algorithms',
    questions: [
      { question: 'Which algorithm is used to sort data by repeatedly stepping through the list to be sorted?', options: ['Merge Sort', 'Bubble Sort', 'Quick Sort', 'Heap Sort'], answer: 'Bubble Sort' },
      { question: 'What is the time complexity of binary search?', options: ['O(n)', 'O(n^2)', 'O(log n)', 'O(1)'], answer: 'O(log n)' },
      { question: 'Which sorting algorithm has the best average time complexity?', options: ['Quick Sort', 'Bubble Sort', 'Selection Sort', 'Insertion Sort'], answer: 'Quick Sort' },
      { question: 'What is Dijkstra’s algorithm used for?', options: ['Sorting', 'Searching', 'Finding the shortest path', 'Hashing'], answer: 'Finding the shortest path' },
      { question: 'Which algorithm is known for dividing the problem into subproblems?', options: ['Greedy', 'Backtracking', 'Divide and Conquer', 'Dynamic Programming'], answer: 'Divide and Conquer' },
      { question: 'Which algorithm sorts data by picking the smallest element each time?', options: ['Selection Sort', 'Merge Sort', 'Quick Sort', 'Bubble Sort'], answer: 'Selection Sort' },
      { question: 'What does BFS stand for?', options: ['Breadth-First Search', 'Binary File System', 'Basic File System', 'Breadth-First Sort'], answer: 'Breadth-First Search' },
      { question: 'What is recursion?', options: ['A function calling another function', 'A loop structure', 'A function calling itself', 'A sorting technique'], answer: 'A function calling itself' },
      { question: 'What does T(n) represent in algorithms?', options: ['Input size', 'Time complexity', 'Space complexity', 'Output size'], answer: 'Time complexity' },
      { question: 'What is Big O notation used for?', options: ['To describe the space complexity', 'To describe the time complexity', 'To describe an algorithm’s efficiency', 'All of the above'], answer: 'All of the above' },
    ],
  },
  {
    name: 'Operating Systems',
    questions: [
      { question: 'Which OS is known for its open-source nature?', options: ['Windows', 'macOS', 'Linux', 'iOS'], answer: 'Linux' },
      { question: 'What is the core of an operating system?', options: ['Shell', 'Kernel', 'Application', 'Process'], answer: 'Kernel' },
      { question: 'What is the main function of an OS?', options: ['Manage hardware', 'Control applications', 'Organize files', 'All of the above'], answer: 'All of the above' },
      { question: 'Which is a type of multitasking?', options: ['Preemptive', 'Parallel', 'Batch', 'Round-robin'], answer: 'Preemptive' },
      { question: 'What is the function of a device driver?', options: ['Manage memory', 'Control hardware components', 'Provide GUI', 'None'], answer: 'Control hardware components' },
      { question: 'What is virtual memory?', options: ['Extra storage', 'Memory on hard disk', 'Memory that appears larger than RAM', 'None'], answer: 'Memory that appears larger than RAM' },
      { question: 'What is process scheduling?', options: ['Execution order of programs', 'Network routing', 'Data encryption', 'System protection'], answer: 'Execution order of programs' },
      { question: 'Which OS is widely used in mobile devices?', options: ['Windows', 'Linux', 'Android', 'macOS'], answer: 'Android' },
      { question: 'What does GUI stand for?', options: ['General User Interface', 'Graphical User Interface', 'Generated User Input', 'Generic Usage Interface'], answer: 'Graphical User Interface' },
      { question: 'Which system call is used to create a new process?', options: ['exec()', 'exit()', 'fork()', 'wait()'], answer: 'fork()' },
    ],
  },
  {
    name: 'Database',
    questions: [
      { question: 'What does SQL stand for?', options: ['Structured Query Language', 'System Query Language', 'Standard Query Language', 'Sequential Query Language'], answer: 'Structured Query Language' },
      { question: 'Which database is NoSQL?', options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'], answer: 'MongoDB' },
      { question: 'What does CRUD stand for?', options: ['Create, Read, Update, Delete', 'Create, Remove, Update, Drop', 'Compute, Run, Update, Delete', 'None'], answer: 'Create, Read, Update, Delete' },
      { question: 'Which command is used to delete a table?', options: ['DROP', 'DELETE', 'REMOVE', 'CLEAR'], answer: 'DROP' },
      { question: 'Which SQL clause is used to filter records?', options: ['SELECT', 'WHERE', 'GROUP BY', 'ORDER BY'], answer: 'WHERE' },
      { question: 'What is a primary key?', options: ['A unique identifier for each row', 'A field with duplicate values', 'A default column', 'An index key'], answer: 'A unique identifier for each row' },
      { question: 'What is normalization?', options: ['Organizing data to reduce redundancy', 'Inserting data into tables', 'Sorting data', 'None'], answer: 'Organizing data to reduce redundancy' },
      { question: 'Which is an example of a relational database?', options: ['Oracle', 'Cassandra', 'Hadoop', 'Neo4j'], answer: 'Oracle' },
      { question: 'Which command is used to fetch data?', options: ['SELECT', 'FETCH', 'FIND', 'PICK'], answer: 'SELECT' },
      { question: 'What is a foreign key?', options: ['A key to link tables', 'A key for unique rows', 'A key in the primary column', 'A key for indexing'], answer: 'A key to link tables' },
    ],
  },
  {
    name: 'Computer Networks',
    questions: [
      { question: 'What does LAN stand for?', options: ['Local Area Network', 'Large Area Network', 'Link Area Network', 'Low Area Network'], answer: 'Local Area Network' },
      { question: 'Which protocol is used for email transmission?', options: ['FTP', 'SMTP', 'HTTP', 'SNMP'], answer: 'SMTP' },
      { question: 'What does IP stand for?', options: ['Internet Protocol', 'Internet Path', 'Integrated Path', 'Internet Process'], answer: 'Internet Protocol' },
      { question: 'Which device is used to connect different networks?', options: ['Router', 'Switch', 'Repeater', 'Hub'], answer: 'Router' },
      { question: 'What does TCP stand for?', options: ['Transmission Control Protocol', 'Transfer Control Protocol', 'Time Control Protocol', 'Traffic Control Protocol'], answer: 'Transmission Control Protocol' },
      { question: 'What is the function of a firewall?', options: ['Encrypt data', 'Protect against unauthorized access', 'Control traffic speed', 'None'], answer: 'Protect against unauthorized access' },
      { question: 'Which layer in the OSI model is responsible for routing?', options: ['Network Layer', 'Transport Layer', 'Session Layer', 'Data Link Layer'], answer: 'Network Layer' },
      { question: 'What does DNS stand for?', options: ['Domain Name System', 'Data Network System', 'Digital Network Service', 'Domain Network Service'], answer: 'Domain Name System' },
      { question: 'Which protocol is commonly used for secure web browsing?', options: ['HTTP', 'HTTPS', 'FTP', 'SMTP'], answer: 'HTTPS' },
      { question: 'What is a MAC address?', options: ['Media Access Control address', 'Memory Access Control', 'Main Access Code', 'Monitor and Control'], answer: 'Media Access Control address' },
    ],
  },
  {
    name: 'Cybersecurity',
    questions: [
      { question: 'What does CIA stand for in cybersecurity?', options: ['Confidentiality, Integrity, Availability', 'Control, Integrity, Access', 'Confidentiality, Information, Assurance', 'Control, Information, Assurance'], answer: 'Confidentiality, Integrity, Availability' },
      { question: 'What is phishing?', options: ['Stealing sensitive data via fake emails', 'A type of malware', 'A security protocol', 'None'], answer: 'Stealing sensitive data via fake emails' },
      { question: 'Which is a common type of malware?', options: ['Trojan', 'Router', 'Switch', 'Firewall'], answer: 'Trojan' },
      { question: 'What is two-factor authentication?', options: ['Two steps to access data', 'Using two passwords', 'Combining two types of identification', 'Two-factor access'], answer: 'Combining two types of identification' },
      { question: 'What is a firewall?', options: ['A system to block unauthorized access', 'A type of malware', 'A network device', 'A security policy'], answer: 'A system to block unauthorized access' },
      { question: 'What does VPN stand for?', options: ['Virtual Private Network', 'Virtual Public Network', 'Variable Private Network', 'Virtual Protected Network'], answer: 'Virtual Private Network' },
      { question: 'What is a brute force attack?', options: ['Guessing passwords', 'Injecting malware', 'Phishing attacks', 'None'], answer: 'Guessing passwords' },
      { question: 'Which protocol is used for secure communication over the internet?', options: ['HTTP', 'FTP', 'SMTP', 'HTTPS'], answer: 'HTTPS' },
      { question: 'What is encryption?', options: ['Scrambling data', 'Transmitting data', 'Accessing data', 'Storing data'], answer: 'Scrambling data' },
      { question: 'What is social engineering?', options: ['Manipulating people to gain information', 'Network security', 'Data encryption', 'None'], answer: 'Manipulating people to gain information' },
    ],
  },
  {
    name: 'Software Engineering',
    questions: [
      { question: 'What does SDLC stand for?', options: ['Software Development Life Cycle', 'System Design Life Cycle', 'Software Design Life Cycle', 'System Development Life Cycle'], answer: 'Software Development Life Cycle' },
      { question: 'What is Agile methodology?', options: ['A type of project management', 'A programming language', 'A software development process', 'None'], answer: 'A software development process' },
      { question: 'What is the purpose of version control?', options: ['Track changes in code', 'Compile code', 'Test software', 'None'], answer: 'Track changes in code' },
      { question: 'Which model is used for software development in phases?', options: ['Waterfall model', 'Agile model', 'Spiral model', 'V-Model'], answer: 'Waterfall model' },
      { question: 'What is a use case?', options: ['Description of a systems behavior', ' A software bug', 'User interface design', 'None'], answer: 'Description of a system\'s behavior' },
      { question: 'What is refactoring?', options: ['Improving code without changing behavior', 'Creating new features', 'Debugging code', 'None'], answer: 'Improving code without changing behavior' },
      { question: 'What is a software requirement?', options: ['Condition for software development', 'Feature of the software', 'A bug in the software', 'None'], answer: 'Condition for software development' },
      { question: 'Which language is commonly used for backend development?', options: ['Java', 'HTML', 'CSS', 'JavaScript'], answer: 'Java' },
      { question: 'What does UML stand for?', options: ['Unified Modeling Language', 'Universal Modeling Language', 'Unified Management Language', 'None'], answer: 'Unified Modeling Language' },
      { question: 'What is an API?', options: ['Application Programming Interface', 'Application Program Integration', 'Application Process Interface', 'None'], answer: 'Application Programming Interface' },
    ],
  },
  {
    name: 'Artificial Intelligence',
    questions: [
      { question: 'What is AI?', options: ['Artificial Intelligence', 'Automatic Integration', 'Artificial Interaction', 'Automated Intelligence'], answer: 'Artificial Intelligence' },
      { question: 'What does machine learning focus on?', options: ['Data processing', 'Pattern recognition', 'Database management', 'Networking'], answer: 'Pattern recognition' },
      { question: 'What is natural language processing?', options: ['Understanding human language', 'Programming languages', 'Database languages', 'None'], answer: 'Understanding human language' },
      { question: 'What is a neural network?', options: ['A series of algorithms', 'A type of database', 'A programming language', 'None'], answer: 'A series of algorithms' },
      { question: 'What is deep learning?', options: ['A subset of machine learning', 'A type of AI', 'A programming method', 'None'], answer: 'A subset of machine learning' },
      { question: 'Which algorithm is commonly used in AI?', options: ['Decision trees', 'Linear regression', 'Clustering', 'All of the above'], answer: 'All of the above' },
      { question: 'What is computer vision?', options: ['Understanding images and videos', 'Programming languages', 'Data processing', 'None'], answer: 'Understanding images and videos' },
      { question: 'What is reinforcement learning?', options: ['Learning from rewards', 'Learning from data', 'Learning from mistakes', 'None'], answer: 'Learning from rewards' },
      { question: 'What does Turing Test measure?', options: ['Intelligence of a machine', 'Speed of computation', 'Data processing', 'None'], answer: 'Intelligence of a machine' },
      { question: 'What is an expert system?', options: ['AI designed to solve problems', 'A database system', 'A programming language', 'None'], answer: 'AI designed to solve problems' },
    ],
  },
  {
    name: 'Cloud Computing',
    questions: [
      { question: 'What is cloud computing?', options: ['Storing and accessing data over the internet', 'Data storage on local servers', 'Offline storage of data', 'None'], answer: 'Storing and accessing data over the internet' },
      { question: 'What does SaaS stand for?', options: ['Software as a Service', 'System as a Service', 'Storage as a Service', 'None'], answer: 'Software as a Service' },
      { question: 'Which is a cloud service provider?', options: ['Amazon Web Services', 'Windows', 'Linux', 'None'], answer: 'Amazon Web Services' },
      { question: 'What is IaaS?', options: ['Infrastructure as a Service', 'Internet as a Service', 'Integration as a Service', 'None'], answer: 'Infrastructure as a Service' },
      { question: 'What is PaaS?', options: ['Platform as a Service', 'Process as a Service', 'Programming as a Service', 'None'], answer: 'Platform as a Service' },
      { question: 'What is a private cloud?', options: ['Cloud dedicated to a single organization', 'Public cloud', 'Hybrid cloud', 'None'], answer: 'Cloud dedicated to a single organization' },
      { question: 'What is multi-cloud?', options: ['Using multiple cloud services', 'Using one cloud service', 'Using private cloud only', 'None'], answer: 'Using multiple cloud services' },
      { question: 'What does hybrid cloud mean?', options: ['Combination of private and public cloud', 'Only private cloud', 'Only public cloud', 'None'], answer: 'Combination of private and public cloud' },
      { question: 'What is cloud storage?', options: ['Storing data on the cloud', 'Local storage of data', 'Offline storage of data', 'None'], answer: 'Storing data on the cloud' },
      { question: 'What is serverless computing?', options: ['Running code without managing servers', 'Local server management', 'None', 'None'], answer: 'Running code without managing servers' },
    ],
  },
];

// Functional components


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());  // To track answered questions

  const handleLogin = () => {
    setLoggedIn(true);
    setCurrentPage('categories');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentPage('home');
  };

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
    setShuffledQuestions(shuffleArray([...category.questions])); // Shuffle questions here
    setCurrentQuestionIndex(0);
    setResults([]);
    setScore(0);
    setShowResults(false);
    setAnsweredQuestions(new Set());  // Reset answered questions set
    setCurrentPage('quiz');
  };

  const handleAnswerSelect = (option) => {
    if (answeredQuestions.has(currentQuestionIndex)) {
      return; // Prevent answering the same question again
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = option === currentQuestion.answer;

    setResults((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        selected: option,
        correct: isCorrect,
      },
    ]);

    if (isCorrect) setScore((prevScore) => prevScore + 1);

    setAnsweredQuestions((prev) => new Set(prev).add(currentQuestionIndex));  // Mark this question as answered
  };

  const handleNextOrSubmit = () => {
    if (currentQuestionIndex === shuffledQuestions.length - 1) {
      // When the user reaches the last question, show the results
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    handleLogin();
    setCurrentPage('login');
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="dashboard">
          <button onClick={() => setCurrentPage('home')}>Home</button>
          {loggedIn && <button onClick={() => setCurrentPage('categories')}>Categories</button>}
          {loggedIn && <button onClick={handleLogout}>Logout</button>}
          {!loggedIn && <button onClick={() => setCurrentPage('login')}>Login</button>}
        </div>
      </div>

      <div className="content">
        {currentPage === 'home' && <div className="homepage"></div>}

        {currentPage === 'login' && (
          <form className="form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
            <p>Don't have an account? <span onClick={() => setCurrentPage('register')}>Register</span></p>
          </form>
        )}

        {currentPage === 'register' && (
          <form className="form" onSubmit={handleRegistration}>
            <h2>Register</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
          </form>
        )}

        {currentPage === 'categories' && (
          <div className="categories">
            <h2>Select a Category</h2>
            {categories.map((category, index) => (
              <button key={index} onClick={() => handleCategorySelect(category)}>{category.name}</button>
            ))}
          </div>
        )}

        {currentPage === 'quiz' && !showResults && currentCategory && (
          <div className="quiz">
            <h2>{currentCategory.name} Quiz</h2>
            <form>
              <h3>{shuffledQuestions[currentQuestionIndex].question}</h3>
              {shuffledQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleAnswerSelect(option)}
                  disabled={answeredQuestions.has(currentQuestionIndex)} // Disable the option if already answered
                >
                  {option}
                </button>
              ))}
              <div className="quiz-navigation">
                <button type="button" onClick={handleNextOrSubmit}>
                  {currentQuestionIndex === shuffledQuestions.length - 1 ? 'Submit' : 'Next'}
                </button>
              </div>
            </form>
          </div>
        )}

        {currentPage === "quiz" && showResults && (
          <div className="results-container">
            <div className="results-form">
              <h2>Results</h2>

              {/* If no answers are selected, display the "no answers" message */}
              {results.some(result => result.selected) ? (
                <ul>
                  {results.map((result, index) => (
                    <li key={index} className={result.correct ? 'correct' : 'incorrect'}>
                      {result.question} - Your Answer: {result.selected} {result.correct ? '(Correct)' : '(Incorrect)'}
                    </li>
                  ))}
                </ul>
              ) : (
               
                <p>You didn't answer any question. Please answer at least one question.</p>
               
              )}
            </div>

            {/* Show the score only if answers were selected */}
            {results.some(result => result.selected) ? (
              <div className="score-form">
                <h1>Score</h1>
                <p>Your Total Score: {score} / {shuffledQuestions.length}</p>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;