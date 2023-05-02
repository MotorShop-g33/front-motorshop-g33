import { Avatar, List, ListItem } from "@chakra-ui/react";
import { DivInfo } from "../../styles/commentsList";

interface IUserComments {
  name: string;
}

interface IComments {
  id: string;
  comments: string;
  updatedAt: string;
  createdAt: string;
  user: IUserComments;
}

// interface ICommentsObject {
//   comment: IComments[];
// }

interface ICommentsList {
  comments: IComments;
}

export const CommentsList = ({ comments }: IComments) => {
  return (
    <List spacing={10}>
      {comments?.map((item: IComments) => (
        <ListItem key={item?.id}>
          <DivInfo className="info-user">
            <Avatar name={item.user?.name} />
            <h1>{item.user?.name}</h1>
            <p className="post-at">{item?.createdAt}</p>
          </DivInfo>
          <p className="description">{item?.comments}</p>
        </ListItem>
      ))}
    </List>
  );
};
