// Exercise #1: Decrease the Student Scores

// ให้เขียนโปรแกรมด้วย For Loop เพื่อทำการหักคะแนนจากนักเรียนทุกคนใน Array scores คนละ 10 คะแนน

let scores = [89, 70, 60, 50, 100, 71];
for (let i = 0; i < scores.length; i = i + 1) {
  scores[i] -= 10; // scores[i] = scores[i] - 10
}

console.log(scores);
