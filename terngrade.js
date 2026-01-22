i = 107;
let grade = (i>=90 && i<=100)? "a":
            (i>=80 && i<90)? "b":
            (i>=70 && i<80)? "c":
            (i>=60 && i<70)? "d":
            (i>=50 && i<60)? "e":
            (i>=40 && i<50)? "pass": 
            (i>35 && i<40)? "fail":
            (i>100 || i<0)? "invalid": "overfail";
console.log(grade);