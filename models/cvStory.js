var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var storiesSchema = new Schema({
	title: String,
	intro: [{name: String, description: String}],
	jobsEducation: { 
		education: [{ who: String, where: String, what: String, current: Boolean}],
		jobs: [{who: String, where: String, when: String, what: String, current: Boolean}],
		skills: [{tech: String, subject: String, client: String, clientLink: String}],
	},
	contact: {email: String, phone: String, city: String, social: [String]}
});

module.exports.cvModel = mongoose.model('cvStories', storiesSchema);

