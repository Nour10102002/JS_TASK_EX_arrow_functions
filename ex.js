function printRecords(recordIds) {
	//todo
	var result = []; 
	for(let i=0 ; i < recordIds.length ; i++) {
		for(let j=0 ; j < studentRecords.length ; j++) {
			if(recordIds[i] === studentRecords[j].id) {
				result.unshift(studentRecords[j]);
				break;
			}
		}
	}
	
	var sortedResult = result.sort(
		function(a,b) {
			var x = a.name.toLowerCase();
			var y = b.name.toLowerCase();
			return x < y ? -1 : x > y ? 1 : 0;
		}
	);

	for(let i = 0 ; i< result.length ; i++) {
		console.log(sortedResult[i].name +" ("+ sortedResult[i].id +")"+ ": " + (sortedResult[i].paid === true ? "Paid" : "Not Paid"));
	}
}


function paidStudentsToEnroll() {
	//todo
	var result = [];
	for(let i = 0 ; i < studentRecords.length ; i++) {
		let found = false;
		for(let j = 0 ; j < currentEnrollment.length ; j++) {
			if(studentRecords[i].id === currentEnrollment[j]) {
				found = true;
				break;
			}
		}
		if(!found && studentRecords[i].paid) {
			result.unshift(studentRecords[i].id);
		}
	}

	return [...currentEnrollment, ...result];
}

function remindUnpaid(recordIds) {
	//todo
	var studentsRemindUnpaid = [];
	for(let i=0 ; i < recordIds.length ; i++) {
		for(let j=0 ; j < studentRecords.length ; j++) {
			if(recordIds[i] === studentRecords[j].id && !studentRecords[j].paid) {
				studentsRemindUnpaid.unshift(studentRecords[j]);
				break;
			}
		}
	}
	for(let i=0 ; i < studentsRemindUnpaid.length ; i++) {
		console.log(studentsRemindUnpaid[i].name +" ("+ studentsRemindUnpaid[i].id +")"+ ": " + (studentsRemindUnpaid[i].paid === true ? "Paid" : "Not Paid"));
	}
}

// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, }, //frank , peter
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

// printRecords(currentEnrollment);
// console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
// console.log("----");
// remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
