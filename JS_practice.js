// fundamentals of js

// function paperwork(n, m) {
//     if (n<0 || m<0){
//       console.log(0) 
//     }
//     else{
//       console.log(n*m)
//     }
//   }

//   paperwork(5,-5)


// 2              ****************

// function bmi(weight, height) {
//     a=weight/(height*height)
//     if (a<=18.5){
//         return ("underweight") 
//     }else if(a<=25.0){
//         return ("Normal") 
//     }else if(a<=30.0){
//         return ("Overweight") 
//     }else{
//         return ("Obese") 
//     }
//   }


// bmi(80,1.80)

// 3             ****************

// function abbrevName(name){
//     // console.log(name.split(' '))
//     let v = name.split(' ')
//     let txt=`${v[0][0]}.${v[1][0]}`
//     console.log(txt.toUpperCase())
// }

// abbrevName('lohith venkatesh')

// 4                ****************

// function grow(x){
//     let txt=1
//     for (let i of x){
//         txt=txt*i
//     }
// console.log(txt)
// }

// grow([2,4,6,8])


// 5              ****************

// function solution(str){
//     let a = str.split('').reverse().join('')
//     console.log(a)
    
  
// }

// solution('lohith')

// 6                 ****************

// function getGrade (s1, s2, s3) {
//     let avg= (s1+s2+s3)/3
//     if (avg >=90 && avg<=100){
//         console.log('A')
//     }else if(avg>=80 && avg<90){
//         console.log('B')
//     }else if(avg>=70 && avg<80){
//         console.log('C')
//     }else if (avg>=60 && avg<70){
//         console.log('D')
//     }else{
//         console.log('F')
//     }
     
// }

// getGrade(80,80,80)

// 7            ****************

// function setAlarm(employed, vacation){
//     if(employed==true && vacation==false){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
  

// }

// setAlarm(false, false)

// 8

function removeExclamationMarks(s) {
    let a=s.replaceAll('!','')
    console.log(a)
  }


removeExclamationMarks('lohith!!!')