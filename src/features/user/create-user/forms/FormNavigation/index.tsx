import { FORM_STAGES } from 'app/app-constants';

import { FormNavigationWrapper, FormNavItem } from './styles';

interface IFormNavigationProps {
  activeStep: number;
}

export const FormNavigation = (props: IFormNavigationProps) => {
  const { activeStep } = props;

  return (
    <FormNavigationWrapper>
      {FORM_STAGES.map(({ id, name }) => {
        return (
          <FormNavItem
            key={id}
            active={id === activeStep}
            completed={activeStep > id}
          >
            {`${id}. ${name}`}
          </FormNavItem>
        );
      })}
    </FormNavigationWrapper>
  );
};
