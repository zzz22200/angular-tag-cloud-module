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
    width: 1150,
    height: 550,
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
      background: 'url("../../assets/backgroud.png") no-repeat',
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
        'text': '工程師',
        'weight': 9,
        'color': '#33bbb5',
        'external': false,
        'rotate': 0,
        'tooltip': 'Keith',
      },
      {
        'text': '人很好',
        'weight': 3,
        'color': '#000000',
        'external': false,
        'rotate': 0,
        'tooltip': 'Keith',
      },
      {
        'text': 'EQ 很好',
        'weight': 5,
        'color': '#000000',
        'external': false,
        'rotate': 0,
        'tooltip': 'Keith',
      },
      {
        'text': '健談',
        'weight': 6,
        'color': '#000000',
        'external': false,
        'rotate': 0,
        'tooltip': 'Keith',
      },
      {
        'text': '懂吃懂喝',
        'weight': 6,
        'color': '#000000',
        'external': false,
        'rotate': 0,
        'tooltip': 'Keith',
      },
      {
        'text': '秀外慧中，蕙質蘭心',
        'weight': 2,
        'color': '#000000',
        'external': false,
        'rotate': 11,
        'tooltip': 'Mira',
      },
      {
        'text': '髮質很好',
        'weight': 5,
        'color': '#000000',
        'external': false,
        'rotate': 19,
        'tooltip': 'Mira',
      },
      {
        'text': '很有條理',
        'weight': 3,
        'color': '#000000',
        'external': false,
        'rotate': -3,
        'tooltip': 'Mira',
      },
      {
        'text': '很溫柔',
        'weight': 10,
        'color': '#000000',
        'external': false,
        'rotate': 6,
        'tooltip': 'Mira',
      },
      {
        'text': '認真',
        'weight': 5,
        'color': '#000000',
        'external': false,
        'rotate': 0,
        'tooltip': 'Mira',
      },
      {
        'text': '工程部扛壩子',
        'weight': 3,
        'color': '#000000',
        'external': true,
        'rotate': 0,
        'tooltip': 'Owen',
      },
      {
        'text': '謙謙君子',
        'weight': 6,
        'color': '#000000',
        'external': false,
        'rotate': -14,
        'tooltip': 'Owen',
      },
      {
        'text': '熱心',
        'weight': 7,
        'color': '#000000',
        'external': true,
        'rotate': -14,
        'tooltip': 'Owen',
      },
      {
        'text': '紳士',
        'weight': 8,
        'external': false,
        'rotate': 0,
        'tooltip': 'Owen',
      },
      {
        'text': '人很nice',
        'weight': 8,
        'color': '#4b131b',
        'external': false,
        'rotate': 0,
        'tooltip': 'Owen',
      },
      {
        'text': '龎帝顏值擔當',
        'weight': 4,
        'external': false,
        'rotate': 0,
        'tooltip': 'Kallan',
      },
      {
        'text': '很有自信',
        'weight': 7,
        'external': false,
        'rotate': 0,
        'tooltip': 'Kallan',
      },
      {
        'text': '很會忍痛',
        'weight': 5,
        'color': '#58b77f',
        'external': false,
        'rotate': 0,
        'tooltip': 'Kallan',
      },
      {
        'text': '不會說中文',
        'weight': 5,
        'color': '#1b452',
        'external': true,
        'rotate': 0,
        'tooltip': 'Kallan',
      },
      {
        'text': '水',
        'weight': 3,
        'color': '#efe244',
        'external': true,
        'rotate': 0,
        'tooltip': 'Kallan',
      },
      {
        'text': '混肴',
        'weight': 5,
        'external': true,
        'rotate': 0,
        'tooltip': 'No Body',
      },
      {
        'text': '混肴',
        'weight': 5,
        'color': '#17974e',
        'external': true,
        'rotate': 0,
        'tooltip': 'No Body',
      },
      {
        'text': '混肴',
        'weight': 2,
        'color': '#4877e7',
        'external': false,
        'rotate': 11,
        'tooltip': 'No Body',
      },
      {
        'text': '混肴',
        'weight': 5,
        'external': false,
        'rotate': 0,
        'tooltip': 'No Body',
      },
      {
        'text': '混肴',
        'weight': 5,
        'color': '#1ebc8b',
        'external': false,
        'rotate': 0,
        'tooltip': 'No Body',
      },
      {
        'text': '混肴',
        'weight': 7,
        'external': true,
        'rotate': 0,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 2,
        'color': '#a1efed',
        'external': false,
        'rotate': 0,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 7,
        'color': '#1e2554',
        'external': true,
        'rotate': 16,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 5,
        'external': false,
        'rotate': -18,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 5,
        'color': '#d1de2b',
        'external': false,
        'rotate': 0,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 8,
        'color': '#f09c9f',
        'external': false,
        'rotate': 0,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 4,
        'color': '#2834b6',
        'external': true,
        'rotate': 2,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 2,
        'color': '#4654fa',
        'external': true,
        'rotate': 0,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 9,
        'external': false,
        'rotate': 0,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 5,
        'external': false,
        'rotate': -15,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 3,
        'external': true,
        'rotate': 10,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 8,
        'external': true,
        'rotate': 0,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 3,
        'color': '#ea5771',
        'external': false,
        'rotate': 0,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 5,
        'color': '#ea16b0',
        'external': true,
        'rotate': 0,
        'tooltip': 'Nobody',
      },
      {
        'text': '混肴',
        'weight': 4,
        'color': '#eacdc',
        'external': true,
        'rotate': 0,
        'tooltip': 'Nobody',
      },
    ];
    this.data.map(res => {
      res.color = '#000000';
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
      this.data.filter(res => res.text === word)[0].color = '#A9A9A9';
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
