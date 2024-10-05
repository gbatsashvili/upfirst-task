import { useState } from "react";
import {
  CardItemStyled,
  StatusBlock,
  TimeBlock,
  CardContent,
  ExpandableContent,
  ExpandContetLeft,
  ExpandContentMiddle,
  ExpandContentRight,
  DeleteIcon,
} from "./cardsBlock.styled";

import Button from "../shared/button/button";
import { useFormatDateTime } from "../../helpers/utils";

interface ICardBlockItemProps {
  item: {
    author: string;
    title: string;
    created_at: string;
    objectID: string;
  };
  deleteCardHandler: Function;
}

const CardBlockItem = (props: ICardBlockItemProps): JSX.Element => {
  const { item, deleteCardHandler } = props;
  const { author, title, created_at } = item;
  const { formattedDate, formattedTime } = useFormatDateTime(created_at);
  const [open, setOpen] = useState<boolean>(false);

  const expandCard = () => setOpen(true);
  const closEexpandedCard = () => setOpen(false);

  return (
    <CardItemStyled onClick={closEexpandedCard}>
      <StatusBlock>Status</StatusBlock>
      <CardContent onClick={(e) => e.stopPropagation()}>
        <div className="name-subject" onClick={expandCard}>
          <div className="name">{author}</div>
          <div className="subject">{title}</div>
        </div>
        {open && (
          <ExpandableContent>
            <ExpandContetLeft>
              <Button>Button 1</Button>
              <Button>Button 2</Button>
            </ExpandContetLeft>
            <ExpandContentMiddle>
              <Button>Button 1</Button>
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </ExpandContentMiddle>
            <ExpandContentRight>
              <Button>Button 1</Button>
            </ExpandContentRight>
          </ExpandableContent>
        )}
      </CardContent>
      <TimeBlock>
        {formattedDate} - {formattedTime}
      </TimeBlock>
      <DeleteIcon onClick={() => deleteCardHandler(item.objectID)}>
        X
      </DeleteIcon>
    </CardItemStyled>
  );
};

export default CardBlockItem;
