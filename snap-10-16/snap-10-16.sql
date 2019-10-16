DROP TABLE IF EXISTS `task`;

create table task(
	taskId binary(20) not null,
	taskTitle VARCHAR(255) not null,
	taskStartDate DATETIME,
	taskDueDate DATETIME,
	taskStatus VARCHAR(64) not null,
	taskPriority VARCHAR(64) not null,
	taskDescription VARCHAR(256),
	primary key(taskId)
);