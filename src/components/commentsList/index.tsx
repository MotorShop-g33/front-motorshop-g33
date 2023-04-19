import { List, ListItem } from "@chakra-ui/react";
import { DivInfo } from "../../styles/commentsList";

interface ICommentsObject {
	id: string;
	userImg: string;
	username: string;
	createdAt: string;
	description: string;
}

interface ICommentsList {
	commentsList: ICommentsObject[];
}

export const CommentsList = ({ commentsList }: ICommentsList) => {
	return (
		<List spacing={10}>
			{commentsList.map((item) => (
				<ListItem key={item.id}>
					<DivInfo className="info-user">
						<img src={item.userImg} width={32}/>
						<h1>{item.username}</h1>
						<p className="post-at">{item.createdAt}</p>
					</DivInfo>
					<p className="description">{item.description}</p>
				</ListItem>
			))}
		</List>
	);
};
