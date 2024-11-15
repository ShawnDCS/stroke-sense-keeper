from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load your trained model
# model = joblib.load('your_model.joblib')  # Uncomment and replace with your model path

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        
        # Extract features in the order your model expects
        features = np.array([
            float(data['age']),
            float(data['hypertension']),
            float(data['heartDisease']),
            float(data['glucose']),
            float(data['bmi'])
        ]).reshape(1, -1)
        
        # Replace this with your actual model prediction
        # prediction = model.predict_proba(features)[0][1]  # Uncomment for actual model
        prediction = 0.5  # Dummy prediction, replace with your model
        
        return jsonify({'prediction': prediction})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)