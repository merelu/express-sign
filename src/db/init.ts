import {
  Document,
  DocumentHistory,
  Participant,
  ParticipantHistory,
  User,
} from "./models";

const isDev = process.env.NODE_ENV === "development";

const dbInit = () =>
  Promise.all([
    User.sync({ alter: isDev }),
    Document.sync({ alter: isDev }),
    Participant.sync({ alter: isDev }),
    DocumentHistory.sync({ alter: isDev }),
    ParticipantHistory.sync({ alter: isDev }),
  ]);

export default dbInit;
