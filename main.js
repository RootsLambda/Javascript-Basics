





//Câu lệnh điều kiện if -else


// 0
// false
// '' 
// undefined
// NaN
// null
// Covert sang boolean điều là true

// if (true){
//   console.log('Điều kiện đúng');
// }
// else{
//     console.log('Điều kiện sai');
// }

// datatype
// 1. Kiểu dữ liệu nguyên thủy
// - Number
// - String
// - Boolean
// - Undefined
// - Null
// - Symbol

// 2. Dữ liệu phức tạp
// - Function
// - Object

// var a = 1; // Number

// console.log(typeof a); // Kiểm tra kiểu dữ liệu

// var fullName='Quoc Dong'; // String

// console.log(typeof fullName);
 
// var isSuccess =true; // Boolean

// var age; // Undefine type không gán giá trị.

// var isNull = null; // nothing

// console.log(isNull); // Null

// var id= Symbol('id') // Symbol

// var myFunction=function(){
//     alert("Hi.Xin chào các bạn! "); //Function
// }

// myFunction(); // Cần gọi ra để chạy

// var myObject={       // Object
//     name: 'Quoc',
//     age: 18,
//     address:'Ha Noi'
// };

// console.log('myObject',myObject);

// var myArray =[
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];
// console.log(myArray)

// Toán tử so sánh p2
// === toán tử bằng tuyệt đối so sánh value và kiểu dữ liệu
// !==  toán tử khác tuyệt đối so sánh value và kiểu dữ liệu

// var a='1';
// var b=1;

// console.log(a!==b);

// Truthy và Falsy
// Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy.

// console.log(Boolean(['BWM'])) // True

// console.log(Boolean({name:'Miu'})) // true
// console.log(!!'hi') // true

// // Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy

// console.log(!!false) //false
// console.log(!!0)  // false
// console.log(!!'')
// console.log(!!null)
// console.log(!!undefined)
// console.log(!!NaN)


// điều kiện p2
// var result = 'A' && 'B' && 'C'; // kết quả 'C'
// // Kiểm tra có nằm trong các giá trị chuyển qua boolean là false nếu không có gắn giá trị bên phải
// var result = 'A' && 'B' && NaN && 'D';

// var result = 'A' || 'B' || 'C';

// console.log(result) // Kết quả ra 'A'

// // Toán tử or nếu thấy đúng thì lấy giá trị đó luôn

// console.log(result);

// Hàm fucntion

// function showDialog() {
//     alert('Hi xin chao cac ban');
// }

// showDialog();

// Tham số

// function writeLog(message) {
//     console.log(message)
// }

// writeLog('Test message');
// // agruments truyền nhiều tham số
// console.log(1,3,3,5)
// function WriteLog(){
//     console.log(arguments)
// }

// WriteLog('Log1','Log2','Log3')
// for of
// function Write() {
//     for (var param of arguments){
//         console.log(param)
//     }
// }

// Write('Log 1','Log 2','Log 3');

// Return giá trị
// var isConfirm =confirm('Message');
// console.log(isConfirm);

// function add(a,b) {
//     return a+b;
// }

// var result =add(2,8);
// console.log(result)

// Ghi đè function

// function showMessage(){
//     var fullName='Quoc Dong';
//     console.log(fullName);
// }

// showMessage();

// // Hàm lồng hàm

// function showMessage(){
//     function showMessage2(){
//         console.log('Message 2');
//     }
//     showMessage2();
// }
// showMessage();

// Các loại hàm trong javascript
// 1. Declaration function
// Gọi trước khi định nghĩa
// showMessage();
// function showMessage() {
//   console.log('Declaration function')

// }
// 2. Expression function
// Phải định nghĩa trước mới gọi
// var showMessage2 =function(){
//     console.log('Expression function')
// }

// setTimeout(function autoLogin(){

// });

// var myObject={
//     myFunction: function(){

//     }
// }
// showMessage()

