from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from spam_detector import main  # Assuming `main` is a function that performs spam detection

class RequestHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            parsed_data = json.loads(post_data.decode('utf-8'))
            email_text = parsed_data['emailText']
            
            # Add logging to see the received email text
            print('Received email text:', email_text)

            prediction = main(email_text)  # Call your spam detection function here

            # Add logging to see the prediction result
            print('Prediction:', prediction)

            # Convert prediction to "Spam" or "Ham" based on the value (assuming 1 for Spam and 0 for Ham)
            result = "Spam" if prediction == 1 else "Ham"
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'result': result}).encode('utf-8'))
        except Exception as e:
            # Log the error
            print('Error:', e)
            
            # Handle any exceptions and send an error response
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            error_message = {'error': str(e)}
            self.wfile.write(json.dumps(error_message).encode('utf-8'))

def run():
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, RequestHandler)
    print('Starting server on port 8000...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
