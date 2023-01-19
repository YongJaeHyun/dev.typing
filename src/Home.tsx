import { useRecoilState } from 'recoil';
import { typingListState } from './recoilStates';

const Home = () => {
  const [typingList, setTypingList] = useRecoilState(typingListState);

  return null;
};

export default Home;
