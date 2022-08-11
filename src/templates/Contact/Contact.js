import React from 'react';
import { Button } from '../../components/Button/Button.styles';
import Heading from '../../components/Heading/Heading';
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper.styles';
import { Form } from './Contact.styles';

const Contact = () => {
  return (
    <SectionWrapper id='#contact' isDirtyBlue>
      <Heading
        title='Contact'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias
        laborum ratione dignissimos.'
      />
      <Form>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Enter your name'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
          />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            cols='30'
            rows='10'
            placeholder='Enter your message'
          />
        </div>
        <Button type='submit'>Submit</Button>
      </Form>
    </SectionWrapper>
  );
};

export default Contact;
