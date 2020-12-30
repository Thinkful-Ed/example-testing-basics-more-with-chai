const { expect } = require("chai");
const { medianScore, topScoringStudent } = require("../src/main");

describe("medianScore", () => {
  it("should return the student with the median score for a list of students", () => {
    const students = [
      { name: "Luana Barbosa", score: 9.2 },
      { name: "Evan Webb", score: 8.4 },
      { name: "Riley Morgan", score: 9.8 },
      { name: "Caleb Tyler", score: 6.9 },
      { name: "Val Avila", score: 7.4 },
    ];
    const actual = medianScore(students);
    const expected = 8.4;
    expect(actual).to.equal(expected);
  });
});

describe("topScoringStudent", () => {
  it("should return the student with the highest score for a list of students", () => {
    const students = [
      { name: "Luana Barbosa", score: 9.2 },
      { name: "Evan Webb", score: 8.4 },
      { name: "Riley Morgan", score: 9.8 },
      { name: "Caleb Tyler", score: 6.9 },
      { name: "Val Avila", score: 7.4 },
    ];
    const actual = topScoringStudent(students);
    const expected = { name: "Riley Morgan", score: 9.8 };
    expect(actual).to.eql(expected);
  });
});
