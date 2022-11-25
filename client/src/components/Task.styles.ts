import styled from 'styled-components';


export const FullContentTaskArea = styled.div`
  background-color: #192732;
  /* width: 100%; */
  border: 2px solid black;
  border-radius: 5px;
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
`;

export const TaskName = styled.div`
  border: 1px solid black;
  width: 40%;
`;

export const TaskDescription = styled.div`
  border: 1px solid black;
  width: 50%;
`;

export const TaskIcons = styled.div`
  width: 5%
`;
