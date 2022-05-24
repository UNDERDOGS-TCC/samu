export interface Questionario {
  pages: number;
  questions: Question[];
}

export interface Question {
  page: number;
  objective: boolean;
  question: string;
  answers?: string[];
  correctAnswer?: string;
}

const questionario: Questionario = {
  pages: 3,
  questions: [
    {
      page: 1,
      objective: true,
      question: 'Eu sou gay?',
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
