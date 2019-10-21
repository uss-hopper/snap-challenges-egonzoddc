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
/**
SELECT tweet.tweetContent, profile.profileAtHandle
FROM tweet
		  INNER JOIN `like` ON tweet.tweetId = like.likeTweetId
		  INNER JOIN profile ON like.likeProfileId = profile.profileId
WHERE tweet.tweetId = UNHEX('0536faef082b454e9d444cdbe7887d7a');
**/