import styled from 'styled-components'

export const Container = styled.div`
  margin-top: -10rem;


    input{
    width: 90%;
    padding: 0 1.5rem;
    height: 2rem;
    border-radius: 0.25rem;
    border: 1px solid #D7D7D7;
    background: #E7E9EE;

    font-weight: 400;
    font-size:1rem;

    &::placeholder{
      color: var(--text-body)
    }

    transition: filter 0.5s;

    &:hover{
      filter: brightness(0.9);
    }
  }


    button{
      font-size: 1rem;
			color: #FFF;
			background: var(--blue-light);
			border: 0;
			padding: 0 2rem;
			border-radius: 0.25rem;
			height: 2rem;

			transition: filter 0.4s;

			&:hover{
				filter: brightness(0.7);
			}
    }


`