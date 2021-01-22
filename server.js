require("dotenv").config();
const { DateTime } = require("luxon");

const getTime = () => {
	const easternTime = DateTime.local().setZone("America/New_York");
	return easternTime.toLocaleString(DateTime.DATETIME_FULL);
};

const timeMath = () => {
	const first = DateTime.local().setZone("America/New_York");

	// add an hour and 20 minutes ahead
	let second = DateTime.local()
		.setZone("America/New_York")
		.plus({ hours: 1, minutes: 20 });

	const diffTime = second.diff(first, ["hours", "minutes", "seconds"]);

	console.log(`first ${first.toString()}`);
	console.log(`second ${second.toString()}`);
	console.log(`first minus the second ${JSON.stringify(diffTime.values)}`);
	console.log(`hours from the math ${diffTime.values.hours}`);
	console.log(`minutes from the math ${diffTime.values.minutes}`);
	console.log(`seconds from the math ${diffTime.values.seconds}`);
};

const convertISO = () => {
	const originalISO = "2021-01-18T21:41:05.092-05:00";

	// when converting from ISO you have to specify the zone
	const formatted = DateTime.fromISO(originalISO, {
		zone: "America/New_York",
	});

	console.log(`original ${originalISO}`);
	console.log(`formatted ${formatted.toString()}`);
};

console.log("start by just getting the time in a zone");
console.log(`\n`);
console.log("time in New York");
console.log(getTime());
console.log(`\n`);
console.log(`\n`);
console.log(`some math with time`);
timeMath();
console.log(`\n`);
console.log(`\n`);
console.log(`converting from an ISO string to a luxon date object`);
convertISO();
console.log(`\n`);
console.log(`\n`);
