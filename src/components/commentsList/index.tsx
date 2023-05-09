import {
  Avatar,
  Button,
  FormControl,
  List,
  ListItem,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { DivInfo } from "../../styles/commentsList";
import moment from "moment";
import "moment/dist/locale/pt-br";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { ICommentRequest } from "../../interfaces/comments";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createCommentSchema } from "../../validateSchemas/validateCommentSchema";
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

export const CommentsList = ({}: ICommentsList) => {
  moment.locale();

  const { comments, user } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICommentRequest>({
    resolver: yupResolver(createCommentSchema),
  });

  const { editComment, deleteComments } = useContext(UserContext);

  const [editedCommentId, setEditedCommentId] = useState<string | null>("null");
  const handleEditClick = (commentId: string) => {
    console.log(commentId);
    setEditedCommentId(commentId);
  };

  const confirmEdit = (data: ICommentRequest) => {
    if (editedCommentId) {
      editComment(editedCommentId, data);
      setEditedCommentId(null);
    }
  };

  return (
    <List spacing={10}>
      {comments?.map((item: any) => (
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
          {editedCommentId === item.id ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "4px",
                width: "100%",
              }}
            >
              <form
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  width: "100%",
                }}
                onSubmit={handleSubmit(confirmEdit)}
              >
                <FormControl>
                  <Textarea
                    id={item.id}
                    minHeight="40px"
                    maxHeight="100px"
                    height="50px"
                    resize={"vertical"}
                    defaultValue={item.comments}
                    placeholder={item.comments}
                    {...register("comment")}
                  />
                </FormControl>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Button type="submit" colorScheme="green">
                    Confirmar
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => deleteComments(item.id)}
                  >
                    Deletar
                  </Button>
                  <Button
                    colorScheme="gray"
                    onClick={() => setEditedCommentId(null)}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <p className="description">{item?.comments}</p>
              {item.user.id === user.id ? (
                <Button onClick={() => handleEditClick(item.id)}>Editar</Button>
              ) : (
                <></>
              )}
            </div>
          )}
        </ListItem>
      ))}
    </List>
  );
};
