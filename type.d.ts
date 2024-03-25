export enum Role {
  NONE,
  USER,
  WRITER,
  MODERATOR,
  ADMIN
}

export type User = {
  id: string;
  name: string;
  email?: string;
  image?: string;
  createdAt?: Date;
  threads?: Thread[];
  comments?: Comment[];
  votes?: Vote[];
  notifications?: Notification[];
  role: Role;
};

export type Category = {
  id: string;
  slug: string;
  title: string;
  color: string;
  createdAt?: Date;
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
  createdAt?: string;
  catSlug: string;
  userEmail: string;
  cat: Category;
  user: User;
  comments?: Comment[];
  vote?: Vote[]
}

export interface SingleThread extends Thread {
  user: User;
  _count: { comments: number };
}

export type Comment = {
  id: string;
  content: string;
  threadSlug: string;
  userEmail: string;
  user: User;
  vote?: Vote[]
  createdAt?: Date;
};

export type Vote = {
  id: string;
  type: 'upvote' | 'downvote'
  userEmail: string;
  user: User;
}

export type Notification = {
  id: string;
  title: string;
  content: string;
  startFrom: Date;
  endTo?: Date;
  isExpired: boolean;
  isStarted: boolean;
  userEmail: string;
  user: User;
  createdAt?: Date;
}