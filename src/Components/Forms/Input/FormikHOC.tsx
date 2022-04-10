import { useField } from 'formik';
import React, { cloneElement, ReactElement } from 'react';

type TFormikHOC = {
  name: string
  children: ReactElement
};

/**
 * HOC to pass in the useField hook into the field component.
 * If the input has isFormik={false} this wont get rendered.
 */
export default function FormikHOC({ name, children }: TFormikHOC) {
  const field = useField({ name });

  return (
    <>{cloneElement(children, { field })}</>
  );
}
