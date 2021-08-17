import {FieldArray, useFormikContext} from 'formik';

import { InputMask } from 'UI/InputMask';

import { PhoneWrapper } from './styles';

import minusMark from 'assets/minus-mark.svg';
import addMark from 'assets/add-mark.svg';

import { FixTypeLater } from 'types';

export const PhonesFieldArray = (props: FixTypeLater) => {
  const { formik } = props;
    const testFormik = useFormikContext();
    console.log('testFormik', testFormik);

  return (
    <FieldArray
      name="phones"
      render={arrayHelpers => (
        <>
          {formik.values.phones.map((phone: string, index: number) => (
            <PhoneWrapper key={index}>
              <InputMask
                id={`phones[${index}]`}
                name={`phones[${index}]`}
                label={`Phone #${index + 1}`}
                value={formik.values.phones[index]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik?.touched?.phones}
                error={formik?.errors?.phones}
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
          ))}
        </>
      )}
    />
  );
};
