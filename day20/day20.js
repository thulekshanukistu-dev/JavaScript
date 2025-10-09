var score = [
  [255, 211],
  [203, 212],
  [272, 292],
  [15, 275]
];

var house = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];

function higherscorebygenderineachhouse(score, house) {
  for (let i = 0; i < score.length; i++) {
    let points = 0;
    let gender = "";

    if (score[i][0] > score[i][1]) {
      points = score[i][0];
      gender = "girls";
    } else {
      points = score[i][1];
      gender = "boys";
    }

    console.log(
      `The best performance in ${house[i]} house of the house meet is: ${gender} ${points}`
    );
  }
}

higherscorebygenderineachhouse(score, house);