import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { addCompletedSurvey } from "../../features/currentUser/currentUserSlice";

const SurveyExcerpt = ({ surveyJSON }) => {
  const dispatch = useDispatch();

  const survey = new Model(surveyJSON);
  survey.onComplete.add((sender, options) => {
    dispatch(addCompletedSurvey(surveyJSON.id));
  });

  return <Survey model={survey} />;
};

export const SingleSurveyPage = () => {
  const { surveyId } = useParams();
  const surveyJSON = useSelector((state) =>
    state.surveys.find((survey) => survey.id === surveyId)
  );

  return (
    <div>
      <h1>Survey with id of {surveyId}</h1>
      <SurveyExcerpt surveyJSON={surveyJSON} />
    </div>
  );
};
