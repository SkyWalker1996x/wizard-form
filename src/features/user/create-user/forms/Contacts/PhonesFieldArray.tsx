import { FieldArray, useFormikContext } from 'formik';

import { InputMask } from 'UI/InputMask';

import { PhoneWrapper } from './styles';

import minusMark from 'assets/minus-mark.svg';
import addMark from 'assets/add-mark.svg';

import { ICreateUserForm } from 'types/users';

export const PhonesFieldArray = () => {
  const formik = useFormikContext<ICreateUserForm>();

  return (
    <FieldArray
      name="phones"
      render={arrayHelpers => (
        <>
          {formik.values.phones.map((phone: string, index: number) => {
            const error = formik?.errors?.phones && formik?.errors?.phones[index];

            return (
              <PhoneWrapper key={index}>
                <InputMask
                  id={`phones[${index}]`}
                  name={`phones[${index}]`}
                  label={`Phone #${index + 1}`}
                  value={formik.values.phones[index]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  touched={formik?.touched?.phones}
                  error={error}
                />

                <button
                  className="remove-btn"
                  type="button"
                  onClick={() => arrayHelpers.remove(index)}
                  disabled={formik.values.phones.length === 1}
                >
                  <img src={minusMark} alt="remove phone" />
                </button>

                {index === formik.values.phones.length - 1 && index < 2 && (
                  <button className="add-button" onClick={() => arrayHelpers.push('')}>
                    <img src={addMark} alt="add phone" />
                    <span>add phone number</span>
                  </button>
                )}
              </PhoneWrapper>
            );
          })}
        </>
      )}
    />
  );
};
