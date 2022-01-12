import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-new-employer-information',
  templateUrl: './new-employer-information.component.html',
  styleUrls: ['./new-employer-information.component.css'],
})
export class NewEmployerInformationComponent implements OnInit {
  //compile to object
  //*** employer = {employerId:'',imageName:''}*/
  // using any because the values coming from the user is dynamic we not sure
  EmployerId: any = 0;
  ImageName: any = '';
  Name: any = '';
  RegistrationNumber: any = '';
  Industry: any = '';
  HomeCountry: any = '';
  PortalUrl: any = '';
  Email: any = '';
  WebSite: any = '';
  Address1: any = '';
  Address2: any = '';
  City: any = '';
  PostalCode: any = '';
  State: any = '';
  Country: any = '';
  Telephone: any = '';
  Fax: any = '';
  show: any = true;
  hide: any = false;
  //Array of countries of type string
  countries: string[] = [
    'Algeria',
    'Angola',
    'Cameroon',
    'Chad',
    'Comoros',
    'Djibouti',
    'Kenya',
    'Uganda',
    'Tanzania',
    'Kuwait',
    'Ghana',
    'Nigeria',
    'Rwanda',
    'Burundi',
    'SouthAfrica',
    'Canada',
    'Botswana',
    'Benin',
    'BurkinaFaso',
  ];
  //Array of industries  when declaring an array we dont use let we just state the name follow by type

  industries: string[] = [
    'Advertising/Marketing/PR',
    'Agriculture',
    'Automotive & Transport',
    'Banking',
    'Beverages',
    'Chemicals',
    'Computer Hardware',
    'Computer Software',
    'Education',
    'Financial Services',
    'Medical/Health Care',
    'Media/Publishing/Entertainment',
    'Pharmaceuticals',
    'Real Estate',
    'Travel Services',
    'Telecommunications Equipment',
    'Transportation Services',
    'Security Products & Services',
    'Other',
  ];
  //setting default image     'assets/images/micropoint.jpeg';   src="http://localhost:49986/image/{{ items.ImageName }}"
  //imageUrl: string = 'assets/images/micropoint.jpeg';
  imageUrl: string = 'http://localhost:49986/image/imageName';
  //imageUpdated: string = 'http://localhost:49986/image/';
  //creating name of the file to be uploaded
  Image: any;
  imageUrlOne: string;
  hideImageUrl = true;
  fileToUpload: File = null;
  constructor(
    private currentRoute: ActivatedRoute,
    public SharedService: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let EmployerId = this.currentRoute.snapshot.paramMap.get('id');
    console.log(EmployerId);
    if (EmployerId == null) this.ClearData();
    else {
      this.show = false;
      this.hide = true;
      this.SharedService.GetEmployerInfo(parseInt(EmployerId)).subscribe(
        (Response) => {
          console.log({ Response });

          this.EmployerId = Response.EmployerInfo.id;
          this.ImageName = Response.EmployerInfo.ImageName;
          this.Name = Response.EmployerInfo.Name;
          this.RegistrationNumber = Response.EmployerInfo.RegistrationNumber;
          this.Industry = Response.EmployerInfo.Industry;
          this.HomeCountry = Response.EmployerInfo.HomeCountry;
          this.PortalUrl = Response.EmployerInfo.PortalUrl;
          this.Email = Response.EmployerInfo.Email;
          this.WebSite = Response.EmployerInfo.WebSite;
          this.Address1 = Response.EmployerInfo.Address1;
          this.Address2 = Response.EmployerInfo.Address2;
          this.City = Response.EmployerInfo.City;
          this.PostalCode = Response.EmployerInfo.PostalCode;
          this.State = Response.EmployerInfo.State;
          this.Country = Response.EmployerInfo.Country;
          this.Telephone = Response.EmployerInfo.Telephone;
          this.Fax = Response.EmployerInfo.Fax;
        }
      );
    }
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    //to show the selected image create an object of file reader
    var reader = new FileReader();
    //ONLOAD EVENT
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(
    ImageName,
    Name,
    RegistrationNumber,
    Industry,
    HomeCountry,
    PortalUrl,
    Email,
    WebSite,
    Address1,
    Address2,
    City,
    PostalCode,
    State,
    Country,
    Telephone,
    Fax
  ) {
    let EmployerId = this.currentRoute.snapshot.paramMap.get('id');

    if (EmployerId == null) {
      this.SharedService.postEmployerInfo(
        this.fileToUpload,
        Name,
        RegistrationNumber,
        Industry,
        HomeCountry,
        PortalUrl,
        Email,
        WebSite,
        Address1,
        Address2,
        City,
        PostalCode,
        State,
        Country,
        Telephone,
        Fax
      ).subscribe((data) => {
        console.log('done');
        this.toastr.success('Added Successfuly', 'HR Management System');
        this.router.navigate(['/administrator/employer/information']);

        ImageName = null;
        Name.value = null;
        RegistrationNumber.value = null;
        Industry.value = null;
        HomeCountry.value = null;
        PortalUrl.value = null;
        Email.value = null;
        WebSite.value = null;
        Address1.value = null;
        Address2.value = null;
        City.value = null;
        PostalCode.value = null;
        State.value = null;
        Country.value = null;
        Telephone.value = null;
        Fax.value = null;
        this.imageUrl = this.ImageName;
      });
    } else {
      if (this.fileToUpload == null) {
        this.SharedService.UpdateEmployerInfo(
          EmployerId,
          ImageName,
          Name,
          RegistrationNumber,
          Industry,
          HomeCountry,
          PortalUrl,
          Email,
          WebSite,
          Address1,
          Address2,
          City,
          PostalCode,
          State,
          Country,
          Telephone,
          Fax
        ).subscribe((Response) => {
          this.toastr.info('Updated Successfuly', 'HR Management System');
          this.router.navigate(['/administrator/employer/information']);
        });
      } else {
        this.SharedService.UpdateEmployerInfo(
          EmployerId,
          ImageName,
          Name,
          RegistrationNumber,
          Industry,
          HomeCountry,
          PortalUrl,
          Email,
          WebSite,
          Address1,
          Address2,
          City,
          PostalCode,
          State,
          Country,
          Telephone,
          Fax
        ).subscribe((Response) => {
          this.SharedService.UpdateEmployeeImage(
            this.fileToUpload,
            EmployerId
          ).subscribe((Response) => {
            this.toastr.info('Updated Successfuly', 'HR Management System');
            this.router.navigate(['/administrator/employer/information']);
          });
        });
      }
    }
  }
  ClearData() {
    this.EmployerId = '';
    this.ImageName = '';
    this.Name = '';
    this.RegistrationNumber = '';
    this.Industry = '';
    this.HomeCountry = '';
    this.PortalUrl = '';
    this.Email = '';
    this.WebSite = '';
    this.Address1 = '';
    this.Address2 = '';
    this.City = '';
    this.PostalCode = '';
    this.State = '';
    this.Country = '';
    this.Telephone = '';
    this.Fax = '';
  }

  EmployerList() {
    this.router.navigate(['/administrator/employer/information']);
  }
  showForUpdate() {
    this.show = true;
    this.hide = false;
  }
}
