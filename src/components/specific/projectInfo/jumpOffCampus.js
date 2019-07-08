import home from '../../../img/jumpOffCampus/home.png'
import map from '../../../img/jumpOffCampus/map.png'
import postListing from '../../../img/jumpOffCampus/postListing.png'
import postListingTwilio from '../../../img/jumpOffCampus/postListingTwilio.png'
import confirmListing from '../../../img/jumpOffCampus/confirmListing.png'
import uploadImage from '../../../img/jumpOffCampus/uploadImage.png'
import roommate from '../../../img/jumpOffCampus/roommate.png'
import paymentSelection from '../../../img/jumpOffCampus/paymentSelection.png'
import paymentConfirmation from '../../../img/jumpOffCampus/paymentConfirmation.png'
import googleAnalytics from '../../../img/jumpOffCampus/googleAnalytics.png'

const title = "JumpOffCampus Inc."
const techListArr = ["Ruby", "Rails", "PostgreSQL", "Haml", "RSpec", "FactoryBot", "Husky", "Stripe","Twilio", "Geocoder","Google Analytics", "MixPanel", "Ahoy", "Uploadcare", "Devise", "cancancan"];
const desListArr =[
	{title: "CLIENT REQUEST:", des: "Rebuild everything from backend to frontend for existing Rails 2 app to Rails 5 app. Client wants app to be compatible with newer libraries like React."},
	{title: "BUSINESS:", des: "Connect landlords and students for subleasing rooms."},
];
const carouselListArr = [
	{src: home, des: "Landing Page"},
	{src: map, des: "Google Map Integration"},
	{src: googleAnalytics, des: "'Google Analytics' to Track Traffic and Ecommerce"},
	{src: postListing, des: "Form for New Property Listing"},
	{src: postListingTwilio, des: "'Twilio' for Keeping Confidentiality"},
	{src: confirmListing, des: "'Geocoder' to Convert Address into Longitude and Latitude"},
	{src: uploadImage, des: "'UploadCare' to Store User Images"},
	{src: roommate, des: "Roommate Profile Matching "},
	{src: paymentSelection, des: "Listing Fees"},
	{src: paymentConfirmation, des: "'Stripe' to Process Payments"},
]; 

const subListObj = {
	  title: "TASK:",
		subListArr: [
			"Learned Ruby and Rails for this company project.",
			"Recreated backend models and their respective migration files, schemas and PostgreSQL database.", 
			"Recreated frontend routes, forms and Haml templates for users to interact.",
			"Designed tests on controller routes and models and put continuous inplace to manage growing codebase.",
			"Connected libraries like Google Analytics, Stripe and Twilio for specific features. ",
		]
	}

export {title, techListArr, desListArr, carouselListArr, subListObj};