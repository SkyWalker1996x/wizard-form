import { LANGUAGES } from 'app/app-constants';

import { TextInput } from 'UI/TextInput';
import { InputMask } from 'UI/InputMask';
import { FlexWrapper } from 'UI/FlexWrapper';
import { Select } from 'UI/Select';

import { transformToSelectOptions } from 'utils/data';
import { FixTypeLater } from 'types';

const langOptions = transformToSelectOptions(LANGUAGES);

export interface IContactsForm {
  company: string;
  githubLink: string;
  facebookLink: string;
  mainLang: { value: string; label: string } | undefined;
  fax: string;
  phones: Array<string>;
}

export const ContactsForm = (props: FixTypeLater) => {
  const { formik } = props;

  return (
    <FlexWrapper columnGap="170px">
      <FlexWrapper flexDirection="column" rowGap="24px">
        <TextInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Company"
          value={formik.values.company}
          name="company"
          id="company"
          touched={formik.touched.company}
          error={formik.errors.company}
          required={true}
        />

        <TextInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Github Link"
          value={formik.values.githubLink}
          name="githubLink"
          id="githubLink"
          touched={formik.touched.githubLink}
          error={formik.errors.githubLink}
        />

        <TextInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Facebook Link"
          value={formik.values.facebookLink}
          name="githubLink"
          id="githubLink"
          touched={formik.touched.facebookLink}
          error={formik.errors.facebookLink}
        />

        <Select
          onChange={formik.setFieldValue}
          onBlur={formik.handleBlur}
          label="Main Language"
          value={formik.values.mainLang}
          options={langOptions}
          name={'mainLanguage'}
          id={'mainLanguage'}
          touched={formik.touched.facebookLink}
          error={formik.errors.facebookLink}
        />
      </FlexWrapper>

      <FlexWrapper flexDirection="column" rowGap="24px">
        <InputMask
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Fax"
          value={formik.values.fax}
          name="fax"
          id="fax"
          touched={formik.touched.fax}
          error={formik.errors.fax}
        />
      </FlexWrapper>
    </FlexWrapper>
  );
};
