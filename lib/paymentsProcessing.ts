interface data {
    basket_id: string,
    txnamt: string,
    customer_email_address: string,
    account_type_id: string,
    customer_mobile_no: string,
    account_number: string,
    cnic_number: string,
    account_title: string,
    bank_code: string,
    order_date: string,
    otp_required: string,
    recurring_txn: string,
    otp: string,
    transaction_id: string
}

// We will now be using Payment Links and Authorization for protected Routes with Ckerk

export default async function paymentsProcessing(data:data) {
    const paymentURL = '';

    try {

const form = {
    'basket_id': '<basket_id>',
    'txnamt': '<total amount>',
    'customer_email_address': '<email>',
    'account_type_id': '3',
    'customer_mobile_no': '<mobile>',
    'account_number': '<bank account_number>',
    'cnic_number': '<cnic_number>',
    'account_title': '<account_title>',
    'bank_code': '<bank code>',
    'order_date': '<transaction date>',
    'otp_required': 'yes/no',
    'recurring_txn': 'yes/no',
    'otp': '<OTP>',
    'transaction_id': '<transaction_id>'
}
        const response = await fetch(paymentURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${process.env.PAYMENTS_API_KEY}`
            },
            form: data        
        })
        return response;
    } catch (error) {
        console.log(error, 'Payment was unable to complete.')
    }
}