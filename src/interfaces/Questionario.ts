export interface Questionario {
  questions: Question[];
}

export interface Question {
  page: number;
  objective: boolean;
  question: string;
  answers?: string[];
  correctAnswer?: string;
}

export const questionario: Questionario = {
  questions: [
    {
      page: 1,
      objective: true,
      question: 'Isso é uma pergunta de verdade?',
    },
    {
      page: 2,
      objective: false,
      question: 'Qual o tipo da ocorrencia?',
      answers: ['Assalto', 'Sufocamento', 'Assassinato'],
    },
    {
      page: 3,
      objective: true,
      question: 'Você mora com alguém?',
    },
  ],
};

export const questionario2: Questionario = {
  questions: [
    {
      page: 1,
      objective: true,
      question: 'Você é a vítima?',
    },
    {
      page: 2,
      objective: true,
      question: 'A vítima está consciente?',
    },
    {
      page: 3,
      objective: true,
      question: 'A vítima precisa de acompanhamento?',
    },
    {
      page: 4,
      objective: false,
      question: 'Onde a vítima está localizada?',
      answers: ['Residência', 'Trabalho / Escola', 'Local público', 'Outro'],
    },
    {
      page: 5,
      objective: true,
      question: 'O local onde a vítima se encontra é de fácil acesso?',
    },
  ],
};
