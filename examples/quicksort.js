var 快排=()=>0;快排=function(甲){if (甲.length<=1){return 甲};var 首=[];var 頷=[];var 尾=[];var _ans1=甲[1-1];var 甲一=_ans1;頷.push(甲一);var _ans2=甲.slice(1);var 甲餘=_ans2;for (var 丁 of 甲餘){if (丁<甲一){首.push(丁);}else{尾.push(丁);};};var _ans3=快排(首);首=_ans3;var _ans4=快排(尾);尾=_ans4;var _ans5=首.concat(頷).concat(尾);var 乙=_ans5;return 乙};var 己=[];己.push(5,3,20,8,35,700);var _ans6=快排(己);console.log(_ans6);