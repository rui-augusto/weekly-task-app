import styled from 'styled-components';


export const FullContentTaskArea = styled.div`
  background-color: #192732;
  /* width: 100%; */
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  padding: 1% 2%;
`;

export const TaskName = styled.div`
  width: 40%;
  padding: 0;
`;

export const TaskDescription = styled.div`
  width: 50%;
  padding: 0;
`;

export const TaskIcons = styled.div`
  width: 5%;
  padding: 0;
  &:hover {
    color: #FFFFFF;
  }
`;

export const TaskHr = styled.hr`
  background-color: #8899a6; 
`;