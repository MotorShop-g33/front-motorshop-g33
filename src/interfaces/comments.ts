export interface IComments {
  id: string;
  comments: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface ICommentRequest {
  comment: string;
}

export interface IListComments {
  comments: IComments[];
}
