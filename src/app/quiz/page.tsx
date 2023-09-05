import QuizCreation from "@/components/QuizCreation";
import React from "react";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

type Props = {
  searchParam: {
    topic?: string;
  }
};

const QuizPage = async ({searchParam}: Props) => {
    const session = await getAuthSession();
    if(!session?.user){
        redirect('/');
    }
  return (
    <QuizCreation topicParam={searchParams.topic ?? ""} />
  );
};

export default QuizPage;
