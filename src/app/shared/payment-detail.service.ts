import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  baseURL = "https://localhost:44322/api/PaymentDetail"
  formData: PaymentDetail = new PaymentDetail();
 
  list: PaymentDetail[];

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetail(): Observable<FormData> {
    return this.http.put<FormData>(`${this.baseURL}/${this.formData.paymentDetailsId}`, this.formData);
  }

  deletePaymentDetail(paymentDetailId: number): Observable<FormData> {
   return this.http.delete<FormData>(this.baseURL + '/' + paymentDetailId);
   //return this.getPaymentDetailId(paymentDetailId);
  }

  getPaymentDetailId(){
    return this.formData.paymentDetailsId;
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }
}