// Kiểu dữ liệu chuỗi
// 1. Tạo chuỗi
// var fullName='Lambda';

// var fullName = new String('Lambda');
// // 2. backslash '\'
// var Name='Lambda là \'sieu nhan\''
// console.log(Name)
// 3. Độ dài của chuỗi
// console.log(Name.length)

// var firstName ="Quoc";
// var lastName='Dong';

// console.log(`Toi la: ${firstName} ${lastName}`)


// Method string
// Find index

// var myString = ' Hoc Javascript ';
// console.log(myString.indexOf('Ja',5));
// console.log(myString.lastIndexOf('Ja'));

// // Cut string

// console.log(myString.slice(4,6))

// // Replace
// console.log(myString.replace('Ja','Java'))

// // Covert to upper case
// console.log(myString.toUpperCase())

// // Convert to lower case
// console.log(myString.toLowerCase())

// // Trim loại bỏ khoảng trắng hai đầu thừa

// console.log(myString.trim())

// // Split

// var languages='Javascript, PHP, Ruby';
// console.log(languages.split(','))

// // Get a character by index
// const myString2='Quoc Dong';
// console.log(myString2.charAt(0))

// Doi tuong number
// var otherNumber =new Number(9);
// // Xác định xem số đã cho có phải là số hữu hạn hay không
// Number.isFinite(2/0) // false
// // Xác định xem có phải là số nguyên hay không
// Number.isInteger(999)// false
// // chuyển đổi chuỗi thành số thực 
// Number.parseFloat('10') // 10
// // chuyển đổi chuỗi thành số nguyên
// Number.parseInt('19.0') // 19

// // chuyển đổi và trả về chuỗi đại điện cho số đã cho 
// var numberObject=1234.56789;

// numberObject.toFixed(); // '1235'
// numberObject.toFixed(1); // '1234.6'

// // Chuyển đổi và trả về số đã cho dưới dạng chuỗi

// (11).toString(); // '11'

// var age=18;

// console.log(age.toString());
// // kiểm tra là NaN
// isNaN(age);

// Mảng
// C1
// var languages=[
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Dart',
//     null,
//     undefined,
//     function() {

//     },
//     {},
//     123
// ];

// // C2
// var languages =new Array(
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Dart',
//     null,
//     undefined,
//     function() {

//     },
//     {},
//     123
// );

// console.log(Array.isArray(languages));

// // lấy index

// console.log(languages[1]);

// Làm việc với array

// 1.To string
// var languages=[
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];
// console.log(languages.toString())

// // 2. Join
// console.log(languages.join(''))

// // 3. Pop
// console.log(languages.pop()) // Xóa element cuối mảng

// // 4. Push
// console.log(languages.push('Dart')) 

// // 5. Shift
// console.log(languages.shift()) // Xóa phần tử đầu tiên

// // 6. Unshift 
// console.log(languages.unshift('Dart')) //Thêm phần tử đầu tiên

// // 7.Splicing

// languages.splice(1,1) // từ vị trí con trỏ xóa đi 1 phần tử
// languages.splice(1,1,'Dart') // Truyền element vào

// console.log(languages)

// // 8.Concat

// var languages1=[
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]

// var languages2=[
//     'Dart',
//     'Ruby'
// ]
// console.log(languages2.concat(languages1)) // Nối mảng

// // 9.Slicing

// console.log(languages.slice(1))  // cắt mảng

// Object trong Javascript

// var emailKey='email';

// var myInfo={
//     name:'Quoc Dong',
//     age: 21,
//     address:"Ha noi",
//     [emailKey]:'dongminhquoc2525@gmai.com',
//     getName: function(){
//         return this.name;
//     }
// };

// myInfo.email='dongminhquoc2525@gmai.com';
// myInfo['email']='dongminhquoc2525@gmai.com';

// console.log(myInfo.name);
// console.log(myInfo['name']);

