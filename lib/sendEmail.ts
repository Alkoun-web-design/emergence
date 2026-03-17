export default async function sendEmail(email: string, transactionalId: string) {

  // const dataVariables: { loginUrl: string } = {
  //   loginUrl: "https://myapp.com/login/",
  // };

  // const resp: { 
  //   success: boolean,
  //   path?: string,
  //   message?: string
  // } | {
  //   success: false;
  //   error: {
  //     path: string;
  //     message: string;
  //   };
  //   transactionalId?: string;
  // } = await loops.sendTransactionalEmail({
  //   transactionalId: "transaction_email_id",
  //   email: "user@gmail.com",
  //   dataVariables
  // });

  // if (!resp.success) {
  //   // The sending failed
  // } else {
  //   // The email was sent successfully
  // }

  const data = {
    email,
    transactionalId,
    dataVariables: {
      loginUrl: "https://myapp.com/login/?code=1234",
    },
  };
  
  return fetch("https://app.loops.so/api/v1/transactional", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
    },
    body: JSON.stringify(data),
  })

}
