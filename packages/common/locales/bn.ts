/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

const u = undefined;

function plural(n: number): number {
  let i = Math.floor(Math.abs(n));
  if (i === 0 || n === 1) return 1;
  return 5;
}

export default [
  'bn', [['AM', 'PM'], u, u], u,
  [
    ['র', 'সো', 'ম', 'বু', 'বৃ', 'শু', 'শ'],
    [
      'রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি',
      'শুক্র', 'শনি'
    ],
    [
      'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার',
      'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'
    ],
    ['রঃ', 'সোঃ', 'মঃ', 'বুঃ', 'বৃঃ', 'শুঃ', 'শোঃ']
  ],
  [
    ['র', 'সো', 'ম', 'বু', 'বৃ', 'শু', 'শ'],
    [
      'রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি',
      'শুক্র', 'শনি'
    ],
    [
      'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার',
      'বৃহষ্পতিবার', 'শুক্রবার', 'শনিবার'
    ],
    ['রঃ', 'সোঃ', 'মঃ', 'বুঃ', 'বৃঃ', 'শুঃ', 'শনি']
  ],
  [
    [
      'জা', 'ফে', 'মা', 'এ', 'মে', 'জুন', 'জু', 'আ', 'সে', 'অ',
      'ন', 'ডি'
    ],
    [
      'জানু', 'ফেব', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
      'জুলাই', 'আগস্ট', 'সেপ্টেম্বর',
      'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
    ],
    [
      'জানুয়ারী', 'ফেব্রুয়ারী', 'মার্চ',
      'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট',
      'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর',
      'ডিসেম্বর'
    ]
  ],
  [
    [
      'জা', 'ফে', 'মা', 'এ', 'মে', 'জুন', 'জু', 'আ', 'সে', 'অ',
      'ন', 'ডি'
    ],
    [
      'জানুয়ারী', 'ফেব্রুয়ারী', 'মার্চ',
      'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট',
      'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর',
      'ডিসেম্বর'
    ],
    u
  ],
  [
    ['খ্রিস্টপূর্ব', 'খৃষ্টাব্দ'], u,
    ['খ্রিস্টপূর্ব', 'খ্রীষ্টাব্দ']
  ],
  0, [6, 0], ['d/M/yy', 'd MMM, y', 'd MMMM, y', 'EEEE, d MMMM, y'],
  ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'], ['{1} {0}', u, u, u],
  ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##,##0.###', '#,##,##0%', '#,##,##0.00¤', '#E0'], '৳',
  'বাংলাদেশী টাকা',
  {'BDT': ['৳'], 'JPY': ['JP¥', '¥'], 'THB': ['฿'], 'TWD': ['NT$'], 'USD': ['US$', '$']},
  plural
];