// // xóa key value

// delete myInfo.age;
// console.log(myInfo.getName())

// Object constructor

// function User(firstName, lastName, avatar){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.avatar =avatar;
    
//     this.getName=function(){
//         return `${this.firstName} ${this.lastName}`
//     }

// }

// var author = new User('Quoc','Dong','Avatar');
// var user = new User('Roots','Lambda','Avatar');

// author.title = 'Chia sẽ dạo'
// user.comment ='Liệu có khoa học dotnet'

// console.log(author.getName());

// console.log(user.getName());

// Object prototype 
// function User(firstName, lastName, avatar){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.avatar =avatar;
        
//         this.getName=function(){
//             return `${this.firstName} ${this.lastName}`
//         }
//     }   
// User.prototype.className='F8';
// User.prototype.getClassName=function(){
//     return this.className;
// }

// var user1= new User('a','b','c');
// var user2= new User('d','e','f');

// console.log(user1.className);
// console.log(user2.getClassName());

// Đối tượng Date

// var date = new Date();

// console.log(typeof date);

// var year=date.getFullYear();
// var month=date.getMonth()+1;
// var day= date.getDate();

// console.log(`${day} ${month} ${day}`)

// Đối tượng Math

// Math.PI
// console.log(Math.PI)

// // Math.round()

// console.log(Math.round(1.6));

// // Math.abs()
// console.log(Math.abs(4));

// // Math.ceil()
// console.log(Math.ceil(4.1))

// // Math.floor()
// console.log(Math.floor(3.99))

// // Math.random()

// console.log(Math.random());

// // Math.min()

// console.log(Math.min(1,3))

// // Math.max()

// console.log(Math.max(3,5))

// Câu lệnh rẽ nhánh if -else

// var date=2;
// if (date==2){
//     console.log('Hôm nay là thứ 2');
// }
// else if (date==3){
//     console.log('Hôm nay là thứ 3');
// }
// else if (date==4){
//     console.log('Hôm nay là thứ 4');
// }

// else{
//     console.log("Không biết");
// }

// Câu lệnh rẽ nhánh switch- case

// var date = 2;

// switch(date) {
//     case 2:
//         console.log('Hôm nay là thứ 2');
//         break;
//     case 3:
//         console.log('Hôm nay là thứ 3');
//         break;
//     case 4:
//         console.log('Hôm nay là thứ 4');
//         break;
//     case 5:
//         console.log('Hôm nay là thứ 5');
//         break;
//     default:
//         console.log('Không biết');
// }

// Toán tử 3 ngôi
// var course={
//     name: 'Javascript',
//     coin: 250
// }
// var result= course.coin > 0 ? `${course.coin} Coins` :'Miễn phí';
// console.log(result);


// Vòng lặp
// 1. for
// for (var i = 1; i<=1000; i++) {
//     console.log(i);
// }

// 2. for in

// var myInfo={
//     name: 'Quoc Dong',
//     age: 18,
//     address: 'Ha Noi, VN'
// }

// for (var key in myInfo){
//     console.log(key)
// }

// var languages= [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// for (var key in languages){
//     console.log(key);
// }

// var myString='Javascript';
// console.log(myString[0]);

// 3. for of

// var languages=[
//     'Javascript',
//     'PHP',
//     'Java'
// ]

// var myInfo={
//     name: 'Quoc Dong',
//     age: 21
// }

// for (var value of languages) {
//     console.log(value);
// }

// for (var value of Object.keys(myInfo)) { // Object.keys biến thành mảng
//     console.log(value);
// }

// while loop

// var i=1;

// var myArray =[
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]


// while (i<1000) {
//     i++;
//     console.log(i);
// }

// do while

// var i=0;
// var isSuccess = false;



// do{
//     i++;

//     console.log(i);

//     if (true) {
//         isSuccess =true;
//     }

// } while (!isSuccess && i<=3);

// Break và Continue in loop

