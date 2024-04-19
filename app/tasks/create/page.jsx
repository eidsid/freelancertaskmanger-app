"use client";
import { v4 as uuidv4 } from "uuid";
import { auth } from "@/firebase";
import { useState } from "react";
import { addItem } from "@/app/hooks/tasks";
import { useRouter } from "next/navigation";

export default function CreateTask() {
  const router = useRouter();

  const userId = auth?.currentUser?.uid;
  const [formData, setFormData] = useState({
    title: null,
    description: null,
    complete: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskId = uuidv4();
    const task = { ...formData, id: taskId };
    await addItem(userId, task);
    router.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputTitle1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTitle1"
            name="title"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleInputDescription1"
            rows={6}
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success">
          Create New Task
        </button>
      </form>
    </div>
  );
}
