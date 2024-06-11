import tags from './tags.json';
import styled from 'styled-components';
import { useState } from 'react';

const BarraTags = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
  @media(max-width: 768px){
    flex-direction: column;
    gap: .5rem;
    margin-top: .5rem;
  }
  @media(min-width: 768px) and (max-width: 900px){
    flex-direction: column;
    gap: .5rem;
    margin-top: .5rem;
    align-items: start;
    padding-left: 1rem;
  }
`

const TituloTags = styled.p`
  color: #FFFFF0;
  font-size: 24px; 
`;

const Tag = styled.button`
  font-size: 24px;
  color: #FFFFF0;
  background-color: ${props => (props.selecionada ? '#AF6A65' : 'rgba(217, 217, 217, 0.3)')};
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 10px;
  border-color: transparent;
  &:hover {
    border-color: #AF6A65;
  }
  @media(max-width: 768px){
     font-size: 18px;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
  @media(max-width: 768px){
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 .2rem;
    gap: .8rem;
  }
  @media(min-width: 768px) and (max-width: 900px){
    flex-wrap: wrap;
    justify-content: start;
    padding: 0 .2rem;
    gap: .8rem;
  }
`;

const Tags = ({ setTag }) => {
  const [tagSelecionada, setTagSelecionada] = useState(0);

  const handleTagClick = (tagId) => {
    setTagSelecionada(tagId);
    setTag(tagId);
  };

  return (
    <BarraTags>
      <TituloTags>Busque por tags:</TituloTags>
      <Div>
        {tags.map(tag => (
          <Tag
            key={tag.id}
            selecionada={tagSelecionada === tag.id}
            onClick={() => handleTagClick(tag.id)}
          >
            {tag.titulo}
          </Tag>
        ))}
      </Div>
    </BarraTags>
  );
};

export default Tags;
