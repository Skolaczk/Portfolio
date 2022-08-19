import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../components/Button/Button.styles';
import Heading from '../../components/Heading/Heading';
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper.styles';
import {
  Form,
  StyledError,
  StyledInput,
  StyledSuccess,
  StyledTextarea,
} from './Contact.styles';

const Contact = () => {
  const [formState, setFormState] = useState('');
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name field is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email field is required'),
      message: Yup.string().required('Message field is required'),
    }),
    onSubmit: (values) => {
      emailjs
        .send(
          'service_d9vzxwe',
          'template_6tks05k',
          values,
          '2s2uEoR1pGkeLEhIr',
        )
        .then(() => {
          formik.resetForm();
          setFormState('Thanks for your message. I will be in touch shortly.');
        });
    },
  });

  return (
    <SectionWrapper id='contact' isDirtyBlue>
      <Heading
        title='Contact'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias
        laborum ratione dignissimos.'
      />
      <Form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <StyledInput
            type='text'
            name='name'
            id='name'
            placeholder='Enter your name'
            onChange={formik.handleChange}
            value={formik.values.name}
            isError={formik.touched.name && formik.errors.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <StyledError>{formik.errors.name}</StyledError>
          ) : (
            ''
          )}
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <StyledInput
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            onChange={formik.handleChange}
            value={formik.values.email}
            isError={formik.touched.email && formik.errors.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <StyledError>{formik.errors.email}</StyledError>
          ) : (
            ''
          )}
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <StyledTextarea
            as="textarea"
            name='message'
            id='message'
            placeholder='Enter your message'
            onChange={formik.handleChange}
            value={formik.values.message}
            isError={formik.touched.message && formik.errors.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <StyledError>{formik.errors.message}</StyledError>
          ) : (
            ''
          )}
        </div>
        <Button disabled={formik.isSubmitting} type='submit'>
          Submit
        </Button>
        {formState ? <StyledSuccess>{formState}</StyledSuccess> : ''}
      </Form>
    </SectionWrapper>
  );
};

export default Contact;
