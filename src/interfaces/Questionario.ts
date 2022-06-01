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
