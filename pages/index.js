import Link from 'next/link';
import styled from 'styled-components';

const HomeTitle = styled.h1`
  color: var(--red);
`;

function home (){
  return (
    <div>
      <HomeTitle>Siga em frente</HomeTitle>
      <h2> nunca vamos parar  </h2>
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">clique aqui</Link>
    </div>
  );
}

export default home;


