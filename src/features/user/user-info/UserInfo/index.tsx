import { Link } from 'react-router-dom';

import { Text } from 'UI/Text';
import { FlexWrapper } from 'UI/FlexWrapper';

import arrowLeftMark from 'assets/arrow-left-mark.svg';
import editMark from 'assets/edit-mark-black.svg';

import { transformDateToReadable } from 'utils/time';

import {
  HeaderUserPageWrapper,
  ContentUserPageWrapper,
  AvatarWrapper,
  UserStageWrapper,
  UserFieldsWrapper,
  StageImageWrapper,
} from './styles';

import { IUser } from 'types/users';

interface IUserInfoProps {
  user: IUser;
}

export const UserInfo = (props: IUserInfoProps) => {
  const {
    user: {
      avatar,
      skills,
      company,
      mainLang,
      hobbies,
      addInformation,
      githubLink,
      address,
      birthDate,
      email,
      facebookLink,
      fax,
      firstName,
      gender,
      lastName,
      phones,
      username,
    },
  } = props;

  return (
    <FlexWrapper flexDirection="column" alignItems="center">
      <HeaderUserPageWrapper>
        <Link to="/">
          <FlexWrapper alignItems="center" columnGap="10px">
            <img src={arrowLeftMark} alt="to user list" />

            <Text
              text={'User list'}
              textAlign="center"
              fontWeight="700"
              fontSize="24px"
              color="gray100"
            />
          </FlexWrapper>
        </Link>

        <Text
          text={username}
          textAlign="center"
          fontWeight="700"
          fontSize="35px"
          color="gray300"
        />
      </HeaderUserPageWrapper>

      <ContentUserPageWrapper>
        <AvatarWrapper>
          <img src={avatar} alt="avatar" />
        </AvatarWrapper>

        <FlexWrapper flexDirection="column" rowGap="40px">
          <UserStageWrapper>
            <FlexWrapper columnGap="8px">
              <span>Account</span>
              <StageImageWrapper>
                <img src={editMark} alt="edit" />
              </StageImageWrapper>
            </FlexWrapper>

            <UserFieldsWrapper>
              {username && (
                <>
                  <span className="first-column">User Name:</span>
                  <span className="second-column">{username}</span>
                </>
              )}

              <span className="first-column">Password:</span>
              <span className="second-column">********</span>
            </UserFieldsWrapper>
          </UserStageWrapper>

          <UserStageWrapper>
            <FlexWrapper columnGap="8px">
              <span>Personal</span>
              <StageImageWrapper>
                <img src={editMark} alt="edit" />
              </StageImageWrapper>
            </FlexWrapper>

            <UserFieldsWrapper>
              {gender && (
                <>
                  <span className="first-column">Gender:</span>
                  <span className="second-column">{gender}</span>
                </>
              )}

              {firstName && (
                <>
                  <span className="first-column">First name:</span>
                  <span className="second-column">{firstName}</span>
                </>
              )}

              {lastName && (
                <>
                  <span className="first-column">Last name:</span>
                  <span className="second-column">{lastName}</span>
                </>
              )}

              {birthDate && (
                <>
                  <span className="first-column">Birth date:</span>
                  <span className="second-column">
                    {transformDateToReadable(birthDate)}
                  </span>
                </>
              )}

              {email && (
                <>
                  <span className="first-column">Email:</span>
                  <span className="second-column">{email}</span>
                </>
              )}

              {address && (
                <>
                  <span className="first-column">Address:</span>
                  <span className="second-column">{address}</span>
                </>
              )}
            </UserFieldsWrapper>
          </UserStageWrapper>

          <UserStageWrapper>
            <FlexWrapper columnGap="8px">
              <span>Contacts</span>
              <StageImageWrapper>
                <img src={editMark} alt="edit" />
              </StageImageWrapper>
            </FlexWrapper>

            <UserFieldsWrapper>
              {company && (
                <>
                  <span className="first-column">Company:</span>
                  <span className="second-column">{company}</span>
                </>
              )}

              {mainLang && (
                <>
                  <span className="first-column">Main language:</span>
                  <span className="second-column">{mainLang.label}</span>
                </>
              )}

              {fax && (
                <>
                  <span className="first-column">Fax:</span>
                  <span className="second-column">{fax}</span>
                </>
              )}

              {phones && !!phones.length && (
                <>
                  {phones.map((phone, index) => {
                    return (
                      <>
                        <span className="first-column">Phone #{index + 1}:</span>
                        <span className="second-column">{phone}</span>
                      </>
                    );
                  })}
                </>
              )}

              {facebookLink && (
                <>
                  <span className="first-column">Facebook link:</span>
                  <span className="second-column">{facebookLink}</span>
                </>
              )}

              {githubLink && (
                <>
                  <span className="first-column">Github link:</span>
                  <span className="second-column">{githubLink}</span>
                </>
              )}
            </UserFieldsWrapper>
          </UserStageWrapper>

          <UserStageWrapper>
            <FlexWrapper columnGap="8px">
              <span>Capabilities</span>
              <StageImageWrapper>
                <img src={editMark} alt="edit" />
              </StageImageWrapper>
            </FlexWrapper>

            <UserFieldsWrapper>
              {skills && (
                <>
                  <span className="first-column">Skills:</span>
                  <span className="second-column">
                    {skills.map((item, index) => {
                      return <span key={index}>{item.label}; </span>;
                    })}
                  </span>
                </>
              )}

              {hobbies && !!hobbies.length && (
                <>
                  <span className="first-column">Hobbies:</span>
                  <span className="second-column">
                    {hobbies.map((item, index) => {
                      return <div key={index}>{item};</div>;
                    })}
                  </span>
                </>
              )}

              {addInformation && (
                <>
                  <span className="first-column">Additional information:</span>
                  <span className="second-column">{addInformation}</span>
                </>
              )}
            </UserFieldsWrapper>
          </UserStageWrapper>
        </FlexWrapper>
      </ContentUserPageWrapper>
    </FlexWrapper>
  );
};
