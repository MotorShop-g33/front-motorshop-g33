import { Avatar, List, ListItem, Text } from "@chakra-ui/react";
import { DivInfo } from "../../styles/commentsList";
import moment from "moment";
import "moment/dist/locale/pt-br";
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
  comments?: IComments[];
}
const now = moment();

export const CommentsList = ({ comments }: ICommentsList) => {
  moment.locale();

  const test = comments?.map((item) => {});
  return (
    <List spacing={10}>
      {comments?.map((item: IComments) => (
        <ListItem key={item?.id}>
          <DivInfo className="info-user">
            <Avatar name={item.user?.name} />
            <h1>{item.user?.name}</h1>
            <Text>{`${
              moment().diff(item.createdAt, "hours") < 24
                ? moment(item.createdAt).startOf("minutes").fromNow()
                : moment(item.createdAt).startOf("days").fromNow()
            } `}</Text>
          </DivInfo>
          <p className="description">{item?.comments}</p>
        </ListItem>
      ))}
    </List>
  );
};
