import { memo } from 'react';
import { SKILLS, CHECKBOXES } from 'app/app-constants';

import { FlexWrapper } from 'UI/FlexWrapper';
import { Select } from 'UI/Select';
import { TextArea } from 'UI/TextArea';
import { CheckBox } from 'UI/Checkbox';

import { transformArrToSelectOptions } from 'utils/data';
import { FixTypeLater } from 'types';

const skillsOptions = transformArrToSelectOptions(SKILLS);

export interface ICapabilitiesForm {
  skills: Array<{ value: string; label: string }>;
  addInformation: string;
  hobbies: string[];
}

export const CapabilitiesForm = memo((props: FixTypeLater) => {
  const { formik } = props;

  return (
    <FlexWrapper columnGap="170px">
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
          value={formik.values.addInformation}
          name={'addInformation'}
          id={'addInformation'}
          touched={formik.touched.addInformation}
          error={formik.errors.addInformation}
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
            />
          );
        })}
      </FlexWrapper>
    </FlexWrapper>
  );
});
