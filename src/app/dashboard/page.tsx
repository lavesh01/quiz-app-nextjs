import HistoryCard from "@/components/dashboard/HistoryCard";
import HotTopicsCard from "./HotTopicsCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import React from "react";
import RecentActivities from "./RecentActivities";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

type Props = {};

export const metadata = {
  title: "Dashboard | Quizmify",
}

const Dashboard = async (props: Props) => {
  const session = await getAuthSession();
  if(!session?.user) {
    return redirect("/");
  }
  return (
    <main className="mt-12 p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizMeCard />
        <HistoryCard />
      </div>
      
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <HotTopicsCard />
        <RecentActivities />
      </div>

    </main>
  );
};

export default Dashboard;
