'use server';

import React from 'react';
import { Resend } from 'resend';

import { TFormSchema } from '@/components/contact';
import { EmailTemplate } from '@/email/email-template';
import { env } from '@/env.mjs';
// import { getErrorMessage, validateString } from '@/lib/utils';

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmail = async ({ email, message }: TFormSchema) => {
  // simple server-side validation
  // if (!validateString(senderEmail, 500)) {
  //   return {
  //     error: 'Invalid sender email',
  //   };
  // }
  // if (!validateString(message, 5000)) {
  //   return {
  //     error: 'Invalid message',
  //   };
  // }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'skolakmichal1@@gmail.com',
      subject: 'Message from contact form',
      reply_to: email,
      react: React.createElement(EmailTemplate, {
        message: message,
        senderEmail: email,
      }),
    });
  } catch (error: unknown) {
    return {
      error: 'Somenthing went wrong',
      // error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
