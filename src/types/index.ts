export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isOnline?: boolean;
}

export interface ConversationData {
  id: string;
  user: User;
  lastMessage: string;
  firstSeen: string;
}
