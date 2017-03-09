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
            type: String, required: false
        },
        lastName: {
            type: String, required: false
        },
        tags: {
            type: [String], required: false
        },
        blacklistedTags: {
            type: [String], required: false
        },
        clubs: {
            type: [String], required: false
        },
        blacklistedClubs: {
            type: [String], required: false
        },
        blacklistedCampus: {
            type: [String], required: false
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
		events: {
			type: [String], required: false
		},
		blacklisted: {
			type: [String], required: true
		},
		tags: {
			type: [String], required: true
		},
    },
    {
            collection: "clubs"
    }
)

var eventSchema = new Schema (
    {
        eventtime: {
            type: Date, required: true
        },
        place: {
            type: String, required: true
        },
        clubHost: {
            type: [String], required: true
        }
        campus: {
            type: [String], required: true
        }
		tags: {
			type: [String], required: true
		},
    },
    {
            collection: "events"
    }
// Doc for Mongoose Connections: http://mongoosejs.com/docs/connections
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user1:abc123@ds119578.mlab.com:19578/w3cool');

var users = mongoose.model('user', userSchema);
var clubs = mongoose.model('club', clubSchema);
var events = mongoose.model('event', eventSchema);

module.exports = {
    users: users,
    clubs: clubs
    events: events
};
