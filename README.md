## Raul & Co.
“Products and product detail pages using Django and React, supporting cast include Django REST, React Router, React Masonry amongst others.”

### Requirements
```
MacOSX 10.10 +
Python 2.7 +
Node 8 +
React 16 +
```

### Installation
For the Server side (Django) of project
```
virtualenv ecommerce_project_env
cd /path/to/ecommerce_project_env/bin/activate
pip install -r requirements.txt
```
For the client side (React) of project
```
cd /path/to/ecommerce_project/ecommerce-react-app
npm install
```

### Running the application
For the Server side (Django) of project
```
cd /path/to/ecommerce_project
python manage.py runserver 8000
```
For the client side (React) of project
```
cd /path/to/ecommerce_project/ecommerce-react-app
npm start
```
### Using the application
Frontend of application go to http://localhost:3000

Backend Django admin panel (you can view, add, modify and delete products etc.): http://localhost:8000/admin
This will require you to create a superuser if you haven't done so:
```
cd /path/to/ecommerce_project
python manage.py createsuperuser
```

Backend Django Api (you can view, add, modify and delete products etc.): http://localhost:8000/api/

### Testing
```
cd /path/to/ecommerce_project/ecommerce-react-app
npm test
```
