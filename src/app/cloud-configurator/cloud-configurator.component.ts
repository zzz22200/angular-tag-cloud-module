import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  CloudData,
  CloudOptions,
  TagCloudComponent,
} from '../../../projects/angular-tag-cloud-module/src/public-api';

import { randomData } from '../helpers';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cloud-configurator',
  templateUrl: './cloud-configurator.component.html',
  styleUrls: ['./cloud-configurator.component.css'],
})
export class CloudConfiguratorComponent implements OnInit {
  @ViewChild(TagCloudComponent, { static: true })
  tagCloudComponent!: TagCloudComponent;
  cloudDataForm!: FormGroup;
  cloudConfigForm!: FormGroup;
  data: CloudData[] = [];

  defaultCloudOptions: CloudOptions = {
    width: 0.93,
    height: 485,
    overflow: false,
    strict: false,
    realignOnResize: true,
    randomizeAngle: true,
    zoomOnHover: {
      scale: 1.2,
      transitionTime: 0.6,
      delay: 0.1,
      // color: '#33bb33',
    },
    step: 5,
    log: 'debug',
    delay: 50,
  };

  exampleDataOptions = {
    amount: 40,
    rotate: true,
    data: JSON.stringify(this.data, null, 2),
  };

  colorMap = { Keith: '#755F1A', Mira: '#FFD600', Kallan: '#C9BDEB', Owen: '#3585BD' };
  pointMap = { Keith: 0, Mira: 0, Kallan: 0, Owen: 0 };

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.cloudDataForm = this.fb.group({
      ...this.exampleDataOptions,
    });

    this.cloudConfigForm = this.fb.group({
      ...this.defaultCloudOptions,
      zoomOnHover: this.fb.group(this.defaultCloudOptions.zoomOnHover || {}),
      customStyle: true,
      font: 'italic bold 14px "Indie Flower", cursive',
    });

