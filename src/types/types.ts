import { JWTPayload } from 'jose';
import { ObjectId } from 'mongodb';

export interface Member {
  sn?: string | ObjectId;
  email: string;
  memberName: string;
  memberPwd: string;
  memberAlias: string;
  memberRole: string;
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

export interface SessionPayload extends JWTPayload {
  userEmail: string;
  expiresAt: Date;
}
