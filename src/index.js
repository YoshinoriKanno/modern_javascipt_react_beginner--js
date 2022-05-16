import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// const myProfile = {
//   name: "善範",
//   age: 48
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// // console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["善範", 48];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// // console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。。`;
// console.log(message4);

// const user = {
//   id: 42,
//   isVerified: true
// };

// const { id, isVerified } = user;

// console.log(id); // 42
// console.log(isVerified); // true

const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();
sayHello("yoshi");
