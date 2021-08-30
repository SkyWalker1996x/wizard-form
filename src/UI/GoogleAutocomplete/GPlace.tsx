import { useEffect, useRef, useCallback, memo } from 'react';

import { TextInputWrapper } from 'UI/TextInput/styles';

import { IGPACProps } from './index';

const GPlace = memo((props: IGPACProps) => {
  const { label, required, id, name, onChange, defaultValue } = props;
  const placeInputRef = useRef<HTMLInputElement>(null);

  const initPlaceAPI = useCallback(() => {
    if (placeInputRef.current) {
      let autocomplete = new window.google.maps.places.Autocomplete(
        placeInputRef.current
      );
      window.google.maps.event.addListener(autocomplete, 'place_changed', function () {
        let place = autocomplete.getPlace();

        if (onChange) {
          onChange(name, place.formatted_address);
        }
      });
    }
  }, [onChange, name]);

  useEffect(() => {
    initPlaceAPI();
  }, [initPlaceAPI]);

  return (
    <TextInputWrapper>
      <label>
        <span>{label}</span>
        {required && <span>*</span>}
      </label>
      <input
        id={id}
        name={name}
        type="text"
        ref={placeInputRef}
        defaultValue={defaultValue}
      />
    </TextInputWrapper>
  );
});

export default GPlace;
