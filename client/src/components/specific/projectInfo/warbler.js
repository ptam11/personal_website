import home from '../../../img/warbler/home.png'
import listAllMessages from '../../../img/warbler/listAllMessages.png'
import newMessage from '../../../img/warbler/newMessage.png'
import profile from '../../../img/warbler/profile.png'
import searched from '../../../img/warbler/searched.png'
import signUp from '../../../img/warbler/signUp.png'


const title = "Warbler"
const techListArr = ["Python", "Flask", "SQLAlchemy", "Bcrypt", "WTForms", "Jinja", "PostgreSQL", "Unittest"];
const desListArr =[
	{title: "GOAL:", des: "Create a Twitter like application. "},
	{title: "BUSINESS:", des: "Connect many followers to many followees. All users can post many messages that can be liked."},
];
const carouselListArr = [
	{src: home, des: "Landing Page"},
	{src: signUp, des: "Create User using WTForms"},
	{src: profile, des: "Profile Page"},
	{src: listAllMessages, des: "See All Messages of Followee"},
	{src: newMessage, des: "Post New Messages"},
]; 

const subListObj = {
	  title: "TASK:",
		subListArr: [
			"Created backend using Flask written in Python",
			"Used object relational management (ORM) SQLAlchemy to interact with PostgreSQL database",
			"Designed relationships between followers, followees, messages and message likes", 
			"Used WTForms for user input, input validation and CSRF token authentication",
			"Wrote model and view tests using Python built-in unittest",
			"Used Bcrypt and session to perform user authentication and login",
		]
	}

const warbler = {title, techListArr, desListArr, carouselListArr, subListObj}

export default warbler;