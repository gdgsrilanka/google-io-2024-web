export interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  sessions: { id: number; name: string }[];
  isTopSpeaker: boolean;
  links: any[];
  questionAnswers: any[];
  categories: any[];
}

export interface Session {
  questionAnswers: any[];
  id: string;
  title: string;
  description: string;
  startsAt: string | null;
  endsAt: string | null;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: Pick<Speaker, "id">[];
  categories: any[];
  roomId: string | null;
  room: string | null;
  liveUrl: string | null;
  recordingUrl: string | null;
  status: string;
  isInformed: boolean;
  isConfirmed: boolean;
}
