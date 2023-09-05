import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

import { Question } from "@prisma/client";
import React from "react";
import { cn } from "@/lib/utils";

type Props = {
    questions: Question;
};

const QuestionList = ({ questions }: Props) => {
    let gameType = questions[0].questionType;
  return (
    <Table className="mt-4">
        <TableCaption> End of list. </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[10px]">No.</TableHead>
                    <TableHead>Question & Correct Answer</TableHead>
                    <TableHead>Your Answer</TableHead>
                    {gameType === "open_ended" && (
                        <TableHead className="w-[10px] text-right">Accuracy</TableHead>
                    )}
                </TableRow>
            </TableHeader>
            <TableBody>
                <>
                    {questions.map((quesiton, index) => {
                        return (
                            <TableRow key={quesiton.id}>
                                <TableCell className="font-medium">{index+1}</TableCell>
                                <TableCell>
                                    {questions.question}
                                    <br /> 
                                    <br /> 
                                    <span className="font-semibold">{quesiton.answer}</span>
                                </TableCell>
                                {gameType === "mcq" && (
                                    <TableCell
                                        className={cn({
                                            "text-green-600": questions.isCorrect,
                                            "text-red-600" : !quesiton.isCorrect,
                                        })}
                                    >
                                        {questions.userAnswer}
                                    </TableCell>
                                )}
                                {gameType === "open_ended" && (
                                    <TableCell>{questions.userAnswer}</TableCell>
                                )}
                                {gameType === "open_ended" && (
                                    <TableCell className="text-right">
                                        {questions.percentateCorrect}
                                    </TableCell>
                                )}
                            </TableRow>
                        )
                    })}
                </>
            </TableBody>
    </Table>
  );
};

export default QuestionList;
