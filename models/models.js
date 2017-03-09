var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// User Schema
var userSchema = new Schema (
    {
        username: {
            type: String, required: true
        },
        email: {
            type: String, required: true, unique: true
        },
        password: {
            type: String, required: true
        },
        systemAdmin: {
            type: boolean, required: true
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        tags: {
            type: [String]
        },
        blacklistedTags: {
            type: [String]
        },
        clubs: {
            type: [String]
        },
        blacklistedClubs: {
            type: [String]
        },
        campus: {
            type: String
        },
    },
    {
            collection: "users"
    }
)

// Club Schema
var clubSchema = new Schema(
    {
		clubname: {
			type: String, required: true
		},
		admins: {
			type: [String], required: true
		},
		blacklisted: {
			type: [String], required: true
		},
		eventSchema: {
			eventtime: {
				type: Date, required: true
			},
			place: {
				type: String, required: true
			},
		},
		{
				collection: "events"
		}
    },
    {
            collection: "clubs"
    }
)

// Doc for Mongoose Connections: http://mongoosejs.com/docs/connections
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user1:abc123@ds119578.mlab.com:19578/w3cool');

var users = mongoose.model('user', userSchema);
var clubs = mongoose.model('club', clubSchema);
var events = mongoose.model('event', clubScheme.eventSchema);

module.exports = {
    users: users,
    clubs: clubs
    events: events
};
