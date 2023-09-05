import { CheckCircle2, XCircle } from "lucide-react";

import { Card } from "./ui/card";
import React from "react";
import { Separator } from "@radix-ui/react-dropdown-menu";

type Props = {
    correctAnswers: number,
    wrongAnswers: number,
};

const MCQCounter = ({correctAnswers, wrongAnswers}: Props) => {
  return (
    <Card className="flex flex-row items-center justify-center p-2">
        <CheckCircle2 color="green" size={30} />
        <span className="mx-2 text-2xl text-[green]">{correctAnswers}</span>
        <Separator />
        <span className="mx-3 text-2xl text-[red]">{wrongAnswers}</span>
        <XCircle color="red" size={30} />
    </Card>
  );
};

export default MCQCounter;
