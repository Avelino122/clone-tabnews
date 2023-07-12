import Link from 'next/link';
import styled from 'styled-components';

const HomeTitle = styled.h1`
  color: var(--red);
`;

function home (){
  return (
    <div>
      <HomeTitle>Voce esta sendo vigiado</HomeTitle>
      <h2> vc tem um prazo de uma semnana pra conseguir isso. espero que não falhe! </h2>
      <h3> aperte em "cliqu"</h3>
      <Link href="https://www.instagram.com/julimotoka/">clique aqui</Link>
    </div>
  );
}

export default home;


