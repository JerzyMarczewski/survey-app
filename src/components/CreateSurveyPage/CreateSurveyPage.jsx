import React, { useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

import styles from "./CreateSurveyPage.module.css";

const Page = ({ page }) => {
  const [title, setTitle] = useState(page.title);
  const [description, setDescription] = useState(page.description);

  const titleField = (
    <input
      type="text"
      placeholder="Page Title"
      value={title}
      onChange={(e) => {
        setTitle(e.target.value);
        page.name = e.target.value
          .split(" ")
          .join("")
          .toLowerCase();
        page.title = e.target.value;
      }}
    />
  );

  const descriptionField = (
    <input
      type="text"
      placeholder="Page Description"
      value={description}
      onChange={(e) => {
        setDescription(e.target.value);
        page.description = e.target.value;
      }}
    />
  );

  const elements = page.elements.map((element) => (
    <p key={element.name}>{element.title}</p>
  ));

  return (
    <div className={styles.page}>
      {titleField}
      {descriptionField}
      {elements}
      <button>Add Question</button>
    </div>
  );
};

// const Question = ({ survey }) => {
//   const [questionName, setQuestionName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Question Name"
//         value={questionName}
//         onChange={(e) => setQuestionName(e.target.value)}
//       />
//     </div>
//   );
// };

export const CreateSurveyPage = () => {
  const JSON = {
    title: "Survey 1",
    description: "This is a survey",
    logoPosition: "right",
    pages: [
      {
        title: "Page 1",
        description: "This is page 1",
        elements: [
          {
            type: "text",
            name: "question1",
            title: "What is page 1?",
          },
          {
            type: "text",
            name: "question2",
            title: "How is page 1?",
          },
        ],
        title: "Page 1",
        description: "This is page 1",
      },
      {
        title: "Page 2",
        description: "This is page 2",
        elements: [
          {
            type: "boolean",
            name: "question3",
            title: "Is it page 2?",
          },
        ],
      },
    ],
  };
  let survey = new Model(JSON);

  const [title, setTitle] = useState(survey.title);
  const [description, setDescription] = useState(survey.description);

  const titleField = (
    <input
      type="text"
      placeholder="Survey Title"
      value={title}
      onChange={(e) => {
        setTitle(e.target.value);
        survey = new Model({ ...survey.toJSON(), title: e.target.value });
        console.log(survey.title);
      }}
    />
  );

  const descriptionField = (
    <input
      type="text"
      placeholder="Description"
      value={description}
      onChange={(e) => {
        setDescription(e.target.value);
        survey.description = e.target.value;
      }}
    />
  );

  const pages = survey.pages.map((page) => (
    <Page key={page.name} page={page} />
  ));

  return (
    <div className={styles.container}>
      {titleField}
      {descriptionField}
      {pages}
      <button onClick={() => console.log(survey.toJSON())}>Log</button>
      {/* <Survey survey={survey}></Survey> */}
      {survey ? <Survey model={survey} /> : null}
    </div>
  );
};