// for (var i = 0; i<10;i++) {
//     if (i%2 !=0) {
//         continue;
//     }
//     console.log(i);



// }

// Vòng lặp lồng nhau

// var myArray =[
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// for (var i=0; i<myArray.length; i++) {
//     for (var j=0; j<myArray[i].length;j++){
//         console.log(myArray[i][j]);
//     }

// }

// for (var i=0; i<=100; i+=5) {
//     console.log(i);
// }

// Đệ quy
// function countDown(num) {
//     if (num > 0) {
//         console.log(num);
//         return countDown(num-1)  ;
//     }
//     return num;
// }

// countDown(3);

// function loop(start,end,cb){
//     if (start>=end){
//         cb(start);
//         return loop(start+1,end,cb);

//     }
// }
// var array = ['Javascript','PHP','Ruby'];
// loop(0,array.length,function(index)){
//     console.log(array[index]);
// } 

// function giaiThua(number) {
//     var output=1;
//     for (var i = number;i>0;i--){
//         output=output*i
//     }
//     return output;
// }

// console.log(giaiThua(3));

// function giaiThua(number) {
//     if (number>0) {
//         return number*giaiThua(number-1);
//     }
//     return 1;
// }

// console.log(giaiThua(6));

// Phương thức với mảng:

// forEach();

// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id:2,
//         name: 'HTML, CSS',
//         coin: 0 
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 400
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500
//     }
// ];

// courses.forEach(function(course,index) {
//     console.log(index, course);
// })

// // every() Tất cả đều kiện trong mảng

// var isFree=courses.every( function(course,index) {
//     return course.coin == 0;
// });

// console.log(isFree);

// // some()
// var isFree=courses.some( function(course,index) {
//     return course.coin == 0;
// });

// // find()
// var isFree=courses.find( function(course,index) {
//     return course.name == 'Ruby';
// });

// // filter()
// var listcoures=courses.filter( function(course,index) {
//     return course.name == 'Ruby';
// });

// // map()

// function courseHandler(course,index) {
//     // console.log(course);
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         index: index
//     };
// } 
// var newCourses = courses.map(courseHandler);

// console.log(newCourses);

// // reduce()

// var totalCoin=0;
//  for(var course of courses){
//     totalCoin+=course.coin;
//  }

// console.log(totalCoin);

// var i=0;

// function coilHandler(accumulator,currentValue,currentIndex,originArray) {
//     i++;

//     console.table({
//         'Lượt chạy': i,
//         'Biến tích trữ: ': accumulator,
//         'Giá khóa học: ' : currentValue.coin,
//         'Tích trữ được: ': total
//     });


//     return total;
// }
// var totalCoin =courses.reduce(coinHandler,10);  // Khoi tao bien luu tru

// console.log(totalCoin);

// // làm phẳng mảng
// var depthArray=[1,2,[3,4],5,6,[7,8,9]];

// var flatArray=depthArray.reduce(function(flatOutput,depthItem) {
//     return flatOutput.concat(depthItem);
// }, [])

// const numbers =[1,2,3,4]

// const result =numbers.reduce((total,number) =>{
//     return total+number
// },10)

// var title='Responsive web design';
// console.log(title.includes('Responsive',1))

// Callback
// la ham duoc truyen qua doi so khi goi ham khac

// function myFunction(param) {

//     param('Hoc lap trinh')
// }

// function myCallback() {
//     console.log('Value',value);
// }

// myFunction(myCallback);

var courses=[
    'Javascript',
    'PHP',
    'Ruby'
];

var htmls=courses.map(function(course) {
    return `<h2>${course}</h2>`;
});
console.log(htmls.join(''));

Array.prototype.myMap = function(cb) {
    var output = [];   
    var lenghtnum = this.length ;
    for(var i = 0 ; i < lenghtnum ; i++ ){
        var result = cb(this[i],i);
        output.push(result)

    }
    return output
}


















