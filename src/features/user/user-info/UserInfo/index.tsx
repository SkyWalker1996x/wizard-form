import { FlexWrapper } from 'UI/FlexWrapper';
import {
  HeaderUserPageWrapper,
  ContentUserPageWrapper,
  ImageWrapper,
  UserStageWrapper,
  UserFieldsWrapper,
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

  console.log('props', props.user);

  return (
    <FlexWrapper flexDirection="column" alignItems="center">
      <HeaderUserPageWrapper>
        <span>User list</span>
        <span>{username}</span>
      </HeaderUserPageWrapper>

      <ContentUserPageWrapper>
        <ImageWrapper>
          <img src={avatar} alt="avatar" />
        </ImageWrapper>

        <FlexWrapper flexDirection="column" rowGap="40px">
          <UserStageWrapper>
            <span>Account </span>

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
            <span>Personal </span>

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
                  <span className="second-column">...</span>
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
            <span>Contacts </span>

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
            <span>Capabilities </span>

            <UserFieldsWrapper>
              {skills && (
                <>
                  <span className="first-column">Skills:</span>
                  <span className="second-column">...</span>
                </>
              )}

              {hobbies && !!hobbies.length && (
                <>
                  <span className="first-column">Hobbies:</span>
                  <span className="second-column">
                    {hobbies.map((item, index) => {
                      return <span key={index}>{item};</span>;
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
