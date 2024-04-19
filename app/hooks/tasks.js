import {
  getDocs,
  setDoc,
  deleteDoc,
  updateDoc,
  doc,
  collection,
  getDoc,
} from "firebase/firestore/lite";
import { db } from "@/firebase";

const itemCollectionRef = (userId) =>
  collection(db, `Tasks/${userId}/tasksList/`);

export const getTasks = async (userId) => {
  try {
    const userRef = itemCollectionRef(userId);
    const querySnapshot = await getDocs(userRef);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("API Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    throw error;
  }
};

export const addItem = async (userId, item) => {
  try {
    const taskRef = doc(itemCollectionRef(userId), item.id);
    await setDoc(taskRef, item);
    console.log("Item added successfully:", item.id);
  } catch (error) {
    console.error("Error adding item:", error.message);
    throw error;
  }
};

export const updateItemState = async (userId, id) => {
  try {
    const taskRef = doc(itemCollectionRef(userId), id);
    const snapDoc = await getDoc(taskRef);
    const data = snapDoc.data();
    const updatedItem = { ...data, complete: !data.complete };
    await updateDoc(taskRef, updatedItem);
    console.log("Item updated successfully:", id);
    return;
  } catch (error) {
    console.error("Error updating item:", error.message);
    throw error;
  }
};

export const removeItem = async (userId, id) => {
  try {
    const taskRef = doc(itemCollectionRef(userId), id);
    await deleteDoc(taskRef);
    console.log("Item removed successfully:", id);
    return;
  } catch (error) {
    console.error("Error removing item:", error.message);
    throw error;
  }
};
