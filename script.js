document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const levelButtons = document.querySelectorAll('.level-btn');
  const num1Element = document.getElementById('num1');
  const num2Element = document.getElementById('num2');
  const resultElement = document.getElementById('result');
  const operatorElement = document.getElementById('operator');
  const levelDescElement = document.getElementById('levelDesc');

  let currentLevel = 1;
  const levelConfigs = {
    1: {
      description: 'Adding numbers 1-5',
      min: 1,
      max: 5,
      operator: '+',
      operation: (a, b) => a + b,
    },
    2: {
      description: 'Adding numbers 2-10',
      min: 2,
      max: 10,
      operator: '+',
      operation: (a, b) => a + b,
    },
    3: {
      description: 'Adding numbers 1-20',
      min: 1,
      max: 20,
      operator: '+',
      operation: (a, b) => a + b,
    },
    4: {
      description: 'Adding numbers 1-99',
      min: 1,
      max: 99,
      operator: '+',
      operation: (a, b) => a + b,
    },
    5: {
      description: 'Multiplying numbers 2-9',
      min: 2,
      max: 9,
      operator: '×',
      operation: (a, b) => a * b,
    },
  };

  // Set up level buttons
  levelButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentLevel = parseInt(button.dataset.level);

      // Update active state
      levelButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      // Update description
      levelDescElement.textContent = levelConfigs[currentLevel].description;

      // Generate new numbers
      generateNumbers();
    });
  });

  // Generate button handler
  generateBtn.addEventListener('click', generateNumbers);

  function generateNumbers() {
    const config = levelConfigs[currentLevel];
    const num1 = getRandomNumber(config.min, config.max);
    const num2 = getRandomNumber(config.min, config.max);
    const result = config.operation(num1, num2);

    // Update operator
    operatorElement.textContent = config.operator;

    // Apply pop animation
    [num1Element, num2Element, resultElement].forEach((el) => {
      el.classList.remove('pop-animation');
      void el.offsetWidth; // Trigger reflow
      el.classList.add('pop-animation');
    });

    // Update display
    num1Element.textContent = num1;
    num2Element.textContent = num2;
    resultElement.textContent = result;
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Initialize
  generateNumbers();
});
