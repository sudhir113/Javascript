var data =[{first_name:'sudhir',marks:67},
{first_name:'rahul',marks:87},
{first_name:'deepak',marks:57},
{first_name:'kesh',marks:27},
{first_name:'gr',marks:57}
];

function compare(a,b) {
	if(a.marks<b.marks){
		return -1;
	}
	if(a.marks>b.marks) {
         return 1;
	}
	else {
		return 0;
	}
}


console.log(data.sort(compare));