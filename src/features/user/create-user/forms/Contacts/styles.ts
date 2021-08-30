import styled from 'styled-components';
import {FlexWrapper} from "UI/FlexWrapper";

export const ContactsWrapper = styled(FlexWrapper)`
  padding: 65px 100px;
`


export const PhoneWrapper = styled.div`
  position: relative;
  width: 90%;

  & > .add-button {
    margin-top: 5px;
    display: flex;
    align-items: center;
    column-gap: 8px;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.gray200};
    cursor: pointer;
  }

  & > .remove-btn {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 35px;
    right: -30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;
   
    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
