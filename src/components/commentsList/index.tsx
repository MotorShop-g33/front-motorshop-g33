import { Avatar, List, ListItem } from "@chakra-ui/react";
import { DivInfo } from "../../styles/commentsList";
import moment from "moment";

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

interface ICommentsList {
  comments: IComments[];
}
const now = moment();

export const CommentsList = ({ comments }: ICommentsList) => {
  // const test = comments?.map((item) => {
  //   console.log(moment(item.createdAt).fromNow());
  //   const diffInMinutes = now.diff(moment(item.createdAt), "days");
  //   console.log(diffInMinutes);
  // });

  return (
    <List spacing={10}>
      {comments?.map((item: IComments) => (
        <ListItem key={item?.id}>
          <DivInfo className="info-user">
            <Avatar name={item.user?.name} />
            <h1>{item.user?.name}</h1>
            <p className="post-at">{moment(item?.createdAt).fromNow()}</p>
          </DivInfo>
          <p className="description">{item?.comments}</p>
        </ListItem>
      ))}
    </List>
  );
};
