export class PaymentDetail {
    paymentDetailsId:number;
    cardOwnerName:string;
    cardNumber:string;
    expirationDate:string;
    securityCode:string;

    /**
     *
     */
    constructor() {
        this.paymentDetailsId = 0;
        this.cardOwnerName = '';
        this.cardNumber = '';
        this.expirationDate = '';
        this.securityCode = '';
    }
}
