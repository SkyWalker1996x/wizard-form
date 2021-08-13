import styled from 'styled-components';

export const HeaderUserPageWrapper = styled.div`
  width: 100%;
  max-width: 970px;
  margin: 55px 0 35px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5px;
  justify-content: flex-start;
`;

export const ContentUserPageWrapper = styled.div`
  width: 100%;
  max-width: 970px;
  padding: 35px 70px 60px 60px;
  display: flex;
  column-gap: 90px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.gray300};
  font-weight: 500;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  max-height: 200px;
  border: 3px solid ${({ theme }) => theme.colors.main};
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  & img {
    width: 200px;
    height: 200px;
  }
`;

export const UserStageWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.25fr 4fr;
`;

export const UserFieldsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  row-gap: 15px;

  & .second-column {
    color: ${({ theme }) => theme.colors.gray200};
    font-weight: 400;
  }
`;
