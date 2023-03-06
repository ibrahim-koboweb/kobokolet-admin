const attendeeData = [
  {
    id: "1",
    agent_id: "Male",
    agent_name: "Shirley A. Lape",
    phone_no: "08100112233",
    engagement: "Yes",
    farmers: "5",
    cluster: "Micheal",
    status: "REJECTED",
  },
  {
    id: "7",
    agent_id: "Male",
    agent_name: "Ryan Carroll",
    phone_no: "08100112233",
    engagement: "No",
    farmers: "14",
    cluster: "Tony",
    status: "PENDING",
  },
  {
    id: "2",
    agent_id: "Female",
    agent_name: "Mason Nash",
    phone_no: "08100112233",
    engagement: "Yes",
    farmers: "34",
    cluster: "Sani",
    status: "APPROVED",
  },
  {
    id: "3",
    agent_id: "Female",
    agent_name: "Luke Parkin",
    phone_no: "08100112233",
    engagement: "Yes",
    farmers: "12",
    cluster: "Busayo",
    status: "PENDING",
  },
  {
    id: "4",
    agent_id: "Male",
    agent_name: "Anthony Fry",
    phone_no: "08100112233",
    engagement: "No",
    farmers: "32",
    cluster: "Friday",
    status: "PENDING",
  },
  {
    id: "5",
    agent_id: "Male",
    agent_name: "Ryan Carroll",
    phone_no: "08100112233",
    engagement: "No",
    farmers: "65",
    cluster: "Benden",
    status: "APPROVED",
  },
];



export const getAttendeeData = () => {
    return attendeeData;
}