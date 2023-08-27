import React, { FC } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';
import { FormComponentProps, FormElementProps, FORMTYPES } from '../types';
import { ScrollView, View } from 'react-native';
import { styles } from './style';
import { Button, ComponentSeparator, Container, Text } from 'lib_components';
import { FormInput } from 'lib_form_components';

interface FormBuilderProps {
  title?: string;
  submitText?: string;
  schema: AnyObjectSchema;
  formElements: FormElementProps[];
  onSubmit?: (data: FieldValues) => void;
}
export const FormBuilder: FC<FormBuilderProps> = (props: FormBuilderProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(props.schema),
  });
  return (
    <ScrollView style={styles.container}>
      {props.title && <Text style={styles.heading}>{props.title}</Text>}
      <ComponentSeparator space={20} style={styles.formContainer}>
        {props.formElements.map((element, index) => {
          let component;
          const error = errors[element.name];
          switch (element.type) {
            case FORMTYPES.INPUT:
              component = FormInput(element);
          }

          return (
            <Container key={index}>
              <Controller
                control={control}
                name={element.name}
                render={component as (field: FormComponentProps) => JSX.Element | undefined}
              />
              {error ? <Text style={styles.error}>{error.message}</Text> : null}
            </Container>
          );
        })}
      </ComponentSeparator>
      {props.onSubmit && (
        <Button text={props.submitText ?? 'Submit'} onPress={handleSubmit(props.onSubmit)} />
      )}
    </ScrollView>
  );
};
