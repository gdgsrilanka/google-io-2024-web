import { Session, Speaker } from "@/api/sessionize/sessionize.responses";
import axios from "axios";

// Function to get all data
export const getAllData = async () => {
  const response = await axios.get(
    "https://sessionize.com/api/v2/ur6m0nq4/view/All",
  );
  return response.data;
};

// Function to get schedule grid
export const getScheduleGrid = async () => {
  const response = await axios.get(
    "https://sessionize.com/api/v2/ur6m0nq4/view/GridSmart",
  );
  return response.data;
};

// Function to get session list
export const getSessionList = async () => {
  const response = await axios.get(
    "https://sessionize.com/api/v2/ur6m0nq4/view/Sessions",
  );
  return response.data?.sessions as Session[];
};

// Function to get speaker
export const getSpeaker = async () => {
  const response = await axios.get(
    "https://sessionize.com/api/v2/ur6m0nq4/view/Speakers",
  );
  return response.data as Speaker[];
};

// Function to get speakers wall
export const getSpeakersWall = async () => {
  const response = await axios.get(
    "https://sessionize.com/api/v2/ur6m0nq4/view/SpeakerWall",
  );
  return response.data as Speaker[];
};
