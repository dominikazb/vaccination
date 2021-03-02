import { Injectable } from '@angular/core';
import { QuestionnaireAnswers } from '../model/questionnaire-answers';
import questionnaireQuestions from '../model/questionnaireQuestions.json';

@Injectable({
    providedIn: 'root'
})
export class ProcessVariablesService {

    public nextStepButtonText = 'Przejdź dalej';
    public questions: {question: string, answers: string[]} = questionnaireQuestions;

    public answers: QuestionnaireAnswers = {
        question1: '',
        question2: '',
        question3: '',
        question4: ''
    };
}
