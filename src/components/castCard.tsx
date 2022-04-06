import styled from "@emotion/styled";
import { ComponentProps, FC } from "react";
import { Cast } from "../classes/MovieCasts";

interface Props extends ComponentProps<"div"> {
  cast: Cast;
}

const CastCard: FC<Props> = ({ cast, ...rest }) => {
  const imageUrl = cast.profile_path
    ? "https://image.tmdb.org/t/p/w500" + cast.profile_path
    : "https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png";

  return (
    <Card {...rest}>
      <CastImage src={imageUrl} alt={cast.name} />
      <CastBody>
        <CastName>{cast.name}</CastName>
        <CastCharacter>{cast.character}</CastCharacter>
      </CastBody>
    </Card>
  );
};

export default CastCard;

const Card = styled.div`
  margin: 10px;
  width: 150px;
  padding: 7px;
  text-align: center;
`;

const CastImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10%;
  object-fit: cover;
  margin-left: 28%;
`;

const CastBody = styled.div``;

const CastName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #cbd5e1;
`;

const CastCharacter = styled.div`
  font-size: 12px;
  width: 100%;
  display: block;
  color: #cbd5e1;
`;
