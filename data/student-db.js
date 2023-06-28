const students = [
    {name : 'Peter', enroll: true},
    {name : 'Jack', enroll: true},
    {name : 'Alice', enroll: false},
    {name : 'Jay', enroll: false},
    {name : 'Tony', enroll: true}
];

module.exports = {
    getAll: function() {
      return students;
    }
  };