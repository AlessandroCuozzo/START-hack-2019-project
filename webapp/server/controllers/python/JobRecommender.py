# Import Pandas
import pandas as pd

# Load jobs Metadata
metadata = pd.read_csv('jobclassinfo2.csv', low_memory=False)

# Print the first three rows
print(metadata.head(3))

#calc the avg PayGrade for a person
C = metadata['PayGrade'].mean()
print(C)

# Calculate the minimum number of EducationLevel years required to be in the chart, m
m = metadata['EducationLevel'].quantile(0.90)
print(m)

# Filter out all jobs into a new DataFrame
q_jobs = metadata.copy().loc[metadata['EducationLevel'] >= m]
q_jobs.shape
print(q_jobs.shape)


def weighted_rating(x, m=m, C=C):
    v = x['PayGrade']
    R = x['EducationLevel']
    return (v/(v+m) * R) + (m/(m+v) * C)

q_jobs['score'] = q_jobs.apply(weighted_rating, axis=1)

#sort jobs based on the above
q_jobs = q_jobs.sort_values('score', ascending=False)

#Print the top 5 jobs recommended to candidate
print(q_jobs[['JobFamily', 'PayGrade', 'EducationLevel', 'score']].head(5))







print("------------------------------------------------------------------------")

print(metadata['JobFamilyDescription'].head())

#Import TfIdfVectorizer from scikit-learn
from sklearn.feature_extraction.text import TfidfVectorizer

#Define a TF-IDF Vectorizer Object. Remove all english stop words such as 'the', 'a'
tfidf = TfidfVectorizer(stop_words='english')

#Replace NaN with an empty string
metadata['JobFamilyDescription'] = metadata['JobFamilyDescription'].fillna('')

#Construct the required TF-IDF matrix by fitting and transforming the data
tfidf_matrix = tfidf.fit_transform(metadata['JobFamilyDescription'])

#Output the shape of tfidf_matrix
print(tfidf_matrix.shape)
#22 words are used to desciribe 66 jobs in

# Import linear_kernel
from sklearn.metrics.pairwise import linear_kernel

# Compute the cosine similarity matrix
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
#Construct a reverse map of indices and jobs titles
indices = pd.Series(metadata.index, index=metadata['JobClassDescription']).drop_duplicates()
print(indices)



# Function that takes in JobClassDescription as input and outputs most similar jobs
def get_recommendations(title, cosine_sim=cosine_sim):
    # Get the index of the movie that matches the title
    idx = indices[title]

    # Get the pairwsie similarity scores of all jobs with that job
    sim_scores = list(enumerate(cosine_sim[idx]))

    # Sort the jobs based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the scores of the 10 most similar jobs
    sim_scores = sim_scores[1:11]

    # Get the job indices
    jobs_indices = [i[0] for i in sim_scores]

    # Return the top 10 most similar movies
    return metadata['JobClassDescription'].iloc[jobs_indices]

print("fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")

print(get_recommendations('Accountant I'))