    // this.getNewExampleData();
    this.initData();
    this.getData();
  }

  log(eventType: string, e?: any) {
    console.log(eventType, e);
  }

  clickItem(item?: any) {
    this.answerWord(item.text);
  }

  initData() {
    this.data = [
      {
        "text": "紳士",
        "weight": 8,
        "external": false,
        "rotate": 14.109289478270014,
        "tooltip": "Owen",
        "color": "#000000",
        "position": {
          "left": 308.475,
          "top": 214
        }
      },
      {
        "text": "飯桶",
        "weight": 8,
        "external": true,
        "rotate": -24.178766905204725,
        "tooltip": "Nobody",
        "color": "#000000",
        "position": {
          "left": 442.2240853548395,
          "top": 183.18016295681218
        }
      },
      {
        "text": "正向",
        "weight": 6,
        "color": "#000000",
        "external": true,
        "rotate": -14.520980254939165,
        "tooltip": "Keith",
        "position": {
          "left": 570.80297008845,
          "top": 212.98301503595425
        }
      },
      {
        "text": "知性",
        "weight": 6,
        "color": "#000000",
        "external": false,
        "rotate": 14.402355606779343,
        "tooltip": "Mira",
        "position": {
          "left": 583.656903005623,
          "top": 295.9367885645012
        }
      },
      {
        "text": "溫柔和善",
        "weight": 6,
        "color": "#000000",
        "external": false,
        "rotate": 12.012472201245483,
        "tooltip": "Mira",
        "position": {
          "left": 577.7212331306558,
          "top": 149.79845892349175
        }
      },
      {
        "text": "像貓咪",
        "weight": 6,
        "color": "#000000",
        "external": true,
        "rotate": 7.700091469901521,
        "tooltip": "Kallan",
        "position": {
          "left": 249.88300916489348,
          "top": 168.8443558680837
        }
      },
      {
        "text": "懂吃懂喝",
        "weight": 6,
        "color": "#000000",
        "external": false,
        "rotate": -21.380271530542878,
        "tooltip": "Keith",
        "position": {
          "left": 179.59865290513838,
          "top": 238.43708698182002
        }
      },
      {
        "text": "龎帝顏值擔當",
        "weight": 6,
        "external": false,
        "rotate": 5.86183440565054,
        "tooltip": "Kallan",
        "color": "#000000",
        "position": {
          "left": 396.454800110349,
          "top": 324.99999946141594
        }
      },
      {
        "text": "不按牌理出牌",
        "weight": 5,
        "external": false,
        "rotate": -1.4248914473578789,
        "tooltip": "No Body",
        "color": "#000000",
        "position": {
          "left": 663.171340543121,
          "top": 250.6192187909366
        }
      },
      {
        "text": "好爸爸",
        "weight": 5,
        "color": "#000000",
        "external": false,
        "rotate": -23.545742535277842,
        "tooltip": "Owen",
        "position": {
          "left": 314.4836961140464,
          "top": 107.97698719314275
        }
      },
      {
        "text": "時間管理大師",
        "weight": 5,
        "color": "#000000",
        "external": true,
        "rotate": -15.220214888783762,
        "tooltip": "Nobody",
        "position": {
          "left": 401.8424250985537,
          "top": 391.9944557816593
        }
      },
      {
        "text": "酒鬼",
        "weight": 5,
        "color": "#000000",
        "external": false,
        "rotate": 8.47807155077649,
        "tooltip": "Mira",
        "position": {
          "left": 338.80965804939393,
          "top": 170.72409678181995
        }
      },
      {
        "text": "健談",
        "weight": 5,
        "color": "#000000",
        "external": false,
        "rotate": 2.800813373817973,
        "tooltip": "Keith",
        "position": {
          "left": 526.7551644773729,
          "top": 113.75954864651962
        }
      },
      {
        "text": "喜歡阿飄",
        "weight": 5,
        "color": "#000000",
        "external": false,
        "rotate": 13.076078989917661,
        "tooltip": "Nobody",
        "position": {
          "left": 648.9655185860277,
          "top": 94.27589717368593
        }
      },
      {
        "text": "潔癖",
        "weight": 5,
        "color": "#000000",
        "external": true,
        "rotate": 3.18621591053897,
        "tooltip": "Kallan",
        "position": {
          "left": 436.67378300738886,
          "top": 122.20620318612706
        }
      },
      {
        "text": "髮質很好",
        "weight": 5,
        "color": "#000000",
        "external": false,
        "rotate": -1.065050389128086,
        "tooltip": "Mira",
        "position": {
          "left": 282.6706,
          "top": 337.8107582355337
        }
      },
      {
        "text": "EQ 很好",
        "weight": 5,
        "color": "#000000",
        "external": false,
        "rotate": -21.98231600986526,
        "tooltip": "Keith",
        "position": {
          "left": 695.4550925346742,
          "top": 195.46978838688375
        }
      },
      {
        "text": "工程部重要的人",
        "weight": 4,
        "color": "#000000",
        "external": false,
        "rotate": 13.5087645325073,
        "tooltip": "Keith",
        "position": {
          "left": 720.1069617797665,
          "top": 316.5828715053107
        }
      },
      {
        "text": "公司內定人選",
        "weight": 4,
        "color": "#000000",
        "external": true,
        "rotate": -1.8223899550095457,
        "tooltip": "Nobody",
        "position": {
          "left": 113.039514920687,
          "top": 300.2720417279533
        }
      },
      {
        "text": "孩子的媽",
        "weight": 4,
        "color": "#000000",
        "external": true,
        "rotate": 24.48729212914305,
        "tooltip": "Nobody",
        "position": {
          "left": 315.37377423713116,
          "top": 427
        }
      },
      {
        "text": "很有自信",
        "weight": 4,
        "external": false,
        "rotate": 0.9524698339153537,
        "tooltip": "Kallan",
        "color": "#000000",
        "position": {
          "left": 480.8478621102552,
          "top": 75.50560893959326
        }
      },
      {
        "text": "很會忍痛",
        "weight": 4,
        "color": "#000000",
        "external": false,
        "rotate": -12.197284171663863,
        "tooltip": "Kallan",
        "position": {
          "left": 196.32258970553337,
          "top": 124.20290924870034
        }
      },
      {
        "text": "熱心",
        "weight": 4,
        "color": "#000000",
        "external": true,
        "rotate": 19.526903810520785,
        "tooltip": "Owen",
        "position": {
          "left": 388.74853692490495,
          "top": 92.38267889058287
        }
      },
      {
        "text": "大胃王",
        "weight": 3,
        "external": true,
        "rotate": -6.877956668959778,
        "tooltip": "Nobody",
        "color": "#000000",
        "position": {
          "left": 576.1095032205625,
          "top": 107.35926460785726
        }
      },
      {
        "text": "工程部扛壩子",
        "weight": 3,
        "color": "#000000",
        "external": true,
        "rotate": -16.719155466702052,
        "tooltip": "Owen",
        "position": {
          "left": 574.6561985302529,
          "top": 369.80412873132656
        }
      },
      {
        "text": "藍色衣服",
        "weight": 3,
        "color": "#000000",
        "external": false,
        "rotate": -3.2635994239312627,
        "tooltip": "Owen",
        "position": {
          "left": 164.5714834865745,
          "top": 340.1808377470518
        }
      },
      {
        "text": "打字很大聲",
        "weight": 3,
        "color": "#000000",
        "external": false,
        "rotate": -22.815437335301002,
        "tooltip": "Keith",
        "position": {
          "left": 553.2735415116655,
          "top": 430.71663846138483
        }
      },
      {
        "text": "很有條理",
        "weight": 3,
        "color": "#000000",
        "external": false,
        "rotate": -7.813030979264274,
        "tooltip": "Mira",
        "position": {
          "left": 209.43669190167083,
          "top": 81.33052779025888
        }
      },
      {
        "text": "喜歡說故事",
        "weight": 3,
        "color": "#000000",
        "external": false,
        "rotate": -0.22965202308995458,
        "tooltip": "Nobody",
        "position": {
          "left": 824.0602196740848,
          "top": 198.4577521005795
        }
      },
      {
        "text": "說謊不眨眼",
        "weight": 3,
        "color": "#000000",
        "external": false,
        "rotate": 7.058258931449562,
        "tooltip": "No Body",
        "position": {
          "left": 386.3266205328707,
          "top": 454.3795514408058
        }
      },
      {
        "text": "力氣大",
        "weight": 2,
        "color": "#000000",
        "external": true,
        "rotate": -20.75989278319427,
        "tooltip": "Kallan",
        "position": {
          "left": 510.2948423169488,
          "top": 39.896612985049245
        }
      },
      {
        "text": "工程部最帥",
        "weight": 2,
        "color": "#000000",
        "external": true,
        "rotate": 7.466144417463977,
        "tooltip": "Nobody",
        "position": {
          "left": 166.16153079333668,
          "top": 191.7068777948839
        }
      },
      {
        "text": "吃飯吃很快",
        "weight": 2,
        "external": false,
        "rotate": -9.655773308108751,
        "tooltip": "Nobody",
        "color": "#000000",
        "position": {
          "left": 465.1802652354716,
          "top": 290.7235961486033
        }
      },
      {
        "text": "秀外慧中，蕙質蘭心",
        "weight": 2,
        "external": true,
        "rotate": 22.896910876914223,
        "tooltip": "Mira",
        "color": "#000000",
        "position": {
          "left": 185.5033245528624,
          "top": 396.25746647301673
        }
      },
      {
        "text": "南勢角公主",
        "weight": 2,
        "color": "#000000",
        "external": true,
        "rotate": -19.95333475106503,
        "tooltip": "Mira",
        "position": {
          "left": 806.6862222256686,
          "top": 236.5404230644693
        }
      },
      {
        "text": "超快速運轉",
        "weight": 2,
        "color": "#000000",
        "external": true,
        "rotate": -12.76374670845576,
        "tooltip": "Keith",
        "position": {
          "left": 642.8050235270739,
          "top": 316.4097791325818
        }
      },
      {
        "text": "運動健將、女中豪傑",
        "weight": 2,
        "color": "#000000",
        "external": false,
        "rotate": -9.358295130887301,
        "tooltip": "Kallan",
        "position": {
          "left": 30.54526946230476,
          "top": 140.7426439193992
        }
      },
      {
        "text": "謙謙君子、溫文儒雅",
        "weight": 2,
        "color": "#000000",
        "external": true,
        "rotate": -14.828531133992783,
        "tooltip": "Owen",
        "position": {
          "left": 28.278829077292983,
          "top": 353.49676062072155
        }
      },
      {
        "text": "騎車登山",
        "weight": 2,
        "color": "#000000",
        "external": true,
        "rotate": -13.727276009355965,
        "tooltip": "Owen",
        "position": {
          "left": 576.969187413548,
          "top": 71.39223997271895
        }
      },
      {
        "text": "英文名字很長",
        "weight": 1,
        "color": "#000000",
        "external": false,
        "rotate": -11.760138204595872,
        "tooltip": "Nobody",
        "position": {
          "left": 359.5447048220263,
          "top": 58.33587252225513
        }
      },
      {
        "text": "喜歡打籃球",
        "weight": 1,
        "color": "#000000",
        "external": true,
        "rotate": -7.45155234826203,
        "tooltip": "Nobody",
        "position": {
          "left": 73.21999435177293,
          "top": 187.8726069403184
        }
      }
    ];
    this.data.map(res => {
      res.color = '#000000';
      res.rotate=(Math.random() < 0.5 ? -1 : 1)*( Math.random()*25)
      return res;
    });
  }

  getData() {
    this.setData(
      this.data,
    );
  }

  getNewExampleData() {
    this.setData(
      randomData(
        this.cloudDataForm.value.amount,
        this.cloudDataForm.value.rotate,
      ),
    );
  }

  renderJsonData() {
    try {
      this.data = JSON.parse(this.cloudDataForm.value.data);
    } catch (error) {
      this.snackBar.open(error as string, 'Ok, got it!', {
        duration: 2500,
      });
    }
  }

  reDraw() {
    let data: CloudData[] = [];
    try {
      data = JSON.parse(this.cloudDataForm.value.data);
    } catch (error) {
      this.snackBar.open(
        'Error parsing JSON. Fall back to random data.' + error,
        'Ok, got it!',
        {
          duration: 3000,
        },
      );
      data = randomData(30);
    }

    const changedData$: Observable<CloudData[]> = of(data);
    changedData$.subscribe((res) => this.setData(res));
    this.tagCloudComponent.reDraw();
  }

  private setData(data: CloudData[]) {
    this.data = data;
    this.cloudDataForm
      .get('data')
      ?.setValue(JSON.stringify(this.data, null, 2));
  }

  answerWord(word: string) {
    let selectWord = this.data.filter(res => res.text === word)[0];
    // console.log(this.colorMap[selectWord.tooltip])
    // @ts-ignore
    if (!this.colorMap[selectWord.tooltip]) {
      this.data.filter(res => res.text === word)[0].color = '#D3D3D3';
    } else {
      // @ts-ignore
      this.data.filter(res => res.text === word)[0].color = this.colorMap[selectWord.tooltip];
      // @ts-ignore
      this.pointMap[selectWord.tooltip]++
    }
    this.setData(this.data);
    this.reDraw();
  }
}
