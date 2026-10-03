// questions.js - Complete 130 MCQ Data for CAT 2 DSA

const TOPICS = [
  { id: 1, name: "Partition List" },
  { id: 2, name: "Add Two Numbers" },
  { id: 3, name: "Min Stack" },
  { id: 4, name: "Valid Parentheses" },
  { id: 5, name: "Evaluate Reverse Polish Notation" },
  { id: 6, name: "Valid Parenthesis String" },
  { id: 7, name: "Minimum Remove to Make Valid Parentheses" },
  { id: 8, name: "Longest Valid Parentheses" },
  { id: 9, name: "Basic Calculator" },
  { id: 10, name: "Validate Stack Sequences" },
  { id: 11, name: "Remove K Digits" },
  { id: 12, name: "Implement Queue using Stacks" },
  { id: 13, name: "Implement Stack using Queues" }
];

const QUESTIONS = [
  // ==================== Topic 1: Partition List ====================
  {
    id: 1,
    topicId: 1,
    question: "What is the primary objective of the Partition List problem?",
    options: [
      "Sort the linked list in ascending order",
      "Rearrange nodes so that values < x appear before values >= x while preserving original relative order",
      "Partition the linked list into two equal halves",
      "Remove all nodes equal to x"
    ],
    answer: 1,
    explanation: "Partition List requires grouping nodes less than x before nodes greater than or equal to x while maintaining their original relative sequence (stable partitioning)."
  },
  {
    id: 2,
    topicId: 1,
    question: "Why are two dummy nodes (smallDummy and largeDummy) used in the optimal approach?",
    options: [
      "To reduce time complexity from O(N²) to O(N)",
      "To simplify pointer updates and avoid special cases when inserting the first element into either list",
      "To sort both partitions independently",
      "To allow doubly-linked list traversal"
    ],
    answer: 1,
    explanation: "Dummy nodes eliminate edge-case checks for empty list heads during initial node insertions into either list."
  },
  {
    id: 3,
    topicId: 1,
    question: "What happens if large.next = null is omitted after partitioning?",
    options: [
      "The program throws a NullPointerException",
      "The list becomes empty",
      "A cycle (infinite loop) may be created in the linked list",
      "The small partition is erased"
    ],
    answer: 2,
    explanation: "If the last node of the greater list still points to an earlier node in the smaller list, linking small.next to largeDummy.next creates a circular linked list cycle."
  },
  {
    id: 4,
    topicId: 1,
    question: "What is the time complexity of partitioning a linked list of N nodes using two dummy nodes?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N²)"],
    answer: 2,
    explanation: "The algorithm traverses each of the N nodes exactly once in a single pass."
  },
  {
    id: 5,
    topicId: 1,
    question: "What is the auxiliary space complexity of the optimal Partition List algorithm?",
    options: ["O(1)", "O(N)", "O(log N)", "O(N²)"],
    answer: 0,
    explanation: "Nodes are rearranged in-place by modifying pointers without allocating new node memory."
  },
  {
    id: 6,
    topicId: 1,
    question: "For input list 1 -> 4 -> 3 -> 2 -> 5 -> 2 and pivot x = 3, what is the output list?",
    options: [
      "1 -> 2 -> 2 -> 3 -> 4 -> 5",
      "1 -> 2 -> 2 -> 4 -> 3 -> 5",
      "4 -> 3 -> 5 -> 1 -> 2 -> 2",
      "1 -> 4 -> 3 -> 2 -> 5 -> 2"
    ],
    answer: 1,
    explanation: "Smaller nodes (< 3) are [1, 2, 2] and greater/equal nodes (>= 3) are [4, 3, 5]. Preserving relative order produces 1 -> 2 -> 2 -> 4 -> 3 -> 5."
  },
  {
    id: 7,
    topicId: 1,
    question: "In Partition List, what does 'stable partitioning' mean?",
    options: [
      "Nodes are sorted numerically",
      "Relative order of nodes within each partition is preserved",
      "Memory addresses remain constant",
      "No extra pointers are initialized"
    ],
    answer: 1,
    explanation: "Stability guarantees that elements in both partitions retain their original relative sequence from the input list."
  },
  {
    id: 8,
    topicId: 1,
    question: "What is the output when partitioning list 2 -> 1 with x = 2?",
    options: ["2 -> 1", "1 -> 2", "2", "1"],
    answer: 1,
    explanation: "1 < 2 goes to the small list, 2 >= 2 goes to the large list. Connecting them produces 1 -> 2."
  },
  {
    id: 9,
    topicId: 1,
    question: "How does the algorithm reconnect the two partitions at the end?",
    options: [
      "large.next = smallDummy.next",
      "small.next = largeDummy.next",
      "smallDummy.next = largeDummy.next",
      "head.next = null"
    ],
    answer: 1,
    explanation: "The tail pointer of the small list (small.next) is connected to the first actual node of the large list (largeDummy.next)."
  },
  {
    id: 10,
    topicId: 1,
    question: "Which edge case returns the list with nodes in their exact original order?",
    options: [
      "All nodes have values < x",
      "The list contains duplicate elements",
      "x is the middle element",
      "The list has an odd number of nodes"
    ],
    answer: 0,
    explanation: "If all node values are strictly less than x, every node is appended to the small list, leaving the original order unchanged."
  },

  // ==================== Topic 2: Add Two Numbers ====================
  {
    id: 11,
    topicId: 2,
    question: "How are digits stored in the linked lists for the Add Two Numbers problem?",
    options: [
      "In sorted order",
      "In reverse order (least significant digit at head)",
      "In standard forward order (most significant digit at head)",
      "In binary format"
    ],
    answer: 1,
    explanation: "Digits are stored in reverse order so that head nodes represent the 1s place, allowing natural addition starting from the least significant digit."
  },
  {
    id: 12,
    topicId: 2,
    question: "Why is storing digits in reverse order advantageous for addition?",
    options: [
      "It allows adding numbers starting from the 1s place (LSD) directly while traversing forward",
      "It reduces time complexity to O(1)",
      "It eliminates the need for carry calculation",
      "It reduces memory footprint"
    ],
    answer: 0,
    explanation: "Standard addition proceeds from right to left (1s place up). Reverse order lets a single forward linked list traversal match this natural addition flow."
  },
  {
    id: 13,
    topicId: 2,
    question: "What is the loop condition for adding two linked lists l1 and l2?",
    options: [
      "while (l1 != null && l2 != null)",
      "while (l1 != null || l2 != null || carry != 0)",
      "while (carry == 0)",
      "while (l1.next != null)"
    ],
    answer: 1,
    explanation: "The loop must run as long as there is a node remaining in l1, a node remaining in l2, OR a leftover carry value to append."
  },
  {
    id: 14,
    topicId: 2,
    question: "For input lists 2 -> 4 -> 3 (342) and 5 -> 6 -> 4 (465), what is the output list?",
    options: ["7 -> 0 -> 8", "8 -> 0 -> 7", "7 -> 10 -> 7", "8 -> 0 -> 8"],
    answer: 0,
    explanation: "2+5=7, 4+6=10 (digit 0, carry 1), 3+4+1=8. Result in reverse order is 7 -> 0 -> 8 (representing 807)."
  },
  {
    id: 15,
    topicId: 2,
    question: "How is the carry for the next step computed when adding digits?",
    options: ["carry = sum % 10", "carry = sum / 10", "carry = sum - 10", "carry = sum * 10"],
    answer: 1,
    explanation: "Integer division sum / 10 extracts the carry digit for the next position (e.g., 15 / 10 = 1)."
  },
  {
    id: 16,
    topicId: 2,
    question: "What is the value stored in the new node created at each addition step?",
    options: ["sum / 10", "sum % 10", "sum", "carry"],
    answer: 1,
    explanation: "Modulo operation sum % 10 extracts the single digit to be stored in the current node (e.g., 15 % 10 = 5)."
  },
  {
    id: 17,
    topicId: 2,
    question: "What is the time complexity of adding two lists of length N and M?",
    options: ["O(1)", "O(min(N, M))", "O(max(N, M))", "O(N * M)"],
    answer: 2,
    explanation: "The algorithm iterates at most max(N, M) + 1 times to process all digits and any final carry."
  },
  {
    id: 18,
    topicId: 2,
    question: "What is the result of adding 9 -> 9 -> 9 and 1?",
    options: ["0 -> 0 -> 0", "0 -> 0 -> 0 -> 1", "1 -> 0 -> 0 -> 0", "9 -> 9 -> 0 -> 1"],
    answer: 1,
    explanation: "999 + 1 = 1000. Represented in reverse digit order: 0 -> 0 -> 0 -> 1."
  },
  {
    id: 19,
    topicId: 2,
    question: "What role does the dummy node play in the Add Two Numbers implementation?",
    options: [
      "Stores the carry value",
      "Acts as an anchor head for constructing the result list cleanly",
      "Reverses the final result list",
      "Tracks the length of the list"
    ],
    answer: 1,
    explanation: "The dummy node serves as a placeholder head so current.next can be built uniformly without checking if it is the first node."
  },
  {
    id: 20,
    topicId: 2,
    question: "What is the space complexity of the algorithm (excluding output list space)?",
    options: ["O(1)", "O(N)", "O(log N)", "O(N²)"],
    answer: 0,
    explanation: "Auxiliary space is O(1) because only primitive integer variables (sum, carry) and reference pointers are used."
  },

  // ==================== Topic 3: Min Stack ====================
  {
    id: 21,
    topicId: 3,
    question: "What special requirement must the MinStack fulfill?",
    options: [
      "Sort elements automatically on push",
      "Retrieve the minimum element in O(1) time",
      "Use only O(1) total space for all elements",
      "Reverse elements in O(1) time"
    ],
    answer: 1,
    explanation: "MinStack must support getMin() in O(1) constant time alongside push, pop, and top."
  },
  {
    id: 22,
    topicId: 3,
    question: "In a standard stack without extra tracking, what is the time complexity to find the minimum element?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N²)"],
    answer: 2,
    explanation: "Finding the minimum element in an unstructured standard stack requires examining every element, taking O(N) time."
  },
  {
    id: 23,
    topicId: 3,
    question: "In the two-stack implementation of Min Stack, when is a value pushed onto minStack?",
    options: [
      "Always on every push operation",
      "When minStack is empty or val <= minStack.peek()",
      "When val > minStack.peek()",
      "Only when the main stack is empty"
    ],
    answer: 1,
    explanation: "A value is pushed to minStack if minStack is empty OR if val is less than or equal to the current minimum."
  },
  {
    id: 24,
    topicId: 3,
    question: "Why is <= (less than or equal to) used instead of < when pushing to minStack?",
    options: [
      "To sort minStack in descending order",
      "To handle duplicate minimum values properly so popping one doesn't remove the minimum record",
      "To avoid NullPointerException",
      "To reduce time complexity"
    ],
    answer: 1,
    explanation: "Using <= records duplicate minimum entries so popping one copy leaves the other copy on minStack."
  },
  {
    id: 25,
    topicId: 3,
    question: "What happens during pop() in Min Stack?",
    options: [
      "Element is popped from main stack; if popped value equals minStack.peek(), pop from minStack too",
      "Element is popped only from minStack",
      "Minimum element is always deleted first",
      "Both stacks are cleared"
    ],
    answer: 0,
    explanation: "Popping removes the top element from the main stack; if that value matches minStack.peek(), it is popped from minStack as well."
  },
  {
    id: 26,
    topicId: 3,
    question: "Given operations: push(-2), push(0), push(-3), getMin(), what does getMin() return?",
    options: ["-2", "0", "-3", "3"],
    answer: 2,
    explanation: "-3 is the smallest element currently present in the stack."
  },
  {
    id: 27,
    topicId: 3,
    question: "Following push(-2), push(0), push(-3), getMin(), after executing pop(), what does getMin() return?",
    options: ["-3", "-2", "0", "Stack is empty"],
    answer: 1,
    explanation: "pop() removes -3 from both stacks. The remaining stack elements are [-2, 0], so getMin() returns -2."
  },
  {
    id: 28,
    topicId: 3,
    question: "What exception is thrown when calling top() or getMin() on an empty MinStack in the custom implementation?",
    options: ["NullPointerException", "IndexOutOfBoundsException", "RuntimeException(\"Stack is empty\")", "EmptyStackException"],
    answer: 2,
    explanation: "The custom implementation explicitly guards empty checks by throwing new RuntimeException(\"Stack is empty\")."
  },
  {
    id: 29,
    topicId: 3,
    question: "What is the space complexity of the two-stack MinStack approach?",
    options: ["O(1)", "O(N)", "O(N²)", "O(log N)"],
    answer: 1,
    explanation: "In the worst case (monotonically decreasing pushes), minStack stores N elements alongside the main stack, taking O(N) space."
  },
  {
    id: 30,
    topicId: 3,
    question: "Which data structure method in Java Stack looks at the top element without removing it?",
    options: ["pop()", "pull()", "peek()", "top()"],
    answer: 2,
    explanation: "peek() inspects the element at the top of the stack without modifying or popping it."
  },

  // ==================== Topic 4: Valid Parentheses ====================
  {
    id: 31,
    topicId: 4,
    question: "Which data structure property makes Stack ideal for checking valid parentheses?",
    options: ["FIFO (First In First Out)", "LIFO (Last In First Out)", "Random Access", "Sorted Order"],
    answer: 1,
    explanation: "Parentheses matching requires that the most recently opened bracket is closed first (LIFO order)."
  },
  {
    id: 32,
    topicId: 4,
    question: "What is done when encountering an opening bracket ('(', '[', '{') in the Valid Parentheses algorithm?",
    options: ["Pop from stack", "Push the opening bracket onto the stack", "Ignore it", "Return true"],
    answer: 1,
    explanation: "Opening brackets are pushed onto the stack to await their matching closing bracket."
  },
  {
    id: 33,
    topicId: 4,
    question: "What condition indicates an invalid string when a closing bracket is encountered?",
    options: [
      "The stack is empty OR the top element does not match the opening counterpart",
      "The stack has more than 5 elements",
      "The stack contains numbers",
      "The next character is also a closing bracket"
    ],
    answer: 0,
    explanation: "An empty stack implies an unmatched closing bracket; a non-matching top element violates bracket pair rules."
  },
  {
    id: 34,
    topicId: 4,
    question: "What is the output of isValid(\"()[]{}\")?",
    options: ["false", "true", "null", "Compile Error"],
    answer: 1,
    explanation: "All pairs open and close in correct sequence with matching types, returning true."
  },
  {
    id: 35,
    topicId: 4,
    question: "What is the output of isValid(\"([)]\")?",
    options: ["true", "false", "1", "0"],
    answer: 1,
    explanation: "')' attempts to close '(' while '[' is on top of the stack, violating strict LIFO nesting."
  },
  {
    id: 36,
    topicId: 4,
    question: "What is the final condition for a string to be declared valid after parsing all characters?",
    options: ["st.size() == 1", "st.isEmpty()", "st.peek() == null", "st.capacity() == 0"],
    answer: 1,
    explanation: "The stack must be empty (st.isEmpty() == true) to ensure no unmatched opening brackets remain."
  },
  {
    id: 37,
    topicId: 4,
    question: "What is the result of checking string \"[\"?",
    options: ["true", "false", "Exception thrown", "null"],
    answer: 1,
    explanation: "'[' is pushed, loop finishes, stack contains 1 unclosed item, returning false."
  },
  {
    id: 38,
    topicId: 4,
    question: "What is the time complexity of the Valid Parentheses algorithm for a string of length N?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N²)"],
    answer: 2,
    explanation: "The algorithm scans the string of length N once, performing O(1) stack pushes and pops."
  },
  {
    id: 39,
    topicId: 4,
    question: "What is the space complexity of the Valid Parentheses algorithm?",
    options: ["O(1)", "O(N)", "O(N²)", "O(log N)"],
    answer: 1,
    explanation: "In the worst case (e.g. \"(((((\"), the stack holds up to N characters."
  },
  {
    id: 40,
    topicId: 4,
    question: "If an input string has an odd length (e.g. length 5), can it ever be a valid parentheses string?",
    options: [
      "Yes, always",
      "No, because parentheses always form balanced pairs of 2",
      "Only if it contains numbers",
      "Depends on character types"
    ],
    answer: 1,
    explanation: "Valid parentheses must form even-length matching pairs; an odd-length string is guaranteed to be invalid."
  },

  // ==================== Topic 5: Evaluate RPN ====================
  {
    id: 41,
    topicId: 5,
    question: "What is another name for Reverse Polish Notation?",
    options: ["Prefix Notation", "Infix Notation", "Postfix Notation", "Binary Notation"],
    answer: 2,
    explanation: "Reverse Polish Notation is universally known as Postfix Notation."
  },
  {
    id: 42,
    topicId: 5,
    question: "In RPN, where do operators appear relative to their operands?",
    options: ["Before operands", "Between operands", "After operands", "At the very end of expression only"],
    answer: 2,
    explanation: "In postfix notation, operators follow their operands (e.g., \"2 1 +\")."
  },
  {
    id: 43,
    topicId: 5,
    question: "What data structure is used to evaluate an RPN expression?",
    options: ["Queue", "Stack", "Binary Tree", "Hash Table"],
    answer: 1,
    explanation: "A stack is used to store numeric operands until an operator pops them for evaluation."
  },
  {
    id: 44,
    topicId: 5,
    question: "When an operator is encountered during RPN evaluation, what order are operands popped?",
    options: [
      "First pop is left operand (a), second pop is right operand (b)",
      "First pop is right operand (b), second pop is left operand (a)",
      "Both operands are popped simultaneously",
      "Operands are not popped"
    ],
    answer: 1,
    explanation: "Because of LIFO stack order, the top element popped is the right operand (b), followed by the left operand (a)."
  },
  {
    id: 45,
    topicId: 5,
    question: "What is the result of evaluating [\"2\", \"1\", \"+\", \"3\", \"*\"]?",
    options: ["5", "9", "7", "6"],
    answer: 1,
    explanation: "2 + 1 = 3, then 3 * 3 = 9."
  },
  {
    id: 46,
    topicId: 5,
    question: "What is the result of evaluating [\"4\", \"13\", \"5\", \"/\", \"+\"]?",
    options: ["6", "6.6", "7", "5"],
    answer: 0,
    explanation: "13 / 5 = 2 (integer truncation toward zero), then 4 + 2 = 6."
  },
  {
    id: 47,
    topicId: 5,
    question: "Why does Reverse Polish Notation not require parentheses?",
    options: [
      "It only allows addition",
      "Operator order uniquely determines execution order unambiguously",
      "It converts all operations to multiplication",
      "It uses compiler flags"
    ],
    answer: 1,
    explanation: "The relative positioning of operands and operators in postfix explicitly specifies exact evaluation order."
  },
  {
    id: 48,
    topicId: 5,
    question: "What is the time complexity of evaluating an RPN expression with N tokens?",
    options: ["O(1)", "O(N)", "O(N²)", "O(N log N)"],
    answer: 1,
    explanation: "Processing each token involves O(1) push, pop, or arithmetic operations, total O(N) time."
  },
  {
    id: 49,
    topicId: 5,
    question: "How does integer division behave when evaluating RPN in Java (e.g., -7 / 3)?",
    options: ["Rounds up to -2", "Truncates toward zero to -2", "Rounds down to -3", "Throws ArithmeticException"],
    answer: 1,
    explanation: "Java integer division truncates fractional results toward zero (-7 / 3 = -2)."
  },
  {
    id: 50,
    topicId: 5,
    question: "What remains on the stack after processing a valid RPN expression?",
    options: ["0 elements", "Exactly 1 element (the final result)", "2 elements", "All operands"],
    answer: 1,
    explanation: "A valid postfix expression evaluates down to a single final numerical result on top of the stack."
  },

  // ==================== Topic 6: Valid Parenthesis String ====================
  {
    id: 51,
    topicId: 6,
    question: "In Valid Parenthesis String, what 3 possible meanings can '*' represent?",
    options: [
      "'(', ')', or empty string \"\"",
      "'+', '-', or '*'",
      "Number, letter, or symbol",
      "Space, tab, or newline"
    ],
    answer: 0,
    explanation: "'*' is a wildcard that can act as an open bracket '(', a close bracket ')', or an empty string \"\"."
  },
  {
    id: 52,
    topicId: 6,
    question: "What do variables min and max represent in the optimal O(N) greedy algorithm?",
    options: [
      "Minimum and maximum values in string",
      "Minimum and maximum possible count of open parentheses '('",
      "Minimum and maximum length of string",
      "Array bounds"
    ],
    answer: 1,
    explanation: "min represents the minimum required open brackets; max represents the maximum possible open brackets."
  },
  {
    id: 53,
    topicId: 6,
    question: "When character '*' is encountered, how are min and max updated?",
    options: ["min++, max++", "min--, max--", "min--, max++", "min++, max--"],
    answer: 2,
    explanation: "'*' as ')' decreases minimum open count (min--); '*' as '(' increases maximum open count (max++)."
  },
  {
    id: 54,
    topicId: 6,
    question: "What condition immediately causes the algorithm to return false during iteration?",
    options: ["min > max", "max < 0", "min == 0", "max > N"],
    answer: 1,
    explanation: "If max < 0, there are too many closing brackets even if every '*' is treated as an opening bracket."
  },
  {
    id: 55,
    topicId: 6,
    question: "What reset is performed if min < 0 during iteration?",
    options: ["min = max", "min = 0", "min = -1", "max = 0"],
    answer: 1,
    explanation: "The minimum open count cannot be negative; if min < 0, it resets to 0 (excess '*' act as empty strings)."
  },
  {
    id: 56,
    topicId: 6,
    question: "What is the final condition for returning true at the end of the string?",
    options: ["max == 0", "min == 0", "min == max", "max > 0"],
    answer: 1,
    explanation: "min == 0 means all required open brackets can be balanced."
  },
  {
    id: 57,
    topicId: 6,
    question: "What is the result of checkValidString(\"(*)\")?",
    options: ["false", "true", "Error", "null"],
    answer: 1,
    explanation: "'*' acting as empty string yields valid \"()\", returning true."
  },
  {
    id: 58,
    topicId: 6,
    question: "What is the result of checkValidString(\"*(\")?",
    options: ["true", "false", "0", "1"],
    answer: 1,
    explanation: "'*' appears before '(', leaving '(' unmatched at end (min == 1 != 0), returning false."
  },
  {
    id: 59,
    topicId: 6,
    question: "What is the time complexity of the min/max greedy algorithm?",
    options: ["O(3^N)", "O(N²)", "O(N)", "O(log N)"],
    answer: 2,
    explanation: "Single pass traversal over the string of length N."
  },
  {
    id: 60,
    topicId: 6,
    question: "What is the auxiliary space complexity of the optimal algorithm?",
    options: ["O(1)", "O(N)", "O(3^N)", "O(log N)"],
    answer: 0,
    explanation: "Uses only two primitive integer variables (min and max)."
  },

  // ==================== Topic 7: Minimum Remove to Make Valid ====================
  {
    id: 61,
    topicId: 7,
    question: "What is the goal of the Minimum Remove to Make Valid Parentheses problem?",
    options: [
      "Add parentheses to make string valid",
      "Remove minimum number of parentheses so the resulting string is valid",
      "Reverse all parentheses",
      "Count total parentheses"
    ],
    answer: 1,
    explanation: "Delete the fewest possible parenthesis characters to produce a valid parentheses sequence."
  },
  {
    id: 62,
    topicId: 7,
    question: "In the StringBuilder marking approach, what character is temporarily placed at invalid indices?",
    options: ["'#'", "'*'", "' '", "'?'"],
    answer: 1,
    explanation: "Unmatched '(' and ')' indices are marked with '*' in StringBuilder for later filtering."
  },
  {
    id: 63,
    topicId: 7,
    question: "When scanning the string, what triggers marking a closing parenthesis ')' with '*'?",
    options: [
      "The stack is not empty",
      "The stack is empty (no preceding unmatched '(')",
      "The character is a letter",
      "The index is odd"
    ],
    answer: 1,
    explanation: "A ')' encountered when the stack is empty has no matching '(' and must be marked for deletion."
  },
  {
    id: 64,
    topicId: 7,
    question: "After scanning the string, what is done with remaining indices in the stack?",
    options: [
      "They are ignored",
      "They are popped and their corresponding characters in sb are set to '*'",
      "They are duplicated",
      "The algorithm throws an exception"
    ],
    answer: 1,
    explanation: "Stack indices represent unmatched '(' which are popped and marked with '*' in sb."
  },
  {
    id: 65,
    topicId: 7,
    question: "What is the output for minRemoveToMakeValid(\"lee(t(c)o)de)\")?",
    options: ["\"lee(t(c)o)de\"", "\"leet code\"", "\"lee(t(c)o)de)\"", "\"\""],
    answer: 0,
    explanation: "Removing the trailing unmatched ')' yields \"lee(t(c)o)de\"."
  },
  {
    id: 66,
    topicId: 7,
    question: "What is the output for minRemoveToMakeValid(\"a)b(c)d\")?",
    options: ["\"abcd\"", "\"ab(c)d\"", "\"a)b(c)d\"", "\"(a)b(c)d\""],
    answer: 1,
    explanation: "Removing the leading invalid ')' yields \"ab(c)d\"."
  },
  {
    id: 67,
    topicId: 7,
    question: "What is the output for minRemoveToMakeValid(\"))((\")?",
    options: ["\"))((\"", "\"()\"", "\"\"", "\"**\""],
    answer: 2,
    explanation: "All 4 parentheses are unmatched and removed, leaving the empty string \"\"."
  },
  {
    id: 68,
    topicId: 7,
    question: "What is stored in the stack during the pass over the string?",
    options: ["Character literals '('", "Integer indices of unmatched '('", "Boolean values", "String segments"],
    answer: 1,
    explanation: "Storing integer indices allows exact positional modification in StringBuilder using sb.setCharAt(idx, '*')."
  },
  {
    id: 69,
    topicId: 7,
    question: "What is the time complexity of the Minimum Remove algorithm?",
    options: ["O(N)", "O(N²)", "O(2^N)", "O(log N)"],
    answer: 0,
    explanation: "Two linear passes over string length N take O(N) total time."
  },
  {
    id: 70,
    topicId: 7,
    question: "What is the space complexity of this algorithm?",
    options: ["O(1)", "O(N)", "O(N²)", "O(log N)"],
    answer: 1,
    explanation: "StringBuilder and Stack scale linearly with string length N."
  },

  // ==================== Topic 8: Longest Valid Parentheses ====================
  {
    id: 71,
    topicId: 8,
    question: "What does the Longest Valid Parentheses problem ask to find?",
    options: [
      "Number of valid parentheses pairs",
      "Length of the longest contiguous valid (well-formed) parentheses substring",
      "Total string length",
      "Maximum recursion depth"
    ],
    answer: 1,
    explanation: "Find the maximum length of a contiguous substring forming valid balanced parentheses."
  },
  {
    id: 72,
    topicId: 8,
    question: "What initial value is pushed onto the stack before iterating through the string?",
    options: ["0", "-1", "1", "Integer.MIN_VALUE"],
    answer: 1,
    explanation: "-1 is pushed onto the stack as a dummy base boundary index."
  },
  {
    id: 73,
    topicId: 8,
    question: "Why is -1 pushed onto the stack initially?",
    options: [
      "To prevent stack underflow",
      "To serve as a dummy base boundary before index 0 for distance calculation i - st.peek()",
      "To count negative characters",
      "To stop the loop"
    ],
    answer: 1,
    explanation: "Distance formula i - st.peek() correctly measures length for valid substrings starting at index 0 when base is -1."
  },
  {
    id: 74,
    topicId: 8,
    question: "When ch == ')' and after st.pop(), if the stack becomes empty, what action is taken?",
    options: [
      "Return current maxLen",
      "Push current index i onto stack as the new base boundary",
      "Break the loop",
      "Throw Exception"
    ],
    answer: 1,
    explanation: "An empty stack means current ')' broke validity; pushing i resets the base boundary for future valid substrings."
  },
  {
    id: 75,
    topicId: 8,
    question: "If after st.pop() the stack is NOT empty, how is the current valid substring length calculated?",
    options: ["i - st.peek()", "i + st.peek()", "st.peek() - i", "st.size()"],
    answer: 0,
    explanation: "i - st.peek() calculates the valid substring length ending at current index i."
  },
  {
    id: 76,
    topicId: 8,
    question: "What is the output of longestValidParentheses(\"(()\")?",
    options: ["0", "2", "3", "1"],
    answer: 1,
    explanation: "The longest valid substring is \"()\" with length 2."
  },
  {
    id: 77,
    topicId: 8,
    question: "What is the output of longestValidParentheses(\")()()\")?",
    options: ["2", "4", "6", "0"],
    answer: 1,
    explanation: "The longest valid substring is \"()()\" from index 1 to 4 with length 4."
  },
  {
    id: 78,
    topicId: 8,
    question: "What is the output of longestValidParentheses(\"\") (empty string)?",
    options: ["0", "-1", "1", "NullPointerException"],
    answer: 0,
    explanation: "An empty string contains no valid parentheses; length is 0."
  },
  {
    id: 79,
    topicId: 8,
    question: "What is the time complexity of the stack-based Longest Valid Parentheses algorithm?",
    options: ["O(N)", "O(N²)", "O(N³)", "O(log N)"],
    answer: 0,
    explanation: "Single linear pass over string length N."
  },
  {
    id: 80,
    topicId: 8,
    question: "Can this problem also be solved in O(1) auxiliary space?",
    options: [
      "No, stack is mandatory",
      "Yes, using a two-pass left-to-right and right-to-left counter approach",
      "Yes, using binary search",
      "No, requires O(N²) space"
    ],
    answer: 1,
    explanation: "Two passes (left-to-right & right-to-left) counting open/close brackets find max length in O(1) auxiliary space."
  },

  // ==================== Topic 9: Basic Calculator ====================
  {
    id: 81,
    topicId: 9,
    question: "What mathematical operators are supported in the Basic Calculator problem?",
    options: ["+, -, *, /", "+, -, and parentheses (, )", "*, /, %", "Exponents ^"],
    answer: 1,
    explanation: "Basic Calculator handles +, -, parentheses, and spaces."
  },
  {
    id: 82,
    topicId: 9,
    question: "What initial values are assigned to result, number, and sign?",
    options: [
      "result = 0, number = 0, sign = 1",
      "result = 1, number = 1, sign = 0",
      "result = -1, number = 0, sign = -1",
      "result = 0, number = 0, sign = 0"
    ],
    answer: 0,
    explanation: "result = 0, current number = 0, initial positive sign = 1."
  },
  {
    id: 83,
    topicId: 9,
    question: "When an open parenthesis '(' is encountered, what elements are pushed onto the stack in order?",
    options: ["sign then result", "result then sign", "number then result", "Only sign"],
    answer: 1,
    explanation: "The outer result is pushed first, followed by the outer sign."
  },
  {
    id: 84,
    topicId: 9,
    question: "When a closing parenthesis ')' is encountered, how is the result updated?",
    options: [
      "result += sign * number; result *= st.pop(); result += st.pop();",
      "result += st.pop()",
      "result = number",
      "result /= st.pop()"
    ],
    answer: 0,
    explanation: "Add current number term, multiply inner result by saved sign (st.pop()), add saved result (st.pop())."
  },
  {
    id: 85,
    topicId: 9,
    question: "In result *= st.pop(); result += st.pop();, what do the first pop and second pop represent?",
    options: [
      "First pop is saved result, second pop is saved sign",
      "First pop is saved sign before '(', second pop is saved result before '('",
      "Both are numbers",
      "First pop is stack size, second is number"
    ],
    answer: 1,
    explanation: "Top of stack holds saved sign; next element holds saved result prior to '('."
  },
  {
    id: 86,
    topicId: 9,
    question: "What is the result of calculate(\"1 + 1\")?",
    options: ["1", "2", "11", "0"],
    answer: 1,
    explanation: "1 + 1 = 2."
  },
  {
    id: 87,
    topicId: 9,
    question: "What is the result of calculate(\" 2-1 + 2 \")?",
    options: ["1", "3", "-1", "2"],
    answer: 1,
    explanation: "2 - 1 + 2 = 3."
  },
  {
    id: 88,
    topicId: 9,
    question: "What is the result of calculate(\"-(2+3)\")?",
    options: ["5", "-5", "1", "-1"],
    answer: 1,
    explanation: "Inner 2+3 = 5, multiplied by outer sign -1 yields -5."
  },
  {
    id: 89,
    topicId: 9,
    question: "How are multi-digit numbers (e.g., \"123\") parsed during string iteration?",
    options: [
      "number = ch - '0'",
      "number = number * 10 + (ch - '0')",
      "number = number + 10",
      "number = Integer.parseInt(s)"
    ],
    answer: 1,
    explanation: "number = number * 10 + (ch - '0') shifts previous digits left and appends new digit."
  },
  {
    id: 90,
    topicId: 9,
    question: "What is the time and space complexity of the Basic Calculator algorithm?",
    options: ["Time O(N), Space O(N)", "Time O(N²), Space O(1)", "Time O(log N), Space O(N)", "Time O(N), Space O(1)"],
    answer: 0,
    explanation: "Linear pass over expression of length N; stack depth proportional to max nested parentheses."
  },

  // ==================== Topic 10: Validate Stack Sequences ====================
  {
    id: 91,
    topicId: 10,
    question: "What does the Validate Stack Sequences problem evaluate?",
    options: [
      "If pushed array is sorted",
      "If popped sequence could result from a series of push and pop operations on an initially empty stack",
      "If popped is identical to pushed",
      "If stack size exceeds limit"
    ],
    answer: 1,
    explanation: "Determines if the target popped sequence can be produced by legal stack operations on pushed sequence."
  },
  {
    id: 92,
    topicId: 10,
    question: "What initial check returns false immediately before processing arrays?",
    options: ["pushed == null", "pushed.length != popped.length", "pushed[0] != popped[0]", "pushed.length == 0"],
    answer: 1,
    explanation: "If pushed and popped have different lengths, the sequence is immediately invalid."
  },
  {
    id: 93,
    topicId: 10,
    question: "What is the inner loop condition for popping elements from st?",
    options: [
      "while (!st.isEmpty() && j < popped.length && st.peek().equals(popped[j]))",
      "while (st.size() > 0)",
      "while (j < pushed.length)",
      "while (st.peek() != null)"
    ],
    answer: 0,
    explanation: "Pops elements as long as stack is non-empty, pointer j is in range, and st.peek() matches popped[j]."
  },
  {
    id: 94,
    topicId: 10,
    question: "What condition confirms that the push/pop sequence is valid at the end?",
    options: [
      "st.isEmpty() && j == popped.length",
      "j == 0",
      "st.size() == pushed.length",
      "pushed[0] == popped[0]"
    ],
    answer: 0,
    explanation: "Empty stack and j having matched all popped elements confirms a valid simulation sequence."
  },
  {
    id: 95,
    topicId: 10,
    question: "Given pushed = [1, 2, 3, 4, 5] and popped = [4, 5, 3, 2, 1], what does validateStackSequences return?",
    options: ["false", "true", "null", "Error"],
    answer: 1,
    explanation: "Push 1,2,3,4 -> Pop 4 -> Push 5 -> Pop 5,3,2,1 is a valid sequence."
  },
  {
    id: 96,
    topicId: 10,
    question: "Given pushed = [1, 2, 3, 4, 5] and popped = [4, 3, 5, 1, 2], what is the result and why?",
    options: [
      "true",
      "false, because 1 cannot be popped before 2",
      "true, because all elements exist in popped",
      "false, because length is odd"
    ],
    answer: 1,
    explanation: "2 sits on top of 1 in the stack; 1 cannot be popped before 2."
  },
  {
    id: 97,
    topicId: 10,
    question: "What is the maximum number of times any element is pushed or popped during simulation?",
    options: ["Pushed once, popped once", "Pushed N times, popped N² times", "N² pushes", "Unlimited"],
    answer: 0,
    explanation: "Each element enters the stack exactly once and leaves at most once (max 2N operations total)."
  },
  {
    id: 98,
    topicId: 10,
    question: "What is the overall time complexity of validateStackSequences?",
    options: ["O(N²)", "O(N)", "O(N log N)", "O(1)"],
    answer: 1,
    explanation: "Linear O(N) time since total push and pop operations are bounded by 2N."
  },
  {
    id: 99,
    topicId: 10,
    question: "What is the auxiliary space complexity?",
    options: ["O(1)", "O(N)", "O(N²)", "O(log N)"],
    answer: 1,
    explanation: "Stack stores up to N elements."
  },
  {
    id: 100,
    topicId: 10,
    question: "Can an in-place pointer simulation reduce auxiliary space to O(1) using the pushed array as a stack?",
    options: [
      "No, impossible",
      "Yes, by maintaining a stack pointer i within pushed",
      "Only if arrays are sorted",
      "Only for even length arrays"
    ],
    answer: 1,
    explanation: "We can mutate pushed in-place with a write index pointer to achieve O(1) space."
  },

  // ==================== Topic 11: Remove K Digits ====================
  {
    id: 101,
    topicId: 11,
    question: "What is the goal of the Remove K Digits problem?",
    options: [
      "Remove K digits to make the resulting number as large as possible",
      "Remove K digits to make the resulting number as small as possible",
      "Remove all odd digits",
      "Sort digits in descending order"
    ],
    answer: 1,
    explanation: "Minimize integer value after deleting K digits."
  },
  {
    id: 102,
    topicId: 11,
    question: "What core greedy choice minimizes the resulting integer value?",
    options: [
      "Remove the largest digit anywhere in the string",
      "Remove digit D_i whenever D_i > D_{i+1} starting from the leftmost digit",
      "Remove digits from the end of string",
      "Remove all zeros"
    ],
    answer: 1,
    explanation: "Leftmost digits carry highest positional weight; removing larger preceding digits minimizes value."
  },
  {
    id: 103,
    topicId: 11,
    question: "What data structure is used to maintain digits in monotonic non-decreasing order?",
    options: ["Queue", "Stack", "Binary Search Tree", "Heap"],
    answer: 1,
    explanation: "A monotonic stack maintains digits in increasing order."
  },
  {
    id: 104,
    topicId: 11,
    question: "What is the condition to pop a digit from stack while iterating through num?",
    options: [
      "while (!st.isEmpty() && k > 0 && st.peek() > ch)",
      "while (st.peek() == ch)",
      "while (k == 0)",
      "while (st.size() > K)"
    ],
    answer: 0,
    explanation: "Pops top digit if it is larger than current digit ch and remaining removals k > 0."
  },
  {
    id: 105,
    topicId: 11,
    question: "If k > 0 after scanning all digits of num, what does the algorithm do?",
    options: [
      "Clears the stack",
      "Pops remaining K digits from top of stack",
      "Throws error",
      "Returns original string"
    ],
    answer: 1,
    explanation: "Remaining k removals pop the largest digits from top of monotonic stack."
  },
  {
    id: 106,
    topicId: 11,
    question: "Why is sb.reverse() called after popping elements from st into StringBuilder?",
    options: [
      "To sort digits",
      "Because popping from stack yields digits in reverse order",
      "To remove negative signs",
      "To add trailing zeros"
    ],
    answer: 1,
    explanation: "Stack pops from top (rightmost digit), so reversing restores left-to-right digit order."
  },
  {
    id: 107,
    topicId: 11,
    question: "What is the output of removeKdigits(\"1432219\", 3)?",
    options: ["\"1432\"", "\"1219\"", "\"2219\"", "\"1329\""],
    answer: 1,
    explanation: "Removes '4', '3', '2' -> Result \"1219\"."
  },
  {
    id: 108,
    topicId: 11,
    question: "What is the output of removeKdigits(\"10200\", 1)?",
    options: ["\"1020\"", "\"200\"", "\"0200\"", "\"100\""],
    answer: 1,
    explanation: "Removes '1', leaving \"0200\". Stripping leading zero yields \"200\"."
  },
  {
    id: 109,
    topicId: 11,
    question: "What is the output of removeKdigits(\"10\", 2)?",
    options: ["\"0\"", "\"1\"", "\"\"", "\"10\""],
    answer: 0,
    explanation: "k >= num.length() returns \"0\"."
  },
  {
    id: 110,
    topicId: 11,
    question: "What is the time and space complexity of removeKdigits?",
    options: ["Time O(N), Space O(N)", "Time O(N²), Space O(1)", "Time O(N log N), Space O(N)", "Time O(1), Space O(1)"],
    answer: 0,
    explanation: "Single linear pass over digits; stack stores up to N characters."
  },

  // ==================== Topic 12: Implement Queue using Stacks ====================
  {
    id: 111,
    topicId: 12,
    question: "What fundamental difference in element ordering exists between Stack and Queue?",
    options: [
      "Stack is FIFO, Queue is LIFO",
      "Stack is LIFO, Queue is FIFO",
      "Both are FIFO",
      "Both are LIFO"
    ],
    answer: 1,
    explanation: "Stack uses Last-In-First-Out; Queue uses First-In-First-Out."
  },
  {
    id: 112,
    topicId: 12,
    question: "In the two-stack implementation of Queue (s1 and s2), what is the role of s1?",
    options: [
      "Holds elements ready to be popped in FIFO order",
      "Holds newly pushed elements",
      "Stores minimum values",
      "Stores deleted elements"
    ],
    answer: 1,
    explanation: "s1 receives incoming push elements."
  },
  {
    id: 113,
    topicId: 12,
    question: "When are elements transferred from s1 to s2?",
    options: [
      "On every single push() call",
      "When peek() or pop() is called AND s2 is currently empty",
      "When s1 is completely full",
      "Automatically every 5 seconds"
    ],
    answer: 1,
    explanation: "Lazy transfer copies elements from s1 to s2 only when s2 runs empty."
  },
  {
    id: 114,
    topicId: 12,
    question: "How does transferring elements from s1 to s2 reverse their order?",
    options: [
      "Popping from s1 (LIFO) and pushing to s2 (LIFO) flips ordering twice, achieving FIFO order",
      "s2 sorts elements automatically",
      "Elements are swapped pair by pair",
      "Uses recursive helper method"
    ],
    answer: 0,
    explanation: "Double stack push/pop reversal transforms LIFO into FIFO order."
  },
  {
    id: 115,
    topicId: 12,
    question: "What is the amortized time complexity of pop() and peek() operations?",
    options: ["O(N)", "O(1)", "O(N²)", "O(log N)"],
    answer: 1,
    explanation: "Each element is transferred from s1 to s2 at most once, giving amortized O(1) time."
  },
  {
    id: 116,
    topicId: 12,
    question: "What is the condition for empty() in MyQueue?",
    options: ["s1.isEmpty()", "s2.isEmpty()", "s1.isEmpty() && s2.isEmpty()", "s1.size() == s2.size()"],
    answer: 2,
    explanation: "Queue is empty only when both s1 and s2 contain no elements."
  },
  {
    id: 117,
    topicId: 12,
    question: "Given sequence: push(1), push(2), peek(), pop(), peek(). What are the values returned by the two peek() calls?",
    options: ["1 then 2", "2 then 1", "1 then 1", "2 then 2"],
    answer: 0,
    explanation: "First peek() returns 1 (front). pop() removes 1. Second peek() returns 2."
  },
  {
    id: 118,
    topicId: 12,
    question: "Why is pop() implementation simplified by calling peek() first?",
    options: [
      "peek() handles transferring elements from s1 to s2 if s2 is empty, avoiding duplicate code",
      "peek() empties the queue",
      "peek() doubles queue capacity",
      "peek() checks for null pointers"
    ],
    answer: 0,
    explanation: "peek() guarantees s2 contains inverted elements so pop() can directly execute s2.pop()."
  },
  {
    id: 119,
    topicId: 12,
    question: "What happens if pop() or peek() is called on an empty MyQueue in the custom implementation?",
    options: ["Returns 0", "Returns -1", "Throws RuntimeException(\"Queue is empty\")", "Throws NullPointerException"],
    answer: 2,
    explanation: "Implementation explicitly throws new RuntimeException(\"Queue is empty\")."
  },
  {
    id: 120,
    topicId: 12,
    question: "What is the total auxiliary space complexity required for storing N elements across both stacks?",
    options: ["O(1)", "O(N)", "O(N²)", "O(2^N)"],
    answer: 1,
    explanation: "N elements stored between s1 and s2 take O(N) auxiliary space."
  },

  // ==================== Topic 13: Implement Stack using Queues ====================
  {
    id: 121,
    topicId: 13,
    question: "What strategy allows implementing a LIFO Stack using a single Queue q?",
    options: [
      "Sorting the queue on pop()",
      "On push(x), add x and rotate the preceding size - 1 elements to the back of the queue",
      "Using recursion during top()",
      "Reversing the queue on every pop()"
    ],
    answer: 1,
    explanation: "Rotating size - 1 elements positions newly added x at the front of queue."
  },
  {
    id: 122,
    topicId: 13,
    question: "How many rotations (q.add(q.remove())) are performed inside push(x) when queue has size elements?",
    options: ["size", "size - 1", "0", "size + 1"],
    answer: 1,
    explanation: "Rotating size - 1 times moves older elements behind newly pushed x."
  },
  {
    id: 123,
    topicId: 13,
    question: "What element is at the front of q after push(x) completes?",
    options: ["The oldest element pushed", "The newly pushed element x", "The minimum element", "null"],
    answer: 1,
    explanation: "Queue rotation positions the newest element x at front of queue."
  },
  {
    id: 124,
    topicId: 13,
    question: "What is the time complexity of push(x) in this single-queue rotation strategy?",
    options: ["O(1)", "O(N)", "O(N²)", "O(log N)"],
    answer: 1,
    explanation: "Rotating N - 1 elements takes O(N) time per push."
  },
  {
    id: 125,
    topicId: 13,
    question: "What are the time complexities of pop() and top() in this single-queue rotation strategy?",
    options: ["Both are O(1)", "Both are O(N)", "pop() is O(N), top() is O(1)", "Both are O(N²)"],
    answer: 0,
    explanation: "Because newest element is at front, pop() (q.remove()) and top() (q.peek()) take O(1) constant time."
  },
  {
    id: 126,
    topicId: 13,
    question: "What method is used to implement pop() on q?",
    options: ["q.poll() or q.remove()", "q.peek()", "q.add()", "q.clear()"],
    answer: 0,
    explanation: "remove() or poll() retrieves and removes front element."
  },
  {
    id: 127,
    topicId: 13,
    question: "Given operations: push(1), push(2), push(3), top(), pop(), top(). What are the returned values of the two top() calls?",
    options: ["3 then 2", "1 then 2", "3 then 3", "2 then 1"],
    answer: 0,
    explanation: "top() returns 3. pop() removes 3. Next top() returns 2."
  },
  {
    id: 128,
    topicId: 13,
    question: "What exception is thrown when calling pop() or top() on an empty MyStack in the custom implementation?",
    options: ["EmptyStackException", "RuntimeException(\"Stack is empty\")", "NullPointerException", "NoSuchElementException"],
    answer: 1,
    explanation: "Implementation explicitly throws new RuntimeException(\"Stack is empty\")."
  },
  {
    id: 129,
    topicId: 13,
    question: "What is the condition for empty() in MyStack?",
    options: ["q.isEmpty()", "q.size() == 1", "q.peek() == null", "q.poll() == 0"],
    answer: 0,
    explanation: "Stack is empty when underlying queue q is empty."
  },
  {
    id: 130,
    topicId: 13,
    question: "What is the auxiliary space complexity of MyStack using a single LinkedList queue for N elements?",
    options: ["O(1)", "O(N)", "O(N²)", "O(log N)"],
    answer: 1,
    explanation: "Queue stores N elements taking O(N) space."
  }
];
