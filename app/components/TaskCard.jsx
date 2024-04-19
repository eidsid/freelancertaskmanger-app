import { v4 as uuidv4 } from "uuid";
import { removeItem, updateItemState } from "../hooks/tasks";

export default function TaskCard({ props, userID, setupdates }) {
  const randomId = uuidv4();

  const handleUpdate = () => {
    updateItemState(userID, props.id);
    setupdates(randomId);
    setupdates(randomId);
  };
  const handledelete = () => {
    removeItem(userID, props.id);
    setupdates(randomId);
  };

  return (
    <div className="bg-gray-100 p-4">
      <div
        className="bg-white rounded-lg shadow-sm cursor-pointer"
        onClick={handleUpdate}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold">{props.title}</h2>
          <p className="text-gray-600">{props.description}</p>
          <p className="text-sm text-gray-500 mt-2">
            Complete: {props.complete ? "Yes" : "No"}
          </p>
        </div>
        <div className="border-t border-gray-200 p-4 flex justify-end">
          <button
            className="text-red-500 font-semibold hover:text-red-700"
            onClick={(e) => {
              e.stopPropagation();
              handledelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
