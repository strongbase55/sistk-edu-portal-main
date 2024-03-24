from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, auth

app = Flask(__name__)

# Initialize Firebase Admin SDK
cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

# New Registration Route
@app.route("/register", methods=["POST"])
def register():
    email = request.json.get("email")
    password = request.json.get("password")

    try:
        user = auth.create_user(efrom flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, auth

app = Flask(__name__)

# Initialize Firebase Admin SDK
cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

# Route to delete user
@app.route("/delete_user", methods=["POST"])
def delete_user():
    user_id = request.json.get("user_id")

    try:
        auth.delete_user(user_id)
        return jsonify({"message": "User deleted successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
mail=email, password=password)
        # Perform additional operations if needed
        return jsonify({"message": "User created successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Login Route
@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    try:
        user = auth.get_user_by_email(email)
        # Implement authentication logic here (e.g., comparing passwords)
        return jsonify({"message": "Login successful"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Logout Route
@app.route("/logout", methods=["POST"])
def logout():
    # Implement logout logic if needed
    return jsonify({"message": "Logout successful"}), 200

if __name__ == "__main__":
    app.run(debug=True)
