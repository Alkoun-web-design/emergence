const dataVariables: { loginUrl: string } = {
  loginUrl: "https://myapp.com/login/",
};

const resp: {
  success: boolean,
  path?: string,
  message?: string
} | {
  success: false;
  error: {
    path: string;
    message: string;
  };
  transactionalId?: string;
} = await loops.sendTransactionalEmail({
  transactionalId: "transaction_email_id",
  email: "user@gmail.com",
  dataVariables
});

if (!resp.success) {
  // The sending failed
} else {
  // The email was sent successfully
}