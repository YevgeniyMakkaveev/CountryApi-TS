import styled from 'styled-components';

const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--ui-elem);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(0.5rem);
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--colors-text);
  cursor: pointer;
`;

export default Button