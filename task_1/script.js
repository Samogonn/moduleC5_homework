const xmlText = `
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

const parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlText, 'text/xml');

const students = xmlDOM.getElementsByTagName('student');

result = {
    list: []
}

for (let i = 0; i < students.length; i++) {
    const name = students[i].querySelector('first').textContent;
    const surname = students[i].querySelector('second').textContent;
    const age = parseInt(students[i].querySelector('age').textContent);
    const prof = students[i].querySelector('prof').textContent;
    const lang = students[i].querySelector('name').getAttribute('lang');


    result.list[i] = {
        name: `${name} ${surname}`,
        age: age,
        prof: prof,
        lang: lang
    }
}

console.log(result);
