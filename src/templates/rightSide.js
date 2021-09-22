import * as React from "react";
import { collection, addDoc} from "firebase/firestore";

import FileInput from "../components/fileInput";
import TextAreaInput from "../components/textareaInput";
import TextInput from "../components/textInput";
import SubmitButton from "../components/submitButton";

import { formFields, formState } from "../utils/formInfo";
import { submitNewDoc } from "../utils/posts";

const initialFormState = (page, stateBasedPage, currentPost) => {
  if (currentPost) {
    return currentPost;
  }
  return stateBasedPage[page];
};

const RightSide = ({ page, post, setPostId }) => {
  const [formData, setFormData] = React.useState(formState[page]);
  console.log('rightside prop post', post);

  React.useEffect(() => {
    setFormData(initialFormState(page, formState, post));
  }, [page, post]);

  console.log('formstate', formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post === "") {
      submitNewDoc(page, formData);
    }
    setPostId("");
    console.log("you submit");
  };

  const fields = (whichPage, fieldsBasedPage, currentPost) => {
    const fieldsArrayFromPage = fieldsBasedPage[whichPage];
    return fieldsArrayFromPage.map((field) => {
      const fieldName = Object.keys(field);
      const fieldType = Object.values(field);
      if (fieldType[0] === "text") {
        return (
          <TextInput
            key={field.id + Object.keys(field)}
            name={fieldName[0]}
            onChange={(e) =>
              setFormData(() => ({
                ...formData,
                [fieldName[0]]: e.target.value,
              }))
            }
            type="text"
            value={formData[fieldName[0]]}
          />
        );
      }
      if (fieldType[0] === "file") {
        return (
          <FileInput
            key={field.id + Object.keys(field)}
            name={fieldName[0]}
            onChange={(e) =>
              setFormData(() => ({
                ...formData,
                [fieldName[0]]: e.target.value,
              }))
            }
            type="file"
          />
        );
      }
      if (fieldType[0] === "textarea") {
        return (
          <TextAreaInput
            key={field.id + Object.keys(field)}
            name={fieldName[0]}
            onChange={(e) =>
              setFormData(() => ({
                ...formData,
                [fieldName[0]]: e.target.value,
              }))
            }
            value={formData[fieldName[0]]}
          />
        );
      }
    });
  };

  const fieldsList = fields(page, formFields, post);
  const submitButtonText = post === null ? "Post" : "Update";

  return (
    <>
      <form onSubmit={handleSubmit}>
        {fieldsList}
        <SubmitButton type="submit" value={submitButtonText} />
      </form>
    </>
  );
};

export default RightSide;
