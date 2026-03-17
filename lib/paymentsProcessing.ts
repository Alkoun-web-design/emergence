export default async function paymentsProcessing(data:string) {

    try {


        console.log(data, 'Payment has been completed successfully!')
    } catch (error) {
        console.log(error, 'Payment was unable to complete.')
    }
}