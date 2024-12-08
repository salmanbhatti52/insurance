import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FileOpener } from '@capacitor-community/file-opener';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Http } from '@capacitor-community/http';





@Component({
  selector: 'app-transreceipt',
  templateUrl: './transreceipt.page.html',
  styleUrls: ['./transreceipt.page.scss'],
})
export class TransreceiptPage implements OnInit {
  transReceipt: any;

  constructor(public location: Location,
    public api: InsuranceAppService,
    public navctrl: NavController,
    public router: Router) {
    this.getTransactionReceipt()
  }

  ngOnInit() {
  }

  goback() {
    this.location.back()
  }



  getTransactionReceipt() {
    this.api.showLoader();

    console.log('getTransactionReceipt==============', this.api.selectedTransaction);


    const myData =
      'myData={"verify_token":"' + localStorage.getItem('token') +
      '","transRef":"' + this.api.selectedTransaction.transactionReference +
      '","method":"getTransactionReceipt"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
        this.api.hideLoader();

        console.log('getTransactionReceipt==============', res);
        if (res.status_no == 1) {
          this.transReceipt = res.receiptURL;
          // this.open(this.transReceipt)


        }
      },
      (err) => {
        this.api.hideLoader();

        console.log(err);
      }
    );
  }


  async open(path) {
    await FileOpener.open({
      filePath: path,
      openWithDefault: true
    });
  }


  ////// Mobile Work

  async downloadPdf() {
    try {
      console.log('this.transReceipt---', this.transReceipt);

      // Step 1: Fetch the file as a Blob
      const response = await fetch(this.transReceipt);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();

      // Step 2: Convert the Blob to Base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Data = reader.result as string;
        const isoTimestamp = new Date().toISOString();
        const fileName = `Transaction_Receipt_${isoTimestamp}.pdf`;

        // Step 3: Save the PDF file locally
        await Filesystem.writeFile({
          path: fileName, // e.g., 'example.pdf'
          data: base64Data.split(',')[1], // Remove the `data:*/*;base64,` prefix
          directory: Directory.Documents, // Save to the Documents directory
        });

        console.log(`File saved: ${fileName}`);
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error('Error downloading or saving the PDF:', error);
    }
  }



  // //// Browser Work
  // async downloadPdf() {
  //   try {
  //     console.log('this.transReceipt---', this.transReceipt);

  //     // Step 1: Fetch the file as a Blob
  //     const response = await fetch(this.transReceipt);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const blob = await response.blob();

  //     // Step 2: Create a downloadable link
  //     const url = URL.createObjectURL(blob);
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.download = `Transaction_Receipt_${new Date().toISOString()}.pdf`;
  //     document.body.appendChild(link);
  //     link.click();

  //     // Step 3: Clean up
  //     document.body.removeChild(link);
  //     URL.revokeObjectURL(url);

  //     console.log('File downloaded successfully');
  //   } catch (error) {
  //     console.error('Error downloading the PDF:', error);
  //   }
  // }

}
