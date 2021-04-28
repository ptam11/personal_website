import login from '../../../img/jobly/login.png'
import chat from '../../../img/jobly/chat.png'
import jobsList from '../../../img/jobly/jobsList.png'
import search from '../../../img/jobly/search.png'
import companiesList from '../../../img/jobly/companiesList.png'
import companyPage from '../../../img/jobly/companyPage.png'
import editProfile from '../../../img/jobly/editProfile.png'


const title = "Jobly"
const techListArr = ["React", "Redux", "Redux-Persist", "Redux-Thunk", "Express", "Jest", "SuperTest", "Enzyme", "PostgreSQL", "WebSockets", "JWTs", "JSONschema", "Debounce" ];
const websiteListArr =[
	{type: "website", address: "https://jobly-parco-frontend.herokuapp.com"},
	{type: "github", address: "https://github.com/ptam11/jobly_fullStack" },
];
const desListArr =[
	{title: "GOAL:", des: "Create a LinkedIn like application. Deploy both backend and frontend."},
	{title: "BUSINESS:", des: "Connect companies and job seekers."},
];
const carouselListArr = [
	{src: login, des: "User Login"},
	{src: chat, des: "'WebSocket' Chat w/ Other Users"},
	{src: jobsList, des: "List of All Jobs"},
	{src: search, des: "Live Search w/ Application Status"},
	{src: companiesList, des: "List of Companies"},
	{src: companyPage, des: "List of Jobs for a Company"},
	{src: editProfile, des: "Edit User Profile"},
]; 

const subListObj = {
	  title: "TASK:",
		subListArr: [
			"Created frontend using React and supported with Redux to manage React state.",
			"Used Persist and Thunk for a seamless state experience and async requests respectively.",
			"Coded using 'Test Driven Development' style (TDD).",
			"Built Express backend models to service RESTful API to the frontend.",
			"Structured PostgreSQL database to handle the interlinked relationships between the models.",
			"Implemented middleware in the backend using JWTs and BCrypt to check user authentication and authorizations.",
			"Implemented frontend authentications on React state and controlled view restrictions.",
			"Created a live search using debounce."
		]
	}

const jobly = {title, techListArr, websiteListArr, desListArr, carouselListArr, subListObj}

export default jobly;