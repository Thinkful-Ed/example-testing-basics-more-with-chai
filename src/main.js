function medianScore(students) {
  const sortedList = students.sort((a, b) => a.score - b.score);
  const midpoint = Math.floor(sortedList.length / 2);

  return sortedList[midpoint].score;
}

function topScoringStudent(students) {
  const sortedList = students.sort((a, b) => b.score - a.score);
  return sortedList[0];
}

module.exports = { medianScore, topScoringStudent };
