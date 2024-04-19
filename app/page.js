"use client";
import Link from "next/link";
import TaskCard from "./components/TaskCard";
import { useEffect, useState } from "react";
import { getTasks } from "./hooks/tasks";
import { auth } from "@/firebase";

export default function Home() {
  const [tasksList, setTasksList] = useState([]);
  const [updates, setupdates] = useState([]);
  const userID = auth?.currentUser?.uid;
  const getTasksList = async (userID) => {
    const tasks = await getTasks(userID);
    setTasksList(tasks);
  };

  useEffect(() => {
    getTasksList(userID);
  }, [auth.currentUser, auth.currentUser && updates]);

  return (
    <main>
      <div className="flex flex-col gap-3  items-center">
        <div className="">
          <Link href={"/tasks/create"} className="btn btn-dark rounded">
            Add new task +
          </Link>
        </div>
        <div className="flex  gap-4 ">
          <div className="flex flex-col">
            <div className="bg-primary px-3 py-2 rounded">TODO</div>
            <div>
              {tasksList.map((task) => {
                return (
                  !task.complete && (
                    <TaskCard
                      key={task.id}
                      props={task}
                      userID={userID}
                      setupdates={setupdates}
                    ></TaskCard>
                  )
                );
              })}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-success px-3 py-2 rounded">Done</div>
            <div>
              {tasksList.map((task) => {
                return (
                  task.complete && (
                    <TaskCard
                      key={task.id}
                      props={task}
                      userID={userID}
                      setupdates={setupdates}
                    ></TaskCard>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
