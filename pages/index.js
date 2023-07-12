import Link from 'next/link';
import styled from 'styled-components';

const HomeTitle = styled.h1`
  color: var(--red);
`;

function home (){
  return (
    <div>
      <HomeTitle>Thierry Avelino</HomeTitle>
      <Link href="https://www.youtube.com/watch?v=C65oaIHsdYM">clique aqui</Link>
    </div>
  );
}

export default home;


