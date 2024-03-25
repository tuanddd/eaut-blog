export enum Role {
  NONE,
  USER,
  WRITER,
  MODERATOR,
  ADMIN
}

export type UserType = {
  id: string;
  name: string;
  email?: string;
  image?: string;
  createdAt?: Date;
  threads?: Thread[];
  comments?: Comment[];
  role: Role;
};

export type CategoryType = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  color: string;
  createdAt: Date;
  threads?: Thread[];
};

export interface Thread {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  content: string;
  thumbnail?: string;
  views: Number;
  createdAt: string;
  catSlug: string;
  userEmail: string;
  cat: CategoryType;
  user: UserType;
  comments?: CommentType[];
  vote?: VoteType[]
}

export interface SingleThread extends Thread {
  user: UserType;
  _count: { comments: number };
}

export type CommentType = {
  id: string;
  content: string;
  threadSlug: string;
  userEmail: string;
  createdAt: Date;
  user: UserType;
  vote?: VoteType[]
};

export type VoteType = {
  id: string;
  type: 'upvote' | 'downvote'
  userEmail: string;
  user: UserType;
}

export type NotificationType = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  startFrom: Date;
  endTo?: Date;
  isExpired: boolean;
  isStarted: boolean;
  userEmail: string;
  user: UserType;
}