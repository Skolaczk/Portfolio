import * as React from 'react';

type TProps = {
  message: string;
  senderEmail: string;
};

export const EmailTemplate = ({ message, senderEmail }: TProps) => (
  <div>
    <p>{message}</p>
    <p>The sender email is: {senderEmail}</p>
  </div>
);
