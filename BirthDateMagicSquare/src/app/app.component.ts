import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
//import {default as _rollupMoment} from 'moment';
import {MatRadioChange} from '@angular/material/radio'

const moment =  _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: number;
  
}
export interface TileCollection {
  special: boolean;
  zeros:number;
  repetition: number;
  tiles: Tile[] ;
  toDisplay: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class AppComponent implements OnInit{ 
  optionsselected:string='Day First';
  myTiles: TileCollection[];
  myCount: number=0;
  colorArray: string[] = ['lightblue','lightgreen','lightpink','#DDBDF1'];
  dayFirstMonthFirst = ['Day First', 'Month First', 'Year First'];
  title = 'BirthDateMagicSquare';
  
  
    mydate:Date;
    a:number;
    b:number;
    c:number;
    d:number;
    e:number;
    f:number;
    n1:number;
    n2:number;
    n3:number;
    n4:number;
    n5:number;
    n6:number;
    n7:number;
    n8:number;
    n9:number;
    n10:number;
    minReptition:number = 16;
    minZeros:number = 16;
    dayFirstorMonthFirst:string = 'Day First';
    ngOnInit(){
      
      this.selectChanged(new Date())
    }
    radioChange(event: MatRadioChange) {
      this.dayFirstorMonthFirst = event.value;
      this.selectChanged(this.mydate);
    }
    comparebday(mynumber:number)
    {
        return(mynumber != this.a && mynumber != this.b && mynumber != this.c && mynumber != this.d);
    }
    compare(mynumber:number)
    {
     
      return(mynumber != this.a && mynumber != this.b && mynumber != this.c && mynumber != this.d && mynumber != this.e  && mynumber != this.f);
    }
    comparen1()
    {
      
      return(this.n1 != this.n2 && this.n1 != this.n3 && this.n1 != this.n4 && this.n1 != this.n5 && this.n1 != this.n6 && this.n1 != this.n7 && this.n1 != this.n8 && this.n1 != this.n9 && this.n1 != this.n10);
    }
    comparen2()
    {
      
      return(this.n2 != this.n3 && this.n2 != this.n4 && this.n2 != this.n5 && this.n2 != this.n6 && this.n2 != this.n7 && this.n2 != this.n8 && this.n2 != this.n9 && this.n2 != this.n10);
    }
    comparen3()
    {
     
      return(this.n3 != this.n4 && this.n3 != this.n5 && this.n3 != this.n6 && this.n3 != this.n7 && this.n3 != this.n8 && this.n3 != this.n9 && this.n3 != this.n10);
    }
    comparen4()
    {
      
      return(this.n4 != this.n5 && this.n4 != this.n6 && this.n4 != this.n7 && this.n4 != this.n8 && this.n4 != this.n9 && this.n4 != this.n10);
    }
    comparen5()
    {
      
      return(this.n5 != this.n6 && this.n5 != this.n7 && this.n5 != this.n8 && this.n5 != this.n9 && this.n5 != this.n10);
    }
    comparen6()
    {
      
      return(this.n6 != this.n7 && this.n6 != this.n8 && this.n6 != this.n9 && this.n6 != this.n10);
    }
    comparen7()
    {
      
      return(this.n7 != this.n8 && this.n7 != this.n9 && this.n7 != this.n10);
    }
    comparen8()
    {
      
      return(this.n8 != this.n9 && this.n8 != this.n10);
    }
    comparen9()
    {
    
      return(this.n9 != this.n10);
    }
    
    selectChanged(date){
      this.mydate=new Date(date);
      console.log(this.mydate.getFullYear());
      if( this.dayFirstorMonthFirst == 'Day First' ) {
        this.a = this.mydate.getDate();
        this.b = this.mydate.getMonth()+1;       
        this.c = Math.floor(this.mydate.getFullYear() / 100);
        this.d = this.mydate.getFullYear() % 100;
      } else if( this.dayFirstorMonthFirst == 'Month First' ) {
        this.b = this.mydate.getDate();
        this.a = this.mydate.getMonth()+1;
        this.c = Math.floor(this.mydate.getFullYear() / 100);
        this.d = this.mydate.getFullYear() % 100;
      } else {

        this.d = this.mydate.getDate();
        this.c = this.mydate.getMonth()+1;
        this.a = Math.floor(this.mydate.getFullYear() / 100);
        this.b = this.mydate.getFullYear() % 100;

      }
      
      this.myTiles=[];
      for(this.e = 0;this.e <= (this.c + this.d);this.e++)
			{
				for (this.f = 0; this.f <= ((this.a + this.b) < (this.b + this.d) ? (this.a + this.b) : (this.b + this.d)); this.f++)
				{
          var repetition:number = 0;
          if(!this.comparebday(this.e)) {
            repetition++;
          }
          if(!this.comparebday(this.f) || !(this.e != this.f) ) {
            repetition++;
          }
					
          this.n1 = this.c + this.d - this.e;
          this.n2 = -this.b - this.d + this.e + 2 * this.f;
          this.n3 = this.a + 2 * this.b + this.d - this.e - 2 * this.f;
          this.n4 = this.a + this.b - this.f;
          this.n5 = this.b + this.d - this.f;
          this.n6 = -this.b + this.c + this.f;
          this.n7 = this.b + this.c + this.d - this.e - this.f;
          this.n8 = -this.b + this.e + this.f;
          this.n9 = this.a + this.b + this.d - this.e - this.f;
          this.n10 = -this.d + this.e + this.f;
          var zeros:number = 0;

          if (this.n1 >= 0 && this.n2 >= 0 && this.n3 >= 0 && this.n4 >= 0 && this.n5 >= 0 && this.n6 >= 0 && this.n7 >= 0 && this.n8 >= 0 && this.n9 >= 0 && this.n10 >= 0) {
            if(this.e==0) {
              zeros++;              
            }
            if(this.f==0) {
              zeros++;
            }
            if(this.n1==0) {
              zeros++;
            }
            if(this.n2==0) {
              zeros++;
            }
            if(this.n3==0) {
              zeros++;
            }
            if(this.n4==0) {
              zeros++;
            }
            if(this.n5==0) {
              zeros++;
            }
            if(this.n6==0) {
              zeros++;
            }
            if(this.n7==0) {
              zeros++;
            }
            if(this.n8==0) {
              zeros++;
            }
            if(this.n9==0) {
              zeros++;
            }
            if(this.n10==0) {
              zeros++;
            }
           
            if(!this.compare(this.n1) || !this.comparen1() ) {
              repetition++;
            }
            
            if(!this.compare(this.n2) || !this.comparen2() ) {
              repetition++;
            }
            if(!this.compare(this.n3) || !this.comparen3() ) {
              repetition++;
            }
            if(!this.compare(this.n4) || !this.comparen4() ) {
              repetition++;
            }
            if(!this.compare(this.n5) || !this.comparen5() ) {
              repetition++;
            }
            if(!this.compare(this.n6) || !this.comparen6() ) {
              repetition++;
            }
            if(!this.compare(this.n7) || !this.comparen7() ) {
              repetition++;
            }
            if(!this.compare(this.n8) || !this.comparen8() ) {
              repetition++;
            }
            if(!this.compare(this.n9) || !this.comparen9() ) {
              repetition++;
            }
            if(!this.compare(this.n10) ) {
              repetition++;
            }


            var tilesHere:Tile[]= [
              {text: 1, cols: 1, rows: 1, color: 'lightblue'},
              {text: 2, cols: 1, rows: 1, color: 'lightgreen'},
              {text: 3, cols: 1, rows: 1, color: 'lightpink'},
              {text: 4, cols: 1, rows: 1, color: '#DDBDF1'},
              {text: 5, cols: 1, rows: 1, color: 'lightgreen'},
              {text: 6, cols: 1, rows: 1, color: 'lightblue'},
              {text: 7, cols: 1, rows: 1, color: '#DDBDF1'},
              {text: 8, cols: 1, rows: 1, color: 'lightpink'},
              {text: 9, cols: 1, rows: 1, color: 'lightpink'},
              {text: 10, cols: 1, rows: 1, color: '#DDBDF1'},
              {text: 11, cols: 1, rows: 1, color: 'lightblue'},
              {text: 12, cols: 1, rows: 1, color: 'lightgreen'},
              {text: 13, cols: 1, rows: 1, color: '#DDBDF1'},
              {text: 14, cols: 1, rows: 1, color: 'lightpink'},
              {text: 15, cols: 1, rows: 1, color: 'lightgreen'},
              {text: 16, cols: 1, rows: 1, color: 'lightblue'}
            ];
            var i:number;
            // for(i=0;i<16;i++) {
            //   tilesHere[i].cols = 1;
            //   tilesHere[i].rows = 1;
            //   tilesHere[i].color= this.colorArray[(i+i/4)%4];
            // }
            var special:boolean = (2 * this.f) == (this.a + this.b - this.c + this.d);
            
            tilesHere[0].text = this.a;
            tilesHere[1].text = this.b;
            tilesHere[2].text = this.c;
            tilesHere[3].text = this.d;;
            tilesHere[4].text = this.e;
            tilesHere[5].text = this.n1;;
            tilesHere[6].text = this.n2;;
            tilesHere[7].text = this.n3;
            tilesHere[8].text = this.f
            tilesHere[9].text = this.n4;
            tilesHere[10].text = this.n5;
            tilesHere[11].text = this.n6;
            tilesHere[12].text = this.n7;
            tilesHere[13].text = this.n8;
            tilesHere[14].text = this.n9;
            tilesHere[15].text = this.n10;
            var tileCollection:TileCollection = {repetition:repetition,special:special,zeros:zeros,tiles:tilesHere,toDisplay:false}
            this.myTiles.push(tileCollection);

          }
				}
      }
      var specailRepition: number = 16;
      var specialZeros: number = 16;
      this.minReptition = 16;
      this.minZeros = 16;
      this.myTiles.forEach(element => {
        if(element.repetition <= this.minReptition) {
          this.minReptition = element.repetition;
          if(element.zeros <= this.minZeros) {
            this.minZeros = element.zeros;
          }
        }
        
        if(element.special){
          if(element.repetition <= specailRepition) {
            specailRepition = element.repetition;
            if(element.zeros <= specialZeros) {
              specialZeros = element.zeros;
            }
          }
          
        }
        
      });
      this.myTiles.forEach(element => {        
        element.toDisplay = ( ( (element.repetition == this.minReptition) && (element.zeros == this.minZeros) ) 
          || ( (element.special) && ( (element.zeros==specialZeros && element.repetition==specailRepition) ) ) );
      });
    }
    
  
  }

