// Infosys Pseudocode 300 Questions Bank
window.QUESTIONS_POOL = [
  {
    "id": 1,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, d\nSet a = 15, b = 4, c = 3\nSet d = a / b * c + a mod b\nPrint d",
    "options": [
      "12",
      "9",
      "14",
      "11"
    ],
    "correctAnswer": 0,
    "explanation": "In integer arithmetic, a / b is 15 / 4 = 3. Then (3 * 3) = 9. a mod b is 15 mod 4 = 3. So d = 9 + 3 = 12."
  },
  {
    "id": 2,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, r\nSet p = 20, q = 6, r = 2\nSet p = p / q + p mod (r + 1)\nPrint p",
    "options": [
      "7",
      "5",
      "4",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "r + 1 = 3. Integer division p / q = 20 / 6 = 3. 20 mod 3 = 2. So p = 3 + 2 = 5."
  },
  {
    "id": 3,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, z\nSet x = 8, y = 3\nSet z = (x * y) / (x - y) + (x mod y)\nPrint z",
    "options": [
      "4",
      "5",
      "6",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "(x * y) = 24. (x - y) = 5. Integer division 24 / 5 = 4. 8 mod 3 = 2. So z = 4 + 2 = 6."
  },
  {
    "id": 4,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c\nSet a = 25, b = 7\nSet c = a - b * (a / b)\nPrint c",
    "options": [
      "7",
      "3",
      "0",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "a / b = 25 / 7 = 3. Then b * 3 = 21. Finally c = 25 - 21 = 4. (Notice this is equivalent to a mod b)."
  },
  {
    "id": 5,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer m, n, p\nSet m = 14, n = 5\nSet p = (m mod n) * (m / n) + (n / 2)\nPrint p",
    "options": [
      "10",
      "8",
      "14",
      "12"
    ],
    "correctAnswer": 0,
    "explanation": "14 mod 5 = 4. 14 / 5 = 2. 5 / 2 = 2. So p = (4 * 2) + 2 = 8 + 2 = 10."
  },
  {
    "id": 6,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 18, b = 5, c = 4\nSet ans = (a + b) * c - a / b\nPrint ans",
    "options": [
      "91",
      "89",
      "87",
      "94"
    ],
    "correctAnswer": 1,
    "explanation": "(a + b) = 23. Multiply by c (4) = 92. Integer division a / b = 3. Result = 92 - 3 = 89."
  },
  {
    "id": 7,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 32, b = 6, c = 5\nSet ans = a * (b mod c) + a / c\nPrint ans",
    "options": [
      "43",
      "36",
      "38",
      "40"
    ],
    "correctAnswer": 2,
    "explanation": "b mod c = 1. a * 1 = 32. a / c = 6. Result = 38."
  },
  {
    "id": 8,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 45, b = 8, c = 3\nSet ans = (a mod b) * (b + c) - (a / c)\nPrint ans",
    "options": [
      "42",
      "45",
      "38",
      "40"
    ],
    "correctAnswer": 3,
    "explanation": "a mod b = 5. (b + c) = 11. Product = 55. a / c = 15. Result = 40."
  },
  {
    "id": 9,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 27, b = 4, c = 2\nSet ans = a - (b * c) + (a mod c) * b\nPrint ans",
    "options": [
      "23",
      "28",
      "21",
      "25"
    ],
    "correctAnswer": 0,
    "explanation": "b * c = 8. a mod c = 1. (a mod c) * b = 4. Result = 27 - 8 + 4 = 23."
  },
  {
    "id": 10,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 50, b = 9, c = 7\nSet ans = (a / b) * (a mod b) + (b * c)\nPrint ans",
    "options": [
      "90",
      "88",
      "93",
      "86"
    ],
    "correctAnswer": 1,
    "explanation": "a / b = 5. a mod b = 5. Product = 25. b * c = 63. Result = 88."
  },
  {
    "id": 11,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 13, b = 3, c = 2\nSet ans = (a + b) * c - a / b\nPrint ans",
    "options": [
      "30",
      "33",
      "28",
      "26"
    ],
    "correctAnswer": 2,
    "explanation": "(a + b) = 16. Multiply by c (2) = 32. Integer division a / b = 4. Result = 32 - 4 = 28."
  },
  {
    "id": 12,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 29, b = 7, c = 4\nSet ans = a * (b mod c) + a / c\nPrint ans",
    "options": [
      "99",
      "92",
      "96",
      "94"
    ],
    "correctAnswer": 3,
    "explanation": "b mod c = 3. a * 3 = 87. a / c = 7. Result = 94."
  },
  {
    "id": 13,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 41, b = 6, c = 3\nSet ans = (a mod b) * (b + c) - (a / c)\nPrint ans",
    "options": [
      "32",
      "37",
      "34",
      "30"
    ],
    "correctAnswer": 0,
    "explanation": "a mod b = 5. (b + c) = 9. Product = 45. a / c = 13. Result = 32."
  },
  {
    "id": 14,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 35, b = 8, c = 5\nSet ans = a - (b * c) + (a mod c) * b\nPrint ans",
    "options": [
      "-3",
      "-5",
      "0",
      "-7"
    ],
    "correctAnswer": 1,
    "explanation": "b * c = 40. a mod c = 0. (a mod c) * b = 0. Result = 35 - 40 + 0 = -5."
  },
  {
    "id": 15,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 64, b = 10, c = 3\nSet ans = (a / b) * (a mod b) + (b * c)\nPrint ans",
    "options": [
      "52",
      "59",
      "54",
      "56"
    ],
    "correctAnswer": 2,
    "explanation": "a / b = 6. a mod b = 4. Product = 24. b * c = 30. Result = 54."
  },
  {
    "id": 16,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 22, b = 5, c = 3\nSet ans = (a + b) * c - a / b\nPrint ans",
    "options": [
      "75",
      "82",
      "79",
      "77"
    ],
    "correctAnswer": 3,
    "explanation": "(a + b) = 27. Multiply by c (3) = 81. Integer division a / b = 4. Result = 81 - 4 = 77."
  },
  {
    "id": 17,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 38, b = 7, c = 2\nSet ans = a * (b mod c) + a / c\nPrint ans",
    "options": [
      "57",
      "55",
      "62",
      "59"
    ],
    "correctAnswer": 0,
    "explanation": "b mod c = 1. a * 1 = 38. a / c = 19. Result = 57."
  },
  {
    "id": 18,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 49, b = 9, c = 4\nSet ans = (a mod b) * (b + c) - (a / c)\nPrint ans",
    "options": [
      "45",
      "40",
      "42",
      "38"
    ],
    "correctAnswer": 1,
    "explanation": "a mod b = 4. (b + c) = 13. Product = 52. a / c = 12. Result = 40."
  },
  {
    "id": 19,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 55, b = 6, c = 8\nSet ans = a - (b * c) + (a mod c) * b\nPrint ans",
    "options": [
      "54",
      "51",
      "49",
      "47"
    ],
    "correctAnswer": 2,
    "explanation": "b * c = 48. a mod c = 7. (a mod c) * b = 42. Result = 55 - 48 + 42 = 49."
  },
  {
    "id": 20,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 19, b = 4, c = 3\nSet ans = (a / b) * (a mod b) + (b * c)\nPrint ans",
    "options": [
      "29",
      "22",
      "26",
      "24"
    ],
    "correctAnswer": 3,
    "explanation": "a / b = 4. a mod b = 3. Product = 12. b * c = 12. Result = 24."
  },
  {
    "id": 21,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 31, b = 5, c = 6\nSet ans = (a + b) * c - a / b\nPrint ans",
    "options": [
      "210",
      "208",
      "212",
      "215"
    ],
    "correctAnswer": 0,
    "explanation": "(a + b) = 36. Multiply by c (6) = 216. Integer division a / b = 6. Result = 216 - 6 = 210."
  },
  {
    "id": 22,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 42, b = 8, c = 2\nSet ans = a * (b mod c) + a / c\nPrint ans",
    "options": [
      "26",
      "21",
      "23",
      "19"
    ],
    "correctAnswer": 1,
    "explanation": "b mod c = 0. a * 0 = 0. a / c = 21. Result = 21."
  },
  {
    "id": 23,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 60, b = 7, c = 5\nSet ans = (a mod b) * (b + c) - (a / c)\nPrint ans",
    "options": [
      "38",
      "34",
      "36",
      "41"
    ],
    "correctAnswer": 2,
    "explanation": "a mod b = 4. (b + c) = 12. Product = 48. a / c = 12. Result = 36."
  },
  {
    "id": 24,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 23, b = 3, c = 4\nSet ans = a - (b * c) + (a mod c) * b\nPrint ans",
    "options": [
      "25",
      "22",
      "18",
      "20"
    ],
    "correctAnswer": 3,
    "explanation": "b * c = 12. a mod c = 3. (a mod c) * b = 9. Result = 23 - 12 + 9 = 20."
  },
  {
    "id": 25,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 37, b = 6, c = 2\nSet ans = (a / b) * (a mod b) + (b * c)\nPrint ans",
    "options": [
      "18",
      "16",
      "23",
      "20"
    ],
    "correctAnswer": 0,
    "explanation": "a / b = 6. a mod b = 1. Product = 6. b * c = 12. Result = 18."
  },
  {
    "id": 26,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 48, b = 5, c = 3\nSet ans = (a + b) * c - a / b\nPrint ans",
    "options": [
      "148",
      "150",
      "152",
      "155"
    ],
    "correctAnswer": 1,
    "explanation": "(a + b) = 53. Multiply by c (3) = 159. Integer division a / b = 9. Result = 159 - 9 = 150."
  },
  {
    "id": 27,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 53, b = 8, c = 4\nSet ans = a * (b mod c) + a / c\nPrint ans",
    "options": [
      "11",
      "15",
      "13",
      "18"
    ],
    "correctAnswer": 2,
    "explanation": "b mod c = 0. a * 0 = 0. a / c = 13. Result = 13."
  },
  {
    "id": 28,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 17, b = 3, c = 5\nSet ans = (a mod b) * (b + c) - (a / c)\nPrint ans",
    "options": [
      "15",
      "18",
      "11",
      "13"
    ],
    "correctAnswer": 3,
    "explanation": "a mod b = 2. (b + c) = 8. Product = 16. a / c = 3. Result = 13."
  },
  {
    "id": 29,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 26, b = 4, c = 3\nSet ans = a - (b * c) + (a mod c) * b\nPrint ans",
    "options": [
      "22",
      "20",
      "27",
      "24"
    ],
    "correctAnswer": 0,
    "explanation": "b * c = 12. a mod c = 2. (a mod c) * b = 8. Result = 26 - 12 + 8 = 22."
  },
  {
    "id": 30,
    "setId": 1,
    "topic": "Arithmetic Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 39, b = 9, c = 2\nSet ans = (a / b) * (a mod b) + (b * c)\nPrint ans",
    "options": [
      "32",
      "30",
      "35",
      "28"
    ],
    "correctAnswer": 1,
    "explanation": "a / b = 4. a mod b = 3. Product = 12. b * c = 18. Result = 30."
  },
  {
    "id": 31,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 10, b = 20, c = 15\nif((a < b) AND (b > c))\n    Set ans = a + 10\nelse\n    Set ans = b - 5\nEnd if\nPrint ans",
    "options": [
      "23",
      "17",
      "20",
      "21"
    ],
    "correctAnswer": 2,
    "explanation": "Evaluate (a < b): (10 < 20) is True. Evaluate (b > c): (20 > 15) is True. Both AND evaluates to True. Branch taken yields 20."
  },
  {
    "id": 32,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, res\nSet a = 5, b = 5, c = 10\nif((a EQUALS b) OR (c > a + b))\n    Set res = a * 2\nelse\n    Set res = c - a\nEnd if\nPrint res",
    "options": [
      "11",
      "13",
      "7",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "(a EQUALS b) is True. (c > a + b) is (10 > 10) = False. The OR condition is True. Result is 10."
  },
  {
    "id": 33,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, val\nSet a = 12, b = 8, c = 4\nif(NOT(a > b) AND (c mod 2 EQUALS 0))\n    Set val = c / 2 + a\nelse\n    Set val = b / 2 + c\nEnd if\nPrint val",
    "options": [
      "8",
      "11",
      "9",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "NOT(a > b) is False. c mod 2 EQUALS 0 is True. AND condition is False. Value is 8."
  },
  {
    "id": 34,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, out\nSet a = 7, b = 14, c = 21\nif((a + b >= c) AND (b - a < c))\n    Set out = a + b + c\nelse\n    Set out = a * 2 + b\nEnd if\nPrint out",
    "options": [
      "45",
      "42",
      "39",
      "43"
    ],
    "correctAnswer": 1,
    "explanation": "(7 + 14 >= 21) is True. (14 - 7 < 21) is True. Condition is True. out = 42."
  },
  {
    "id": 35,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 15, b = 30, c = 25\nif((a * 2 > b) OR (b * 2 < c))\n    Set ans = a + b\nelse\n    Set ans = b + c\nEnd if\nPrint ans",
    "options": [
      "58",
      "56",
      "55",
      "52"
    ],
    "correctAnswer": 2,
    "explanation": "(30 > 30) is False. (60 < 25) is False. Condition evaluates to False. Result = 55."
  },
  {
    "id": 36,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, x\nSet a = 18, b = 9, c = 3\nif((a NOT EQUALS b) AND NOT(c <= b))\n    Set x = a ^ c\nelse\n    Set x = b ^ c\nEnd if\nPrint x",
    "options": [
      "11",
      "13",
      "7",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "(a NOT EQUALS b) is True. NOT(c <= b) is False. Combined is False. Result = 10."
  },
  {
    "id": 37,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 24, b = 12, c = 6\nif((a < b) AND (b > c))\n    Set ans = a + 10\nelse\n    Set ans = b - 5\nEnd if\nPrint ans",
    "options": [
      "7",
      "8",
      "10",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "Evaluate (a < b): (24 < 12) is False. Evaluate (b > c): (12 > 6) is True. Both AND evaluates to False. Branch taken yields 7."
  },
  {
    "id": 38,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, res\nSet a = 9, b = 9, c = 9\nif((a EQUALS b) OR (c > a + b))\n    Set res = a * 2\nelse\n    Set res = c - a\nEnd if\nPrint res",
    "options": [
      "15",
      "18",
      "19",
      "21"
    ],
    "correctAnswer": 1,
    "explanation": "(a EQUALS b) is True. (c > a + b) is (9 > 18) = False. The OR condition is True. Result is 18."
  },
  {
    "id": 39,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, val\nSet a = 14, b = 28, c = 7\nif(NOT(a > b) AND (c mod 2 EQUALS 0))\n    Set val = c / 2 + a\nelse\n    Set val = b / 2 + c\nEnd if\nPrint val",
    "options": [
      "24",
      "22",
      "21",
      "18"
    ],
    "correctAnswer": 2,
    "explanation": "NOT(a > b) is True. c mod 2 EQUALS 0 is False. AND condition is False. Value is 21."
  },
  {
    "id": 40,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, out\nSet a = 16, b = 4, c = 8\nif((a + b >= c) AND (b - a < c))\n    Set out = a + b + c\nelse\n    Set out = a * 2 + b\nEnd if\nPrint out",
    "options": [
      "31",
      "29",
      "25",
      "28"
    ],
    "correctAnswer": 3,
    "explanation": "(16 + 4 >= 8) is True. (4 - 16 < 8) is True. Condition is True. out = 28."
  },
  {
    "id": 41,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 30, b = 15, c = 45\nif((a * 2 > b) OR (b * 2 < c))\n    Set ans = a + b\nelse\n    Set ans = b + c\nEnd if\nPrint ans",
    "options": [
      "45",
      "42",
      "48",
      "46"
    ],
    "correctAnswer": 0,
    "explanation": "(60 > 15) is True. (30 < 45) is True. Condition evaluates to True. Result = 45."
  },
  {
    "id": 42,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, x\nSet a = 11, b = 22, c = 33\nif((a NOT EQUALS b) AND NOT(c <= b))\n    Set x = a ^ c\nelse\n    Set x = b ^ c\nEnd if\nPrint x",
    "options": [
      "45",
      "42",
      "39",
      "43"
    ],
    "correctAnswer": 1,
    "explanation": "(a NOT EQUALS b) is True. NOT(c <= b) is True. Combined is True. Result = 42."
  },
  {
    "id": 43,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 8, b = 16, c = 24\nif((a < b) AND (b > c))\n    Set ans = a + 10\nelse\n    Set ans = b - 5\nEnd if\nPrint ans",
    "options": [
      "8",
      "12",
      "11",
      "14"
    ],
    "correctAnswer": 2,
    "explanation": "Evaluate (a < b): (8 < 16) is True. Evaluate (b > c): (16 > 24) is False. Both AND evaluates to False. Branch taken yields 11."
  },
  {
    "id": 44,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, res\nSet a = 25, b = 5, c = 10\nif((a EQUALS b) OR (c > a + b))\n    Set res = a * 2\nelse\n    Set res = c - a\nEnd if\nPrint res",
    "options": [
      "-12",
      "-14",
      "-18",
      "-15"
    ],
    "correctAnswer": 3,
    "explanation": "(a EQUALS b) is False. (c > a + b) is (10 > 30) = False. The OR condition is False. Result is -15."
  },
  {
    "id": 45,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, val\nSet a = 13, b = 26, c = 39\nif(NOT(a > b) AND (c mod 2 EQUALS 0))\n    Set val = c / 2 + a\nelse\n    Set val = b / 2 + c\nEnd if\nPrint val",
    "options": [
      "52",
      "55",
      "49",
      "53"
    ],
    "correctAnswer": 0,
    "explanation": "NOT(a > b) is True. c mod 2 EQUALS 0 is False. AND condition is False. Value is 52."
  },
  {
    "id": 46,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, out\nSet a = 40, b = 20, c = 10\nif((a + b >= c) AND (b - a < c))\n    Set out = a + b + c\nelse\n    Set out = a * 2 + b\nEnd if\nPrint out",
    "options": [
      "71",
      "70",
      "67",
      "73"
    ],
    "correctAnswer": 1,
    "explanation": "(40 + 20 >= 10) is True. (20 - 40 < 10) is True. Condition is True. out = 70."
  },
  {
    "id": 47,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 6, b = 18, c = 12\nif((a * 2 > b) OR (b * 2 < c))\n    Set ans = a + b\nelse\n    Set ans = b + c\nEnd if\nPrint ans",
    "options": [
      "27",
      "31",
      "30",
      "33"
    ],
    "correctAnswer": 2,
    "explanation": "(12 > 18) is False. (36 < 12) is False. Condition evaluates to False. Result = 30."
  },
  {
    "id": 48,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, x\nSet a = 21, b = 7, c = 14\nif((a NOT EQUALS b) AND NOT(c <= b))\n    Set x = a ^ c\nelse\n    Set x = b ^ c\nEnd if\nPrint x",
    "options": [
      "30",
      "24",
      "28",
      "27"
    ],
    "correctAnswer": 3,
    "explanation": "(a NOT EQUALS b) is True. NOT(c <= b) is True. Combined is True. Result = 27."
  },
  {
    "id": 49,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 35, b = 7, c = 28\nif((a < b) AND (b > c))\n    Set ans = a + 10\nelse\n    Set ans = b - 5\nEnd if\nPrint ans",
    "options": [
      "2",
      "-1",
      "5",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "Evaluate (a < b): (35 < 7) is False. Evaluate (b > c): (7 > 28) is False. Both AND evaluates to False. Branch taken yields 2."
  },
  {
    "id": 50,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, res\nSet a = 17, b = 34, c = 51\nif((a EQUALS b) OR (c > a + b))\n    Set res = a * 2\nelse\n    Set res = c - a\nEnd if\nPrint res",
    "options": [
      "31",
      "34",
      "37",
      "35"
    ],
    "correctAnswer": 1,
    "explanation": "(a EQUALS b) is False. (c > a + b) is (51 > 51) = False. The OR condition is False. Result is 34."
  },
  {
    "id": 51,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, val\nSet a = 50, b = 25, c = 75\nif(NOT(a > b) AND (c mod 2 EQUALS 0))\n    Set val = c / 2 + a\nelse\n    Set val = b / 2 + c\nEnd if\nPrint val",
    "options": [
      "88",
      "84",
      "87",
      "90"
    ],
    "correctAnswer": 2,
    "explanation": "NOT(a > b) is False. c mod 2 EQUALS 0 is False. AND condition is False. Value is 87."
  },
  {
    "id": 52,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, out\nSet a = 4, b = 8, c = 16\nif((a + b >= c) AND (b - a < c))\n    Set out = a + b + c\nelse\n    Set out = a * 2 + b\nEnd if\nPrint out",
    "options": [
      "13",
      "17",
      "19",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "(4 + 8 >= 16) is False. (8 - 4 < 16) is True. Condition is False. out = 16."
  },
  {
    "id": 53,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 27, b = 9, c = 18\nif((a * 2 > b) OR (b * 2 < c))\n    Set ans = a + b\nelse\n    Set ans = b + c\nEnd if\nPrint ans",
    "options": [
      "36",
      "33",
      "37",
      "39"
    ],
    "correctAnswer": 0,
    "explanation": "(54 > 9) is True. (18 < 18) is False. Condition evaluates to True. Result = 36."
  },
  {
    "id": 54,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, x\nSet a = 32, b = 16, c = 8\nif((a NOT EQUALS b) AND NOT(c <= b))\n    Set x = a ^ c\nelse\n    Set x = b ^ c\nEnd if\nPrint x",
    "options": [
      "21",
      "24",
      "25",
      "27"
    ],
    "correctAnswer": 1,
    "explanation": "(a NOT EQUALS b) is True. NOT(c <= b) is False. Combined is False. Result = 24."
  },
  {
    "id": 55,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 48, b = 24, c = 12\nif((a < b) AND (b > c))\n    Set ans = a + 10\nelse\n    Set ans = b - 5\nEnd if\nPrint ans",
    "options": [
      "22",
      "20",
      "19",
      "16"
    ],
    "correctAnswer": 2,
    "explanation": "Evaluate (a < b): (48 < 24) is False. Evaluate (b > c): (24 > 12) is True. Both AND evaluates to False. Branch taken yields 19."
  },
  {
    "id": 56,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, res\nSet a = 3, b = 9, c = 27\nif((a EQUALS b) OR (c > a + b))\n    Set res = a * 2\nelse\n    Set res = c - a\nEnd if\nPrint res",
    "options": [
      "3",
      "7",
      "9",
      "6"
    ],
    "correctAnswer": 3,
    "explanation": "(a EQUALS b) is False. (c > a + b) is (27 > 12) = True. The OR condition is True. Result is 6."
  },
  {
    "id": 57,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, val\nSet a = 22, b = 11, c = 44\nif(NOT(a > b) AND (c mod 2 EQUALS 0))\n    Set val = c / 2 + a\nelse\n    Set val = b / 2 + c\nEnd if\nPrint val",
    "options": [
      "49",
      "46",
      "50",
      "52"
    ],
    "correctAnswer": 0,
    "explanation": "NOT(a > b) is False. c mod 2 EQUALS 0 is True. AND condition is False. Value is 49."
  },
  {
    "id": 58,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, out\nSet a = 19, b = 38, c = 57\nif((a + b >= c) AND (b - a < c))\n    Set out = a + b + c\nelse\n    Set out = a * 2 + b\nEnd if\nPrint out",
    "options": [
      "115",
      "114",
      "111",
      "117"
    ],
    "correctAnswer": 1,
    "explanation": "(19 + 38 >= 57) is True. (38 - 19 < 57) is True. Condition is True. out = 114."
  },
  {
    "id": 59,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, ans\nSet a = 45, b = 15, c = 30\nif((a * 2 > b) OR (b * 2 < c))\n    Set ans = a + b\nelse\n    Set ans = b + c\nEnd if\nPrint ans",
    "options": [
      "57",
      "63",
      "60",
      "61"
    ],
    "correctAnswer": 2,
    "explanation": "(90 > 15) is True. (30 < 30) is False. Condition evaluates to True. Result = 60."
  },
  {
    "id": 60,
    "setId": 2,
    "topic": "Relational & Logical Operators",
    "difficulty": "Basic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, x\nSet a = 36, b = 18, c = 9\nif((a NOT EQUALS b) AND NOT(c <= b))\n    Set x = a ^ c\nelse\n    Set x = b ^ c\nEnd if\nPrint x",
    "options": [
      "24",
      "30",
      "28",
      "27"
    ],
    "correctAnswer": 3,
    "explanation": "(a NOT EQUALS b) is True. NOT(c <= b) is False. Combined is False. Result = 27."
  },
  {
    "id": 61,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, r\nSet p = 12, q = 25\nSet r = (p & q) + (p ^ q)\nPrint r",
    "options": [
      "29",
      "33",
      "31",
      "27"
    ],
    "correctAnswer": 0,
    "explanation": "Bitwise AND (12 & 25) = 8. Bitwise XOR (12 ^ 25) = 21. (Note that (A & B) + (A ^ B) = A | B in Boolean algebra arithmetic). Total = 8 + 21 = 29."
  },
  {
    "id": 62,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, res\nSet p = 7, q = 11\nSet res = (p << 1) ^ (q >> 1)\nPrint res",
    "options": [
      "15",
      "11",
      "13",
      "9"
    ],
    "correctAnswer": 1,
    "explanation": "p << 1 is 7 * 2 = 14. q >> 1 is 11 / 2 = 5. Bitwise XOR (14 ^ 5) = 11."
  },
  {
    "id": 63,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, val\nSet p = 15, q = 23\nSet val = (p | q) - (p & q)\nPrint val",
    "options": [
      "26",
      "28",
      "24",
      "22"
    ],
    "correctAnswer": 2,
    "explanation": "(p | q) = 31. (p & q) = 7. val = 31 - 7 = 24. (Notice (A | B) - (A & B) is mathematically identical to A ^ B)."
  },
  {
    "id": 64,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, ans\nSet p = 18\nSet ans = (p & 7) << 2\nPrint ans",
    "options": [
      "6",
      "10",
      "12",
      "8"
    ],
    "correctAnswer": 3,
    "explanation": "(p & 7) masks the lowest 3 bits of 18, yielding 2. Left shifting by 2 multiplies by 4: 2 << 2 = 8."
  },
  {
    "id": 65,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, out\nSet p = 5, q = 9\nSet out = (p ^ q) ^ p\nPrint out",
    "options": [
      "9",
      "13",
      "7",
      "11"
    ],
    "correctAnswer": 0,
    "explanation": "Due to the associative and inverse properties of XOR, (p ^ q) ^ p = (p ^ p) ^ q = 0 ^ q = q = 9."
  },
  {
    "id": 66,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, r\nSet p = 14, q = 28\nSet r = (p & 15) + (q >> 2)\nPrint r",
    "options": [
      "25",
      "21",
      "23",
      "19"
    ],
    "correctAnswer": 1,
    "explanation": "p & 15 = 14. q >> 2 = 7. r = 14 + 7 = 21."
  },
  {
    "id": 67,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, r\nSet p = 8, q = 13\nSet r = (p & q) + (p ^ q)\nPrint r",
    "options": [
      "15",
      "17",
      "13",
      "11"
    ],
    "correctAnswer": 2,
    "explanation": "Bitwise AND (8 & 13) = 8. Bitwise XOR (8 ^ 13) = 5. (Note that (A & B) + (A ^ B) = A | B in Boolean algebra arithmetic). Total = 8 + 5 = 13."
  },
  {
    "id": 68,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, res\nSet p = 21, q = 14\nSet res = (p << 1) ^ (q >> 1)\nPrint res",
    "options": [
      "49",
      "43",
      "47",
      "45"
    ],
    "correctAnswer": 3,
    "explanation": "p << 1 is 21 * 2 = 42. q >> 1 is 14 / 2 = 7. Bitwise XOR (42 ^ 7) = 45."
  },
  {
    "id": 69,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, val\nSet p = 30, q = 19\nSet val = (p | q) - (p & q)\nPrint val",
    "options": [
      "13",
      "11",
      "17",
      "15"
    ],
    "correctAnswer": 0,
    "explanation": "(p | q) = 31. (p & q) = 18. val = 31 - 18 = 13. (Notice (A | B) - (A & B) is mathematically identical to A ^ B)."
  },
  {
    "id": 70,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, ans\nSet p = 10\nSet ans = (p & 7) << 2\nPrint ans",
    "options": [
      "12",
      "8",
      "10",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "(p & 7) masks the lowest 3 bits of 10, yielding 2. Left shifting by 2 multiplies by 4: 2 << 2 = 8."
  },
  {
    "id": 71,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, out\nSet p = 16, q = 7\nSet out = (p ^ q) ^ p\nPrint out",
    "options": [
      "9",
      "5",
      "7",
      "11"
    ],
    "correctAnswer": 2,
    "explanation": "Due to the associative and inverse properties of XOR, (p ^ q) ^ p = (p ^ p) ^ q = 0 ^ q = q = 7."
  },
  {
    "id": 72,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, r\nSet p = 27, q = 13\nSet r = (p & 15) + (q >> 2)\nPrint r",
    "options": [
      "16",
      "12",
      "18",
      "14"
    ],
    "correctAnswer": 3,
    "explanation": "p & 15 = 11. q >> 2 = 3. r = 11 + 3 = 14."
  },
  {
    "id": 73,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, r\nSet p = 35, q = 22\nSet r = (p & q) + (p ^ q)\nPrint r",
    "options": [
      "55",
      "53",
      "57",
      "59"
    ],
    "correctAnswer": 0,
    "explanation": "Bitwise AND (35 & 22) = 2. Bitwise XOR (35 ^ 22) = 53. (Note that (A & B) + (A ^ B) = A | B in Boolean algebra arithmetic). Total = 2 + 53 = 55."
  },
  {
    "id": 74,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, res\nSet p = 40, q = 17\nSet res = (p << 1) ^ (q >> 1)\nPrint res",
    "options": [
      "90",
      "88",
      "86",
      "92"
    ],
    "correctAnswer": 1,
    "explanation": "p << 1 is 40 * 2 = 80. q >> 1 is 17 / 2 = 8. Bitwise XOR (80 ^ 8) = 88."
  },
  {
    "id": 75,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, val\nSet p = 25, q = 18\nSet val = (p | q) - (p & q)\nPrint val",
    "options": [
      "9",
      "13",
      "11",
      "15"
    ],
    "correctAnswer": 2,
    "explanation": "(p | q) = 27. (p & q) = 16. val = 27 - 16 = 11. (Notice (A | B) - (A & B) is mathematically identical to A ^ B)."
  },
  {
    "id": 76,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, ans\nSet p = 11\nSet ans = (p & 7) << 2\nPrint ans",
    "options": [
      "14",
      "16",
      "10",
      "12"
    ],
    "correctAnswer": 3,
    "explanation": "(p & 7) masks the lowest 3 bits of 11, yielding 3. Left shifting by 2 multiplies by 4: 3 << 2 = 12."
  },
  {
    "id": 77,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, out\nSet p = 9, q = 15\nSet out = (p ^ q) ^ p\nPrint out",
    "options": [
      "15",
      "19",
      "17",
      "13"
    ],
    "correctAnswer": 0,
    "explanation": "Due to the associative and inverse properties of XOR, (p ^ q) ^ p = (p ^ p) ^ q = 0 ^ q = q = 15."
  },
  {
    "id": 78,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, r\nSet p = 20, q = 10\nSet r = (p & 15) + (q >> 2)\nPrint r",
    "options": [
      "10",
      "6",
      "8",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "p & 15 = 4. q >> 2 = 2. r = 4 + 2 = 6."
  },
  {
    "id": 79,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, r\nSet p = 33, q = 14\nSet r = (p & q) + (p ^ q)\nPrint r",
    "options": [
      "45",
      "49",
      "47",
      "51"
    ],
    "correctAnswer": 2,
    "explanation": "Bitwise AND (33 & 14) = 0. Bitwise XOR (33 ^ 14) = 47. (Note that (A & B) + (A ^ B) = A | B in Boolean algebra arithmetic). Total = 0 + 47 = 47."
  },
  {
    "id": 80,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, res\nSet p = 45, q = 27\nSet res = (p << 1) ^ (q >> 1)\nPrint res",
    "options": [
      "85",
      "91",
      "89",
      "87"
    ],
    "correctAnswer": 3,
    "explanation": "p << 1 is 45 * 2 = 90. q >> 1 is 27 / 2 = 13. Bitwise XOR (90 ^ 13) = 87."
  },
  {
    "id": 81,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, val\nSet p = 6, q = 13\nSet val = (p | q) - (p & q)\nPrint val",
    "options": [
      "11",
      "13",
      "15",
      "9"
    ],
    "correctAnswer": 0,
    "explanation": "(p | q) = 15. (p & q) = 4. val = 15 - 4 = 11. (Notice (A | B) - (A & B) is mathematically identical to A ^ B)."
  },
  {
    "id": 82,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, ans\nSet p = 24\nSet ans = (p & 7) << 2\nPrint ans",
    "options": [
      "2",
      "0",
      "4",
      "-2"
    ],
    "correctAnswer": 1,
    "explanation": "(p & 7) masks the lowest 3 bits of 24, yielding 0. Left shifting by 2 multiplies by 4: 0 << 2 = 0."
  },
  {
    "id": 83,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, out\nSet p = 17, q = 31\nSet out = (p ^ q) ^ p\nPrint out",
    "options": [
      "33",
      "29",
      "31",
      "35"
    ],
    "correctAnswer": 2,
    "explanation": "Due to the associative and inverse properties of XOR, (p ^ q) ^ p = (p ^ p) ^ q = 0 ^ q = q = 31."
  },
  {
    "id": 84,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, r\nSet p = 50, q = 21\nSet r = (p & 15) + (q >> 2)\nPrint r",
    "options": [
      "11",
      "5",
      "9",
      "7"
    ],
    "correctAnswer": 3,
    "explanation": "p & 15 = 2. q >> 2 = 5. r = 2 + 5 = 7."
  },
  {
    "id": 85,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, r\nSet p = 22, q = 19\nSet r = (p & q) + (p ^ q)\nPrint r",
    "options": [
      "23",
      "27",
      "25",
      "21"
    ],
    "correctAnswer": 0,
    "explanation": "Bitwise AND (22 & 19) = 18. Bitwise XOR (22 ^ 19) = 5. (Note that (A & B) + (A ^ B) = A | B in Boolean algebra arithmetic). Total = 18 + 5 = 23."
  },
  {
    "id": 86,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, res\nSet p = 13, q = 27\nSet res = (p << 1) ^ (q >> 1)\nPrint res",
    "options": [
      "21",
      "23",
      "27",
      "25"
    ],
    "correctAnswer": 1,
    "explanation": "p << 1 is 13 * 2 = 26. q >> 1 is 27 / 2 = 13. Bitwise XOR (26 ^ 13) = 23."
  },
  {
    "id": 87,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, val\nSet p = 28, q = 15\nSet val = (p | q) - (p & q)\nPrint val",
    "options": [
      "21",
      "23",
      "19",
      "17"
    ],
    "correctAnswer": 2,
    "explanation": "(p | q) = 31. (p & q) = 12. val = 31 - 12 = 19. (Notice (A | B) - (A & B) is mathematically identical to A ^ B)."
  },
  {
    "id": 88,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, ans\nSet p = 31\nSet ans = (p & 7) << 2\nPrint ans",
    "options": [
      "26",
      "30",
      "32",
      "28"
    ],
    "correctAnswer": 3,
    "explanation": "(p & 7) masks the lowest 3 bits of 31, yielding 7. Left shifting by 2 multiplies by 4: 7 << 2 = 28."
  },
  {
    "id": 89,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, out\nSet p = 19, q = 25\nSet out = (p ^ q) ^ p\nPrint out",
    "options": [
      "25",
      "27",
      "23",
      "29"
    ],
    "correctAnswer": 0,
    "explanation": "Due to the associative and inverse properties of XOR, (p ^ q) ^ p = (p ^ p) ^ q = 0 ^ q = q = 25."
  },
  {
    "id": 90,
    "setId": 3,
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, r\nSet p = 36, q = 42\nSet r = (p & 15) + (q >> 2)\nPrint r",
    "options": [
      "16",
      "14",
      "18",
      "12"
    ],
    "correctAnswer": 1,
    "explanation": "p & 15 = 4. q >> 2 = 10. r = 4 + 10 = 14."
  },
  {
    "id": 91,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, val\nSet x = 15, y = 25, val = 0\nif(x > 10)\n    if(y > 20)\n        Set val = x + y\n    else\n        Set val = x - y\n    End if\nelse\n    Set val = x * y\nEnd if\nPrint val",
    "options": [
      "35",
      "20",
      "40",
      "50"
    ],
    "correctAnswer": 2,
    "explanation": "x (15) > 10 is True. In the inner block, y (25) > 20 is True. Result val = 40."
  },
  {
    "id": 92,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, res\nSet x = 40, y = 10\nif(x + y > 60)\n    Set res = (x + y) / 2\nelse if(x > y)\n    Set res = x - y\nelse\n    Set res = y - x\nEnd if\nPrint res",
    "options": [
      "35",
      "50",
      "20",
      "30"
    ],
    "correctAnswer": 3,
    "explanation": "Sum x + y = 50. Checking conditions in order: 50 > 60 is False, 40 > 10 is True. Corresponding branch evaluates to 30."
  },
  {
    "id": 93,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, ans\nSet x = 18, y = 18\nif(x mod 2 EQUALS 0 AND y mod 2 EQUALS 0)\n    Set ans = x + y\nelse if(x mod 2 NOT EQUALS 0 AND y mod 2 NOT EQUALS 0)\n    Set ans = x * y\nelse\n    Set ans = x - y\n    if(ans < 0)\n        Set ans = -ans\n    End if\nEnd if\nPrint ans",
    "options": [
      "36",
      "50",
      "20",
      "35"
    ],
    "correctAnswer": 0,
    "explanation": "x mod 2 = 0, y mod 2 = 0. Matching condition branch yields 36."
  },
  {
    "id": 94,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, score\nSet x = 30, y = 40\nif(x > y)\n    Set x = x - 5\n    Set score = x + y\nelse\n    Set y = y - 5\n    Set score = x * 2 + y\nEnd if\nPrint score",
    "options": [
      "35",
      "100",
      "20",
      "50"
    ],
    "correctAnswer": 1,
    "explanation": "x > y is False. Executing corresponding branch updates variable and computes score = 100."
  },
  {
    "id": 95,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b\nSet a = 12, b = 8\nif(a < b)\n    Set a = a + 10\nEnd if\nif(b < a)\n    Set b = b + 5\nEnd if\nPrint a + b",
    "options": [
      "50",
      "35",
      "25",
      "20"
    ],
    "correctAnswer": 2,
    "explanation": "Initially a=12, b=8. First if: 12 < 8 is False, updated a=12. Second if: 8 < 12 is True, updated b=13. Sum a + b = 25."
  },
  {
    "id": 96,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, val\nSet x = 50, y = 50, val = 0\nif(x > 10)\n    if(y > 20)\n        Set val = x + y\n    else\n        Set val = x - y\n    End if\nelse\n    Set val = x * y\nEnd if\nPrint val",
    "options": [
      "50",
      "20",
      "35",
      "100"
    ],
    "correctAnswer": 3,
    "explanation": "x (50) > 10 is True. In the inner block, y (50) > 20 is True. Result val = 100."
  },
  {
    "id": 97,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, res\nSet x = 9, y = 27\nif(x + y > 60)\n    Set res = (x + y) / 2\nelse if(x > y)\n    Set res = x - y\nelse\n    Set res = y - x\nEnd if\nPrint res",
    "options": [
      "18",
      "50",
      "35",
      "20"
    ],
    "correctAnswer": 0,
    "explanation": "Sum x + y = 36. Checking conditions in order: 36 > 60 is False, 9 > 27 is False. Corresponding branch evaluates to 18."
  },
  {
    "id": 98,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, ans\nSet x = 24, y = 16\nif(x mod 2 EQUALS 0 AND y mod 2 EQUALS 0)\n    Set ans = x + y\nelse if(x mod 2 NOT EQUALS 0 AND y mod 2 NOT EQUALS 0)\n    Set ans = x * y\nelse\n    Set ans = x - y\n    if(ans < 0)\n        Set ans = -ans\n    End if\nEnd if\nPrint ans",
    "options": [
      "20",
      "40",
      "50",
      "35"
    ],
    "correctAnswer": 1,
    "explanation": "x mod 2 = 0, y mod 2 = 0. Matching condition branch yields 40."
  },
  {
    "id": 99,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, score\nSet x = 35, y = 65\nif(x > y)\n    Set x = x - 5\n    Set score = x + y\nelse\n    Set y = y - 5\n    Set score = x * 2 + y\nEnd if\nPrint score",
    "options": [
      "50",
      "20",
      "135",
      "35"
    ],
    "correctAnswer": 2,
    "explanation": "x > y is False. Executing corresponding branch updates variable and computes score = 135."
  },
  {
    "id": 100,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b\nSet a = 8, b = 64\nif(a < b)\n    Set a = a + 10\nEnd if\nif(b < a)\n    Set b = b + 5\nEnd if\nPrint a + b",
    "options": [
      "35",
      "50",
      "20",
      "82"
    ],
    "correctAnswer": 3,
    "explanation": "Initially a=8, b=64. First if: 8 < 64 is True, updated a=18. Second if: 64 < 18 is False, updated b=64. Sum a + b = 82."
  },
  {
    "id": 101,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, val\nSet x = 14, y = 21, val = 0\nif(x > 10)\n    if(y > 20)\n        Set val = x + y\n    else\n        Set val = x - y\n    End if\nelse\n    Set val = x * y\nEnd if\nPrint val",
    "options": [
      "35",
      "15",
      "50",
      "20"
    ],
    "correctAnswer": 0,
    "explanation": "x (14) > 10 is True. In the inner block, y (21) > 20 is True. Result val = 35."
  },
  {
    "id": 102,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, res\nSet x = 33, y = 11\nif(x + y > 60)\n    Set res = (x + y) / 2\nelse if(x > y)\n    Set res = x - y\nelse\n    Set res = y - x\nEnd if\nPrint res",
    "options": [
      "35",
      "22",
      "50",
      "20"
    ],
    "correctAnswer": 1,
    "explanation": "Sum x + y = 44. Checking conditions in order: 44 > 60 is False, 33 > 11 is True. Corresponding branch evaluates to 22."
  },
  {
    "id": 103,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, ans\nSet x = 20, y = 20\nif(x mod 2 EQUALS 0 AND y mod 2 EQUALS 0)\n    Set ans = x + y\nelse if(x mod 2 NOT EQUALS 0 AND y mod 2 NOT EQUALS 0)\n    Set ans = x * y\nelse\n    Set ans = x - y\n    if(ans < 0)\n        Set ans = -ans\n    End if\nEnd if\nPrint ans",
    "options": [
      "35",
      "20",
      "40",
      "50"
    ],
    "correctAnswer": 2,
    "explanation": "x mod 2 = 0, y mod 2 = 0. Matching condition branch yields 40."
  },
  {
    "id": 104,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, score\nSet x = 40, y = 15\nif(x > y)\n    Set x = x - 5\n    Set score = x + y\nelse\n    Set y = y - 5\n    Set score = x * 2 + y\nEnd if\nPrint score",
    "options": [
      "50",
      "20",
      "35",
      "55"
    ],
    "correctAnswer": 3,
    "explanation": "x > y is True. Executing corresponding branch updates variable and computes score = 55."
  },
  {
    "id": 105,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b\nSet a = 7, b = 49\nif(a < b)\n    Set a = a + 10\nEnd if\nif(b < a)\n    Set b = b + 5\nEnd if\nPrint a + b",
    "options": [
      "66",
      "50",
      "35",
      "20"
    ],
    "correctAnswer": 0,
    "explanation": "Initially a=7, b=49. First if: 7 < 49 is True, updated a=17. Second if: 49 < 17 is False, updated b=49. Sum a + b = 66."
  },
  {
    "id": 106,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, val\nSet x = 28, y = 14, val = 0\nif(x > 10)\n    if(y > 20)\n        Set val = x + y\n    else\n        Set val = x - y\n    End if\nelse\n    Set val = x * y\nEnd if\nPrint val",
    "options": [
      "20",
      "14",
      "35",
      "50"
    ],
    "correctAnswer": 1,
    "explanation": "x (28) > 10 is True. In the inner block, y (14) > 20 is False. Result val = 14."
  },
  {
    "id": 107,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, res\nSet x = 60, y = 20\nif(x + y > 60)\n    Set res = (x + y) / 2\nelse if(x > y)\n    Set res = x - y\nelse\n    Set res = y - x\nEnd if\nPrint res",
    "options": [
      "35",
      "50",
      "40",
      "20"
    ],
    "correctAnswer": 2,
    "explanation": "Sum x + y = 80. Checking conditions in order: 80 > 60 is True, 60 > 20 is True. Corresponding branch evaluates to 40."
  },
  {
    "id": 108,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, ans\nSet x = 16, y = 32\nif(x mod 2 EQUALS 0 AND y mod 2 EQUALS 0)\n    Set ans = x + y\nelse if(x mod 2 NOT EQUALS 0 AND y mod 2 NOT EQUALS 0)\n    Set ans = x * y\nelse\n    Set ans = x - y\n    if(ans < 0)\n        Set ans = -ans\n    End if\nEnd if\nPrint ans",
    "options": [
      "50",
      "35",
      "20",
      "48"
    ],
    "correctAnswer": 3,
    "explanation": "x mod 2 = 0, y mod 2 = 0. Matching condition branch yields 48."
  },
  {
    "id": 109,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, score\nSet x = 25, y = 70\nif(x > y)\n    Set x = x - 5\n    Set score = x + y\nelse\n    Set y = y - 5\n    Set score = x * 2 + y\nEnd if\nPrint score",
    "options": [
      "120",
      "50",
      "20",
      "35"
    ],
    "correctAnswer": 0,
    "explanation": "x > y is False. Executing corresponding branch updates variable and computes score = 120."
  },
  {
    "id": 110,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b\nSet a = 10, b = 100\nif(a < b)\n    Set a = a + 10\nEnd if\nif(b < a)\n    Set b = b + 5\nEnd if\nPrint a + b",
    "options": [
      "20",
      "120",
      "35",
      "50"
    ],
    "correctAnswer": 1,
    "explanation": "Initially a=10, b=100. First if: 10 < 100 is True, updated a=20. Second if: 100 < 20 is False, updated b=100. Sum a + b = 120."
  },
  {
    "id": 111,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, val\nSet x = 17, y = 34, val = 0\nif(x > 10)\n    if(y > 20)\n        Set val = x + y\n    else\n        Set val = x - y\n    End if\nelse\n    Set val = x * y\nEnd if\nPrint val",
    "options": [
      "35",
      "50",
      "51",
      "20"
    ],
    "correctAnswer": 2,
    "explanation": "x (17) > 10 is True. In the inner block, y (34) > 20 is True. Result val = 51."
  },
  {
    "id": 112,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, res\nSet x = 80, y = 40\nif(x + y > 60)\n    Set res = (x + y) / 2\nelse if(x > y)\n    Set res = x - y\nelse\n    Set res = y - x\nEnd if\nPrint res",
    "options": [
      "50",
      "35",
      "20",
      "60"
    ],
    "correctAnswer": 3,
    "explanation": "Sum x + y = 120. Checking conditions in order: 120 > 60 is True, 80 > 40 is True. Corresponding branch evaluates to 60."
  },
  {
    "id": 113,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, ans\nSet x = 22, y = 22\nif(x mod 2 EQUALS 0 AND y mod 2 EQUALS 0)\n    Set ans = x + y\nelse if(x mod 2 NOT EQUALS 0 AND y mod 2 NOT EQUALS 0)\n    Set ans = x * y\nelse\n    Set ans = x - y\n    if(ans < 0)\n        Set ans = -ans\n    End if\nEnd if\nPrint ans",
    "options": [
      "44",
      "35",
      "50",
      "20"
    ],
    "correctAnswer": 0,
    "explanation": "x mod 2 = 0, y mod 2 = 0. Matching condition branch yields 44."
  },
  {
    "id": 114,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, score\nSet x = 31, y = 12\nif(x > y)\n    Set x = x - 5\n    Set score = x + y\nelse\n    Set y = y - 5\n    Set score = x * 2 + y\nEnd if\nPrint score",
    "options": [
      "35",
      "43",
      "20",
      "50"
    ],
    "correctAnswer": 1,
    "explanation": "x > y is True. Executing corresponding branch updates variable and computes score = 43."
  },
  {
    "id": 115,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b\nSet a = 13, b = 52\nif(a < b)\n    Set a = a + 10\nEnd if\nif(b < a)\n    Set b = b + 5\nEnd if\nPrint a + b",
    "options": [
      "50",
      "20",
      "75",
      "35"
    ],
    "correctAnswer": 2,
    "explanation": "Initially a=13, b=52. First if: 13 < 52 is True, updated a=23. Second if: 52 < 23 is False, updated b=52. Sum a + b = 75."
  },
  {
    "id": 116,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, val\nSet x = 42, y = 21, val = 0\nif(x > 10)\n    if(y > 20)\n        Set val = x + y\n    else\n        Set val = x - y\n    End if\nelse\n    Set val = x * y\nEnd if\nPrint val",
    "options": [
      "20",
      "35",
      "50",
      "63"
    ],
    "correctAnswer": 3,
    "explanation": "x (42) > 10 is True. In the inner block, y (21) > 20 is True. Result val = 63."
  },
  {
    "id": 117,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, res\nSet x = 90, y = 30\nif(x + y > 60)\n    Set res = (x + y) / 2\nelse if(x > y)\n    Set res = x - y\nelse\n    Set res = y - x\nEnd if\nPrint res",
    "options": [
      "60",
      "50",
      "20",
      "35"
    ],
    "correctAnswer": 0,
    "explanation": "Sum x + y = 120. Checking conditions in order: 120 > 60 is True, 90 > 30 is True. Corresponding branch evaluates to 60."
  },
  {
    "id": 118,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, ans\nSet x = 19, y = 38\nif(x mod 2 EQUALS 0 AND y mod 2 EQUALS 0)\n    Set ans = x + y\nelse if(x mod 2 NOT EQUALS 0 AND y mod 2 NOT EQUALS 0)\n    Set ans = x * y\nelse\n    Set ans = x - y\n    if(ans < 0)\n        Set ans = -ans\n    End if\nEnd if\nPrint ans",
    "options": [
      "50",
      "19",
      "20",
      "35"
    ],
    "correctAnswer": 1,
    "explanation": "x mod 2 = 1, y mod 2 = 0. Matching condition branch yields 19."
  },
  {
    "id": 119,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, score\nSet x = 55, y = 105\nif(x > y)\n    Set x = x - 5\n    Set score = x + y\nelse\n    Set y = y - 5\n    Set score = x * 2 + y\nEnd if\nPrint score",
    "options": [
      "50",
      "20",
      "215",
      "35"
    ],
    "correctAnswer": 2,
    "explanation": "x > y is False. Executing corresponding branch updates variable and computes score = 215."
  },
  {
    "id": 120,
    "setId": 4,
    "topic": "Conditional Statements",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b\nSet a = 15, b = 60\nif(a < b)\n    Set a = a + 10\nEnd if\nif(b < a)\n    Set b = b + 5\nEnd if\nPrint a + b",
    "options": [
      "35",
      "50",
      "20",
      "85"
    ],
    "correctAnswer": 3,
    "explanation": "Initially a=15, b=60. First if: 15 < 60 is True, updated a=25. Second if: 60 < 25 is False, updated b=60. Sum a + b = 85."
  },
  {
    "id": 121,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer tot, i\nSet tot = 0, i = 1\nwhile(i <= 5)\n    Set tot = tot + (i * 2)\n    Set i = i + 2\nEnd while\nPrint tot",
    "options": [
      "18",
      "12",
      "24",
      "32"
    ],
    "correctAnswer": 0,
    "explanation": "Loop runs for i values where i <= 5 with step 2. Summing i * 2 at each iteration results in tot = 18."
  },
  {
    "id": 122,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer val, x\nSet val = 0, x = 18\nwhile(x > 0)\n    Set val = val + x\n    if(val > 25)\n        Jump out of loop\n    End if\n    Set x = x - 3\nEnd while\nPrint val",
    "options": [
      "18",
      "33",
      "24",
      "32"
    ],
    "correctAnswer": 1,
    "explanation": "Starting with x = 18, each iteration adds x to val and decrements x by 3. The loop breaks when val > 25. Final val = 33."
  },
  {
    "id": 123,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer count, i, j\nSet count = 0\nfor(i = 1 to 4)\n    for(j = 1 to 2)\n        Set count = count + (i + j)\n    End for\nEnd for\nPrint count",
    "options": [
      "18",
      "24",
      "32",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "Outer loop runs from 1 to 4, inner loop runs from 1 to 2. Adding (i + j) in each inner iteration sums to count = 32."
  },
  {
    "id": 124,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer prod, x\nSet prod = 1, x = 1\nwhile(x <= 7)\n    Set prod = (prod * x) mod 100\n    Set x = x + 2\nEnd while\nPrint prod",
    "options": [
      "32",
      "24",
      "18",
      "5"
    ],
    "correctAnswer": 3,
    "explanation": "x starts at 1 and increases by 2 up to 7. Multiplying and taking mod 100 at each step yields prod = 5."
  },
  {
    "id": 125,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer s, i\nSet s = 0\nfor(i = 1 to 10)\n    if(i mod 2 EQUALS 0)\n        Set s = s + i\n    else\n        Set s = s + 1\n    End if\nEnd for\nPrint s",
    "options": [
      "35",
      "32",
      "24",
      "18"
    ],
    "correctAnswer": 0,
    "explanation": "Iterating from 1 to 10: even values add i, odd values add 1. Final sum s = 35."
  },
  {
    "id": 126,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer tot, i\nSet tot = 0, i = 1\nwhile(i <= 5)\n    Set tot = tot + (i * 2)\n    Set i = i + 4\nEnd while\nPrint tot",
    "options": [
      "18",
      "12",
      "32",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Loop runs for i values where i <= 5 with step 4. Summing i * 2 at each iteration results in tot = 12."
  },
  {
    "id": 127,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer val, x\nSet val = 0, x = 18\nwhile(x > 0)\n    Set val = val + x\n    if(val > 25)\n        Jump out of loop\n    End if\n    Set x = x - 2\nEnd while\nPrint val",
    "options": [
      "32",
      "18",
      "34",
      "24"
    ],
    "correctAnswer": 2,
    "explanation": "Starting with x = 18, each iteration adds x to val and decrements x by 2. The loop breaks when val > 25. Final val = 34."
  },
  {
    "id": 128,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer count, i, j\nSet count = 0\nfor(i = 1 to 4)\n    for(j = 1 to 4)\n        Set count = count + (i + j)\n    End for\nEnd for\nPrint count",
    "options": [
      "24",
      "32",
      "18",
      "80"
    ],
    "correctAnswer": 3,
    "explanation": "Outer loop runs from 1 to 4, inner loop runs from 1 to 4. Adding (i + j) in each inner iteration sums to count = 80."
  },
  {
    "id": 129,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer prod, x\nSet prod = 1, x = 1\nwhile(x <= 7)\n    Set prod = (prod * x) mod 100\n    Set x = x + 1\nEnd while\nPrint prod",
    "options": [
      "40",
      "32",
      "18",
      "24"
    ],
    "correctAnswer": 0,
    "explanation": "x starts at 1 and increases by 1 up to 7. Multiplying and taking mod 100 at each step yields prod = 40."
  },
  {
    "id": 130,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer s, i\nSet s = 0\nfor(i = 1 to 10)\n    if(i mod 2 EQUALS 0)\n        Set s = s + i\n    else\n        Set s = s + 1\n    End if\nEnd for\nPrint s",
    "options": [
      "18",
      "35",
      "32",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Iterating from 1 to 10: even values add i, odd values add 1. Final sum s = 35."
  },
  {
    "id": 131,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer tot, i\nSet tot = 0, i = 1\nwhile(i <= 5)\n    Set tot = tot + (i * 2)\n    Set i = i + 1\nEnd while\nPrint tot",
    "options": [
      "32",
      "18",
      "30",
      "24"
    ],
    "correctAnswer": 2,
    "explanation": "Loop runs for i values where i <= 5 with step 1. Summing i * 2 at each iteration results in tot = 30."
  },
  {
    "id": 132,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer val, x\nSet val = 0, x = 18\nwhile(x > 0)\n    Set val = val + x\n    if(val > 25)\n        Jump out of loop\n    End if\n    Set x = x - 4\nEnd while\nPrint val",
    "options": [
      "24",
      "12",
      "18",
      "32"
    ],
    "correctAnswer": 3,
    "explanation": "Starting with x = 18, each iteration adds x to val and decrements x by 4. The loop breaks when val > 25. Final val = 32."
  },
  {
    "id": 133,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer count, i, j\nSet count = 0\nfor(i = 1 to 4)\n    for(j = 1 to 3)\n        Set count = count + (i + j)\n    End for\nEnd for\nPrint count",
    "options": [
      "54",
      "18",
      "32",
      "24"
    ],
    "correctAnswer": 0,
    "explanation": "Outer loop runs from 1 to 4, inner loop runs from 1 to 3. Adding (i + j) in each inner iteration sums to count = 54."
  },
  {
    "id": 134,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer prod, x\nSet prod = 1, x = 1\nwhile(x <= 7)\n    Set prod = (prod * x) mod 100\n    Set x = x + 3\nEnd while\nPrint prod",
    "options": [
      "24",
      "28",
      "32",
      "18"
    ],
    "correctAnswer": 1,
    "explanation": "x starts at 1 and increases by 3 up to 7. Multiplying and taking mod 100 at each step yields prod = 28."
  },
  {
    "id": 135,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer s, i\nSet s = 0\nfor(i = 1 to 10)\n    if(i mod 2 EQUALS 0)\n        Set s = s + i\n    else\n        Set s = s + 1\n    End if\nEnd for\nPrint s",
    "options": [
      "18",
      "24",
      "35",
      "32"
    ],
    "correctAnswer": 2,
    "explanation": "Iterating from 1 to 10: even values add i, odd values add 1. Final sum s = 35."
  },
  {
    "id": 136,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer tot, i\nSet tot = 0, i = 1\nwhile(i <= 5)\n    Set tot = tot + (i * 2)\n    Set i = i + 3\nEnd while\nPrint tot",
    "options": [
      "24",
      "18",
      "32",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "Loop runs for i values where i <= 5 with step 3. Summing i * 2 at each iteration results in tot = 10."
  },
  {
    "id": 137,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer val, x\nSet val = 0, x = 18\nwhile(x > 0)\n    Set val = val + x\n    if(val > 25)\n        Jump out of loop\n    End if\n    Set x = x - 1\nEnd while\nPrint val",
    "options": [
      "35",
      "24",
      "18",
      "32"
    ],
    "correctAnswer": 0,
    "explanation": "Starting with x = 18, each iteration adds x to val and decrements x by 1. The loop breaks when val > 25. Final val = 35."
  },
  {
    "id": 138,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer count, i, j\nSet count = 0\nfor(i = 1 to 4)\n    for(j = 1 to 4)\n        Set count = count + (i + j)\n    End for\nEnd for\nPrint count",
    "options": [
      "18",
      "80",
      "32",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Outer loop runs from 1 to 4, inner loop runs from 1 to 4. Adding (i + j) in each inner iteration sums to count = 80."
  },
  {
    "id": 139,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer prod, x\nSet prod = 1, x = 1\nwhile(x <= 7)\n    Set prod = (prod * x) mod 100\n    Set x = x + 4\nEnd while\nPrint prod",
    "options": [
      "24",
      "18",
      "5",
      "32"
    ],
    "correctAnswer": 2,
    "explanation": "x starts at 1 and increases by 4 up to 7. Multiplying and taking mod 100 at each step yields prod = 5."
  },
  {
    "id": 140,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer s, i\nSet s = 0\nfor(i = 1 to 10)\n    if(i mod 2 EQUALS 0)\n        Set s = s + i\n    else\n        Set s = s + 1\n    End if\nEnd for\nPrint s",
    "options": [
      "18",
      "24",
      "32",
      "35"
    ],
    "correctAnswer": 3,
    "explanation": "Iterating from 1 to 10: even values add i, odd values add 1. Final sum s = 35."
  },
  {
    "id": 141,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer tot, i\nSet tot = 0, i = 1\nwhile(i <= 3)\n    Set tot = tot + (i * 2)\n    Set i = i + 2\nEnd while\nPrint tot",
    "options": [
      "8",
      "24",
      "32",
      "18"
    ],
    "correctAnswer": 0,
    "explanation": "Loop runs for i values where i <= 3 with step 2. Summing i * 2 at each iteration results in tot = 8."
  },
  {
    "id": 142,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer val, x\nSet val = 0, x = 15\nwhile(x > 0)\n    Set val = val + x\n    if(val > 25)\n        Jump out of loop\n    End if\n    Set x = x - 5\nEnd while\nPrint val",
    "options": [
      "32",
      "30",
      "24",
      "18"
    ],
    "correctAnswer": 1,
    "explanation": "Starting with x = 15, each iteration adds x to val and decrements x by 5. The loop breaks when val > 25. Final val = 30."
  },
  {
    "id": 143,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer count, i, j\nSet count = 0\nfor(i = 1 to 4)\n    for(j = 1 to 4)\n        Set count = count + (i + j)\n    End for\nEnd for\nPrint count",
    "options": [
      "32",
      "18",
      "80",
      "24"
    ],
    "correctAnswer": 2,
    "explanation": "Outer loop runs from 1 to 4, inner loop runs from 1 to 4. Adding (i + j) in each inner iteration sums to count = 80."
  },
  {
    "id": 144,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer prod, x\nSet prod = 1, x = 1\nwhile(x <= 4)\n    Set prod = (prod * x) mod 100\n    Set x = x + 5\nEnd while\nPrint prod",
    "options": [
      "32",
      "24",
      "18",
      "1"
    ],
    "correctAnswer": 3,
    "explanation": "x starts at 1 and increases by 5 up to 4. Multiplying and taking mod 100 at each step yields prod = 1."
  },
  {
    "id": 145,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer s, i\nSet s = 0\nfor(i = 1 to 9)\n    if(i mod 2 EQUALS 0)\n        Set s = s + i\n    else\n        Set s = s + 1\n    End if\nEnd for\nPrint s",
    "options": [
      "25",
      "24",
      "18",
      "32"
    ],
    "correctAnswer": 0,
    "explanation": "Iterating from 1 to 9: even values add i, odd values add 1. Final sum s = 25."
  },
  {
    "id": 146,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer tot, i\nSet tot = 0, i = 1\nwhile(i <= 3)\n    Set tot = tot + (i * 2)\n    Set i = i + 3\nEnd while\nPrint tot",
    "options": [
      "24",
      "2",
      "32",
      "18"
    ],
    "correctAnswer": 1,
    "explanation": "Loop runs for i values where i <= 3 with step 3. Summing i * 2 at each iteration results in tot = 2."
  },
  {
    "id": 147,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer val, x\nSet val = 0, x = 15\nwhile(x > 0)\n    Set val = val + x\n    if(val > 25)\n        Jump out of loop\n    End if\n    Set x = x - 6\nEnd while\nPrint val",
    "options": [
      "24",
      "18",
      "27",
      "32"
    ],
    "correctAnswer": 2,
    "explanation": "Starting with x = 15, each iteration adds x to val and decrements x by 6. The loop breaks when val > 25. Final val = 27."
  },
  {
    "id": 148,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer count, i, j\nSet count = 0\nfor(i = 1 to 4)\n    for(j = 1 to 4)\n        Set count = count + (i + j)\n    End for\nEnd for\nPrint count",
    "options": [
      "24",
      "18",
      "32",
      "80"
    ],
    "correctAnswer": 3,
    "explanation": "Outer loop runs from 1 to 4, inner loop runs from 1 to 4. Adding (i + j) in each inner iteration sums to count = 80."
  },
  {
    "id": 149,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer prod, x\nSet prod = 1, x = 1\nwhile(x <= 4)\n    Set prod = (prod * x) mod 100\n    Set x = x + 6\nEnd while\nPrint prod",
    "options": [
      "1",
      "32",
      "24",
      "18"
    ],
    "correctAnswer": 0,
    "explanation": "x starts at 1 and increases by 6 up to 4. Multiplying and taking mod 100 at each step yields prod = 1."
  },
  {
    "id": 150,
    "setId": 5,
    "topic": "Loops",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer s, i\nSet s = 0\nfor(i = 1 to 5)\n    if(i mod 2 EQUALS 0)\n        Set s = s + i\n    else\n        Set s = s + 1\n    End if\nEnd for\nPrint s",
    "options": [
      "24",
      "9",
      "18",
      "32"
    ],
    "correctAnswer": 1,
    "explanation": "Iterating from 1 to 5: even values add i, odd values add 1. Final sum s = 9."
  },
  {
    "id": 151,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve(Integer a, Integer b)\n    Set a = a * 2 + b\n    Set b = b * 2 + a\n    return b - a\nEnd function solve\n\nInteger ans\nSet ans = solve(4, 5)\nPrint ans",
    "options": [
      "8",
      "14",
      "10",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "Inside solve(4, 5): a becomes 4*2 + 5 = 13. b becomes 5*2 + 13 = 23. return b - a = 10."
  },
  {
    "id": 152,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer compute(Integer x)\n    return x * 3 - 4\nEnd function compute\n\nInteger p, q\nSet p = 6\nSet q = compute(p)\nPrint p + q",
    "options": [
      "24",
      "22",
      "18",
      "20"
    ],
    "correctAnswer": 3,
    "explanation": "compute(6) returns 6*3 - 4 = 14. In the main scope, p remains 6 (pass by value). p + q = 6 + 14 = 20."
  },
  {
    "id": 153,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer helper(Integer n, Integer m)\n    Integer res, i\n    Set res = 0\n    for(i = 1 to n)\n        Set res = res + (i mod m)\n    End for\n    return res\nEnd function helper\n\nInteger out\nSet out = helper(3, 7)\nPrint out",
    "options": [
      "6",
      "10",
      "4",
      "8"
    ],
    "correctAnswer": 0,
    "explanation": "helper(3, 7) computes sum of (i mod 7) for i from 1 to 3. Sum = 6."
  },
  {
    "id": 154,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer g(Integer k)\n    return (k * 2) - 3\nEnd function g\n\nInteger res\nSet res = g(g(5))\nPrint res",
    "options": [
      "13",
      "11",
      "9",
      "15"
    ],
    "correctAnswer": 1,
    "explanation": "Inner call g(5) = (5 * 2) - 3 = 7. Outer call g(7) = (7 * 2) - 3 = 11."
  },
  {
    "id": 155,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer check(Integer u, Integer v)\n    if(u > v)\n        return (u - v) * 2\n    else\n        return (v - u) * 3\n    End if\nEnd function check\n\nInteger ans\nSet ans = check(8, 4)\nPrint ans",
    "options": [
      "10",
      "6",
      "8",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "For u=8, v=4: u > v is True. Evaluating the active branch yields 8."
  },
  {
    "id": 156,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve(Integer a, Integer b)\n    Set a = a * 2 + b\n    Set b = b * 2 + a\n    return b - a\nEnd function solve\n\nInteger ans\nSet ans = solve(7, 2)\nPrint ans",
    "options": [
      "8",
      "6",
      "2",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "Inside solve(7, 2): a becomes 7*2 + 2 = 16. b becomes 2*2 + 16 = 20. return b - a = 4."
  },
  {
    "id": 157,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer compute(Integer x)\n    return x * 3 - 4\nEnd function compute\n\nInteger p, q\nSet p = 9\nSet q = compute(p)\nPrint p + q",
    "options": [
      "32",
      "30",
      "34",
      "36"
    ],
    "correctAnswer": 0,
    "explanation": "compute(9) returns 9*3 - 4 = 23. In the main scope, p remains 9 (pass by value). p + q = 9 + 23 = 32."
  },
  {
    "id": 158,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer helper(Integer n, Integer m)\n    Integer res, i\n    Set res = 0\n    for(i = 1 to n)\n        Set res = res + (i mod m)\n    End for\n    return res\nEnd function helper\n\nInteger out\nSet out = helper(2, 6)\nPrint out",
    "options": [
      "7",
      "3",
      "5",
      "1"
    ],
    "correctAnswer": 1,
    "explanation": "helper(2, 6) computes sum of (i mod 6) for i from 1 to 2. Sum = 3."
  },
  {
    "id": 159,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer g(Integer k)\n    return (k * 2) - 3\nEnd function g\n\nInteger res\nSet res = g(g(5))\nPrint res",
    "options": [
      "13",
      "15",
      "11",
      "9"
    ],
    "correctAnswer": 2,
    "explanation": "Inner call g(5) = (5 * 2) - 3 = 7. Outer call g(7) = (7 * 2) - 3 = 11."
  },
  {
    "id": 160,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer check(Integer u, Integer v)\n    if(u > v)\n        return (u - v) * 2\n    else\n        return (v - u) * 3\n    End if\nEnd function check\n\nInteger ans\nSet ans = check(6, 4)\nPrint ans",
    "options": [
      "2",
      "6",
      "8",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "For u=6, v=4: u > v is True. Evaluating the active branch yields 4."
  },
  {
    "id": 161,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve(Integer a, Integer b)\n    Set a = a * 2 + b\n    Set b = b * 2 + a\n    return b - a\nEnd function solve\n\nInteger ans\nSet ans = solve(4, 3)\nPrint ans",
    "options": [
      "6",
      "4",
      "8",
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "Inside solve(4, 3): a becomes 4*2 + 3 = 11. b becomes 3*2 + 11 = 17. return b - a = 6."
  },
  {
    "id": 162,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer compute(Integer x)\n    return x * 3 - 4\nEnd function compute\n\nInteger p, q\nSet p = 7\nSet q = compute(p)\nPrint p + q",
    "options": [
      "28",
      "24",
      "26",
      "22"
    ],
    "correctAnswer": 1,
    "explanation": "compute(7) returns 7*3 - 4 = 17. In the main scope, p remains 7 (pass by value). p + q = 7 + 17 = 24."
  },
  {
    "id": 163,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer helper(Integer n, Integer m)\n    Integer res, i\n    Set res = 0\n    for(i = 1 to n)\n        Set res = res + (i mod m)\n    End for\n    return res\nEnd function helper\n\nInteger out\nSet out = helper(3, 4)\nPrint out",
    "options": [
      "4",
      "8",
      "6",
      "10"
    ],
    "correctAnswer": 2,
    "explanation": "helper(3, 4) computes sum of (i mod 4) for i from 1 to 3. Sum = 6."
  },
  {
    "id": 164,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer g(Integer k)\n    return (k * 2) - 3\nEnd function g\n\nInteger res\nSet res = g(g(8))\nPrint res",
    "options": [
      "21",
      "27",
      "25",
      "23"
    ],
    "correctAnswer": 3,
    "explanation": "Inner call g(8) = (8 * 2) - 3 = 13. Outer call g(13) = (13 * 2) - 3 = 23."
  },
  {
    "id": 165,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer check(Integer u, Integer v)\n    if(u > v)\n        return (u - v) * 2\n    else\n        return (v - u) * 3\n    End if\nEnd function check\n\nInteger ans\nSet ans = check(6, 3)\nPrint ans",
    "options": [
      "6",
      "10",
      "4",
      "8"
    ],
    "correctAnswer": 0,
    "explanation": "For u=6, v=3: u > v is True. Evaluating the active branch yields 6."
  },
  {
    "id": 166,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve(Integer a, Integer b)\n    Set a = a * 2 + b\n    Set b = b * 2 + a\n    return b - a\nEnd function solve\n\nInteger ans\nSet ans = solve(5, 2)\nPrint ans",
    "options": [
      "6",
      "4",
      "8",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "Inside solve(5, 2): a becomes 5*2 + 2 = 12. b becomes 2*2 + 12 = 16. return b - a = 4."
  },
  {
    "id": 167,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer compute(Integer x)\n    return x * 3 - 4\nEnd function compute\n\nInteger p, q\nSet p = 9\nSet q = compute(p)\nPrint p + q",
    "options": [
      "36",
      "30",
      "32",
      "34"
    ],
    "correctAnswer": 2,
    "explanation": "compute(9) returns 9*3 - 4 = 23. In the main scope, p remains 9 (pass by value). p + q = 9 + 23 = 32."
  },
  {
    "id": 168,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer helper(Integer n, Integer m)\n    Integer res, i\n    Set res = 0\n    for(i = 1 to n)\n        Set res = res + (i mod m)\n    End for\n    return res\nEnd function helper\n\nInteger out\nSet out = helper(4, 6)\nPrint out",
    "options": [
      "8",
      "14",
      "12",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "helper(4, 6) computes sum of (i mod 6) for i from 1 to 4. Sum = 10."
  },
  {
    "id": 169,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer g(Integer k)\n    return (k * 2) - 3\nEnd function g\n\nInteger res\nSet res = g(g(7))\nPrint res",
    "options": [
      "19",
      "23",
      "17",
      "21"
    ],
    "correctAnswer": 0,
    "explanation": "Inner call g(7) = (7 * 2) - 3 = 11. Outer call g(11) = (11 * 2) - 3 = 19."
  },
  {
    "id": 170,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer check(Integer u, Integer v)\n    if(u > v)\n        return (u - v) * 2\n    else\n        return (v - u) * 3\n    End if\nEnd function check\n\nInteger ans\nSet ans = check(8, 3)\nPrint ans",
    "options": [
      "12",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "For u=8, v=3: u > v is True. Evaluating the active branch yields 10."
  },
  {
    "id": 171,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve(Integer a, Integer b)\n    Set a = a * 2 + b\n    Set b = b * 2 + a\n    return b - a\nEnd function solve\n\nInteger ans\nSet ans = solve(3, 5)\nPrint ans",
    "options": [
      "14",
      "8",
      "10",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "Inside solve(3, 5): a becomes 3*2 + 5 = 11. b becomes 5*2 + 11 = 21. return b - a = 10."
  },
  {
    "id": 172,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer compute(Integer x)\n    return x * 3 - 4\nEnd function compute\n\nInteger p, q\nSet p = 6\nSet q = compute(p)\nPrint p + q",
    "options": [
      "18",
      "24",
      "22",
      "20"
    ],
    "correctAnswer": 3,
    "explanation": "compute(6) returns 6*3 - 4 = 14. In the main scope, p remains 6 (pass by value). p + q = 6 + 14 = 20."
  },
  {
    "id": 173,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer helper(Integer n, Integer m)\n    Integer res, i\n    Set res = 0\n    for(i = 1 to n)\n        Set res = res + (i mod m)\n    End for\n    return res\nEnd function helper\n\nInteger out\nSet out = helper(5, 4)\nPrint out",
    "options": [
      "7",
      "9",
      "11",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "helper(5, 4) computes sum of (i mod 4) for i from 1 to 5. Sum = 7."
  },
  {
    "id": 174,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer g(Integer k)\n    return (k * 2) - 3\nEnd function g\n\nInteger res\nSet res = g(g(7))\nPrint res",
    "options": [
      "21",
      "19",
      "17",
      "23"
    ],
    "correctAnswer": 1,
    "explanation": "Inner call g(7) = (7 * 2) - 3 = 11. Outer call g(11) = (11 * 2) - 3 = 19."
  },
  {
    "id": 175,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer check(Integer u, Integer v)\n    if(u > v)\n        return (u - v) * 2\n    else\n        return (v - u) * 3\n    End if\nEnd function check\n\nInteger ans\nSet ans = check(4, 4)\nPrint ans",
    "options": [
      "2",
      "4",
      "0",
      "-2"
    ],
    "correctAnswer": 2,
    "explanation": "For u=4, v=4: u > v is False. Evaluating the active branch yields 0."
  },
  {
    "id": 176,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve(Integer a, Integer b)\n    Set a = a * 2 + b\n    Set b = b * 2 + a\n    return b - a\nEnd function solve\n\nInteger ans\nSet ans = solve(9, 4)\nPrint ans",
    "options": [
      "10",
      "12",
      "6",
      "8"
    ],
    "correctAnswer": 3,
    "explanation": "Inside solve(9, 4): a becomes 9*2 + 4 = 22. b becomes 4*2 + 22 = 30. return b - a = 8."
  },
  {
    "id": 177,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer compute(Integer x)\n    return x * 3 - 4\nEnd function compute\n\nInteger p, q\nSet p = 8\nSet q = compute(p)\nPrint p + q",
    "options": [
      "28",
      "30",
      "26",
      "32"
    ],
    "correctAnswer": 0,
    "explanation": "compute(8) returns 8*3 - 4 = 20. In the main scope, p remains 8 (pass by value). p + q = 8 + 20 = 28."
  },
  {
    "id": 178,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer helper(Integer n, Integer m)\n    Integer res, i\n    Set res = 0\n    for(i = 1 to n)\n        Set res = res + (i mod m)\n    End for\n    return res\nEnd function helper\n\nInteger out\nSet out = helper(3, 6)\nPrint out",
    "options": [
      "10",
      "6",
      "8",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "helper(3, 6) computes sum of (i mod 6) for i from 1 to 3. Sum = 6."
  },
  {
    "id": 179,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer g(Integer k)\n    return (k * 2) - 3\nEnd function g\n\nInteger res\nSet res = g(g(6))\nPrint res",
    "options": [
      "13",
      "19",
      "15",
      "17"
    ],
    "correctAnswer": 2,
    "explanation": "Inner call g(6) = (6 * 2) - 3 = 9. Outer call g(9) = (9 * 2) - 3 = 15."
  },
  {
    "id": 180,
    "setId": 6,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer check(Integer u, Integer v)\n    if(u > v)\n        return (u - v) * 2\n    else\n        return (v - u) * 3\n    End if\nEnd function check\n\nInteger ans\nSet ans = check(5, 6)\nPrint ans",
    "options": [
      "5",
      "1",
      "7",
      "3"
    ],
    "correctAnswer": 3,
    "explanation": "For u=5, v=6: u > v is False. Evaluating the active branch yields 3."
  },
  {
    "id": 181,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer rec_sum(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + rec_sum(x - 1)\nEnd function rec_sum\n\nInteger res\nSet res = rec_sum(4)\nPrint res",
    "options": [
      "10",
      "11",
      "13",
      "9"
    ],
    "correctAnswer": 0,
    "explanation": "rec_sum(4) recursively adds 4 + rec_sum(3) until base case x <= 1 returns 1. Total = 10."
  },
  {
    "id": 182,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer fun(Integer x)\n    if(x <= 0)\n        return 0\n    End if\n    if(x EQUALS 1)\n        return 2\n    End if\n    return 2 * fun(x - 1) + 1\nEnd function fun\n\nInteger ans\nSet ans = fun(5)\nPrint ans",
    "options": [
      "50",
      "47",
      "48",
      "46"
    ],
    "correctAnswer": 1,
    "explanation": "Traced step-by-step: fun(1)=2, fun(2)=2*2+1=5, fun(3)=2*5+1=11... For n=5, fun(5) = 47."
  },
  {
    "id": 183,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer tree(Integer x)\n    if(x <= 1)\n        return x\n    End if\n    return tree(x - 1) + tree(x - 2) + 1\nEnd function tree\n\nInteger ans\nSet ans = tree(3)\nPrint ans",
    "options": [
      "5",
      "3",
      "4",
      "7"
    ],
    "correctAnswer": 2,
    "explanation": "Base cases: tree(0)=0, tree(1)=1. For x >= 2: tree(x) = tree(x-1) + tree(x-2) + 1. For x=3, answer is 4."
  },
  {
    "id": 184,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer halve(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + halve(x / 2)\nEnd function halve\n\nInteger val\nSet val = halve(12)\nPrint val",
    "options": [
      "21",
      "25",
      "23",
      "22"
    ],
    "correctAnswer": 3,
    "explanation": "halve(12) adds current x and recurses with integer division x / 2 until x <= 1. Sum = 22."
  },
  {
    "id": 185,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer alt(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x - alt(x - 1)\nEnd function alt\n\nInteger result\nSet result = alt(4)\nPrint result",
    "options": [
      "2",
      "1",
      "5",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "Traced: alt(1)=1, alt(2)=2-1=1, alt(3)=3-1=2, alt(4)=4-2=2, alt(5)=5-2=3... For n=4, result is 2."
  },
  {
    "id": 186,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer rec_sum(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + rec_sum(x - 1)\nEnd function rec_sum\n\nInteger res\nSet res = rec_sum(5)\nPrint res",
    "options": [
      "16",
      "15",
      "18",
      "14"
    ],
    "correctAnswer": 1,
    "explanation": "rec_sum(5) recursively adds 5 + rec_sum(4) until base case x <= 1 returns 1. Total = 15."
  },
  {
    "id": 187,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer fun(Integer x)\n    if(x <= 0)\n        return 0\n    End if\n    if(x EQUALS 1)\n        return 2\n    End if\n    return 2 * fun(x - 1) + 1\nEnd function fun\n\nInteger ans\nSet ans = fun(3)\nPrint ans",
    "options": [
      "10",
      "12",
      "11",
      "14"
    ],
    "correctAnswer": 2,
    "explanation": "Traced step-by-step: fun(1)=2, fun(2)=2*2+1=5, fun(3)=2*5+1=11... For n=3, fun(3) = 11."
  },
  {
    "id": 188,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer tree(Integer x)\n    if(x <= 1)\n        return x\n    End if\n    return tree(x - 1) + tree(x - 2) + 1\nEnd function tree\n\nInteger ans\nSet ans = tree(4)\nPrint ans",
    "options": [
      "10",
      "6",
      "8",
      "7"
    ],
    "correctAnswer": 3,
    "explanation": "Base cases: tree(0)=0, tree(1)=1. For x >= 2: tree(x) = tree(x-1) + tree(x-2) + 1. For x=4, answer is 7."
  },
  {
    "id": 189,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer halve(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + halve(x / 2)\nEnd function halve\n\nInteger val\nSet val = halve(10)\nPrint val",
    "options": [
      "18",
      "21",
      "19",
      "17"
    ],
    "correctAnswer": 0,
    "explanation": "halve(10) adds current x and recurses with integer division x / 2 until x <= 1. Sum = 18."
  },
  {
    "id": 190,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer alt(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x - alt(x - 1)\nEnd function alt\n\nInteger result\nSet result = alt(6)\nPrint result",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "Traced: alt(1)=1, alt(2)=2-1=1, alt(3)=3-1=2, alt(4)=4-2=2, alt(5)=5-2=3... For n=6, result is 3."
  },
  {
    "id": 191,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer rec_sum(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + rec_sum(x - 1)\nEnd function rec_sum\n\nInteger res\nSet res = rec_sum(3)\nPrint res",
    "options": [
      "7",
      "5",
      "6",
      "9"
    ],
    "correctAnswer": 2,
    "explanation": "rec_sum(3) recursively adds 3 + rec_sum(2) until base case x <= 1 returns 1. Total = 6."
  },
  {
    "id": 192,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer fun(Integer x)\n    if(x <= 0)\n        return 0\n    End if\n    if(x EQUALS 1)\n        return 2\n    End if\n    return 2 * fun(x - 1) + 1\nEnd function fun\n\nInteger ans\nSet ans = fun(4)\nPrint ans",
    "options": [
      "22",
      "24",
      "26",
      "23"
    ],
    "correctAnswer": 3,
    "explanation": "Traced step-by-step: fun(1)=2, fun(2)=2*2+1=5, fun(3)=2*5+1=11... For n=4, fun(4) = 23."
  },
  {
    "id": 193,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer tree(Integer x)\n    if(x <= 1)\n        return x\n    End if\n    return tree(x - 1) + tree(x - 2) + 1\nEnd function tree\n\nInteger ans\nSet ans = tree(5)\nPrint ans",
    "options": [
      "12",
      "11",
      "13",
      "15"
    ],
    "correctAnswer": 0,
    "explanation": "Base cases: tree(0)=0, tree(1)=1. For x >= 2: tree(x) = tree(x-1) + tree(x-2) + 1. For x=5, answer is 12."
  },
  {
    "id": 194,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer halve(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + halve(x / 2)\nEnd function halve\n\nInteger val\nSet val = halve(6)\nPrint val",
    "options": [
      "9",
      "10",
      "11",
      "13"
    ],
    "correctAnswer": 1,
    "explanation": "halve(6) adds current x and recurses with integer division x / 2 until x <= 1. Sum = 10."
  },
  {
    "id": 195,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer alt(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x - alt(x - 1)\nEnd function alt\n\nInteger result\nSet result = alt(4)\nPrint result",
    "options": [
      "5",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "Traced: alt(1)=1, alt(2)=2-1=1, alt(3)=3-1=2, alt(4)=4-2=2, alt(5)=5-2=3... For n=4, result is 2."
  },
  {
    "id": 196,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer rec_sum(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + rec_sum(x - 1)\nEnd function rec_sum\n\nInteger res\nSet res = rec_sum(5)\nPrint res",
    "options": [
      "16",
      "18",
      "14",
      "15"
    ],
    "correctAnswer": 3,
    "explanation": "rec_sum(5) recursively adds 5 + rec_sum(4) until base case x <= 1 returns 1. Total = 15."
  },
  {
    "id": 197,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer fun(Integer x)\n    if(x <= 0)\n        return 0\n    End if\n    if(x EQUALS 1)\n        return 2\n    End if\n    return 2 * fun(x - 1) + 1\nEnd function fun\n\nInteger ans\nSet ans = fun(6)\nPrint ans",
    "options": [
      "95",
      "94",
      "98",
      "96"
    ],
    "correctAnswer": 0,
    "explanation": "Traced step-by-step: fun(1)=2, fun(2)=2*2+1=5, fun(3)=2*5+1=11... For n=6, fun(6) = 95."
  },
  {
    "id": 198,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer tree(Integer x)\n    if(x <= 1)\n        return x\n    End if\n    return tree(x - 1) + tree(x - 2) + 1\nEnd function tree\n\nInteger ans\nSet ans = tree(3)\nPrint ans",
    "options": [
      "3",
      "4",
      "7",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "Base cases: tree(0)=0, tree(1)=1. For x >= 2: tree(x) = tree(x-1) + tree(x-2) + 1. For x=3, answer is 4."
  },
  {
    "id": 199,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer halve(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + halve(x / 2)\nEnd function halve\n\nInteger val\nSet val = halve(8)\nPrint val",
    "options": [
      "16",
      "14",
      "15",
      "18"
    ],
    "correctAnswer": 2,
    "explanation": "halve(8) adds current x and recurses with integer division x / 2 until x <= 1. Sum = 15."
  },
  {
    "id": 200,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer alt(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x - alt(x - 1)\nEnd function alt\n\nInteger result\nSet result = alt(5)\nPrint result",
    "options": [
      "6",
      "2",
      "4",
      "3"
    ],
    "correctAnswer": 3,
    "explanation": "Traced: alt(1)=1, alt(2)=2-1=1, alt(3)=3-1=2, alt(4)=4-2=2, alt(5)=5-2=3... For n=5, result is 3."
  },
  {
    "id": 201,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer rec_sum(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + rec_sum(x - 1)\nEnd function rec_sum\n\nInteger res\nSet res = rec_sum(4)\nPrint res",
    "options": [
      "10",
      "13",
      "11",
      "9"
    ],
    "correctAnswer": 0,
    "explanation": "rec_sum(4) recursively adds 4 + rec_sum(3) until base case x <= 1 returns 1. Total = 10."
  },
  {
    "id": 202,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer fun(Integer x)\n    if(x <= 0)\n        return 0\n    End if\n    if(x EQUALS 1)\n        return 2\n    End if\n    return 2 * fun(x - 1) + 1\nEnd function fun\n\nInteger ans\nSet ans = fun(5)\nPrint ans",
    "options": [
      "50",
      "47",
      "48",
      "46"
    ],
    "correctAnswer": 1,
    "explanation": "Traced step-by-step: fun(1)=2, fun(2)=2*2+1=5, fun(3)=2*5+1=11... For n=5, fun(5) = 47."
  },
  {
    "id": 203,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer tree(Integer x)\n    if(x <= 1)\n        return x\n    End if\n    return tree(x - 1) + tree(x - 2) + 1\nEnd function tree\n\nInteger ans\nSet ans = tree(3)\nPrint ans",
    "options": [
      "5",
      "3",
      "4",
      "7"
    ],
    "correctAnswer": 2,
    "explanation": "Base cases: tree(0)=0, tree(1)=1. For x >= 2: tree(x) = tree(x-1) + tree(x-2) + 1. For x=3, answer is 4."
  },
  {
    "id": 204,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer halve(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + halve(x / 2)\nEnd function halve\n\nInteger val\nSet val = halve(12)\nPrint val",
    "options": [
      "25",
      "23",
      "21",
      "22"
    ],
    "correctAnswer": 3,
    "explanation": "halve(12) adds current x and recurses with integer division x / 2 until x <= 1. Sum = 22."
  },
  {
    "id": 205,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer alt(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x - alt(x - 1)\nEnd function alt\n\nInteger result\nSet result = alt(4)\nPrint result",
    "options": [
      "2",
      "5",
      "3",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "Traced: alt(1)=1, alt(2)=2-1=1, alt(3)=3-1=2, alt(4)=4-2=2, alt(5)=5-2=3... For n=4, result is 2."
  },
  {
    "id": 206,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer rec_sum(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + rec_sum(x - 1)\nEnd function rec_sum\n\nInteger res\nSet res = rec_sum(5)\nPrint res",
    "options": [
      "14",
      "15",
      "16",
      "18"
    ],
    "correctAnswer": 1,
    "explanation": "rec_sum(5) recursively adds 5 + rec_sum(4) until base case x <= 1 returns 1. Total = 15."
  },
  {
    "id": 207,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer fun(Integer x)\n    if(x <= 0)\n        return 0\n    End if\n    if(x EQUALS 1)\n        return 2\n    End if\n    return 2 * fun(x - 1) + 1\nEnd function fun\n\nInteger ans\nSet ans = fun(3)\nPrint ans",
    "options": [
      "10",
      "12",
      "11",
      "14"
    ],
    "correctAnswer": 2,
    "explanation": "Traced step-by-step: fun(1)=2, fun(2)=2*2+1=5, fun(3)=2*5+1=11... For n=3, fun(3) = 11."
  },
  {
    "id": 208,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer tree(Integer x)\n    if(x <= 1)\n        return x\n    End if\n    return tree(x - 1) + tree(x - 2) + 1\nEnd function tree\n\nInteger ans\nSet ans = tree(4)\nPrint ans",
    "options": [
      "6",
      "10",
      "8",
      "7"
    ],
    "correctAnswer": 3,
    "explanation": "Base cases: tree(0)=0, tree(1)=1. For x >= 2: tree(x) = tree(x-1) + tree(x-2) + 1. For x=4, answer is 7."
  },
  {
    "id": 209,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer halve(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + halve(x / 2)\nEnd function halve\n\nInteger val\nSet val = halve(10)\nPrint val",
    "options": [
      "18",
      "17",
      "21",
      "19"
    ],
    "correctAnswer": 0,
    "explanation": "halve(10) adds current x and recurses with integer division x / 2 until x <= 1. Sum = 18."
  },
  {
    "id": 210,
    "setId": 7,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer alt(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x - alt(x - 1)\nEnd function alt\n\nInteger result\nSet result = alt(6)\nPrint result",
    "options": [
      "4",
      "3",
      "6",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "Traced: alt(1)=1, alt(2)=2-1=1, alt(3)=3-1=2, alt(4)=4-2=2, alt(5)=5-2=3... For n=6, result is 3."
  },
  {
    "id": 211,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, res\nSet u = 6, v = 3\nSet res = (u + v) ^ (u & v)\nPrint res",
    "options": [
      "13",
      "15",
      "11",
      "9"
    ],
    "correctAnswer": 2,
    "explanation": "(u + v) = 9. (u & v) = 2. (9) ^ (2) = 11."
  },
  {
    "id": 212,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, ans\nSet u = 10, v = 4\nSet ans = (u * 2) & (v << 2)\nPrint ans",
    "options": [
      "20",
      "18",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "u * 2 = 20. v << 2 = 16. Bitwise AND (20 & 16) = 16."
  },
  {
    "id": 213,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, val\nSet u = 12, v = 5\nSet val = ((u ^ v) mod 8) + (u >> 1)\nPrint val",
    "options": [
      "7",
      "9",
      "11",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "u ^ v = 9. (9) mod 8 = 1. u >> 1 = 6. val = 1 + 6 = 7."
  },
  {
    "id": 214,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, out\nSet u = 8, v = 2\nSet out = (u | 7) - (v & 3)\nPrint out",
    "options": [
      "15",
      "13",
      "17",
      "11"
    ],
    "correctAnswer": 1,
    "explanation": "(u | 7) = 15. (v & 3) = 2. Difference = 15 - 2 = 13."
  },
  {
    "id": 215,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, ans\nSet u = 15, v = 6\nSet ans = (u mod v) ^ (u / v)\nPrint ans",
    "options": [
      "-1",
      "5",
      "1",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "u mod v = 3. Integer division u / v = 2. (3) ^ (2) = 1."
  },
  {
    "id": 216,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, res\nSet u = 7, v = 3\nSet res = (u + v) ^ (u & v)\nPrint res",
    "options": [
      "11",
      "13",
      "7",
      "9"
    ],
    "correctAnswer": 3,
    "explanation": "(u + v) = 10. (u & v) = 3. (10) ^ (3) = 9."
  },
  {
    "id": 217,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, ans\nSet u = 14, v = 5\nSet ans = (u * 2) & (v << 2)\nPrint ans",
    "options": [
      "20",
      "22",
      "18",
      "24"
    ],
    "correctAnswer": 0,
    "explanation": "u * 2 = 28. v << 2 = 20. Bitwise AND (28 & 20) = 20."
  },
  {
    "id": 218,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, val\nSet u = 9, v = 2\nSet val = ((u ^ v) mod 8) + (u >> 1)\nPrint val",
    "options": [
      "11",
      "7",
      "5",
      "9"
    ],
    "correctAnswer": 1,
    "explanation": "u ^ v = 11. (11) mod 8 = 3. u >> 1 = 4. val = 3 + 4 = 7."
  },
  {
    "id": 219,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, out\nSet u = 18, v = 4\nSet out = (u | 7) - (v & 3)\nPrint out",
    "options": [
      "21",
      "27",
      "23",
      "25"
    ],
    "correctAnswer": 2,
    "explanation": "(u | 7) = 23. (v & 3) = 0. Difference = 23 - 0 = 23."
  },
  {
    "id": 220,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, ans\nSet u = 11, v = 3\nSet ans = (u mod v) ^ (u / v)\nPrint ans",
    "options": [
      "5",
      "-1",
      "3",
      "1"
    ],
    "correctAnswer": 3,
    "explanation": "u mod v = 2. Integer division u / v = 3. (2) ^ (3) = 1."
  },
  {
    "id": 221,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, res\nSet u = 16, v = 5\nSet res = (u + v) ^ (u & v)\nPrint res",
    "options": [
      "21",
      "25",
      "19",
      "23"
    ],
    "correctAnswer": 0,
    "explanation": "(u + v) = 21. (u & v) = 0. (21) ^ (0) = 21."
  },
  {
    "id": 222,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, ans\nSet u = 20, v = 6\nSet ans = (u * 2) & (v << 2)\nPrint ans",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "correctAnswer": 1,
    "explanation": "u * 2 = 40. v << 2 = 24. Bitwise AND (40 & 24) = 8."
  },
  {
    "id": 223,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, val\nSet u = 13, v = 4\nSet val = ((u ^ v) mod 8) + (u >> 1)\nPrint val",
    "options": [
      "11",
      "5",
      "7",
      "9"
    ],
    "correctAnswer": 2,
    "explanation": "u ^ v = 9. (9) mod 8 = 1. u >> 1 = 6. val = 1 + 6 = 7."
  },
  {
    "id": 224,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, out\nSet u = 17, v = 3\nSet out = (u | 7) - (v & 3)\nPrint out",
    "options": [
      "22",
      "18",
      "24",
      "20"
    ],
    "correctAnswer": 3,
    "explanation": "(u | 7) = 23. (v & 3) = 3. Difference = 23 - 3 = 20."
  },
  {
    "id": 225,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, ans\nSet u = 22, v = 5\nSet ans = (u mod v) ^ (u / v)\nPrint ans",
    "options": [
      "6",
      "4",
      "8",
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "u mod v = 2. Integer division u / v = 4. (2) ^ (4) = 6."
  },
  {
    "id": 226,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, res\nSet u = 19, v = 4\nSet res = (u + v) ^ (u & v)\nPrint res",
    "options": [
      "21",
      "23",
      "25",
      "27"
    ],
    "correctAnswer": 1,
    "explanation": "(u + v) = 23. (u & v) = 0. (23) ^ (0) = 23."
  },
  {
    "id": 227,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, ans\nSet u = 25, v = 7\nSet ans = (u * 2) & (v << 2)\nPrint ans",
    "options": [
      "20",
      "18",
      "16",
      "14"
    ],
    "correctAnswer": 2,
    "explanation": "u * 2 = 50. v << 2 = 28. Bitwise AND (50 & 28) = 16."
  },
  {
    "id": 228,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, val\nSet u = 21, v = 5\nSet val = ((u ^ v) mod 8) + (u >> 1)\nPrint val",
    "options": [
      "14",
      "12",
      "8",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "u ^ v = 16. (16) mod 8 = 0. u >> 1 = 10. val = 0 + 10 = 10."
  },
  {
    "id": 229,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, out\nSet u = 24, v = 6\nSet out = (u | 7) - (v & 3)\nPrint out",
    "options": [
      "29",
      "27",
      "31",
      "33"
    ],
    "correctAnswer": 0,
    "explanation": "(u | 7) = 31. (v & 3) = 2. Difference = 31 - 2 = 29."
  },
  {
    "id": 230,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, ans\nSet u = 27, v = 4\nSet ans = (u mod v) ^ (u / v)\nPrint ans",
    "options": [
      "9",
      "5",
      "3",
      "7"
    ],
    "correctAnswer": 1,
    "explanation": "u mod v = 3. Integer division u / v = 6. (3) ^ (6) = 5."
  },
  {
    "id": 231,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, res\nSet u = 23, v = 5\nSet res = (u + v) ^ (u & v)\nPrint res",
    "options": [
      "23",
      "27",
      "25",
      "29"
    ],
    "correctAnswer": 2,
    "explanation": "(u + v) = 28. (u & v) = 5. (28) ^ (5) = 25."
  },
  {
    "id": 232,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, ans\nSet u = 28, v = 6\nSet ans = (u * 2) & (v << 2)\nPrint ans",
    "options": [
      "22",
      "28",
      "26",
      "24"
    ],
    "correctAnswer": 3,
    "explanation": "u * 2 = 56. v << 2 = 24. Bitwise AND (56 & 24) = 24."
  },
  {
    "id": 233,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, val\nSet u = 26, v = 4\nSet val = ((u ^ v) mod 8) + (u >> 1)\nPrint val",
    "options": [
      "19",
      "17",
      "23",
      "21"
    ],
    "correctAnswer": 0,
    "explanation": "u ^ v = 30. (30) mod 8 = 6. u >> 1 = 13. val = 6 + 13 = 19."
  },
  {
    "id": 234,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, out\nSet u = 30, v = 8\nSet out = (u | 7) - (v & 3)\nPrint out",
    "options": [
      "29",
      "31",
      "35",
      "33"
    ],
    "correctAnswer": 1,
    "explanation": "(u | 7) = 31. (v & 3) = 0. Difference = 31 - 0 = 31."
  },
  {
    "id": 235,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, ans\nSet u = 29, v = 5\nSet ans = (u mod v) ^ (u / v)\nPrint ans",
    "options": [
      "5",
      "3",
      "1",
      "-1"
    ],
    "correctAnswer": 2,
    "explanation": "u mod v = 4. Integer division u / v = 5. (4) ^ (5) = 1."
  },
  {
    "id": 236,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, res\nSet u = 32, v = 6\nSet res = (u + v) ^ (u & v)\nPrint res",
    "options": [
      "42",
      "40",
      "36",
      "38"
    ],
    "correctAnswer": 3,
    "explanation": "(u + v) = 38. (u & v) = 0. (38) ^ (0) = 38."
  },
  {
    "id": 237,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, ans\nSet u = 35, v = 7\nSet ans = (u * 2) & (v << 2)\nPrint ans",
    "options": [
      "4",
      "8",
      "6",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "u * 2 = 70. v << 2 = 28. Bitwise AND (70 & 28) = 4."
  },
  {
    "id": 238,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, val\nSet u = 31, v = 5\nSet val = ((u ^ v) mod 8) + (u >> 1)\nPrint val",
    "options": [
      "19",
      "17",
      "15",
      "21"
    ],
    "correctAnswer": 1,
    "explanation": "u ^ v = 26. (26) mod 8 = 2. u >> 1 = 15. val = 2 + 15 = 17."
  },
  {
    "id": 239,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, out\nSet u = 34, v = 6\nSet out = (u | 7) - (v & 3)\nPrint out",
    "options": [
      "41",
      "39",
      "37",
      "35"
    ],
    "correctAnswer": 2,
    "explanation": "(u | 7) = 39. (v & 3) = 2. Difference = 39 - 2 = 37."
  },
  {
    "id": 240,
    "setId": 8,
    "topic": "Math + Bitwise Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer u, v, ans\nSet u = 36, v = 8\nSet ans = (u mod v) ^ (u / v)\nPrint ans",
    "options": [
      "-2",
      "4",
      "2",
      "0"
    ],
    "correctAnswer": 3,
    "explanation": "u mod v = 4. Integer division u / v = 4. (4) ^ (4) = 0."
  },
  {
    "id": 241,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer r_sum(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + r_sum(x - 1)\nEnd function r_sum\n\nInteger tot, i\nSet tot = 0\nfor(i = 1 to 3)\n    Set tot = tot + r_sum(i)\nEnd for\nPrint tot",
    "options": [
      "10",
      "9",
      "12",
      "11"
    ],
    "correctAnswer": 0,
    "explanation": "Loop calls r_sum(i) for i=1..3. The values are summed together resulting in 10."
  },
  {
    "id": 242,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer rec_loop(Integer x)\n    if(x <= 0)\n        return 0\n    End if\n    Integer s, i\n    Set s = 0\n    for(i = 1 to x)\n        Set s = s + i\n    End for\n    return s + rec_loop(x - 1)\nEnd function rec_loop\n\nInteger ans\nSet ans = rec_loop(4)\nPrint ans",
    "options": [
      "22",
      "20",
      "21",
      "19"
    ],
    "correctAnswer": 1,
    "explanation": "rec_loop(4) sums 1..x for each level down to 1. Total sum = 20."
  },
  {
    "id": 243,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer power(Integer a, Integer b)\n    if(b <= 0)\n        return 1\n    End if\n    return a * power(a, b - 1)\nEnd function power\n\nInteger val\nSet val = power(3, 3)\nPrint val",
    "options": [
      "29",
      "28",
      "27",
      "26"
    ],
    "correctAnswer": 2,
    "explanation": "power(3, 3) computes 3^3 recursively: 27."
  },
  {
    "id": 244,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve_gcd(Integer a, Integer b)\n    if(b EQUALS 0)\n        return a\n    End if\n    return solve_gcd(b, a mod b)\nEnd function solve_gcd\n\nInteger ans\nSet ans = solve_gcd(16, 4)\nPrint ans",
    "options": [
      "5",
      "3",
      "6",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "Classic Euclidean algorithm to find GCD of 16 and 4. GCD is 4."
  },
  {
    "id": 245,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer count_set_bits(Integer n)\n    if(n <= 0)\n        return 0\n    End if\n    return (n mod 2) + count_set_bits(n / 2)\nEnd function count_set_bits\n\nInteger bits\nSet bits = count_set_bits(26)\nPrint bits",
    "options": [
      "3",
      "4",
      "2",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "count_set_bits(26) extracts binary bits by taking mod 2 and integer dividing by 2. The binary representation of 26 is 11010, which has 3 set bits (1s)."
  },
  {
    "id": 246,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer r_sum(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + r_sum(x - 1)\nEnd function r_sum\n\nInteger tot, i\nSet tot = 0\nfor(i = 1 to 3)\n    Set tot = tot + r_sum(i)\nEnd for\nPrint tot",
    "options": [
      "12",
      "10",
      "11",
      "9"
    ],
    "correctAnswer": 1,
    "explanation": "Loop calls r_sum(i) for i=1..3. The values are summed together resulting in 10."
  },
  {
    "id": 247,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer rec_loop(Integer x)\n    if(x <= 0)\n        return 0\n    End if\n    Integer s, i\n    Set s = 0\n    for(i = 1 to x)\n        Set s = s + i\n    End for\n    return s + rec_loop(x - 1)\nEnd function rec_loop\n\nInteger ans\nSet ans = rec_loop(4)\nPrint ans",
    "options": [
      "21",
      "19",
      "20",
      "22"
    ],
    "correctAnswer": 2,
    "explanation": "rec_loop(4) sums 1..x for each level down to 1. Total sum = 20."
  },
  {
    "id": 248,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer power(Integer a, Integer b)\n    if(b <= 0)\n        return 1\n    End if\n    return a * power(a, b - 1)\nEnd function power\n\nInteger val\nSet val = power(5, 2)\nPrint val",
    "options": [
      "24",
      "26",
      "27",
      "25"
    ],
    "correctAnswer": 3,
    "explanation": "power(5, 2) computes 5^2 recursively: 25."
  },
  {
    "id": 249,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve_gcd(Integer a, Integer b)\n    if(b EQUALS 0)\n        return a\n    End if\n    return solve_gcd(b, a mod b)\nEnd function solve_gcd\n\nInteger ans\nSet ans = solve_gcd(12, 8)\nPrint ans",
    "options": [
      "4",
      "6",
      "5",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "Classic Euclidean algorithm to find GCD of 12 and 8. GCD is 4."
  },
  {
    "id": 250,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer count_set_bits(Integer n)\n    if(n <= 0)\n        return 0\n    End if\n    return (n mod 2) + count_set_bits(n / 2)\nEnd function count_set_bits\n\nInteger bits\nSet bits = count_set_bits(22)\nPrint bits",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "count_set_bits(22) extracts binary bits by taking mod 2 and integer dividing by 2. The binary representation of 22 is 10110, which has 3 set bits (1s)."
  },
  {
    "id": 251,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer r_sum(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + r_sum(x - 1)\nEnd function r_sum\n\nInteger tot, i\nSet tot = 0\nfor(i = 1 to 5)\n    Set tot = tot + r_sum(i)\nEnd for\nPrint tot",
    "options": [
      "36",
      "34",
      "35",
      "37"
    ],
    "correctAnswer": 2,
    "explanation": "Loop calls r_sum(i) for i=1..5. The values are summed together resulting in 35."
  },
  {
    "id": 252,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer rec_loop(Integer x)\n    if(x <= 0)\n        return 0\n    End if\n    Integer s, i\n    Set s = 0\n    for(i = 1 to x)\n        Set s = s + i\n    End for\n    return s + rec_loop(x - 1)\nEnd function rec_loop\n\nInteger ans\nSet ans = rec_loop(3)\nPrint ans",
    "options": [
      "9",
      "12",
      "11",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "rec_loop(3) sums 1..x for each level down to 1. Total sum = 10."
  },
  {
    "id": 253,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer power(Integer a, Integer b)\n    if(b <= 0)\n        return 1\n    End if\n    return a * power(a, b - 1)\nEnd function power\n\nInteger val\nSet val = power(4, 1)\nPrint val",
    "options": [
      "4",
      "6",
      "3",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "power(4, 1) computes 4^1 recursively: 4."
  },
  {
    "id": 254,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve_gcd(Integer a, Integer b)\n    if(b EQUALS 0)\n        return a\n    End if\n    return solve_gcd(b, a mod b)\nEnd function solve_gcd\n\nInteger ans\nSet ans = solve_gcd(20, 4)\nPrint ans",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "Classic Euclidean algorithm to find GCD of 20 and 4. GCD is 4."
  },
  {
    "id": 255,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer count_set_bits(Integer n)\n    if(n <= 0)\n        return 0\n    End if\n    return (n mod 2) + count_set_bits(n / 2)\nEnd function count_set_bits\n\nInteger bits\nSet bits = count_set_bits(17)\nPrint bits",
    "options": [
      "3",
      "4",
      "2",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "count_set_bits(17) extracts binary bits by taking mod 2 and integer dividing by 2. The binary representation of 17 is 10001, which has 2 set bits (1s)."
  },
  {
    "id": 256,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer r_sum(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + r_sum(x - 1)\nEnd function r_sum\n\nInteger tot, i\nSet tot = 0\nfor(i = 1 to 4)\n    Set tot = tot + r_sum(i)\nEnd for\nPrint tot",
    "options": [
      "19",
      "22",
      "21",
      "20"
    ],
    "correctAnswer": 3,
    "explanation": "Loop calls r_sum(i) for i=1..4. The values are summed together resulting in 20."
  },
  {
    "id": 257,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer rec_loop(Integer x)\n    if(x <= 0)\n        return 0\n    End if\n    Integer s, i\n    Set s = 0\n    for(i = 1 to x)\n        Set s = s + i\n    End for\n    return s + rec_loop(x - 1)\nEnd function rec_loop\n\nInteger ans\nSet ans = rec_loop(5)\nPrint ans",
    "options": [
      "35",
      "36",
      "37",
      "34"
    ],
    "correctAnswer": 0,
    "explanation": "rec_loop(5) sums 1..x for each level down to 1. Total sum = 35."
  },
  {
    "id": 258,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer power(Integer a, Integer b)\n    if(b <= 0)\n        return 1\n    End if\n    return a * power(a, b - 1)\nEnd function power\n\nInteger val\nSet val = power(3, 3)\nPrint val",
    "options": [
      "29",
      "27",
      "28",
      "26"
    ],
    "correctAnswer": 1,
    "explanation": "power(3, 3) computes 3^3 recursively: 27."
  },
  {
    "id": 259,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve_gcd(Integer a, Integer b)\n    if(b EQUALS 0)\n        return a\n    End if\n    return solve_gcd(b, a mod b)\nEnd function solve_gcd\n\nInteger ans\nSet ans = solve_gcd(16, 6)\nPrint ans",
    "options": [
      "4",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "Classic Euclidean algorithm to find GCD of 16 and 6. GCD is 2."
  },
  {
    "id": 260,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer count_set_bits(Integer n)\n    if(n <= 0)\n        return 0\n    End if\n    return (n mod 2) + count_set_bits(n / 2)\nEnd function count_set_bits\n\nInteger bits\nSet bits = count_set_bits(27)\nPrint bits",
    "options": [
      "3",
      "5",
      "6",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "count_set_bits(27) extracts binary bits by taking mod 2 and integer dividing by 2. The binary representation of 27 is 11011, which has 4 set bits (1s)."
  },
  {
    "id": 261,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer r_sum(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + r_sum(x - 1)\nEnd function r_sum\n\nInteger tot, i\nSet tot = 0\nfor(i = 1 to 3)\n    Set tot = tot + r_sum(i)\nEnd for\nPrint tot",
    "options": [
      "10",
      "11",
      "9",
      "12"
    ],
    "correctAnswer": 0,
    "explanation": "Loop calls r_sum(i) for i=1..3. The values are summed together resulting in 10."
  },
  {
    "id": 262,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer rec_loop(Integer x)\n    if(x <= 0)\n        return 0\n    End if\n    Integer s, i\n    Set s = 0\n    for(i = 1 to x)\n        Set s = s + i\n    End for\n    return s + rec_loop(x - 1)\nEnd function rec_loop\n\nInteger ans\nSet ans = rec_loop(4)\nPrint ans",
    "options": [
      "19",
      "20",
      "22",
      "21"
    ],
    "correctAnswer": 1,
    "explanation": "rec_loop(4) sums 1..x for each level down to 1. Total sum = 20."
  },
  {
    "id": 263,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer power(Integer a, Integer b)\n    if(b <= 0)\n        return 1\n    End if\n    return a * power(a, b - 1)\nEnd function power\n\nInteger val\nSet val = power(5, 1)\nPrint val",
    "options": [
      "4",
      "7",
      "5",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "power(5, 1) computes 5^1 recursively: 5."
  },
  {
    "id": 264,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve_gcd(Integer a, Integer b)\n    if(b EQUALS 0)\n        return a\n    End if\n    return solve_gcd(b, a mod b)\nEnd function solve_gcd\n\nInteger ans\nSet ans = solve_gcd(12, 8)\nPrint ans",
    "options": [
      "5",
      "6",
      "3",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "Classic Euclidean algorithm to find GCD of 12 and 8. GCD is 4."
  },
  {
    "id": 265,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer count_set_bits(Integer n)\n    if(n <= 0)\n        return 0\n    End if\n    return (n mod 2) + count_set_bits(n / 2)\nEnd function count_set_bits\n\nInteger bits\nSet bits = count_set_bits(22)\nPrint bits",
    "options": [
      "3",
      "5",
      "2",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "count_set_bits(22) extracts binary bits by taking mod 2 and integer dividing by 2. The binary representation of 22 is 10110, which has 3 set bits (1s)."
  },
  {
    "id": 266,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer r_sum(Integer x)\n    if(x <= 1)\n        return 1\n    End if\n    return x + r_sum(x - 1)\nEnd function r_sum\n\nInteger tot, i\nSet tot = 0\nfor(i = 1 to 5)\n    Set tot = tot + r_sum(i)\nEnd for\nPrint tot",
    "options": [
      "36",
      "35",
      "34",
      "37"
    ],
    "correctAnswer": 1,
    "explanation": "Loop calls r_sum(i) for i=1..5. The values are summed together resulting in 35."
  },
  {
    "id": 267,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer rec_loop(Integer x)\n    if(x <= 0)\n        return 0\n    End if\n    Integer s, i\n    Set s = 0\n    for(i = 1 to x)\n        Set s = s + i\n    End for\n    return s + rec_loop(x - 1)\nEnd function rec_loop\n\nInteger ans\nSet ans = rec_loop(3)\nPrint ans",
    "options": [
      "11",
      "12",
      "10",
      "9"
    ],
    "correctAnswer": 2,
    "explanation": "rec_loop(3) sums 1..x for each level down to 1. Total sum = 10."
  },
  {
    "id": 268,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer power(Integer a, Integer b)\n    if(b <= 0)\n        return 1\n    End if\n    return a * power(a, b - 1)\nEnd function power\n\nInteger val\nSet val = power(4, 2)\nPrint val",
    "options": [
      "18",
      "15",
      "17",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "power(4, 2) computes 4^2 recursively: 16."
  },
  {
    "id": 269,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve_gcd(Integer a, Integer b)\n    if(b EQUALS 0)\n        return a\n    End if\n    return solve_gcd(b, a mod b)\nEnd function solve_gcd\n\nInteger ans\nSet ans = solve_gcd(20, 2)\nPrint ans",
    "options": [
      "2",
      "4",
      "3",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "Classic Euclidean algorithm to find GCD of 20 and 2. GCD is 2."
  },
  {
    "id": 270,
    "setId": 9,
    "topic": "Loops + Recursion Mixed",
    "difficulty": "Medium",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer count_set_bits(Integer n)\n    if(n <= 0)\n        return 0\n    End if\n    return (n mod 2) + count_set_bits(n / 2)\nEnd function count_set_bits\n\nInteger bits\nSet bits = count_set_bits(17)\nPrint bits",
    "options": [
      "4",
      "2",
      "1",
      "3"
    ],
    "correctAnswer": 1,
    "explanation": "count_set_bits(17) extracts binary bits by taking mod 2 and integer dividing by 2. The binary representation of 17 is 10001, which has 2 set bits (1s)."
  },
  {
    "id": 271,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, out\nSet a = 18, b = 12, c = 6\nSet out = (a & b) + (b ^ c) - (a mod c)\nPrint out",
    "options": [
      "12",
      "8",
      "10",
      "15"
    ],
    "correctAnswer": 2,
    "explanation": "(a & b) = 0. (b ^ c) = 10. (a mod c) = 0. Result = 0 + 10 - 0 = 10."
  },
  {
    "id": 272,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, res\nSet a = 25, b = 15, c = 5\nif(a > b AND b > c)\n    Set res = (a - b) * c\nelse if(a < b OR c > 10)\n    Set res = (b - c) * 2\nelse\n    Set res = a + b + c\nEnd if\nPrint res",
    "options": [
      "48",
      "55",
      "52",
      "50"
    ],
    "correctAnswer": 3,
    "explanation": "Testing conditions: (25 > 15 AND 15 > 5) is True. Branch taken computes 50."
  },
  {
    "id": 273,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer val, x\nSet val = 0, x = 16\nwhile(x > 0)\n    Set val = val + (x ^ 8)\n    Set x = x - 5\nEnd while\nPrint val",
    "options": [
      "50",
      "48",
      "52",
      "55"
    ],
    "correctAnswer": 0,
    "explanation": "x starts at 16 and steps down by 5. Accumulating (x ^ 8) at each step yields 50."
  },
  {
    "id": 274,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve(Integer p, Integer q)\n    if(q <= 1)\n        return p\n    End if\n    return p + solve(p, q - 1)\nEnd function solve\n\nInteger ans\nSet ans = solve(8, 4)\nPrint ans",
    "options": [
      "30",
      "32",
      "37",
      "34"
    ],
    "correctAnswer": 1,
    "explanation": "solve(p, q) is a recursive multiplication of p by q. solve(8, 4) = 32."
  },
  {
    "id": 275,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, r\nSet a = 16, b = 28, c = 7\nSet r = ((a << 1) + (b >> 1)) ^ c\nPrint r",
    "options": [
      "46",
      "43",
      "41",
      "39"
    ],
    "correctAnswer": 2,
    "explanation": "a << 1 = 32. b >> 1 = 14. Sum = 46. XOR with c (7) gives 41."
  },
  {
    "id": 276,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, out\nSet a = 21, b = 14, c = 7\nSet out = (a & b) + (b ^ c) - (a mod c)\nPrint out",
    "options": [
      "11",
      "15",
      "18",
      "13"
    ],
    "correctAnswer": 3,
    "explanation": "(a & b) = 4. (b ^ c) = 9. (a mod c) = 0. Result = 4 + 9 - 0 = 13."
  },
  {
    "id": 277,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, res\nSet a = 35, b = 25, c = 5\nif(a > b AND b > c)\n    Set res = (a - b) * c\nelse if(a < b OR c > 10)\n    Set res = (b - c) * 2\nelse\n    Set res = a + b + c\nEnd if\nPrint res",
    "options": [
      "50",
      "48",
      "52",
      "55"
    ],
    "correctAnswer": 0,
    "explanation": "Testing conditions: (35 > 25 AND 25 > 5) is True. Branch taken computes 50."
  },
  {
    "id": 278,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer val, x\nSet val = 0, x = 24\nwhile(x > 0)\n    Set val = val + (x ^ 8)\n    Set x = x - 4\nEnd while\nPrint val",
    "options": [
      "86",
      "84",
      "89",
      "82"
    ],
    "correctAnswer": 1,
    "explanation": "x starts at 24 and steps down by 4. Accumulating (x ^ 8) at each step yields 84."
  },
  {
    "id": 279,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve(Integer p, Integer q)\n    if(q <= 1)\n        return p\n    End if\n    return p + solve(p, q - 1)\nEnd function solve\n\nInteger ans\nSet ans = solve(6, 3)\nPrint ans",
    "options": [
      "16",
      "23",
      "18",
      "20"
    ],
    "correctAnswer": 2,
    "explanation": "solve(p, q) is a recursive multiplication of p by q. solve(6, 3) = 18."
  },
  {
    "id": 280,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, r\nSet a = 27, b = 18, c = 9\nSet r = ((a << 1) + (b >> 1)) ^ c\nPrint r",
    "options": [
      "59",
      "52",
      "56",
      "54"
    ],
    "correctAnswer": 3,
    "explanation": "a << 1 = 54. b >> 1 = 9. Sum = 63. XOR with c (9) gives 54."
  },
  {
    "id": 281,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, out\nSet a = 24, b = 36, c = 12\nSet out = (a & b) + (b ^ c) - (a mod c)\nPrint out",
    "options": [
      "40",
      "45",
      "38",
      "42"
    ],
    "correctAnswer": 0,
    "explanation": "(a & b) = 0. (b ^ c) = 40. (a mod c) = 0. Result = 0 + 40 - 0 = 40."
  },
  {
    "id": 282,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, res\nSet a = 50, b = 30, c = 10\nif(a > b AND b > c)\n    Set res = (a - b) * c\nelse if(a < b OR c > 10)\n    Set res = (b - c) * 2\nelse\n    Set res = a + b + c\nEnd if\nPrint res",
    "options": [
      "202",
      "200",
      "198",
      "205"
    ],
    "correctAnswer": 1,
    "explanation": "Testing conditions: (50 > 30 AND 30 > 10) is True. Branch taken computes 200."
  },
  {
    "id": 283,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer val, x\nSet val = 0, x = 22\nwhile(x > 0)\n    Set val = val + (x ^ 5)\n    Set x = x - 3\nEnd while\nPrint val",
    "options": [
      "94",
      "90",
      "92",
      "97"
    ],
    "correctAnswer": 2,
    "explanation": "x starts at 22 and steps down by 3. Accumulating (x ^ 5) at each step yields 92."
  },
  {
    "id": 284,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve(Integer p, Integer q)\n    if(q <= 1)\n        return p\n    End if\n    return p + solve(p, q - 1)\nEnd function solve\n\nInteger ans\nSet ans = solve(5, 4)\nPrint ans",
    "options": [
      "18",
      "25",
      "22",
      "20"
    ],
    "correctAnswer": 3,
    "explanation": "solve(p, q) is a recursive multiplication of p by q. solve(5, 4) = 20."
  },
  {
    "id": 285,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, r\nSet a = 36, b = 24, c = 6\nSet r = ((a << 1) + (b >> 1)) ^ c\nPrint r",
    "options": [
      "82",
      "80",
      "87",
      "84"
    ],
    "correctAnswer": 0,
    "explanation": "a << 1 = 72. b >> 1 = 12. Sum = 84. XOR with c (6) gives 82."
  },
  {
    "id": 286,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, out\nSet a = 42, b = 28, c = 14\nSet out = (a & b) + (b ^ c) - (a mod c)\nPrint out",
    "options": [
      "24",
      "26",
      "28",
      "31"
    ],
    "correctAnswer": 1,
    "explanation": "(a & b) = 8. (b ^ c) = 18. (a mod c) = 0. Result = 8 + 18 - 0 = 26."
  },
  {
    "id": 287,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, res\nSet a = 54, b = 18, c = 9\nif(a > b AND b > c)\n    Set res = (a - b) * c\nelse if(a < b OR c > 10)\n    Set res = (b - c) * 2\nelse\n    Set res = a + b + c\nEnd if\nPrint res",
    "options": [
      "326",
      "329",
      "324",
      "322"
    ],
    "correctAnswer": 2,
    "explanation": "Testing conditions: (54 > 18 AND 18 > 9) is True. Branch taken computes 324."
  },
  {
    "id": 288,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer val, x\nSet val = 0, x = 30\nwhile(x > 0)\n    Set val = val + (x ^ 20)\n    Set x = x - 10\nEnd while\nPrint val",
    "options": [
      "45",
      "42",
      "38",
      "40"
    ],
    "correctAnswer": 3,
    "explanation": "x starts at 30 and steps down by 10. Accumulating (x ^ 20) at each step yields 40."
  },
  {
    "id": 289,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve(Integer p, Integer q)\n    if(q <= 1)\n        return p\n    End if\n    return p + solve(p, q - 1)\nEnd function solve\n\nInteger ans\nSet ans = solve(6, 4)\nPrint ans",
    "options": [
      "24",
      "22",
      "26",
      "29"
    ],
    "correctAnswer": 0,
    "explanation": "solve(p, q) is a recursive multiplication of p by q. solve(6, 4) = 24."
  },
  {
    "id": 290,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, r\nSet a = 44, b = 22, c = 11\nSet r = ((a << 1) + (b >> 1)) ^ c\nPrint r",
    "options": [
      "102",
      "104",
      "109",
      "106"
    ],
    "correctAnswer": 1,
    "explanation": "a << 1 = 88. b >> 1 = 11. Sum = 99. XOR with c (11) gives 104."
  },
  {
    "id": 291,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, out\nSet a = 15, b = 45, c = 30\nSet out = (a & b) + (b ^ c) - (a mod c)\nPrint out",
    "options": [
      "51",
      "54",
      "49",
      "47"
    ],
    "correctAnswer": 2,
    "explanation": "(a & b) = 13. (b ^ c) = 51. (a mod c) = 15. Result = 13 + 51 - 15 = 49."
  },
  {
    "id": 292,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, res\nSet a = 26, b = 39, c = 13\nif(a > b AND b > c)\n    Set res = (a - b) * c\nelse if(a < b OR c > 10)\n    Set res = (b - c) * 2\nelse\n    Set res = a + b + c\nEnd if\nPrint res",
    "options": [
      "54",
      "57",
      "50",
      "52"
    ],
    "correctAnswer": 3,
    "explanation": "Testing conditions: (26 > 39 AND 39 > 13) is False. Branch taken computes 52."
  },
  {
    "id": 293,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer val, x\nSet val = 0, x = 19\nwhile(x > 0)\n    Set val = val + (x ^ 19)\n    Set x = x - 4\nEnd while\nPrint val",
    "options": [
      "88",
      "93",
      "86",
      "90"
    ],
    "correctAnswer": 0,
    "explanation": "x starts at 19 and steps down by 4. Accumulating (x ^ 19) at each step yields 88."
  },
  {
    "id": 294,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve(Integer p, Integer q)\n    if(q <= 1)\n        return p\n    End if\n    return p + solve(p, q - 1)\nEnd function solve\n\nInteger ans\nSet ans = solve(10, 5)\nPrint ans",
    "options": [
      "52",
      "50",
      "55",
      "48"
    ],
    "correctAnswer": 1,
    "explanation": "solve(p, q) is a recursive multiplication of p by q. solve(10, 5) = 50."
  },
  {
    "id": 295,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, r\nSet a = 64, b = 32, c = 16\nSet r = ((a << 1) + (b >> 1)) ^ c\nPrint r",
    "options": [
      "126",
      "133",
      "128",
      "130"
    ],
    "correctAnswer": 2,
    "explanation": "a << 1 = 128. b >> 1 = 16. Sum = 144. XOR with c (16) gives 128."
  },
  {
    "id": 296,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, out\nSet a = 70, b = 35, c = 7\nSet out = (a & b) + (b ^ c) - (a mod c)\nPrint out",
    "options": [
      "43",
      "36",
      "40",
      "38"
    ],
    "correctAnswer": 3,
    "explanation": "(a & b) = 2. (b ^ c) = 36. (a mod c) = 0. Result = 2 + 36 - 0 = 38."
  },
  {
    "id": 297,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, res\nSet a = 80, b = 40, c = 10\nif(a > b AND b > c)\n    Set res = (a - b) * c\nelse if(a < b OR c > 10)\n    Set res = (b - c) * 2\nelse\n    Set res = a + b + c\nEnd if\nPrint res",
    "options": [
      "400",
      "398",
      "405",
      "402"
    ],
    "correctAnswer": 0,
    "explanation": "Testing conditions: (80 > 40 AND 40 > 10) is True. Branch taken computes 400."
  },
  {
    "id": 298,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer val, x\nSet val = 0, x = 37\nwhile(x > 0)\n    Set val = val + (x ^ 5)\n    Set x = x - 6\nEnd while\nPrint val",
    "options": [
      "120",
      "122",
      "127",
      "124"
    ],
    "correctAnswer": 1,
    "explanation": "x starts at 37 and steps down by 6. Accumulating (x ^ 5) at each step yields 122."
  },
  {
    "id": 299,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer solve(Integer p, Integer q)\n    if(q <= 1)\n        return p\n    End if\n    return p + solve(p, q - 1)\nEnd function solve\n\nInteger ans\nSet ans = solve(18, 5)\nPrint ans",
    "options": [
      "95",
      "92",
      "90",
      "88"
    ],
    "correctAnswer": 2,
    "explanation": "solve(p, q) is a recursive multiplication of p by q. solve(18, 5) = 90."
  },
  {
    "id": 300,
    "setId": 10,
    "topic": "Infosys SE Grand Challenge",
    "difficulty": "Hard",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c, r\nSet a = 100, b = 50, c = 25\nSet r = ((a << 1) + (b >> 1)) ^ c\nPrint r",
    "options": [
      "246",
      "250",
      "253",
      "248"
    ],
    "correctAnswer": 3,
    "explanation": "a << 1 = 200. b >> 1 = 25. Sum = 225. XOR with c (25) gives 248."
  }
];
