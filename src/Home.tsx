import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { typingListState } from './recoilStates';
import InputBox from './molecules/InputBox';
import UserInputBox from './molecules/UserInputBox';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const ContentBox = styled.form`
  flex-direction: column;
  width: 1000px;
  height: 15%;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 50px;
`;

const Home = () => {
  const [typingList, setTypingList] = useRecoilState(typingListState);
  const selectedSentenceObj = typingList[0];
  const { category: selectedCategory, contents: selectedSentence } =
    selectedSentenceObj;

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      userInput: { value: string };
    };
    const userSentence: string = target.userInput.value;
    const isSameLength = selectedSentence.length === userSentence.length;

    if (isSameLength) {
      setTypingList([...typingList.slice(1), typingList[0]]);
      target.userInput.value = '';
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSentence = e.target.value;
    const isUserSentenceLonger =
      selectedSentence.length + 1 < userSentence.length; // 문장 끝에 오타가 났을 때 수정할 수 있도록 추가로 한 칸 여유를 둠
    const isPressedSpacebarOnlastText =
      selectedSentence.length + 1 === userSentence.length &&
      userSentence.charAt(userSentence.length - 1) == ' ';

    if (isUserSentenceLonger || isPressedSpacebarOnlastText) {
      setTypingList([...typingList.slice(1), typingList[0]]);
      e.target.value = '';
    }
  };
  return (
    <Container
      onCopy={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <ContentBox onSubmit={onSubmit}>
        <InputBox id="category" value={'관련: ' + selectedCategory} />
        <InputBox id="typingList" value={selectedSentence} />
        <UserInputBox
          name="userInput"
          onChange={onChange}
          placeholder="위의 글을 타이핑하며 정보를 습득해보세요!"
        />
      </ContentBox>
    </Container>
  );
};

export default Home;
