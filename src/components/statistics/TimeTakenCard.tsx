import { Card } from "../ui/card";
import { CardContent } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import React from "react";
import { Target } from "lucide-react";
import { differenceInSeconds } from "date-fns";
import { formatTimeDelta } from "@/lib/utils";

type Props = {
    timeEnded: Date,
    timeStarted: Date
};

const TimeTakenCard = ({timeEnded, timeStarted}: Props) => {
  return (
    <Card className="md:col-span-3">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-2xl font-bold">Average Accuracy</CardTitle>
            <Target />
        </CardHeader>
        <CardContent>
            <div className="text-sm font-medium">
                {formatTimeDelta(differenceInSeconds(timeEnded,timeStarted))}
            </div>
        </CardContent>
    </Card>
  );
};

export default TimeTakenCard;
