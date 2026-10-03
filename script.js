// script.js - Interactive Quiz Engine for CAT 2 DSA MCQs

document.addEventListener('DOMContentLoaded', () => {
  // State Variables
  let activeQuestions = [...QUESTIONS];
  let currentIndex = 0;
  let score = 0;
  let attempted = 0;
  let streak = 0;
  let userAnswers = {}; // questionId -> { selectedIndex, isCorrect }
  let bookmarks = new Set(JSON.parse(localStorage.getItem('cat2_bookmarks') || '[]'));

  // DOM Elements
  const topicSelect = document.getElementById('topicSelect');
  const searchInput = document.getElementById('searchInput');
  const themeToggle = document.getElementById('themeToggle');
  const progressBar = document.getElementById('progressBar');

  const statScore = document.getElementById('statScore');
  const statAccuracy = document.getElementById('statAccuracy');
  const statAttempted = document.getElementById('statAttempted');
  const statStreak = document.getElementById('statStreak');

  const topicBadge = document.getElementById('topicBadge');
  const questionCounter = document.getElementById('questionCounter');
  const questionText = document.getElementById('questionText');
  const optionsGrid = document.getElementById('optionsGrid');
  const explanationBox = document.getElementById('explanationBox');
  const explanationText = document.getElementById('explanationText');

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnBookmark = document.getElementById('btnBookmark');

  // Load Saved State
  const savedAnswers = JSON.parse(localStorage.getItem('cat2_answers') || '{}');
  userAnswers = savedAnswers;
  recalculateStats();

  // Populate Topic Dropdown
  TOPICS.forEach(topic => {
    const opt = document.createElement('option');
    opt.value = topic.id;
    opt.textContent = `${topic.id}. ${topic.name}`;
    topicSelect.appendChild(opt);
  });

  // Event Listeners
  topicSelect.addEventListener('change', filterQuestions);
  searchInput.addEventListener('input', filterQuestions);
  themeToggle.addEventListener('click', toggleTheme);

  btnPrev.addEventListener('click', () => navigate(-1));
  btnNext.addEventListener('click', () => navigate(1));
  btnBookmark.addEventListener('click', toggleBookmark);

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      navigate(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      navigate(-1);
    } else if (['1', '2', '3', '4'].includes(e.key)) {
      const idx = parseInt(e.key) - 1;
      const buttons = optionsGrid.querySelectorAll('.option-btn');
      if (buttons[idx] && !buttons[idx].disabled) {
        buttons[idx].click();
      }
    }
  });

  // Filter Questions
  function filterQuestions() {
    const selectedTopic = topicSelect.value;
    const query = searchInput.value.toLowerCase().trim();

    activeQuestions = QUESTIONS.filter(q => {
      const matchTopic = (selectedTopic === 'all') || (q.topicId == selectedTopic) || (selectedTopic === 'bookmarked' && bookmarks.has(q.id));
      const matchQuery = !query || q.question.toLowerCase().includes(query) || q.options.some(opt => opt.toLowerCase().includes(query));
      return matchTopic && matchQuery;
    });

    currentIndex = 0;
    renderQuestion();
  }

  // Render Current Question
  function renderQuestion() {
    if (activeQuestions.length === 0) {
      questionText.textContent = "No questions match your current search or topic filter.";
      optionsGrid.innerHTML = '';
      explanationBox.classList.remove('show');
      questionCounter.textContent = "0 / 0";
      topicBadge.textContent = "N/A";
      btnPrev.disabled = true;
      btnNext.disabled = true;
      return;
    }

    const q = activeQuestions[currentIndex];
    const topic = TOPICS.find(t => t.id === q.topicId);

    topicBadge.textContent = topic ? topic.name : "DSA";
    questionCounter.textContent = `Question ${currentIndex + 1} of ${activeQuestions.length}`;
    questionText.textContent = q.question;

    // Update Bookmark Button
    const isBookmarked = bookmarks.has(q.id);
    btnBookmark.innerHTML = isBookmarked ? '★ Bookmarked' : '☆ Bookmark';
    btnBookmark.style.color = isBookmarked ? '#f59e0b' : 'var(--text-primary)';

    // Render Options
    optionsGrid.innerHTML = '';
    const prefixes = ['A', 'B', 'C', 'D'];
    const existingAns = userAnswers[q.id];

    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';

      btn.innerHTML = `
        <span class="option-prefix">${prefixes[idx]}</span>
        <span class="option-content">${optText}</span>
        <span class="option-icon"></span>
      `;

      if (existingAns !== undefined) {
        btn.disabled = true;
        if (idx === q.answer) {
          btn.classList.add('correct');
          btn.querySelector('.option-icon').textContent = '✓';
        }
        if (existingAns.selectedIndex === idx && !existingAns.isCorrect) {
          btn.classList.add('wrong');
          btn.querySelector('.option-icon').textContent = '✗';
        }
      } else {
        btn.addEventListener('click', () => handleOptionClick(q, idx));
      }

      optionsGrid.appendChild(btn);
    });

    // Show Explanation if already answered
    if (existingAns !== undefined) {
      explanationText.textContent = q.explanation;
      explanationBox.classList.add('show');
    } else {
      explanationBox.classList.remove('show');
    }

    // Nav Buttons State
    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex === activeQuestions.length - 1;

    // Update Progress Bar
    const progressPercent = ((currentIndex + 1) / activeQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }

  // Handle Option Click
  function handleOptionClick(q, selectedIndex) {
    const isCorrect = (selectedIndex === q.answer);
    
    // Save Answer State
    userAnswers[q.id] = { selectedIndex, isCorrect };
    localStorage.setItem('cat2_answers', JSON.stringify(userAnswers));

    // Update Streak
    if (isCorrect) {
      streak++;
    } else {
      streak = 0;
    }

    recalculateStats();
    renderQuestion();
  }

  // Navigation
  function navigate(direction) {
    const newIdx = currentIndex + direction;
    if (newIdx >= 0 && newIdx < activeQuestions.length) {
      currentIndex = newIdx;
      renderQuestion();
    }
  }

  // Bookmarking
  function toggleBookmark() {
    if (activeQuestions.length === 0) return;
    const q = activeQuestions[currentIndex];
    if (bookmarks.has(q.id)) {
      bookmarks.delete(q.id);
    } else {
      bookmarks.add(q.id);
    }
    localStorage.setItem('cat2_bookmarks', JSON.stringify(Array.from(bookmarks)));
    renderQuestion();
  }

  // Recalculate Dashboard Stats
  function recalculateStats() {
    const keys = Object.keys(userAnswers);
    attempted = keys.length;
    score = keys.filter(id => userAnswers[id].isCorrect).length;

    statScore.textContent = `${score} / ${attempted}`;
    statAttempted.textContent = `${attempted} / ${QUESTIONS.length}`;
    
    const accuracy = attempted > 0 ? Math.round((score / attempted) * 100) : 0;
    statAccuracy.textContent = `${accuracy}%`;
    statStreak.textContent = `🔥 ${streak}`;
  }

  // Theme Toggle
  function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
  }

  // Initial Render
  renderQuestion();
});
