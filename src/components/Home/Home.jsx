import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Home = () => {
  const surveysData = useSelector((state) => state.surveys);
  const completedSurveys = useSelector(
    (state) => state.currentUser.completedSurveys
  );

  const surveysCardsIncompleted = surveysData.map(
    (surveyJSON) =>
      !completedSurveys.find((id) => id === surveyJSON.id) && (
        <Link to={`/surveys/${surveyJSON.id}`} key={surveyJSON.id}>
          <h1>{surveyJSON.name}</h1>
        </Link>
      )
  );

  const surveysCardsCompleted = surveysData.map(
    (surveyJSON) =>
      completedSurveys.find((id) => id === surveyJSON.id) && (
        <Link to={`/surveys/${surveyJSON.id}`} key={surveyJSON.id}>
          <h1>{surveyJSON.name}</h1>
        </Link>
      )
  );

  return (
    <div>
      <h1>Surveys</h1>
      <h6>Not completed:</h6>
      {surveysCardsIncompleted}
      <h6>Completed:</h6>
      {surveysCardsCompleted}
    </div>
  );
};
