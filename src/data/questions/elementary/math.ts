import { Question } from '../../types';

// 초등학교 수학 문제 (5지선다 + 난이도 포함)
export const questions: Question[] = [
  {
    id: 'elem_math_1',
    question: '25 + 17 = ?',
    options: ['40', '41', '42', '43', '44'],
    answer: '42',
    explanation: '25 + 17 = 42입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '덧셈을 정확히 계산했어요!'
  },
  {
    id: 'elem_math_2',
    question: '8 × 7 = ?',
    options: ['54', '55', '56', '57', '58'],
    answer: '56',
    explanation: '8 × 7 = 56입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '구구단을 잘 외웠어요!'
  },
  {
    id: 'elem_math_3',
    question: '시계가 3시 30분을 가리킬 때, 시침과 분침이 이루는 각도는?',
    options: ['60°', '75°', '90°', '105°', '120°'],
    answer: '75°',
    explanation: '3시 30분일 때 시침과 분침이 이루는 각도는 75°입니다.',
    grade: 'elementary',
    difficulty: 'hard',
    encouragement: '시계 문제를 잘 풀었어요!'
  },
  {
    id: 'elem_math_4',
    question: '정사각형의 둘레가 20cm일 때, 한 변의 길이는?',
    options: ['4cm', '5cm', '6cm', '7cm', '8cm'],
    answer: '5cm',
    explanation: '정사각형의 둘레는 한 변의 길이 × 4이므로, 20 ÷ 4 = 5cm입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '도형의 성질을 잘 이해했어요!'
  },
  {
    id: 'elem_math_5',
    question: '3/4 + 1/4 = ?',
    options: ['1/2', '3/4', '4/8', '1', '5/4'],
    answer: '1',
    explanation: '3/4 + 1/4 = 4/4 = 1입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '분수의 덧셈을 정확히 했어요!'
  },
  {
    id: 'elem_math_6',
    question: '72 ÷ 8 = ?',
    options: ['7', '8', '9', '10', '11'],
    answer: '9',
    explanation: '72 ÷ 8 = 9입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '나눗셈을 정확히 계산했어요!'
  },
  {
    id: 'elem_math_7',
    question: '다음 중 가장 큰 수는?',
    options: ['0.7', '0.65', '0.8', '0.75', '0.6'],
    answer: '0.8',
    explanation: '소수를 비교할 때 0.8이 가장 큽니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '소수의 크기를 잘 비교했어요!'
  },
  {
    id: 'elem_math_8',
    question: '원의 지름이 10cm일 때, 반지름은?',
    options: ['3cm', '4cm', '5cm', '6cm', '7cm'],
    answer: '5cm',
    explanation: '반지름은 지름의 절반이므로 10 ÷ 2 = 5cm입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '원의 성질을 잘 알고 있어요!'
  },
  {
    id: 'elem_math_9',
    question: '1000에서 347을 뺀 값은?',
    options: ['653', '663', '673', '683', '693'],
    answer: '653',
    explanation: '1000 - 347 = 653입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '큰 수의 뺄셈을 정확히 했어요!'
  },
  {//11월29일 중간10 초급10 문제 추가
    id: 'elem_math_10',
    question: '삼각형의 내각의 합은?',
    options: ['90°', '120°', '150°', '180°', '360°'],
    answer: '180°',
    explanation: '모든 삼각형의 내각의 합은 180°입니다.',
    grade: 'elementary',
    difficulty: 'hard',
    encouragement: '도형의 기본 성질을 잘 알고 있어요!'
  }
   {
    id: 'elem_math_11',
    question: '2×40=?',
    options: ['400','800','8000','100','80'],
    answer: '',
    explanation: '20×40＝800',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '곱샘의 기본을 잘 이해하고 있군요!'
  },
  
  {
    id: 'elem_math_12',
    question: '2×40=?',
    options: ['400','800','8000','100','80'],
    answer: '800',
    explanation: '20×40＝800',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '곱샘의 기본을 잘 이해하고 있군요!'
  },
   {
    id: 'elem_math_13',
    question: '몫의 크기를 비교하여 ? 안에 ＞, ＝, ＜를 알맞게 써넣으세요. 48÷4 ? 78÷6 ',
    options: ['<','>','=','+','-'],
    answer: '<',
    explanation: '48÷4＝12, 78÷6＝13 ⇨ 12＜13',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '나눗셈과 크기 비교를 잘 이해하고 있군요!'
  },
  {
    id: 'elem_math_14',
    question: '가장 큰 수와 가장 작은 수의 곱을 구해보세요.  82  63  47 ',
    options: ['5656','4345','3423','2342','3854'],
    answer: '3854',
    explanation: '2＞63＞47이므로 가장 큰 수는 82, 가장 작은 수는 47입니다.⇨ 82×47＝3854',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '크기비교를 잘 이해 하고 있군요!'
  },
  {
    id: 'elem_math_15',
    question: '가장 작은 원은 어느 것일까요?',
    options: ['1.지름이 9cm인 원','2.지름이 16cm인 원','3.지름이 20cm인 원','4.반지름이 5cm인 원','5.반지름이 11cm인 원'],
    answer: '1.지름이 9cm인 원',
    explanation: '1.(지름)＝9cm, 2.(지름)＝16cm 3.(지름)＝20cm, 4.(지름)＝5×2＝10(cm) 5.(지름)＝11×2＝22(cm)따라서 가장 작은 원은 1.입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '원의 지름에 대해 잘 이해하고 있군요!'
  },
   {
    id: 'elem_math_16',
    question: '동화책 77쪽을 일주일 동안 똑같이 나누어 읽으려고 합니다. 하루에 몇 쪽씩 읽어야 하는지 답을 구해 보세요.',
    options: ['11','22','77','34','34'],
    answer: '11',
    explanation: '(하루에 읽어야 하는 동화책의 쪽수)＝(전체 동화책의 쪽수)÷(읽는 날수)＝77÷7＝11(쪽).',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '나눗셈 식을 이해하고 있군요!'
  },
  {
    id: 'elem_math_17',
    question: '어느 공장에서는 장난감 자동차를 하루에 216개씩 만듭니다. 이 공장에서 4일 동안 만드는 장난감 자동차는 모두 몇 개인지 답을 구해 보세요.',
    options: ['555','234','864','344','124'],
    answer: '864',
    explanation: '(4일 동안 만드는 장난감 자동차 수)＝(하루에 만드는 장난감 자동차 수)×4＝216×4＝864(개)',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '곱셈 식에 대해 잘 이해하고 있군요!'
  },
  {
    id: 'elem_math_18',
    question: '형주가 일정한 빠르기로 모빌 8개를 만드는 데 1시간 36분이 걸렸습니다. 모빌 한 개를 만드는 데 몇 분이 걸린 셈일까요?',
    options: ['12','34','24','44','14'],
    answer: '12',
    explanation: '1시간 36분＝60분＋36분＝96분(모빌 한 개를 만드는 데 걸린 시간)＝(걸린 전체 시간)÷(만든 모빌 수)＝96÷8＝12(분)',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '문제를 꼼꼼히 잘 읽고 풀었군요!'
  },
  {
    id: 'elem_math_19',
    question: '어떤 수에 28을 곱해야 할 것을 잘못하여 더했더니 62가 되었습니다. 바르게 계산하면 얼마인지 답을 구해 보세요.',
    options: ['834','934','952','424','314'],
    answer: '952',
    explanation: '어떤 수를 A라 하면 A＋28＝62 ⇨ □＝62－28＝34입니다.따라서 바르게 계산하면 34×28＝952입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '문제를 잘 이해하고 풀었군요!'
  },
  {
    id: 'elem_math_20',
    question: '선물 한 개를 포장하는 데 색 테이프가 76cm 필요합니다. 선물 25개를 포장하려면 색 테이프는 모두 몇 cm 필요한지 답을 구해 보세요.',
    options: ['1834','1900','900','1700','1000'],
    answer: '1900',
    explanation: '76×25＝1900, 1900cm ',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '곱셈식을 잘 이해하고 있군요'
  },
    {
    id: 'elem_math_21',
    question: '수를 2가지 방법으로 읽은 것중 알맞은 것은?',
    options: ['2=둘,삼','3=셋,둘','하나=2.둘','5=다섯,오','2=둘'],
    answer: '5=다섯,오',
    explanation: '5=다섯,오',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '수를 잘 읽을주 아는군요!'
  },
  
  {
    id: 'elem_math_22',
    question: '아무것도 없는 것을 A 라고 쓰고 B 이라고 읽습니다.',
    options: ['A=1, B=일','A=3, B=삼','A=영, B=0','A=0, B=0','A=0, B=영'],
    answer: 'A=0, B=영',
    explanation: '아무것도 없는 것을 0이라 쓰고 영이라고 읽습니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '수를 잘 읽을 주 아는군요!'
  },
   {
    id: 'elem_math_23',
    question: '정수와 연주는 1부터 9까지의 수 중에서 한 사람이 수를 말하면 다른 사람이 그 이후 수를 순서대로 대답하는 놀이를 하고 있습니다. 정수가 7을 말한다면 연주가 대답해야 하는 수는 무엇인지 차례대로 쓰세요. ',
    options: ['3,5','2,1','8,9','0,0','7,8'],
    answer: '8,9',
    explanation: '7부터 9까지의 수를 순서대로 쓰면 7, 8, 9입니다. 따라서 연주가 대답해야 하는 수는 8, 9입니다.',
    grade: 'elementary',
    difficulty: 'Esay',
    encouragement: '문제를 꼼꼼히 읽고 풀었군요!'
  },
  {
    id: 'elem_math_24',
    question: '올해 승연이의 나이는 8살입니다. 작년에 승연이의 나이는 몇 살이었을까요? ',
    options: ['4','5','6','7','8'],
    answer: '7',
    explanation: '8보다 1 작은 수는 7이므로 작년에 승연이는 7살이었습니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '뺄셈을 잘 이해하고 있군요!'
  },
  {
    id: 'elem_math_25',
    question: '사탕을 태준이는 3개, 경수는 6개 가지고 있습니다. 사탕을 더 많이 가지고 있는 사람은 누구인지 답을 구하세요.',
    options: ['000','태준','000','경수','000'],
    answer: '경수',
    explanation: ' 3과 6을 비교하면 6이 3보다 큽니다. 따라서 사탕을 더 많이 가지고 있는 사람은 경수입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '원의 지름에 대해 잘 이해하고 있군요!'
  },
   {
    id: 'elem_math_26',
    question: '덧셈식을 읽어 보세요  3+6=9',
    options: ['3더하기4는7','4 더하기 5는9','3와6의 합은 9입니다','삼 더하기 오는 팔','삼 빼기 육은 삼'],
    answer: '3와6의 합은 9입니다',
    explanation: '4 더하기 5는 9와 같습니다 , 4와 5의 합은 9입니다. ',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '덧셈식을 바르게 읽을 수 있군요!'
  },
  {
    id: 'elem_math_27',
    question: 'A안에 들어갈 기호를 써 넣으세요. 7 A 4 =3',
    options: ['+','-','곱하기','나누기','0'],
    answer: '-',
    explanation: '7 -4 = 3',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '연산에 대해 잘 이해 하고 있군요!'
  },
  {
    id: 'elem_math_28',
    question: '	7를 두 수로 가르기 한 것입니다. 가르기를 잘못한 것은 어느 것일까요?',
    options: ['1 과 6 ','2 와 5',' 3 와 4','4 와 4','5 와 2'],
    answer: '4 와 4',
    explanation: '7은 4 와 3 로 가르기 할 수 있습니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '문제를 꼼꼼히 잘 읽고 풀었군요!'
  },
  {
    id: 'elem_math_29',
    question: '만두가 7개 있습니다. 형이 5개를 먹고 나머지는 동생이 먹었습니다. 동생이 먹은 만두는 몇 개일까요?',
    options: ['2개','3개','4개','1개','5개'],
    answer: '2개',
    explanation: '(동생이 먹은 만두의 수)＝(처음에 있던 만두의 수)－(형이 먹은 만두의 수)＝7－5＝2(개)',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '문제를 잘 이해하고 풀었군요!'
  },
  {
    id: 'elem_math_30',
    question: '뮤지컬은 노래, 춤, 연기가 어우러진 공연을 말합니다. 설희네 반에서 뮤지컬을 하려고 남자 어린이 2명과 여자 어린이 4명이 모였습니다. 뮤지컬을 하려고 모인 어린이는 모두 몇 명일까요?',
    options: ['3명','5명','6명','8명','10명'],
    answer: '6명',
    explanation: '(남자 어린이 수)＋(여자 어린이 수)＝2＋4＝6(명)',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '문제를 잘 이해하고 풀었군요!'
  },
];
