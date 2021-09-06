function tinhToan() {
    // alert(2+2+"1"+4)

    // let apples = "2";
    // let oranges = "3";
    // // both values converted to numbers before the binary plus
    // alert(+apples + +oranges); // 5

    // let a = 1;
    // let b = 2;
    // let c = 3 - (a = b + 1);
    // alert(a); // 3
    // alert(c); // 0

    /* chỉ có phép + hỗ trợ cộng chuỗi với số, các toán tử khác sẽ convert thành số và tính toán như bình thường*/
    /*
    console.log("" + 1 + 0); //10
    console.log("" - 1 + 0);//-1
    console.log(true + false);//1
    console.log(6 / "3");//2
    console.log("2" * "3");//6
    console.log(4 + 5 + "px");//9px
    console.log("$" + 4 + 5);//$45
    console.log("4" - 2);//2
    console.log("4px" - 2);//NaN
    console.log("  -9  " + 5);//  -9  5
    console.log("  -9  " - 5);//-14
    console.log(null + 1);//1
    console.log(undefined + 1);//NaN
    console.log(" \t \n" - 2);//-2
    */
    
    /*Arrow function*/
    // let tinhTong = (a,b,c)=>{
    //     let tong = a+b+c;
    //     console.log(tong);
    // }
    // tinhTong(1,2,3);

    let user;

    alert(user ?? "Anonymous");
}
