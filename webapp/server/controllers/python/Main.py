# Import Pandas
import pandas as pd

# Load jobs Metadata
metadata = pd.read_csv('./server/controllers/python/jobList.csv', low_memory=False)

#Import TfIdfVectorizer from scikit-learn
from sklearn.feature_extraction.text import TfidfVectorizer

#Define a TF-IDF Vectorizer Object. Remove all english stop words such as 'the', 'a'
tfidf = TfidfVectorizer(stop_words='english')

#Replace NaN with an empty string
metadata['JobFamilyDescription'] = metadata['JobFamilyDescription'].fillna('')

#Construct the required TF-IDF matrix by fitting and transforming the data
tfidf_matrix = tfidf.fit_transform(metadata['JobFamilyDescription'])


# Import linear_kernel
from sklearn.metrics.pairwise import linear_kernel

# Compute the cosine similarity matrix
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
#Construct a reverse map of indices and jobs titles
indices = pd.Series(metadata.index, index=metadata['JobClassDescription']).drop_duplicates()

# Function that takes in JobClassDescription as input and outputs most similar jobs
def get_recommendations(title , cosine_sim=cosine_sim):
    # Get the index of the job that matches the title
    idx = indices[title]

    # Get the pairwise similarity scores of all jobs with that job
    sim_scores = list(enumerate(cosine_sim[idx]))

    # Sort the jobs based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the scores of the 10 most similar jobs
    sim_scores = sim_scores[1:11]

    # Get the job indices
    jobs_indices = [i[0] for i in sim_scores]

    # Return the top 10 most similar jobs
    return metadata['JobClassDescription'].iloc[jobs_indices]

print("................................................................................")


print(get_recommendations('Accountant I'))