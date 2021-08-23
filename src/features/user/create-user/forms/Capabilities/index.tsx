import { useFormikContext } from 'formik';

import { SKILLS, CHECKBOXES } from 'app/app-constants';

import { transformArrToSelectOptions } from 'utils/data';

import { ICreateUserForm } from 'types/users';

import { FlexWrapper } from 'UI/FlexWrapper';
import { Select } from 'UI/Select';
import { TextArea } from 'UI/TextArea';
import { CheckBox } from 'UI/Checkbox';

import { CapabilitiesWrapper } from './styles';

const skillsOptions = transformArrToSelectOptions(SKILLS);

export const CapabilitiesForm = () => {
  const formik = useFormikContext<ICreateUserForm>();

  return (
    <CapabilitiesWrapper columnGap="170px">
      <FlexWrapper flexDirection="column" rowGap="24px">
        <Select
          onChange={formik.setFieldValue}
          onBlur={formik.handleBlur}
          label="Skills"
          value={formik.values.skills}
          options={skillsOptions}
          name={'skills'}
          id={'skills'}
          isMulti={true}
          touched={formik.touched.skills}
          error={formik.errors.skills}
          required={true}
        />

        <TextArea
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Additional information"
          value={formik.values.additionalInformation}
          name={'additionalInformation'}
          id={'additionalInformation'}
          touched={formik.touched.additionalInformation}
          error={formik.errors.additionalInformation}
        />
      </FlexWrapper>

      <FlexWrapper flexDirection="column" rowGap="10px">
        <span>My hobbies</span>

        {CHECKBOXES.map((item, index) => {
          return (
            <CheckBox
              key={item}
              id={`${item}_${index}`}
              name="hobbies"
              value={item}
              onChange={formik.handleChange}
              checked={formik.values.hobbies.includes(item)}
            />
          );
        })}
      </FlexWrapper>
    </CapabilitiesWrapper>
  );
};
