export type UserType = {
  id: string;
  name: string;
  email?: string;
  image?: string;
  createdAt?: Date;
  thread?: Thread[];
  comment?: Comment[]; 
};

export type Category = {
  id: string;
  title: string;
  slug: string;
  color: string | null;
  thread: Thread[];
  comment: Comment;
  createdAt: Date;
};

export interface Thread {
  id: string;
  slug: string;
  title: string;
  createdAt: string;
  desc: string;
  content: string;
  thumbnail?: string;
  views: Number;
  catSlug: string;
  userEmail: string;
  cat: Category;
  user: UserType;
  comments?: Comment[];
}

export interface SingleThread extends Thread {
  user: UserType;
  _count: { comments: number };
}

export type Comment = {
  id: string;
  content: string;
  threadSlug: string;
  userEmail: string;
  createdAt: Date;
  user: UserType;
};
