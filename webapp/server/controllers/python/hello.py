import sys
import pandas as pd


def main(): 

	# Load jobs Metadata
	metadata = pd.read_csv('./server/controllers/python/jobList.csv', low_memory=False)
	#Import TfIdfVectorizer from scikit-learn
	print("first line")

	print ("Hello World!")
	for v in sys.argv[1:]:
		print(v)

main()