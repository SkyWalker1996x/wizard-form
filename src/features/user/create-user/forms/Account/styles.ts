import styled from 'styled-components';

export const AccountWrapper = styled.div`
  padding: 65px 100px;
  display: flex;
  justify-content: space-between;
  column-gap: 15px;
`;

export const InputGroupWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ImageUploadWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
`;

export const ImageWrapper = styled.div`
  max-width: 171px;
  max-height: 171px;
  width: 100%;
  height: 100%;
  border: 3px solid ${({ theme }) => theme.colors.main};
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  & > img {
    width: 170px;
    height: 170px;
  }
`;
