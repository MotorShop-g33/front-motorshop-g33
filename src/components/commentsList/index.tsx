import { Avatar, List, ListItem, Text } from "@chakra-ui/react";
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
  moment.locale("pt");

  return (
    <List spacing={10}>
      {comments?.map((item: IComments) => (
        <ListItem key={item?.id}>
          <DivInfo className="info-user">
            <Avatar name={item.user?.name} />
            <h1>{item.user?.name}</h1>
            <Text>{`há ${
              moment().diff(item.createdAt, "hours") < 24
                ? moment().diff(item.createdAt, "hours") + " horas"
                : moment(item.createdAt)
                    .startOf("days")
                    .fromNow()
                    .replace("a day ago", " 1 dia")
                    .replace("a year ago", "1 ano")
            } `}</Text>
          </DivInfo>
          <p className="description">{item?.comments}</p>
        </ListItem>
      ))}
    </List>
  );
};
