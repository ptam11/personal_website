import gainLossGraph from '../../../img/gaDataScience/gainLossGraph.png'
import heatMap from '../../../img/gaDataScience/heatMap.png'
import terminal from '../../../img/gaDataScience/terminal.png'
import dataset from '../../../img/gaDataScience/dataset.png'
import generalFeatureRanking from '../../../img/gaDataScience/generalFeatureRanking.png'
import featureImportance from '../../../img/gaDataScience/featureImportance.png'
import modelScores from '../../../img/gaDataScience/modelScores.png'
import results from '../../../img/gaDataScience/results.png'
import rocAumVsPrecisionRecallCurve from '../../../img/gaDataScience/rocAumVsPrecisionRecallCurve.png'


const title = "HK Public Offering Data Science Model"
const techListArr = ["Python", "Scikit-Learn", "Plotly", "numPy", "pandas"];
const desListArr =[
	{title: "PROBLEM STATEMENT:", des: "China Tech giant, Tencent, had success in spinning-off its investments. Can I identify an IPO with a positive performance over a 30 day period (trade policy @Bloomberg)?"},
	{title: "RESULTS:", des: "Can identify a gainer with 60% precision using fine tuned model."},
	{title: "FEATURES:", des: "News Sentiment, News Flow, Technical Indicators, Company Fundamental Data, Industry Classification, Share Offering Information"},
	{title: "IMPROVEMENTS:", des: "Reduce Features through Principal Component Analysis (PCA), Stream sanitized data flow"},
];
const carouselListArr = [
	{src: gainLossGraph, des: "Greater Positive Performance Recently"},
	{src: heatMap, des: "Heatmap of All Features"},
	{src: terminal, des: "Company Fundamental Data From Bloomberg"},
	{src: dataset, des: "Raw Dataset w/ 170 Features"},
	{src: generalFeatureRanking, des: "Preliminary Ranking of Features"},
	{src: featureImportance, des: "Feature Selection"},
	{src: modelScores, des: "Grid Search to Determine Model Specificity"},
	{src: results, des: "60% Precision for Best Model"},
	{src: rocAumVsPrecisionRecallCurve, des: "Receiver Operating Characteristic"},
]; 

const subListObj = {
	  title: "TASK:",
		subListArr: [
			"Compiled csv dataset file using Bloomberg API and taking into account point-in-time to avoid forward-looking bias.",
			"Splitted dataframe into training, validation and testing subsets",
			"Created dummy variables for classifications like industry.",
			"Combined features, such as growth rates, and removed correlated features after exploration.",
			"Recursive Feature Elimination and Cross Validation (RFECV) and Grid Search to find optimal model and combinations of features to use.",
			"Fine tuned hyperparameters of model",
			"Tested results of Receiver Operating Characteristic Area Under Curve(ROC AUC) and Precision vs Recall "
		]
	}

const gaDataScience = {title, techListArr, desListArr, carouselListArr, subListObj};

export default gaDataScience;