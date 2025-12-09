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
  {
    id: 'elem_math_10',
    question: '삼각형의 내각의 합은?',
    options: ['90°', '120°', '150°', '180°', '360°'],
    answer: '180°',
    explanation: '모든 삼각형의 내각의 합은 180°입니다.',
    grade: 'elementary',
    difficulty: 'hard',
    encouragement: '도형의 기본 성질을 잘 알고 있어요!'
  },
        {
    id: 'elem_math_11',
    question: '703218에서 숫자 3이 나타내는 값은 얼마일까요?',
    options: ['3백', '3천', '3만', '3십만'],
    answer: '3천',
    explanation: '숫자 3은 천의 자리에 있으므로, 그 값은 3000(3천)입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '자릿값을 잘 이해하고 있군요!'
  },
  {
    id: 'elem_math_12',
    question: '5283과 4591을 더하면 얼마일까요?',
    options: ['9774', '9874', '9884', '9974'],
    answer: '9874',
    explanation: '일의 자리부터 차례로 더하고 받아올림을 적용하여 계산하면 9874가 됩니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '덧셈의 기본기를 갖추고 있군요!'
  },
  {
    id: 'elem_math_13',
    question: '8000에서 3456을 빼면 얼마일까요?',
    options: ['4544', '4554', '4644', '4654'],
    answer: '4544',
    explanation: '받아내림이 있는 뺄셈을 정확하게 계산하면 4544입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '복잡한 받아내림도 문제없군요!'
  },
  {
    id: 'elem_math_14',
    question: '사탕이 한 상자에 15개씩 들어 있습니다. 6상자에 들어있는 사탕은 모두 몇 개일까요?',
    options: ['70개', '80개', '90개', '100개'],
    answer: '90개',
    explanation: '사탕 한 상자의 개수와 상자의 수를 곱하여(15 x 6) 90개를 구합니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '곱셈을 활용한 문제도 척척 푸는군요!'
  },
  {
    id: 'elem_math_15',
    question: '공책 48권을 8명에게 똑같이 나누어 주려면 한 명당 몇 권을 주어야 할까요?',
    options: ['5권', '6권', '7권', '8권'],
    answer: '6권',
    explanation: '나눗셈 48 / 8을 계산하면 몫은 6이 됩니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '나눗셈도 쉽게 해냈어요!'
  },
  {
    id: 'elem_math_16',
    question: '피자 한 판을 똑같이 8조각으로 나누었습니다. 그 중 3조각은 전체의 얼마를 나타낼까요?',
    options: ['1/8', '3/8', '5/8', '8/3'],
    answer: '3/8',
    explanation: '전체를 8로 나눈 것 중 3을 나타내는 분수는 3/8입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '분수 개념을 잘 이해하고 있군요!'
  },
  {
    id: 'elem_math_17',
    question: '한 변의 길이가 7cm인 정사각형의 둘레는 몇 cm일까요?',
    options: ['14cm', '21cm', '28cm', '49cm'],
    answer: '28cm',
    explanation: '정사각형의 둘레는 한 변의 길이에 4를 곱하여(7 x 4) 28cm를 구합니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '도형의 둘레도 완벽하게 계산했어요!'
  },
  {
    id: 'elem_math_18',
    question: '오전 10시 20분에 시작한 영화가 1시간 40분 후에 끝났다면, 영화가 끝난 시각은 몇 시 몇 분일까요?',
    options: ['오전 11시', '오전 11시 40분', '낮 12시', '낮 12시 20분'],
    answer: '낮 12시',
    explanation: '10시 20분 + 1시간 40분 = 11시 60분이며, 60분은 1시간이므로 낮 12시가 됩니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '시간 계산 실력이 아주 뛰어납니다!'
  },
  {
    id: 'elem_math_19',
    question: '다음 중 [네모] 안에 들어갈 수 없는 수는 무엇일까요? 3500 < [네모] < 3505',
    options: ['3501', '3503', '3505', '3504'],
    answer: '3505',
    explanation: '[네모]는 3505보다 작아야 하므로 3505는 들어갈 수 없습니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '수의 크기 비교도 정확하게 하네요!'
  },
  {
    id: 'elem_math_20',
    question: '한 개에 500원인 지우개를 3개 사고, 1000원짜리 자 1개를 샀습니다. 총 얼마를 내야 할까요?',
    options: ['1500원', '2000원', '2500원', '3000원'],
    answer: '2500원',
    explanation: '(500 x 3) + 1000 = 1500 + 1000 = 2500원입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '복합적인 계산도 쉽게 해냈어요!'
  },
  {
    id: 'elem_math_21',
    question: '1시간 30분은 총 몇 분일까요?',
    options: ['90분', '130분', '70분', '100분'],
    answer: '90분',
    explanation: '1시간은 60분이므로, 60분 + 30분 = 90분입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '시간 단위를 잘 알고 있군요!'
  },
  {
    id: 'elem_math_22',
    question: '다음 중 1보다 큰 분수는 무엇일까요?',
    options: ['3/4', '5/7', '8/8', '9/5'],
    answer: '9/5',
    explanation: '분자가 분모보다 클 때 1보다 큰 분수(가분수)입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '분수의 크기 비교를 정확하게 합니다!'
  },
  {
    id: 'elem_math_23',
    question: '한 변의 길이가 8cm인 정사각형의 넓이는 몇 제곱센티미터일까요?',
    options: ['16 제곱센티미터', '32 제곱센티미터', '64 제곱센티미터', '40 제곱센티미터'],
    answer: '64 제곱센티미터',
    explanation: '정사각형의 넓이는 한 변의 길이 x 한 변의 길이(8 x 8)로 구하며, 64 제곱센티미터입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '넓이 구하는 공식도 완벽해요!'
  },
  {
    id: 'elem_math_24',
    question: '500원짜리 동전 7개의 금액은 총 얼마일까요?',
    options: ['3000원', '3500원', '4000원', '4500원'],
    answer: '3500원',
    explanation: '500 x 7 = 3500원입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '돈 계산도 빠르게 하네요!'
  },
  {
    id: 'elem_math_25',
    question: '10에서 0.3을 뺀 값은 얼마일까요?',
    options: ['9.7', '9.3', '10.3', '8.7'],
    answer: '9.7',
    explanation: '10.0에서 0.3을 빼면 9.7입니다. (소수의 뺄셈)',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '소수의 계산도 문제없어요!'
  },
  {
    id: 'elem_math_26',
    question: '가로가 5m, 세로가 4m인 직사각형 모양 밭의 둘레는 몇 m일까요?',
    options: ['9m', '18m', '20m', '16m'],
    answer: '18m',
    explanation: '둘레는 (가로 + 세로) x 2 이므로, (5 + 4) x 2 = 18m입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '직사각형 둘레를 정확히 구했습니다!'
  },
  {
    id: 'elem_math_27',
    question: '어떤 수에 5를 곱했더니 45가 되었습니다. 어떤 수는 무엇일까요?',
    options: ['7', '8', '9', '10'],
    answer: '9',
    explanation: '45를 5로 나누면 9입니다. (45 / 5 = 9)',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '곱셈과 나눗셈 관계를 잘 압니다!'
  },
  {
    id: 'elem_math_28',
    question: '다음 수의 규칙을 찾아 빈칸에 들어갈 숫자는? 100, 95, 90, __, 80',
    options: ['85', '75', '95', '90'],
    answer: '85',
    explanation: '5씩 줄어드는 규칙이므로, 90에서 5를 빼면 85입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '규칙 찾기에도 능숙하군요!'
  },
  {
    id: 'elem_math_29',
    question: '3000m는 몇 km일까요?',
    options: ['0.3 km', '3 km', '30 km', '300 km'],
    answer: '3 km',
    explanation: '1 km는 1000m이므로, 3000m는 3 km입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '단위 변환도 완벽해요!'
  },
  {
    id: 'elem_math_30',
    question: '63을 9로 나누었을 때 몫은 얼마일까요?',
    options: ['6', '7', '8', '9'],
    answer: '7',
    explanation: '9 x 7 = 63이므로, 몫은 7입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '구구단을 잘 외우고 있군요!'
  },
  {
    id: 'elem_math_31',
    question: '분모가 5이고 분자가 2인 분수를 소수로 나타내면 얼마일까요?',
    options: ['0.2', '0.4', '0.5', '2.5'],
    answer: '0.4',
    explanation: '분수 2/5는 2 / 5 = 0.4입니다.',
    grade: 'elementary',
    difficulty: 'Hard',
    encouragement: '분수와 소수의 관계를 잘 이해하고 있군요!'
  },
  {
    id: 'elem_math_32',
    question: '오늘 오전 11시 45분부터 30분 뒤의 시각은 몇 시 몇 분일까요?',
    options: ['오전 12시 15분', '오전 11시 15분', '낮 12시 15분', '오후 12시 15분'],
    answer: '낮 12시 15분',
    explanation: '45분 + 30분 = 75분 (1시간 15분)이므로, 11시 + 1시간 15분 = 12시 15분입니다. 오전에서 낮으로 바뀝니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '정확한 시간 계산 능력이 돋보입니다!'
  },
  {
    id: 'elem_math_33',
    question: '8000 + 400 + 70 + 3이 나타내는 수는 무엇일까요?',
    options: ['8473', '84073', '8743', '84703'],
    answer: '8473',
    explanation: '각 자릿값을 합치면 8473입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '자릿값을 이용한 덧셈을 잘하는군요!'
  },
  {
    id: 'elem_math_34',
    question: '500g짜리 과자 3봉지의 무게는 총 몇 kg일까요?',
    options: ['1 kg', '1.5 kg', '2 kg', '1500 kg'],
    answer: '1.5 kg',
    explanation: '총 무게는 500 x 3 = 1500g입니다. 1500g은 1.5 kg입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '무게 단위 변환도 쉽게 해냅니다!'
  },
  {
    id: 'elem_math_35',
    question: '다음 중 가장 큰 수는 무엇일까요? 0.7, 1/2, 0.9, 1',
    options: ['0.7', '1/2', '0.9', '1'],
    answer: '1',
    explanation: '1/2 = 0.5 이므로, 0.7, 0.5, 0.9, 1 중에서 1이 가장 큽니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '소수와 분수의 크기 비교를 정확하게 합니다!'
  },
  {
    id: 'elem_math_36',
    question: '한 봉지에 12개씩 들어있는 초콜릿 7봉지는 총 몇 개일까요?',
    options: ['74개', '84개', '94개', '104개'],
    answer: '84개',
    explanation: '12 x 7 = 84개입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '두 자리 수 곱셈도 훌륭합니다!'
  },
  {
    id: 'elem_math_37',
    question: '정삼각형의 한 변의 길이가 10cm일 때, 둘레는 몇 cm일까요?',
    options: ['20cm', '30cm', '40cm', '50cm'],
    answer: '30cm',
    explanation: '정삼각형은 세 변의 길이가 같으므로, 10 x 3 = 30cm입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '정삼각형의 특징을 잘 알고 있군요!'
  },
  {
    id: 'elem_math_38',
    question: '다음 규칙에서 빈칸에 알맞은 숫자는? 2, 4, 8, 16, __',
    options: ['20', '24', '30', '32'],
    answer: '32',
    explanation: '앞의 수에 2를 곱하는 규칙(2 x 2 = 4, 4 x 2 = 8, 16 x 2 = 32)입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '규칙을 찾아내는데 탁월하네요!'
  },
  {
    id: 'elem_math_39',
    question: '어떤 수를 4로 나누었을 때 몫이 8이고 나머지가 2입니다. 어떤 수는 무엇일까요?',
    options: ['32', '34', '36', '40'],
    answer: '34',
    explanation: '(나누는 수 x 몫) + 나머지 이므로, (4 x 8) + 2 = 32 + 2 = 34입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '나눗셈의 검산식을 잘 활용했습니다!'
  },
  {
    id: 'elem_math_40',
    question: '7000원짜리 책을 4500원에 샀다면, 할인받은 금액은 얼마일까요?',
    options: ['2000원', '2500원', '3000원', '3500원'],
    answer: '2500원',
    explanation: '7000 - 4500 = 2500원입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '생활 속 뺄셈도 완벽하게 해냅니다!'
  },
  {
    id: 'elem_math_41',
    question: '2.5 + 3.7의 값은 얼마일까요?',
    options: ['5.2', '6.2', '5.12', '6.3'],
    answer: '6.2',
    explanation: '소수점을 맞춰서 더하고 받아올림을 적용하면 6.2입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '소수의 덧셈을 정확하게 해냈습니다!'
  },
  {
    id: 'elem_math_42',
    question: '5.3 - 1.8의 값은 얼마일까요?',
    options: ['4.5', '3.5', '3.7', '4.7'],
    answer: '3.5',
    explanation: '소수점 아래에서 받아내림을 하여 계산하면 3.5입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '소수의 뺄셈도 정확하게 합니다!'
  },
  {
    id: 'elem_math_43',
    question: '현재 시각이 1시간 50분일 때, 2시간 40분 뒤는 몇 시간 몇 분일까요?',
    options: ['3시간 30분', '4시간 10분', '4시간 30분', '5시간 10분'],
    answer: '4시간 30분',
    explanation: '시간은 시간끼리(1+2=3), 분은 분끼리(50+40=90) 더합니다. 90분은 1시간 30분이므로, 총 4시간 30분입니다.',
    grade: 'elementary',
    difficulty: 'Hard',
    encouragement: '받아올림이 있는 시간 계산도 완벽하네요!'
  },
  {
    id: 'elem_math_44',
    question: '4km 500m는 총 몇 m일까요?',
    options: ['4050m', '450m', '4500m', '4005m'],
    answer: '4500m',
    explanation: '1km는 1000m이므로, 4km는 4000m입니다. 따라서 4000m + 500m = 4500m입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '길이 단위 변환을 잘 알고 있습니다!'
  },
  {
    id: 'elem_math_45',
    question: '2000g은 몇 kg일까요?',
    options: ['20 kg', '200 kg', '2 kg', '0.2 kg'],
    answer: '2 kg',
    explanation: '1kg은 1000g이므로, 2000g은 2kg입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '무게 단위도 확실하게 알고 있군요!'
  },
  {
    id: 'elem_math_46',
    question: '가로 6cm, 세로 3cm인 직사각형의 넓이는 몇 제곱센티미터일까요?',
    options: ['9 제곱센티미터', '18 제곱센티미터', '24 제곱센티미터', '36 제곱센티미터'],
    answer: '18 제곱센티미터',
    explanation: '직사각형의 넓이는 가로 x 세로 (6 x 3) 이므로 18 제곱센티미터입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '직사각형의 넓이 구하는 공식을 잘 활용했어요!'
  },
  {
    id: 'elem_math_47',
    question: '둘레가 36cm인 정사각형의 한 변의 길이는 몇 cm일까요?',
    options: ['4cm', '6cm', '9cm', '12cm'],
    answer: '9cm',
    explanation: '정사각형은 네 변의 길이가 모두 같으므로, 둘레를 4로 나누면 (36 / 4) 9cm입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '도형의 둘레와 변의 관계를 잘 파악했습니다!'
  },
  {
    id: 'elem_math_48',
    question: '다음 수의 규칙을 찾아 빈칸에 들어갈 숫자는? 5, 10, 20, 40, __',
    options: ['50', '60', '70', '80'],
    answer: '80',
    explanation: '앞의 수에 2를 곱하는 규칙입니다. 40 x 2 = 80입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '숨겨진 규칙을 찾아내는 능력이 대단해요!'
  },
  {
    id: 'elem_math_49',
    question: '495 + 203을 어림하여 백의 자리까지 나타내면 얼마일까요?',
    options: ['600', '690', '700', '710'],
    answer: '700',
    explanation: '495는 500으로, 203은 200으로 어림합니다. 500 + 200 = 700입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '어림하는 능력도 훌륭합니다!'
  },
  {
    id: 'elem_math_50',
    question: '25 + 30 / 6의 값은 얼마일까요?',
    options: ['5', '30', '31', '55'],
    answer: '30',
    explanation: '덧셈과 나눗셈이 섞여 있을 때는 나눗셈을 먼저 계산합니다. 30 / 6 = 5 이고, 25 + 5 = 30입니다.',
    grade: 'elementary',
    difficulty: 'Hard',
    encouragement: '혼합 계산의 순서까지 완벽하게 알고 있군요!'
  },
{
    id: 'elem_math_51',
    question: '5억 4천 7백만 25는 숫자로 어떻게 나타낼까요?',
    options: ['54700025', '54070025', '540070025', '504700025'],
    answer: '540070025',
    explanation: '억의 자리(5), 천만의 자리(4), 백만의 자리(0), 백만의 자리(0), 십만의 자리(7), 천의 자리(0), 백의 자리(0), 십의 자리(2), 일의 자리(5)를 맞춰 540070025입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '큰 수의 자릿값을 정확히 읽을 줄 아는군요!'
  },
  {
    id: 'elem_math_52',
    question: '125000 + 478000의 값은 얼마일까요?',
    options: ['593000', '603000', '613000', '604000'],
    answer: '603000',
    explanation: '두 수를 세로로 정확하게 더하고 받아올림을 적용하면 603000이 됩니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '큰 수 덧셈도 정확합니다!'
  },
  {
    id: 'elem_math_53',
    question: '70000 - 15820의 값은 얼마일까요?',
    options: ['54180', '54280', '55180', '55280'],
    answer: '54180',
    explanation: '0이 많은 수에서 받아내림을 정확하게 계산하면 54180입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '어려운 뺄셈도 잘했어요!'
  },
  {
    id: 'elem_math_54',
    question: '35 x 8의 값은 얼마일까요?',
    options: ['240', '260', '280', '300'],
    answer: '280',
    explanation: '35에 8을 곱하면 280입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '두 자리 수와 한 자리 수의 곱셈은 기본이죠!'
  },
  {
    id: 'elem_math_55',
    question: '23 x 14의 값은 얼마일까요?',
    options: ['302', '312', '322', '332'],
    answer: '322',
    explanation: '23 x 10 = 230, 23 x 4 = 92 이므로, 230 + 92 = 322입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '두 자리 수 곱셈도 척척 해냅니다!'
  },
  {
    id: 'elem_math_56',
    question: '57을 8로 나누었을 때 몫과 나머지는 얼마일까요?',
    options: ['몫: 6, 나머지: 9', '몫: 7, 나머지: 1', '몫: 8, 나머지: 1', '몫: 7, 나머지: 3'],
    answer: '몫: 7, 나머지: 1',
    explanation: '8 x 7 = 56이므로 57에서 56을 빼면 1이 남습니다. 몫은 7, 나머지는 1입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '나머지 있는 나눗셈도 잘 해결했어요!'
  },
  {
    id: 'elem_math_57',
    question: '2/7 + 3/7의 값은 얼마일까요?',
    options: ['5/14', '5/7', '6/7', '2/5'],
    answer: '5/7',
    explanation: '분모가 같으므로 분자끼리 더합니다. 2 + 3 = 5 이므로 5/7입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '분모가 같은 분수의 덧셈은 간단하죠!'
  },
  {
    id: 'elem_math_58',
    question: '6/9 - 2/9의 값은 얼마일까요?',
    options: ['4/9', '8/9', '4/0', '1/9'],
    answer: '4/9',
    explanation: '분모는 그대로 두고 분자끼리 뺍니다. 6 - 2 = 4 이므로 4/9입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '분수의 뺄셈도 정확하게 합니다!'
  },
  {
    id: 'elem_math_59',
    question: '1과 5/4 중 더 큰 수는 무엇일까요?',
    options: ['1', '5/4', '두 수가 같다', '비교할 수 없다'],
    answer: '5/4',
    explanation: '5/4는 가분수로, 1과 1/4로 나타낼 수 있으므로 1보다 큰 수입니다.',
    grade: 'elementary',
    difficulty: 'Normal',
    encouragement: '가분수의 의미를 잘 이해하고 있군요!'
  },
  {
    id: 'elem_math_60',
    question: '0.8은 분수로 나타내면 얼마일까요?',
    options: ['1/8', '8/1', '8/10', '8/100'],
    answer: '8/10',
    explanation: '0.8은 소수 첫째 자리까지 있으므로 분모가 10인 분수 8/10입니다.',
    grade: 'elementary',
    difficulty: 'Easy',
    encouragement: '소수와 분수의 변환도 쉽죠!'
  },
];
