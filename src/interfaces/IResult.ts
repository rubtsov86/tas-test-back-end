interface IAnswer {
  questionId: number;
  answer: string;
  isCorrect: boolean;
}

export default interface IResult {
  title: string;
  result?: [IAnswer];
  owner: any;
}
