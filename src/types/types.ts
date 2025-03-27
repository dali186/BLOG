import { ObjectId } from 'mongodb';

export interface Member {
  sn: string | ObjectId;
  memberName: string;
  memberId: string,
  memberPwd: string,
  memberAlias: string,
  email?: string;
  birthday?: Date;
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