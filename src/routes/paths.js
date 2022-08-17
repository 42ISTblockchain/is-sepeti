
function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_GENERAL = '/dashboard';
const ROOTS_AUTH = '/auth';
const ROOTS_WORK = '/jobs';


export const PATH_AUTH = {
	login: {path: path(ROOTS_AUTH, '/login'), title: "Login"}
}

export const PATH_GENERAL = {
	subheader: 'general',
	root: {
		title: 'home',
		path: path(ROOTS_GENERAL, "")
	}
}

export const PATH_JOBS = {
	subheader: 'jobs',
	jobCreate: {
		title: "create",
		path: path(ROOTS_WORK, "/create")
	},
	jobPosting: {
		title: "posting",
		path: path(ROOTS_WORK, "/posting")
	},
	jobApplications: {
		title: "applications",
		path: path(ROOTS_WORK, "/applications")
	}
}