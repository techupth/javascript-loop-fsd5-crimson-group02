// Exercise #2: Sum the Numbers

// ให้ใช้ For...of Loop เพื่อคำนวณผลรวมของเลขทุกตัวใน Array
// Hint🕵🏼‍♀️ : ในทุกๆ รอบของ Loop ให้นำเลขจาก Array ไปบวกกับค่าของ Variable total

let numbers = [10, 20, 30, 40, 50];
let total = 0;
for (let num of numbers) {
  total = total + num;
}

console.log(total);
