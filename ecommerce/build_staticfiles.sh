# Install project requirements
python3 -m pip install --upgrade pip
python3 -m pip install -r requirements.txt

# Build staticfiles
python3 manage.py collectstatic

# Update database
python3 manage.py makemigrations
python3 manage.py migrate --run-syncdb
