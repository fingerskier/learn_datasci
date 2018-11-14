from __future__ import division

users = [
	{"id": 0, "name":"Hero"},
	{"id": 1, "name":"Dunn"},
	{"id": 2, "name":"Sue"},
	{"id": 3, "name":"Chi"},
	{"id": 4, "name":"Thor"},
	{"id": 5, "name":"Clive"},
	{"id": 6, "name":"Hicks"},
	{"id": 7, "name":"Devin"},
	{"id": 8, "name":"Kate"},
	{"id": 9, "name":"Klein"},
]

relations = [(0,1), (0,2), (1,2), (1,3), (2,3), (3,4), (4,5), (5,6), (5,7), (6,8), (7,8), (8,9)]

for user in users:
	user["relative"] = []

for i,j in relations:
	users[i]["relative"].append(users[j])
	users[j]["relative"].append(users[i])

def num_relatives(user):
	return len(user["relative"])

total_relatives = sum(num_relatives(user) for user in users)

print(total_relatives)

num_users = len(users)
avg_connections = total_relatives / num_users

print(avg_connections)

num_rels_by_id = [(user["id"], num_relatives(user)) for user in users]

print(num_rels_by_id)

sorted(num_rels_by_id, key=lambda(user_id, num_relatives): num_relatives, reverse=True)

print(num_rels_by_id)

def relative_of_relative_ids_bad(user):
	# "roar" ~ relative of a relative
	return [roar["id"]
			for relative in user["relative"]
			for roar in relative["relative"]]

print(relative_of_relative_ids_bad(users[0]))

print [relations["id"] for relative in users[0]["relative"]]
print [relations["id"] for relative in users[1]["relative"]]
print [relations["id"] for relative in users[2]["relative"]]
