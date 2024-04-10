# Importing the Dependencies
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn import preprocessing

# Define feature_extraction as a global variable
feature_extraction = TfidfVectorizer(min_df=1, stop_words='english', lowercase=True)
model = LogisticRegression()

# Function to load and preprocess the data
def preprocess_data():
    # Load the data from csv file to a pandas DataFrame
    raw_mail_data = pd.read_csv('data/mail_data.csv')
    mail_data = raw_mail_data.where((pd.notnull(raw_mail_data)), '')

    # Label encoding
    label_encoder = preprocessing.LabelEncoder()
    mail_data['Category'] = label_encoder.fit_transform(mail_data['Category'])

    X = mail_data['Message']
    Y = mail_data['Category']

    # Split data into training and test sets
    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=3)

    # Fit the TF-IDF vectorizer with training data
    X_train_features = feature_extraction.fit_transform(X_train)

    # Fit the logistic regression model with training data
    model.fit(X_train_features, Y_train)

# Function to predict spam/ham
def predict_spam_ham(input_data):
    input_data_features = feature_extraction.transform([input_data])
    prediction = model.predict(input_data_features)
    return prediction[0]

# Main function
def main(input_mail):
    # Load data and preprocess the model
    preprocess_data()

    # Perform prediction
    prediction = predict_spam_ham(input_mail)
    return prediction

# Example usage
input_mail = '''
Subject: Invitation to the Annual Charity Gala

Dear [Recipient],

We are delighted to extend this invitation to you for our annual charity gala event, which will be held on [date] at [venue]. The gala aims to raise funds for [cause] and make a positive impact in our community.

The evening will include a cocktail reception, silent auction, dinner, and live entertainment. We have lined up some incredible speakers and performers, and we guarantee an unforgettable experience.

Your attendance and support are invaluable to us. Together, we can make a difference and contribute to a brighter future for those in need.

Please RSVP by [RSVP deadline] to confirm your attendance.

Thank you for your consideration, and we hope to see you at the gala!

Best regards,
[Your Name]
'''

if __name__ == "__main__":
    prediction = main(input_mail)
    print(prediction)
