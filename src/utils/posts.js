import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const getAllDocs = async (page) => {
  if (page.length !== 0) {
    const querySnapshot = await getDocs(collection(db, page));
    const queryArray = [];
    querySnapshot.forEach((doc) => {
      const newObj = doc.data();
      newObj.id = doc.id;
      queryArray.push(newObj);
    });
    return queryArray;
  }
  return [];
};

const submitNewDoc = async (page, formState) => {
  const newDoc = await addDoc(collection(db, page), formState);
  console.log('new doc', newDoc);
};

export { getAllDocs, submitNewDoc };
