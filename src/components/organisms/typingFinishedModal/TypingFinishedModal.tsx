import styled from 'styled-components';
import { Text } from '../../atoms/text/Text';
import { ModalContainer } from '../../molecules/modalContainer/ModalContainer';

export interface Props {
  cpmValue: number; // characters per minute(분당 타수) 값
  currentCategoryName: string; // 현재 카테고리 이름
  totalNumOfCurrentCategory: number; // 현재 카테고리의 전체 문서 개수
  finishedNumOfCurrentCategory: number; // 현재 카테고리 중, 학습을 끝낸 문서 개수
  totalNumOfAllCategory: number; // 전체 문서 개수
  finishedNumOfAllCategory: number; // 전체 문서 중, 학습을 끝낸 문서 개수
}

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  height: 100%;
`;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 30%;
  border-bottom: 2px solid ${(props) => props.theme.textColor.gray};
`;

const BodyBox = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  align-items: space-around;
`;

const FooterBox = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  margin-bottom: 3px;
  justify-content: center;
`;

const Ul = styled.ul``;
const Li = styled.li`
  height: 20px;
  line-height: 20px;
  :before {
    content: '·';
    font-size: 25px;
    vertical-align: middle;
    color: ${(props) => props.theme.accentColor.themeDefault};
  }
`;

export const TypingFinishedModal = (props: Props) => {
  // 현재 카테고리 학습률
  const learningRateOfCurrentCategory = ~~(
    (props.finishedNumOfCurrentCategory / props.totalNumOfCurrentCategory) *
    100
  );
  // 전체 학습률
  const learningRateOfAllCategory = ~~(
    (props.finishedNumOfAllCategory / props.totalNumOfAllCategory) *
    100
  );

  const mainTexts = [
    `CPM(분당 타수): ${props.cpmValue}타`,
    `${props.currentCategoryName} 학습률: ${learningRateOfCurrentCategory}% (${props.finishedNumOfCurrentCategory} / ${props.totalNumOfCurrentCategory})`,
    `전체 학습률: ${learningRateOfAllCategory}% (${props.finishedNumOfAllCategory} / ${props.totalNumOfAllCategory})`,
  ];

  return (
    <ModalContainer>
      <TextBox>
        <HeaderBox>
          <Text value={'학습 완료!'} fontWeight="BOLD" fontSize={22} />
        </HeaderBox>
        <BodyBox>
          <Ul>
            {mainTexts.map((text, index) => (
              <Li>
                <Text
                  key={index}
                  value={text}
                  fontSize={14}
                  fontWeight="BOLD"
                />
              </Li>
            ))}
          </Ul>
        </BodyBox>
      </TextBox>
      <FooterBox>
        <Text
          fontSize={10}
          value={
            '계속 진행하시려면 엔터키나 ESC, 다시 학습하시려면 "R"키를 누르세요'
          }
        />
      </FooterBox>
    </ModalContainer>
  );
};
