"use client"

import React from "react";
import WordCloud from "react-d3-cloud";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

type Props = {
    formattedTopics: { text: string; value: number }[]
};

// const data = [
//     {
//         text: "hey",
//         value: 3,
//     },
//     {
//         text: "nextJs",
//         value: 10,
//     },
//     {
//         text: "tailwindcss",
//         value: 8,
//     },
//     {
//         text: "react",
//         value: 5,
//     },
//     {
//         text: "prisma",
//         value: 5,
//     },
// ];

const fontSizeMapper = (word: { value: number }) => {
    return Math.log2(word.value) * 5 + 16;
}


const CustomWordCloud = ({formattedTopics}: Props) => {
    const theme = useTheme();
    const router = useRouter();
  return (
    <>
        <WordCloud
            height={550}
            data={formattedTopics}
            font="Times"
            fontSize={fontSizeMapper}
            rotate={0}
            padding={10}
            onWordClick={(event, word) => {
                router.push(`/quiz?topic=${word.text}`)
            }}
            fill={theme.theme == "dark" ? "white" : "black"}
        />
    </>
  );
};

export default CustomWordCloud;
