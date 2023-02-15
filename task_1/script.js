'use strict';

const parser = new DOMParser();

const XmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDom = parser.parseFromString(XmlString, 'text/xml');

const bookNode = xmlDom.querySelector('list');
const studentNode = bookNode.querySelectorAll('student');
const nameNode = bookNode.querySelectorAll('name');
const ageNode = bookNode.querySelectorAll('age');
const profNode = bookNode.querySelectorAll('prof');
const firstNode = bookNode.querySelectorAll('first');
const secondNode = bookNode.querySelectorAll('second');

let arrProf = [];
let prof = profNode.forEach(elem => {
  arrProf.push(elem.textContent);
});

let arrFirst = [];
let first = firstNode.forEach(elem => {
  arrFirst.push(elem.textContent);
});

let arrAge = [];
let age = ageNode.forEach(elem => {
  arrAge.push(elem.textContent);
});

let arrLang = [];
const lang = nameNode.forEach(elem => {
  arrLang.push(elem.getAttribute('lang'));
});

const result = {
  list: [
    { name: arrFirst[0], age: Number(arrAge[0]), prof: arrProf[0], lang: arrLang[0] },
    { name: arrFirst[1], age: Number(arrAge[1]), prof: arrProf[1], lang: arrLang[1] }
  ]
};

console.log("result", result);
