# **USAGES**

### [`GetCommonLocaleTimestamp.js`](GetCommonLocaleTimestamp.js)

## 1. Common and Target Datetime Format (type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))
|Years|-|Months|-|Days|\s|Hours|:|Minutes|:|Seconds|.|Miliseconds|\s|Timezone offset|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|yyyy|-|MM|-|dd| |HH|:|mi|:|SS|.|sss| |+0900|

## 2. Settings

1. Add or execute the script `GetCommonLocaleTimestamp.js` in your script context.
2. Call the method `new Date().toCommLocaleTimestampString()` at the lines where common string datetimes are required.

## 3. Examples & Test Results

### Case_1. User Timezone(O/S): Asia/Seoul(GMT+0900)

***(Default) `new Date()`***
> ***Web Browser Language: ko***
> ```
> Wed Dec 27 2023 09:30:25 GMT+0900 (한국 표준시)
> ```
> ***Web Browser Language: en***
> ```
> Wed Dec 27 2023 09:30:25 GMT+0900 (Korean Standard Time)
> ```

***`new Date().toCommLocaleTimestampString()`***
> ***All Languages***
> ```
> '2023-12-27 09:30:25.434 GMT+0900'
> ```

### Case_2. User Timezone(O/S): Canada/Newfoundland(GMT-0330)

***(Default) `new Date()`***
> ***Web Browser Language: Korean -- ko***
> ```
> Tue Dec 26 2023 21:00:58 GMT-0330 (뉴펀들랜드 표준시)
> ```
> ***Web Browser Language: English (United States) -- en***
> ```
> Tue Dec 26 2023 21:00:58 GMT-0330 (Newfoundland Standard Time)
> ```
> ***Web Browser Language: Chinese (Simplified) -- zh-chs***
> ```
> Tue Dec 26 2023 21:00:58 GMT-0330 (纽芬兰标准时间)
> ```

***`new Date().toCommLocaleTimestampString()`***
> ***All Languages***
> ```
> '2023-12-26 21:00:58.318 GMT-0330'
> ```
