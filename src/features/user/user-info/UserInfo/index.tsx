import { Link } from 'react-router-dom';
import { FlexWrapper } from 'UI/FlexWrapper';

import editMark from 'assets/edit-mark-black.svg';

import { transformDateToReadable } from 'utils/time';

import {
  ContentUserPageWrapper,
  AvatarWrapper,
  UserStageWrapper,
  UserFieldsWrapper,
  StageImageWrapper,
} from './styles';

import { IUser } from 'types/users';

interface IUserInfoProps {
  user: Partial<IUser>;
  url: string;
}

export const UserInfo = (props: IUserInfoProps) => {
  const {
    url,
    user: {
      avatar,
      skills,
      company,
      mainLang,
      hobbies,
      additionalInformation,
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
    <ContentUserPageWrapper>
      <AvatarWrapper>
        <img src={avatar} alt="avatar" />
      </AvatarWrapper>

      <FlexWrapper flexDirection="column" rowGap="40px">
        <UserStageWrapper>
          <FlexWrapper columnGap="8px">
            <span>Account</span>
            <Link to={`${url}/edit-account`}>
              <StageImageWrapper>
                <img src={editMark} alt="edit" />
              </StageImageWrapper>
            </Link>
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
            <Link to={`${url}/edit-profile`}>
              <StageImageWrapper>
                <img src={editMark} alt="edit" />
              </StageImageWrapper>
            </Link>
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
            <Link to={`${url}/edit-contacts`}>
              <StageImageWrapper>
                <img src={editMark} alt="edit" />
              </StageImageWrapper>
            </Link>
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
            <Link to={`${url}/edit-capabilities`}>
              <StageImageWrapper>
                <img src={editMark} alt="edit" />
              </StageImageWrapper>
            </Link>
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

            {additionalInformation && (
              <>
                <span className="first-column">Additional information:</span>
                <span className="second-column">{additionalInformation}</span>
              </>
            )}
          </UserFieldsWrapper>
        </UserStageWrapper>
      </FlexWrapper>
    </ContentUserPageWrapper>
  );
};
