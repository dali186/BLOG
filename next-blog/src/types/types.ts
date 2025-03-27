import { ObjectId } from 'mongodb';

export interface Member {
  id: string | ObjectId;
  userName: string;
  thumbnail?: string;
  email?: string;
  profileUrl?: string;
}

export interface Article {
  id?: string | ObjectId;
  slug: string;
  category?: string;
  tags: string[];
  content: string;
  thumbnail?: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: string | ObjectId; // member FK
  authorName: string;
}

export interface Category {
  _id: number;
  name: string;
  parentId?: number;
}